const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const scripts = ["atlas-data.js", "answer-relations.js", "disagreements-model.js"].map(file =>
  fs.readFileSync(path.join(__dirname, "..", file), "utf8"));
const { ATLAS, AtlasDisagreements } = vm.runInNewContext(
  [...scripts, "({ ATLAS, AtlasDisagreements })"].join("\n"), { URL, URLSearchParams }
);
const allSources = new Set(ATLAS.sources.map(source => source.id));
const plain = value => JSON.parse(JSON.stringify(value));
const allTypes = ["contradiction", "nuance", "context"];

const fixture = {
  id: "beispiel", title: "Wie führen Stimmen?", group: "Stimmführung", tags: ["Unsichtbares Thema"],
  authors: [
    { id: "alpha-1", source: "alpha", name: "Élise Müller", work: "Traité", locator: "§ 7, zwei Stimmen",
      text: "Schließt mit einem Schritt.", speciesScope: [2] },
    { id: "beta-1", source: "beta", name: "Alonso Ruiz", work: "Contrapunto", locator: "S. 12, Choral",
      text: "Erlaubt einen Sprung.", speciesScope: [] },
    { id: "gamma-1", source: "gamma", name: "Ungewählter Autor", work: "Verdecktes Werk",
      text: "Eine andere Erklärung.", locator: "S. 99" }
  ],
  relations: [{ from: "alpha-1", to: "beta-1", type: "nuance", note: "Größere Abstände im Übergang." }]
};
const fixtureEntries = () => AtlasDisagreements.entries([fixture], new Set(["alpha", "beta"]));

test("pair identities are topic-local, unique and independent of endpoint order", () => {
  const rows = AtlasDisagreements.entries(ATLAS.topics, allSources);
  assert.equal(rows.length, ATLAS.topics.reduce((count, topic) => count + (topic.relations || []).length, 0));
  assert.equal(new Set(rows.map(row => row.id)).size, rows.length);

  const reversed = { ...fixture, authors: [...fixture.authors].reverse(),
    relations: fixture.relations.map(relation => ({ ...relation, from: relation.to, to: relation.from })) };
  const secondTopic = { ...fixture, id: "andere-frage" };
  const forward = fixtureEntries();
  const backward = AtlasDisagreements.entries([reversed], new Set(["alpha", "beta"]));
  assert.equal(forward[0].id, "beispiel~alpha-1~beta-1");
  assert.equal(backward[0].id, forward[0].id);
  assert.equal(AtlasDisagreements.entries([fixture, reversed], new Set(["alpha", "beta"])).length, 1);
  assert.equal(AtlasDisagreements.entries([fixture, secondTopic], new Set(["alpha", "beta"])).length, 2);
});

test("a comparison requires both sources and its search cannot expose a third answer", () => {
  assert.equal(AtlasDisagreements.entries([fixture], new Set(["alpha"])).length, 0);
  assert.equal(AtlasDisagreements.entries([fixture], new Set(["beta"])).length, 0);
  assert.equal(AtlasDisagreements.entries([fixture], new Set()).length, 0);
  const rows = fixtureEntries();
  assert.equal(rows.length, 1);
  for (const search of ["Ungewählter", "Verdecktes", "Unsichtbares"]) {
    assert.equal(AtlasDisagreements.filter(rows, { search }).length, 0);
  }
});

test("a cross-species pair is available under either species and keeps both answers", () => {
  const topic = ATLAS.topics.find(topic => topic.id === "drei-gegen-eins");
  const rows = AtlasDisagreements.entries([topic], new Set(["kennan1999", "prout1890"]));
  assert.equal(rows.length, 1);
  for (const species of ["2", "3"]) {
    const matches = AtlasDisagreements.filter(rows, { types: allTypes, species });
    assert.equal(matches.length, 1);
    assert.deepEqual([matches[0].from.source, matches[0].to.source].sort(), ["kennan1999", "prout1890"]);
  }
  assert.equal(AtlasDisagreements.filter(rows, { types: allTypes, species: "4" }).length, 0);
});

