/* Bibliographic ordering is independent of the selected sources and musical style. */
const AtlasSourceOrder = (() => {
  "use strict";
  const labels = Object.freeze({
    typ: "Nach Quellenart",
    autor: "Nach Autor (A–Z)",
    jahr: "Nach erster Fassung"
  });
  const collator = new Intl.Collator("de", { sensitivity: "base", numeric: true });
  const normalize = value => Object.hasOwn(labels, value) ? value : "typ";
  const authorKey = source => source.sortAuthor || source.name || "";
  const validYear = value => Number.isInteger(value) && value > 0 && value <= 9999;
  // The consulted edition must never supply a missing date for the original work.
  const yearOf = source => validYear(source.firstVersion?.year) ? source.firstVersion.year : null;
  const endYearOf = source => {
    const year = yearOf(source), end = source.firstVersion?.endYear;
    return year !== null && validYear(end) && end >= year ? end : year;
  };
  const compareNames = (a, b) => collator.compare(authorKey(a), authorKey(b));
  const compareYears = (a, b) => (yearOf(a) ?? 10000) - (yearOf(b) ?? 10000);
  const compareWorks = (a, b) => collator.compare(a.title || "", b.title || "") ||
    collator.compare(a.id, b.id);
  const byAuthor = (a, b) => compareNames(a, b) || compareYears(a, b) || compareWorks(a, b);
  const byYear = (a, b) => compareYears(a, b) || compareNames(a, b) || compareWorks(a, b);

  function sections(sources, order) {
    const mode = normalize(order);
    if (mode === "typ") {
      const groups = new Map();
      for (const source of sources) {
        const key = source.group || "Weitere Quellen";
        if (!groups.has(key)) groups.set(key, { key, label: key, sources: [] });
        groups.get(key).sources.push(source);
      }
      return [...groups.values()];
    }
    const sorted = [...sources].sort(mode === "autor" ? byAuthor : byYear);
    if (mode === "autor") return [{ key: "autor", label: "Autoren · A–Z", sources: sorted }];
    return [
      { key: "jahr", label: "Erste Fassung · älteste zuerst", sources: sorted.filter(source => yearOf(source) !== null) },
      { key: "undatiert", label: "Erste Fassung nicht datiert", sources: sorted.filter(source => yearOf(source) === null) }
    ].filter(section => section.sources.length);
  }

  function read(url) {
    return normalize(new URL(url).searchParams.get("sortierung"));
  }

  function write(url, order) {
    const target = new URL(url);
    const mode = normalize(order);
    target.searchParams.delete("sortierung");
    if (mode !== "typ") target.searchParams.set("sortierung", mode);
    return target;
  }

  function yearLabel(source) {
    const year = yearOf(source);
    return year === null ? "Jahr nicht belegt" : source.firstVersion.label ||
      (endYearOf(source) === year ? String(year) : year + "–" + endYearOf(source));
  }

  function editionYearLabel(source) {
    return source.editionLabel || (validYear(source.editionYear) ? String(source.editionYear) : "Jahr nicht belegt");
  }

  return Object.freeze({ labels, normalize, yearOf, endYearOf, yearLabel, editionYearLabel, sections, read, write });
})();
