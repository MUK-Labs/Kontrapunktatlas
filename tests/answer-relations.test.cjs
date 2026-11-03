const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const scripts = ["atlas-data.js", "source-selection.js", "answer-relations.js"].map(file =>
  fs.readFileSync(path.join(__dirname, "..", file), "utf8"));
const { ATLAS, AtlasSources, AtlasRelations } = vm.runInNewContext(
  [...scripts, "({ ATLAS, AtlasSources, AtlasRelations })"].join("\n"), { URL, URLSearchParams }
);
const allSources = new Set(ATLAS.sources.map(source => source.id));

test("each answer has a stable, unique ID within its question", () => {
  for (const topic of ATLAS.topics) {
    const ids = new Set();
    for (const answer of topic.authors || []) {
      assert.match(answer.id, /^[a-z0-9]+(-[a-z0-9]+)*$/, topic.id);
      assert.ok(!ids.has(answer.id), topic.id + " / " + answer.id);
      ids.add(answer.id);
    }
  }
});

test("editorial relationships identify two actual answers and occur only once per pair", () => {
  for (const topic of ATLAS.topics) {
    const answers = new Map((topic.authors || []).map(answer => [answer.id, answer]));
    const pairs = new Set();
    for (const relation of topic.relations || []) {
      const context = topic.id + " / " + relation.from + " / " + relation.to;
      assert.ok(answers.has(relation.from) && answers.has(relation.to), context);
      const from = answers.get(relation.from), to = answers.get(relation.to);
      assert.notEqual(from.source, to.source, context);
      assert.notEqual(from.name, to.name, context);
      assert.ok(Object.hasOwn(AtlasRelations.types, relation.type), context);
      assert.equal(typeof relation.note, "string", context);
      assert.ok(relation.note.trim().length > 20, context);
      const key = [relation.from, relation.to].sort().join("/");
      assert.ok(!pairs.has(key), context);
      pairs.add(key);
    }
  }
});

test("each relationship works in both directions and requires both selected works", () => {
  for (const topic of ATLAS.topics) {
    for (const { relation, from, to } of AtlasRelations.pairs(topic, allSources)) {
      const context = topic.id + " / " + from.id + " / " + to.id;
      const selection = new Set([from.source, to.source]);
      for (const [origin, target] of [[from, to], [to, from]]) {
        const links = AtlasRelations.connections(topic, origin.id, selection)
          .filter(link => link.target.id === target.id);
        assert.equal(links.length, 1, context);
        assert.equal(links[0].note, relation.note, context);
        assert.equal(links[0].type, relation.type, context);
        assert.equal(AtlasRelations.connections(topic, origin.id, new Set([origin.source])).length, 0, context);
        assert.equal(AtlasRelations.connections(topic, origin.id, new Set([target.source])).length, 0, context);
      }
    }
  }
});

test("links use the target book's species and retain Alle or a compatible species", () => {
  const topic = ATLAS.topics.find(topic => topic.id === "drei-gegen-eins");
  const kennan = topic.authors.find(answer => answer.source === "kennan1999");
  const prout = topic.authors.find(answer => answer.source === "prout1890");
  assert.equal(AtlasRelations.targetSpecies(prout, 2), 3);
  assert.equal(AtlasRelations.targetSpecies(kennan, 3), 2);
  assert.equal(AtlasRelations.targetSpecies(kennan, 2), 2);
  assert.equal(AtlasRelations.targetSpecies(prout, 0), 0);
  assert.equal(AtlasRelations.targetSpecies({ speciesScope: [] }, 4), 0);
  assert.equal(AtlasRelations.targetSpecies({}, 4), 0);
  assert.equal(AtlasRelations.targetSpecies({ speciesScope: [2, 3] }, 3), 3);
});

test("answer links survive reordering, retain the source query and preserve question-only routes", () => {
  const topic = ATLAS.topics.find(topic => topic.id === "drei-gegen-eins");
  const answer = topic.authors.find(answer => answer.source === "prout1890");
  const hash = AtlasRelations.fragment(topic, 3, answer.id);
  assert.equal(hash, "#frage=drei-gegen-eins&spezies=3&antwort=prout1890-1");
  const reordered = { ...topic, authors: [...topic.authors].reverse() };
  assert.equal(AtlasRelations.fragment(reordered, 3, answer.id), hash);
  assert.equal(AtlasRelations.fragment(topic, 2), "#frage=drei-gegen-eins&spezies=2");
  assert.equal(AtlasRelations.fragment(topic, 0), "#frage=drei-gegen-eins");
  const url = AtlasSources.write("https://example.org/?lang=de" + hash,
    new Set(["kennan1999", "prout1890"]));
  assert.equal(url.hash, hash);
  assert.equal(url.searchParams.get("lang"), "de");
  assert.deepEqual([...AtlasSources.read(url)].sort(), ["kennan1999", "prout1890"]);
  const sourcePage = new URL("quellen.html", url);
  sourcePage.search = url.search;
  sourcePage.hash = url.hash;
  assert.equal(AtlasSources.write(sourcePage, new Set(["prout1890"])).hash, hash);
});