test("text, exact author, theme and type filters combine without dropping an endpoint", () => {
  const rows = fixtureEntries();
  const matches = AtlasDisagreements.filter(rows, {
    types: ["nuance"], search: "muller grossere ruiz traite", group: "Stimmführung", author: "Alonso Ruiz"
  });
  assert.equal(matches.length, 1);
  assert.equal(matches[0].from.name, "Élise Müller");
  assert.equal(matches[0].to.name, "Alonso Ruiz");
  assert.equal(AtlasDisagreements.filter(rows, { author: "Élise Müller" }).length, 1);
  assert.equal(AtlasDisagreements.filter(rows, { author: "Müller" }).length, 0);
  assert.equal(AtlasDisagreements.filter(rows, { search: "§ 7 choral" }).length, 1);
  assert.equal(AtlasDisagreements.filter(rows, { group: "Dissonanz" }).length, 0);
  assert.equal(AtlasDisagreements.filter(rows, { types: ["contradiction"] }).length, 0);
  assert.equal(AtlasDisagreements.filter(rows, { types: [] }).length, 0);
  assert.equal(AtlasDisagreements.filter(rows, { pair: "some-other-pair" }).length, 1,
    "the deep-link target is independent of result filtering");
  assert.equal(AtlasDisagreements.normalize("Größere ÜBUNG É"), "grossere ubung e");
});

test("species-independent means an explicit empty scope, not an unclassified answer", () => {
  const rows = fixtureEntries();
  assert.equal(AtlasDisagreements.filter(rows, { species: "2" }).length, 1);
  assert.equal(AtlasDisagreements.filter(rows, { species: "free" }).length, 1);
  const unclassified = rows.map(row => ({ ...row,
    to: { ...row.to, speciesScope: undefined }
  }));
  assert.equal(AtlasDisagreements.filter(unclassified, { species: "free" }).length, 0);
});

test("the default view includes contradictions and nuances while contexts are opt-in", () => {
  const rows = AtlasDisagreements.entries(ATLAS.topics, allSources);
  const expected = rows.filter(row => ["contradiction", "nuance"].includes(row.relation.type));
  assert.equal(AtlasDisagreements.filter(rows).length, expected.length);
  assert.ok(rows.some(row => row.relation.type === "context"));
  assert.deepEqual(plain(AtlasDisagreements.defaultTypes), ["contradiction", "nuance"]);
});

test("hash routes round-trip Unicode filters and retain the source query and path", () => {
  const base = "https://example.org/Kontrapunktatlas/unterschiede.html?quellen=alpha,beta&lang=de";
  const state = { types: ["context", "nuance"], search: "größere Quarte", group: "Stimmführung",
    author: "Élise Müller", species: "free", pair: "beispiel~alpha-1~beta-1" };
  const url = AtlasDisagreements.write(base, state);
  assert.ok(url instanceof URL);
  assert.equal(url.pathname, "/Kontrapunktatlas/unterschiede.html");
  assert.equal(url.search, new URL(base).search);
  assert.equal(new URLSearchParams(url.hash.slice(1)).get("spezies"), "frei");
  assert.deepEqual(plain(AtlasDisagreements.read(url)), { ...state, types: ["nuance", "context"] });
  assert.equal(AtlasDisagreements.write(url, {}).hash, "");
  assert.equal(AtlasDisagreements.write(url, {}).search, url.search);
  assert.equal(AtlasDisagreements.write("file:///tmp/Atlas/unterschiede.html?quellen=none", {}).protocol, "file:");
});

test("invalid and repeated hash parameters resolve consistently without adding false types", () => {
  const base = "https://example.org/unterschiede.html";
  const state = AtlasDisagreements.read(base +
    "#art=context,unknown&art=NUANCE,context&suche=erste&suche=zweite&spezies=9&autor=Erste&autor=Zweite");
  assert.deepEqual(plain(state.types), ["nuance", "context"]);
  assert.equal(state.search, "erste");
  assert.equal(state.author, "Erste");
  assert.equal(state.species, "");
  for (const hash of ["#art=none", "#art=unknown", "#art="]) {
    assert.deepEqual(plain(AtlasDisagreements.read(base + hash).types), []);
  }
  assert.equal(AtlasDisagreements.write(base, { types: [] }).hash, "#art=none");
  assert.equal(AtlasDisagreements.write(base, { types: ["nuance", "contradiction", "nuance"] }).hash, "");
  assert.equal(AtlasDisagreements.write(base, { species: "6" }).hash, "");
});

test("indexing, filtering and route construction do not modify source data or filter state", () => {
  const before = JSON.stringify(fixture);
  const state = { types: ["nuance", "contradiction"], search: "Müller", species: "2" };
  const stateBefore = JSON.stringify(state);
  AtlasDisagreements.filter(fixtureEntries(), state);
  AtlasDisagreements.write("https://example.org/unterschiede.html", state);
  assert.equal(JSON.stringify(fixture), before);
  assert.equal(JSON.stringify(state), stateBefore);
});
