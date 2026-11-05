const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const scripts = ["atlas-data.js", "source-order.js", "source-timeline.js"].map(file =>
  fs.readFileSync(path.join(__dirname, "..", file), "utf8"));
const { ATLAS, AtlasSourceOrder, AtlasSourceTimeline } = vm.runInNewContext(
  [...scripts, "({ ATLAS, AtlasSourceOrder, AtlasSourceTimeline })"].join("\n"), { URL }
);
const source = id => ATLAS.sources.find(item => item.id === id);
const identifiers = rows => Array.from(rows, row => row.source?.id ?? row.id);

function assertReachable(chart) {
  const radius = chart.targetSize / 2;
  for (const [index, point] of chart.points.entries()) {
    assert.ok(Number.isFinite(point.x) && Number.isFinite(point.y), point.source.id);
    assert.ok(point.x >= radius && point.x <= chart.width - radius, point.source.id);
    assert.ok(point.y >= radius && point.y <= chart.height - radius, point.source.id);
    for (const other of chart.points.slice(index + 1)) {
      assert.ok(Math.abs(point.x - other.x) >= chart.targetSize - 1e-6 ||
        Math.abs(point.y - other.y) >= chart.targetSize - 1e-6,
      "overlapping targets: " + point.source.id + " / " + other.source.id);
    }
  }
}

test("the timeline includes every dated source once and gives undated works separate access", () => {
  const chart = AtlasSourceTimeline.layout(ATLAS.sources, 1100);
  const dated = ATLAS.sources.filter(item => AtlasSourceOrder.yearOf(item) !== null);
  const undated = ATLAS.sources.filter(item => AtlasSourceOrder.yearOf(item) === null);
  assert.deepEqual(new Set(identifiers(chart.points)), new Set(identifiers(dated)));
  assert.deepEqual(new Set(identifiers(chart.undated)), new Set(identifiers(undated)));
  assert.equal(chart.points.length + chart.undated.length, ATLAS.sources.length);
  assert.equal(chart.points.find(point => point.source.id === "piston1947").year, 1970);
  assert.ok(chart.undated.some(item => item.id === "prout1890"));
  assert.equal(AtlasSourceOrder.yearLabel(chart.points.find(point => point.source.id === "cherubini1835").source), "um 1835");
  assert.equal(chart.points.find(point => point.source.id === "spalding1904").source.publicationLabel, "1904 (Copyright)");
});

test("true year positions remain proportional while simultaneous and nearby works stay reachable", () => {
  const rows = [
    { id: "early", name: "A", title: "First", publicationYear: 1600 },
    { id: "mid", name: "B", title: "Middle", publicationYear: 1800 },
    ...Array.from({ length: 16 }, (_, index) => ({
      id: "dense-" + index, name: "C", title: "Book " + index,
      publicationYear: 1988 + Math.floor(index / 3)
    })),
    { id: "late", name: "D", title: "Last", publicationYear: 2000 }
  ];
  for (const width of [280, 600, 960, 1400, 2200]) {
    const chart = AtlasSourceTimeline.layout(rows, width);
    assertReachable(chart);
    const x = id => chart.points.find(point => point.source.id === id).x;
    assert.ok(Math.abs(x("mid") - (x("early") + x("late")) / 2) < 1e-6);
    for (let i = 1; i < chart.points.length; i++) {
      assert.ok(chart.points[i].x >= chart.points[i - 1].x);
      if (chart.points[i].year === chart.points[i - 1].year) {
        assert.equal(chart.points[i].x, chart.points[i - 1].x);
        assert.notEqual(chart.points[i].y, chart.points[i - 1].y);
      }
    }
  }
});

test("the complete catalogue has no overlapping touch or keyboard targets at responsive widths", () => {
  for (const width of [320, 660, 960, 1100, 1400]) assertReachable(AtlasSourceTimeline.layout(ATLAS.sources, width));
  const chart = AtlasSourceTimeline.layout([source("bach1866-wtk1"), source("bach1866-wtk2")], 960);
  assert.equal(chart.points.length, 2);
  assert.equal(chart.points[0].x, chart.points[1].x);
  assert.notEqual(chart.points[0].y, chart.points[1].y);
  assert.notEqual(chart.points[0].source.title, chart.points[1].source.title);
});

