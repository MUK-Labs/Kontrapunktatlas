const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const scripts = ["atlas-data.js", "source-order.js"].map(file =>
  fs.readFileSync(path.join(__dirname, "..", file), "utf8"));
const { ATLAS, AtlasSourceOrder } = vm.runInNewContext(
  [...scripts, "({ ATLAS, AtlasSourceOrder })"].join("\n"), { URL }
);
const source = id => ATLAS.sources.find(item => item.id === id);
const ids = sections => Array.from(sections).flatMap(section => Array.from(section.sources, item => item.id));

test("each source has an explicit author key and a known or explicitly unknown edition year", () => {
  for (const item of ATLAS.sources) {
    assert.equal(typeof item.sortAuthor, "string", item.id);
    assert.ok(item.sortAuthor.trim(), item.id);
    assert.ok(Object.hasOwn(item, "publicationYear"), item.id);
    assert.ok(item.publicationYear === null ||
      (Number.isInteger(item.publicationYear) && item.publicationYear > 0 && item.publicationYear <= 9999), item.id);
    if (item.publicationLabel !== undefined) {
      assert.equal(typeof item.publicationLabel, "string", item.id);
      assert.ok(item.publicationLabel.trim() && item.publicationYear !== null, item.id);
    }
    if (item.publicationNote !== undefined) {
      assert.equal(typeof item.publicationNote, "string", item.id);
      assert.ok(item.publicationNote.trim(), item.id);
    }
  }
});

test("default source-type sections retain their original group and within-group order", () => {
  const groupNames = [...new Set(ATLAS.sources.map(item => item.group))];
  const sections = AtlasSourceOrder.sections(ATLAS.sources, "typ");
  assert.deepEqual(Array.from(sections, section => section.label), groupNames);
  for (const section of sections) {
    assert.deepEqual(Array.from(section.sources, item => item.id),
      Array.from(ATLAS.sources.filter(item => item.group === section.key), item => item.id));
  }
  assert.deepEqual(ids(AtlasSourceOrder.sections(ATLAS.sources, "unknown")), ids(sections));

  const mixed = [{ id: "a", group: "Bücher" }, { id: "b" }, { id: "c", group: "Bücher" }];
  assert.deepEqual(ids(AtlasSourceOrder.sections(mixed, "typ")), ["a", "c", "b"]);
  assert.equal(AtlasSourceOrder.sections(mixed, "typ")[1].label, "Weitere Quellen");
});

test("author order uses surnames and keeps coauthored works intact", () => {
  const chosen = ["schubert1999", "neidhoefer-schubert2023", "gallon-bitsch1964", "bach1866-wtk1", "artacho-handout"]
    .map(source);
  const ordered = AtlasSourceOrder.sections(chosen, "autor");
  assert.equal(ordered.length, 1);
  assert.deepEqual(ids(ordered), ["artacho-handout", "bach1866-wtk1", "gallon-bitsch1964", "neidhoefer-schubert2023", "schubert1999"]);
  assert.equal(ordered[0].sources.find(item => item.id === "gallon-bitsch1964"), source("gallon-bitsch1964"));
  assert.match(source("gallon-bitsch1964").name, /Noël-Gallon und Marcel Bitsch/);

  const german = [
    { id: "g", name: "André Gédalge", sortAuthor: "Gédalge, André" },
    { id: "f", name: "Emanuel Aloys Förster", sortAuthor: "Förster, Emanuel Aloys" },
    { id: "x", name: "Johann Joseph Fux", sortAuthor: "Fux, Johann Joseph" }
  ];
  assert.deepEqual(ids(AtlasSourceOrder.sections(german, "autor")), ["f", "x", "g"]);
});

test("year order is chronological, deterministically breaks ties and puts unknown years last", () => {
  const rows = [
    { id: "undated", name: "A", sortAuthor: "A", title: "A book from 1550", publicationYear: null },
    { id: "late", name: "B", sortAuthor: "B", title: "Band 1", publicationYear: 2000 },
    { id: "same-b", name: "B", sortAuthor: "B", title: "Band 1", publicationYear: 1900 },
    { id: "same-a10", name: "A", sortAuthor: "A", title: "Band 10", publicationYear: 1900 },
    { id: "same-a2", name: "A", sortAuthor: "A", title: "Band 2", publicationYear: 1900 },
    { id: "early", name: "Z", sortAuthor: "Z", title: "Band 1", publicationYear: 1600 }
  ];
  const sections = AtlasSourceOrder.sections(rows, "jahr");
  assert.deepEqual(ids(sections), ["early", "same-a2", "same-a10", "same-b", "late", "undated"]);
  assert.equal(sections.at(-1).key, "undatiert");
  assert.equal(AtlasSourceOrder.yearLabel(rows[0]), "Jahr nicht belegt");
  for (const year of [undefined, null, "1835", 0, -1, 2000.5, 10000, NaN, Infinity]) {
    assert.equal(AtlasSourceOrder.yearOf({ publicationYear: year, title: "Published in 1835" }), null);
  }
  const onlyUnknown = AtlasSourceOrder.sections([rows[0]], "jahr");
  assert.equal(onlyUnknown.length, 1);
  assert.equal(onlyUnknown[0].key, "undatiert");
  assert.equal(AtlasSourceOrder.sections([], "jahr").length, 0);
});

