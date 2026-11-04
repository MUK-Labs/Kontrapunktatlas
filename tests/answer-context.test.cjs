const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const scripts = ["atlas-data.js", "answer-context.js", "answer-relations.js"].map(file =>
  fs.readFileSync(path.join(__dirname, "..", file), "utf8"));
const { ATLAS, AtlasContexts, AtlasRelations } = vm.runInNewContext(
  [...scripts, "({ ATLAS, AtlasContexts, AtlasRelations })"].join("\n")
);
const plain = value => JSON.parse(JSON.stringify(value));
const context = overrides => ({
  styles: ["baroque"], reach: "specific", frame: "Strenger Stil",
  evidence: { basis: "passage", locator: "Kap. 4, S. 50", note: "Die Passage nennt den strengen Stil." },
  ...overrides
});
const answer = (topicId, answerId) => {
  const entry = ATLAS.topics.find(topic => topic.id === topicId)?.authors.find(item => item.id === answerId);
  assert.ok(entry, topicId + " / " + answerId);
  return entry;
};

test("missing context never infers a period or broad validity from author, year or species", () => {
  for (const entry of [
    undefined, null, {},
    { source: "menke2017", name: "Johannes Menke", work: "Die Musik des Barock (2017)", speciesScope: [] },
    { source: "fux1725", name: "Johann Joseph Fux", speciesScope: [3] },
    { source: "bach1866-wtk1", name: "Johann Sebastian Bach", kind: "partitur" }
  ]) assert.equal(AtlasContexts.normalize(entry), null);
});

test("explicit cross-style reach is distinct from an unresolved style with a known task", () => {
  const broad = context({ styles: [], reach: "cross-style", frame: "Tonale Stimmführungslehre" });
  const taskOnly = context({ styles: [], reach: "unclassified", frame: "Schulfuge" });
  assert.equal(AtlasContexts.normalize({ context: broad }).reach, "cross-style");
  const unresolved = AtlasContexts.normalize({ context: taskOnly });
  assert.equal(unresolved.reach, "unclassified");
  assert.equal(unresolved.frame, "Schulfuge");
  assert.deepEqual(plain(unresolved.styles), []);
  assert.equal(unresolved.evidence.locator, taskOnly.evidence.locator);
});

test("invalid or incomplete context fails closed instead of displaying unsupported labels", () => {
  const invalid = [
    null, [], "Barock", {},
    context({ styles: [] }),
    context({ styles: ["not-a-style"] }),
    context({ styles: ["constructor"] }),
    context({ styles: [null] }),
    context({ styles: "baroque" }),
    context({ reach: "universal" }),
    context({ reach: "unclassified" }),
    context({ frame: "  " }),
    context({ evidence: null }),
    context({ evidence: { basis: "author-date", locator: "2017", note: "A recent publication." } }),
    context({ evidence: { basis: "passage", locator: "", note: "A claim without a page." } }),
    context({ evidence: { basis: "book", locator: "Vorwort, S. 9", note: " " } })
  ];
  for (const value of invalid) {
    assert.equal(AtlasContexts.normalize({ context: value }), null, JSON.stringify(value));
  }
});

test("multiple traditions stay distinct and normalization does not modify the citation", () => {
  const entry = { context: context({
    styles: ["renaissance", "baroque", "renaissance"],
    frame: " Historischer Vergleich ",
    evidence: { basis: "repertoire", locator: " S. 10–12 ", note: " Palestrina und Bach werden verglichen. " }
  }) };
  const before = JSON.stringify(entry);
  const normalized = AtlasContexts.normalize(entry);
  assert.deepEqual(plain(normalized.styles), ["renaissance", "baroque"]);
  assert.equal(normalized.reach, "specific");
  assert.equal(normalized.frame, "Historischer Vergleich");
  normalized.styles.push("modern");
  normalized.evidence.note = "Changed copy";
  assert.equal(JSON.stringify(entry), before);

  const broad = AtlasContexts.normalize({ context: context({
    styles: ["renaissance", "baroque"], reach: "cross-style"
  }) });
  assert.equal(broad.reach, "cross-style");
  assert.deepEqual(plain(broad.styles), ["renaissance", "baroque"]);
});

test("every recorded context has registered styles and complete evidence", () => {
  let annotated = 0;
  for (const topic of ATLAS.topics) {
    for (const entry of topic.authors || []) {
      if (!Object.hasOwn(entry, "context")) continue;
      const label = topic.id + " / " + entry.id;
      const normalized = AtlasContexts.normalize(entry);
      assert.ok(normalized, label);
      assert.equal(new Set(entry.context.styles).size, entry.context.styles.length, label);
      assert.ok(entry.locator && entry.work, label + " needs an answer citation");
      annotated++;
    }
  }
  assert.ok(annotated > 0, "The interface must include reviewed answer annotations.");
});

test("strict and free anticipations retain the same Baroque reference but different tasks", () => {
  const strict = AtlasContexts.normalize(answer("vorausnahme-und-vorhalt", "neidhoefer-schubert2023-1"));
  const free = AtlasContexts.normalize(answer("vorausnahme-und-vorhalt", "neidhoefer-schubert2023-2"));
  assert.ok(strict && free);
  assert.deepEqual(plain(strict.styles), ["baroque"]);
  assert.deepEqual(plain(free.styles), ["baroque"]);
  assert.match(strict.frame, /streng/i);
  assert.match(free.frame, /frei/i);
  assert.notEqual(strict.frame, free.frame);
});

test("the same mixed-species task can have a specific or explicitly broader teaching scope", () => {
  const jeppesen = answer("dissonanzbehandlung", "jeppesen1964-54");
  const salzer = answer("dissonanzbehandlung", "salzer-schachter1989-2");
  assert.deepEqual(plain(jeppesen.speciesScope), [2, 3]);
  assert.deepEqual(plain(salzer.speciesScope), [2, 3]);
  const narrow = AtlasContexts.normalize(jeppesen), broad = AtlasContexts.normalize(salzer);
  assert.ok(narrow && broad);
  assert.equal(narrow.reach, "specific");
  assert.ok(narrow.styles.includes("renaissance"));
  assert.equal(broad.reach, "cross-style");
});

test("context annotations preserve the editorial distinction between a contradiction and a context comparison", () => {
  const selected = new Set(ATLAS.sources.map(source => source.id));
  const findPair = (topicId, left, right) => {
    const topic = ATLAS.topics.find(item => item.id === topicId);
    return AtlasRelations.pairs(topic, selected).find(row =>
      [row.from.id, row.to.id].includes(left) && [row.from.id, row.to.id].includes(right));
  };
  assert.equal(findPair("dissonanzfolgen-s3", "fux1725-1", "jeppesen1964-24").relation.type, "contradiction");
  assert.equal(findPair("doppelter-kontrapunkt", "jeppesen1964-69", "menke2017-81").relation.type, "context");
});