test("empty, undated-only and single-year catalogues do not invent a date span", () => {
  const unknown = [null, undefined, "1900", -1, 0, 2020.5, 10000, NaN, Infinity].map((year, index) => ({
    id: "unknown-" + index, name: "Author", title: "A book from 1550", publicationYear: year
  }));
  for (const rows of [[], unknown]) {
    const chart = AtlasSourceTimeline.layout(rows, 960);
    assert.equal(chart.points.length, 0);
    assert.equal(chart.ticks.length, 0);
    assert.equal(chart.range, null);
    assert.equal(chart.undated.length, rows.length);
  }
  const rows = Array.from({ length: 8 }, (_, index) => ({
    id: "same-" + index, name: "Same author", title: "Volume " + index, publicationYear: 1900
  }));
  for (const width of [undefined, NaN, 0, -1, 320, 960]) {
    const chart = AtlasSourceTimeline.layout(rows, width);
    assertReachable(chart);
    assert.equal(chart.ticks.length, 1);
    assert.equal(chart.ticks[0].year, 1900);
    assert.ok(chart.points.every(point => point.x === chart.width / 2));
    assert.deepEqual(Array.from(chart.range), [1900, 1900]);
  }
});

test("axis labels stay inside the chart and apart, including very short and very long date spans", () => {
  for (const [start, end] of [[1, 9999], [1558, 2023], [1999, 2000], [1900, 1902]]) {
    for (const width of [128, 320, 960, 1600]) {
      const chart = AtlasSourceTimeline.layout([
        { id: "a", name: "A", publicationYear: start },
        { id: "b", name: "B", publicationYear: end }
      ], width);
      assert.equal(chart.ticks[0].year, start);
      assert.equal(chart.ticks.at(-1).year, end);
      for (let i = 0; i < chart.ticks.length; i++) {
        const tick = chart.ticks[i];
        assert.ok(Number.isInteger(tick.year));
        assert.ok(tick.x >= 20 && tick.x <= chart.width - 20);
        if (i) assert.ok(tick.x - chart.ticks[i - 1].x >= 64);
      }
    }
  }
});

test("timeline layout is deterministic and preserves the source objects and catalogue order", () => {
  const rows = Object.freeze(Array.from(ATLAS.sources, item => Object.freeze({ ...item })));
  const before = JSON.stringify(rows);
  const first = AtlasSourceTimeline.layout(rows, 960);
  const reversed = AtlasSourceTimeline.layout([...rows].reverse(), 960);
  assert.deepEqual(identifiers(first.points), identifiers(reversed.points));
  assert.deepEqual(identifiers(first.undated), identifiers(reversed.undated));
  assert.equal(JSON.stringify(rows), before);
  for (const point of first.points) assert.ok(rows.includes(point.source));
});

test("a selected subset gets its own date span, including same-year and undated-only selections", () => {
  const selected = [source("prout1890"), source("york1907"), source("spalding1904")];
  const chart = AtlasSourceTimeline.layout(selected, 320);
  assert.deepEqual(identifiers(chart.points), ["spalding1904", "york1907"]);
  assert.deepEqual(Array.from(chart.range), [1904, 1907]);
  assert.deepEqual(identifiers(chart.undated), ["prout1890"]);
  assertReachable(chart);
  const sameYear = AtlasSourceTimeline.layout([source("bach1866-wtk2"), source("bach1866-wtk1")], 320);
  assert.deepEqual(Array.from(sameYear.range), [1866, 1866]);
  assertReachable(sameYear);
  const undated = AtlasSourceTimeline.layout([source("prout1890")], 320);
  assert.equal(undated.range, null);
  assert.equal(undated.points.length, 0);
  assert.equal(undated.ticks.length, 0);
  assert.deepEqual(identifiers(undated.undated), ["prout1890"]);
});