test("chronology follows the cited edition and preserves qualifications without guessing from IDs", () => {
  assert.equal(AtlasSourceOrder.yearOf(source("piston1947")), 1970);
  assert.equal(AtlasSourceOrder.yearOf(source("salzer-schachter1989")), 1989);
  assert.equal(AtlasSourceOrder.yearOf(source("bach1866-wtk1")), 1866);
  assert.equal(AtlasSourceOrder.yearOf(source("bach1866-wtk2")), 1866);
  assert.equal(AtlasSourceOrder.yearOf(source("cherubini1835")), 1835);
  assert.equal(AtlasSourceOrder.yearLabel(source("cherubini1835")), "um 1835");
  for (const id of ["prout1890", "prout1891", "goetschius1910", "hindemith-tonsatz1", "hindemith-tonsatz2", "artacho-handout", "gotham-shaffer-s5"]) {
    assert.equal(AtlasSourceOrder.yearOf(source(id)), null, id);
  }
  const sections = AtlasSourceOrder.sections(ATLAS.sources, "jahr");
  const years = Array.from(sections[0].sources, AtlasSourceOrder.yearOf);
  assert.ok(years.every((year, index) => !index || years[index - 1] <= year));
  assert.ok(sections.at(-1).sources.every(item => AtlasSourceOrder.yearOf(item) === null));
});

test("changing presentation order never mutates sources or bibliographic descriptions", () => {
  const before = JSON.stringify(ATLAS.sources);
  const frozen = Object.freeze(Array.from(ATLAS.sources, item => Object.freeze({ ...item })));
  for (const mode of ["autor", "jahr", "typ", "autor"]) {
    const sections = AtlasSourceOrder.sections(frozen, mode);
    assert.equal(ids(sections).length, frozen.length);
    assert.equal(new Set(ids(sections)).size, frozen.length);
    for (const section of sections) {
      for (const item of section.sources) assert.ok(frozen.includes(item));
    }
  }
  assert.equal(JSON.stringify(ATLAS.sources), before);
});

test("ordering URLs preserve selections and return context, with source-type order as the clean default", () => {
  for (const base of [
    "https://example.org/Kontrapunktatlas/quellen.html?quellen=fux1725,menke2017&lang=de#frage=anfangsintervall&spezies=1&antwort=fux1725-1",
    "file:///tmp/Atlas/quellen.html?quellen=none&von=unterschiede#art=context&vergleich=frage~a~b"
  ]) {
    const original = new URL(base), before = original.href;
    for (const mode of ["autor", "jahr"]) {
      const ordered = AtlasSourceOrder.write(original, mode);
      assert.equal(AtlasSourceOrder.read(ordered), mode);
      assert.equal(ordered.pathname, original.pathname);
      assert.equal(ordered.protocol, original.protocol);
      assert.equal(ordered.hash, original.hash);
      for (const [key, value] of original.searchParams) assert.equal(ordered.searchParams.get(key), value);
      const restored = AtlasSourceOrder.write(ordered, "typ");
      assert.equal(restored.searchParams.has("sortierung"), false);
      assert.equal(restored.searchParams.toString(), original.searchParams.toString());
      assert.equal(restored.hash, original.hash);
    }
    assert.equal(original.href, before);
  }
  assert.equal(AtlasSourceOrder.read("https://example.org/quellen.html"), "typ");
  assert.equal(AtlasSourceOrder.read("https://example.org/quellen.html?sortierung=constructor"), "typ");
  const repeated = AtlasSourceOrder.write("https://example.org/quellen.html?sortierung=autor&sortierung=jahr&quellen=none", "jahr");
  assert.deepEqual(repeated.searchParams.getAll("sortierung"), ["jahr"]);
  assert.equal(AtlasSourceOrder.write(repeated, "invalid").search, "?quellen=none");
});
