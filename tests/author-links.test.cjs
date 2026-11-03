const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const scripts = ["atlas-data.js", "author-links.js"].map(file =>
  fs.readFileSync(path.join(__dirname, "..", file), "utf8"));
const { ATLAS, AtlasAuthors } = vm.runInNewContext(
  [...scripts, "({ ATLAS, AtlasAuthors })"].join("\n")
);
const matches = text => Array.from(AtlasAuthors.mentions(text), match =>
  [match.text, match.person.name]);

test("repeated author names and possessives keep their displayed spelling", () => {
  const text = "Cherubinis Beispiel: Cherubini, Hindemiths Regel, Fux’ Satz und Bach’s Fuge.";
  assert.deepEqual(matches(text), [
    ["Cherubinis", "Luigi Cherubini"], ["Cherubini", "Luigi Cherubini"],
    ["Hindemiths", "Paul Hindemith"], ["Fux’", "Johann Joseph Fux"],
    ["Bach’s", "Johann Sebastian Bach"]
  ]);
  for (const match of AtlasAuthors.mentions(text)) {
    assert.equal(text.slice(match.start, match.start + match.text.length), match.text);
  }
  assert.deepEqual(matches("J.S. Bach und J. S. Bach"), [
    ["J.S. Bach", "Johann Sebastian Bach"], ["J. S. Bach", "Johann Sebastian Bach"]
  ]);
});

test("coauthors receive separate biographies and full names disambiguate surnames", () => {
  assert.deepEqual(matches("Noël-Gallon und Marcel Bitsch; Jean Gallon; Louis B. Prout und Prout"), [
    ["Noël-Gallon", "Noël-Gallon"], ["Marcel Bitsch", "Marcel Bitsch"],
    ["Jean Gallon", "Jean Gallon"], ["Louis B. Prout", "Louis Beethoven Prout"],
    ["Prout", "Ebenezer Prout"]
  ]);
  assert.deepEqual(matches("Louis Beethoven Prout"), [["Louis Beethoven Prout", "Louis Beethoven Prout"]]);
});

test("words, identifiers and institutional names are not treated as people", () => {
  assert.deepEqual(matches("Bach-Gesellschaft, Offenbach, Bachstraße, Prout1890, _Fux, éBach, Bache"), []);
  assert.deepEqual(matches("Bach-Fuge und Försters Beispiel"), [
    ["Bach", "Johann Sebastian Bach"], ["Försters", "Emanuel Aloys Förster"]
  ]);
});

test("unverified biographies stay unlinked instead of pointing to another person", () => {
  assert.deepEqual(matches("Peter Schubert, Schuberts, Thomas Benjamin, Benjamins, John Rothgeb, Kris Shaffer, Mark Gotham, Adrián Artacho"), []);
});

test("the registry has unique names and only direct Wikipedia article URLs", () => {
  const names = new Set();
  for (const person of ATLAS.people) {
    for (const name of [person.name, ...(person.aliases || []), ...(person.exclude || [])]) {
      assert.ok(!names.has(name), "Duplicate alias: " + name);
      names.add(name);
    }
    if (person.wikipedia === null) continue;
    const url = new URL(person.wikipedia);
    assert.equal(url.protocol, "https:");
    assert.match(url.hostname, /^[a-z]+\.wikipedia\.org$/);
    assert.ok(url.pathname.startsWith("/wiki/"));
    assert.equal(url.search, "");
  }
});
