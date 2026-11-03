const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const data = fs.readFileSync(path.join(__dirname, "..", "atlas-data.js"), "utf8");
const { topics } = vm.runInNewContext(data + "\nATLAS");

test("each assigned species scope lists distinct species from 1 to 5 in order", () => {
  for (const topic of topics) {
    for (const author of topic.authors || []) {
      if (!Object.hasOwn(author, "speciesScope")) continue;
      const context = topic.id + " / " + author.source;
      const scope = author.speciesScope;
      assert.ok(Array.isArray(scope), context);
      assert.ok(scope.every((n, i) => Number.isInteger(n) && n >= 1 && n <= 5 &&
        (i === 0 || scope[i - 1] < n)), context);
    }
  }
});

test("the opening question retains separate answers for each species in Prout, Schubert and Gallon–Bitsch", () => {
  const opening = topics.find(topic => topic.id === "anfangsintervall");
  for (const source of ["prout1890", "schubert1999", "gallon-bitsch1964"]) {
    const singleSpecies = opening.authors.filter(author =>
      author.source === source && author.speciesScope?.length === 1);
    const covered = new Set(singleSpecies.map(author => author.speciesScope[0]));
    assert.deepEqual([...covered].sort(), [1, 2, 3, 4, 5], source);
  }
});
