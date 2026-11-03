const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const scripts = ["atlas-data.js", "source-selection.js"].map(file =>
  fs.readFileSync(path.join(__dirname, "..", file), "utf8"));
const { ATLAS, AtlasSources } = vm.runInNewContext(
  [...scripts, "({ ATLAS, AtlasSources })"].join("\n"), { URL }
);
const ids = ATLAS.sources.map(source => source.id);
const question = "https://example.org/atlas/?lang=de#frage=bindung-s4&spezies=4";

test("every contribution and editorial comparison refers to registered works", () => {
  const known = new Set(ids);
  assert.equal(known.size, ids.length);
  for (const id of known) {
    assert.match(id, /^[a-z0-9]+(-[a-z0-9]+)*$/);
    assert.notEqual(id, "none");
  }
  assert.ok(known.has("artacho-handout"));
  function checkDependencies(list, topic) {
    assert.ok(Array.isArray(list), topic);
    for (const id of list) assert.ok(known.has(id), topic + " / " + id);
  }
  for (const topic of ATLAS.topics) {
    if (topic.reading) checkDependencies(topic.readingSources, topic.id);
    for (const author of topic.authors || []) {
      assert.ok(known.has(author.source), topic.id + " / " + author.work);
      if (author.comparison) checkDependencies(author.comparisonSources, topic.id);
    }
  }
});

test("links without a selection include all works, while an explicit empty set stays empty", () => {
  const all = AtlasSources.read(question);
  assert.equal(all.size, ids.length);
  assert.equal(AtlasSources.write(question, all).href, question);
  const empty = AtlasSources.write(question, new Set());
  assert.equal(empty.searchParams.get("quellen"), "none");
  assert.equal(AtlasSources.read(empty).size, 0);
  assert.equal(AtlasSources.write(empty, all).href, question);
});

test("a mixed or repeated parameter resolves to a canonical list of individual works", () => {
  const url = new URL(question);
  url.searchParams.append("quellen", "prout1891,FUX1725,unknown");
  url.searchParams.append("quellen", "prout1890,fux1725");
  const chosen = AtlasSources.read(url);
  assert.deepEqual([...chosen], ["fux1725", "prout1890", "prout1891"]);
  const shared = AtlasSources.write(url, chosen);
  assert.equal(shared.search, "?lang=de&quellen=fux1725,prout1890,prout1891");
  assert.equal(shared.hash, url.hash);
  assert.deepEqual([...AtlasSources.read(shared)], [...chosen]);
  url.searchParams.set("quellen", "unknown");
  assert.equal(AtlasSources.read(url).size, 0);
});
