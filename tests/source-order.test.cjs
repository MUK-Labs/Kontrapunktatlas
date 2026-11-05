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

test("each source separates an evidenced first version from its consulted edition", () => {
  for (const item of ATLAS.sources) {
    assert.equal(typeof item.sortAuthor, "string", item.id);
    assert.ok(item.sortAuthor.trim(), item.id);
    assert.ok(Object.hasOwn(item, "editionYear"), item.id);
    assert.ok(item.editionYear === null ||
      (Number.isInteger(item.editionYear) && item.editionYear > 0 && item.editionYear <= 9999), item.id);
    if (item.editionLabel !== undefined) {
      assert.equal(typeof item.editionLabel, "string", item.id);
      assert.ok(item.editionLabel.trim(), item.id);
    }
    if (item.editionNote !== undefined) {
      assert.equal(typeof item.editionNote, "string", item.id);
      assert.ok(item.editionNote.trim(), item.id);
    }
    const first = item.firstVersion;
    assert.ok(first && Object.hasOwn(first, "year"), item.id);
    assert.ok(first.year === null || AtlasSourceOrder.yearOf(item) === first.year, item.id);
    assert.ok(["publication", "manuscript", "teaching", "copyright", "documented", "undated"].includes(first.kind), item.id);
    assert.ok(first.note && Array.isArray(first.evidence), item.id);
    if (first.year !== null) assert.ok(first.evidence.length, item.id);
    if (first.endYear !== undefined) {
      assert.ok(Number.isInteger(first.endYear) && first.endYear > first.year && first.endYear <= 9999, item.id);
      assert.ok(first.label.includes(String(first.year)) && first.label.includes(String(first.endYear)), item.id);
    }
    for (const evidence of first.evidence) {
      assert.ok(evidence.label, item.id);
      assert.ok(/^https?:\/\//.test(evidence.url) ||
        (evidence.url === "quellen/handout.pdf" && fs.existsSync(path.join(__dirname, "..", evidence.url))), item.id);
    }
    assert.equal(Object.hasOwn(item, "publicationYear"), false, item.id);
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
    { id: "undated", name: "A", sortAuthor: "A", title: "A book from 1550", firstVersion: { year: null } },
    { id: "late", name: "B", sortAuthor: "B", title: "Band 1", firstVersion: { year: 2000 } },
    { id: "same-b", name: "B", sortAuthor: "B", title: "Band 1", firstVersion: { year: 1900 } },
    { id: "same-a10", name: "A", sortAuthor: "A", title: "Band 10", firstVersion: { year: 1900 } },
    { id: "same-a2", name: "A", sortAuthor: "A", title: "Band 2", firstVersion: { year: 1900 } },
    { id: "early", name: "Z", sortAuthor: "Z", title: "Band 1", firstVersion: { year: 1600 } }
  ];
  const sections = AtlasSourceOrder.sections(rows, "jahr");
  assert.deepEqual(ids(sections), ["early", "same-a2", "same-a10", "same-b", "late", "undated"]);
  assert.equal(sections.at(-1).key, "undatiert");
  assert.equal(AtlasSourceOrder.yearLabel(rows[0]), "Jahr nicht belegt");
  for (const year of [undefined, null, "1835", 0, -1, 2000.5, 10000, NaN, Infinity]) {
    assert.equal(AtlasSourceOrder.yearOf({ firstVersion: { year }, editionYear: 2020, title: "Published in 1835" }), null);
  }
  const onlyUnknown = AtlasSourceOrder.sections([rows[0]], "jahr");
  assert.equal(onlyUnknown.length, 1);
  assert.equal(onlyUnknown[0].key, "undatiert");
  assert.equal(AtlasSourceOrder.sections([], "jahr").length, 0);
});

test("chronology follows original works while consulted editions and stable IDs remain distinct", () => {
  assert.equal(AtlasSourceOrder.yearOf(source("piston1947")), 1947);
  assert.equal(source("piston1947").editionYear, 1970);
  assert.equal(AtlasSourceOrder.yearOf(source("salzer-schachter1989")), 1969);
  assert.equal(source("salzer-schachter1989").editionYear, 1989);
  assert.equal(AtlasSourceOrder.yearOf(source("bach1866-wtk1")), 1722);
  assert.equal(source("bach1866-wtk1").editionYear, 1866);
  assert.equal(AtlasSourceOrder.yearOf(source("kennan1999")), 1959);
  assert.equal(AtlasSourceOrder.yearOf(source("jeppesen1964")), 1930);
  assert.equal(AtlasSourceOrder.yearOf(source("neidhoefer-schubert2023")), 2006);
  assert.equal(AtlasSourceOrder.yearOf(source("hindemith-tonsatz1")), 1937);
  assert.equal(AtlasSourceOrder.yearOf(source("hindemith-tonsatz2")), 1939);
  assert.equal(AtlasSourceOrder.yearOf(source("goetschius1910")), 1910);
  assert.equal(source("goetschius1910").editionYear, null);
  assert.equal(AtlasSourceOrder.yearOf(source("prout1890")), 1890);
  assert.equal(source("prout1890").editionYear, null);
  assert.equal(AtlasSourceOrder.yearOf(source("cherubini1835")), 1835);
  assert.equal(AtlasSourceOrder.yearOf(source("cherubini1854")), 1835);
  assert.equal(AtlasSourceOrder.editionYearLabel(source("cherubini1835")), "um 1835");
  for (const id of ["artacho-handout", "gotham-shaffer-s5"]) {
    assert.equal(AtlasSourceOrder.yearOf(source(id)), null, id);
  }
  const sections = AtlasSourceOrder.sections(ATLAS.sources, "jahr");
  const years = Array.from(sections[0].sources, AtlasSourceOrder.yearOf);
  assert.ok(years.every((year, index) => !index || years[index - 1] <= year));
  assert.ok(sections.at(-1).sources.every(item => AtlasSourceOrder.yearOf(item) === null));
});

test("a missing original date never falls back to the edition, copyright field, title or identifier", () => {
  for (const firstVersion of [undefined, { year: null }, { year: "1930" }]) {
    const item = { id: "source1930", title: "Original 1930", editionYear: 2018, publicationYear: 1930, firstVersion };
    assert.equal(AtlasSourceOrder.yearOf(item), null);
    assert.equal(AtlasSourceOrder.yearLabel(item), "Jahr nicht belegt");
    assert.equal(AtlasSourceOrder.editionYearLabel(item), "2018");
  }
});

test("qualified manuscript ranges preserve both endpoints without inventing a precise year", () => {
  const item = { firstVersion: { year: 1786, endYear: 1789, label: "1786–1789 (Handschrift, vermutlich)" }, editionYear: 2019 };
  assert.equal(AtlasSourceOrder.yearOf(item), 1786);
  assert.equal(AtlasSourceOrder.endYearOf(item), 1789);
  assert.equal(AtlasSourceOrder.yearLabel(item), "1786–1789 (Handschrift, vermutlich)");
  for (const endYear of [null, "1789", 1785, 10000]) {
    assert.equal(AtlasSourceOrder.endYearOf({ firstVersion: { year: 1786, endYear } }), 1786);
  }
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
