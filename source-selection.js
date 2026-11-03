/* The URL carries the book selection on both pages, including when opened from disk. */
const AtlasSources = (() => {
  "use strict";
  const ids = ATLAS.sources.map(source => source.id);
  const bookIds = new Set(ATLAS.sources.filter(source => source.group === "Lehrwerke").map(source => source.id));

  function read(url) {
    const params = new URL(url).searchParams;
    if (!params.has("quellen")) return new Set(ids);
    const requested = new Set(params.getAll("quellen").flatMap(value =>
      value.split(",").map(id => id.trim().toLowerCase())));
    return new Set(ids.filter(id => requested.has(id)));
  }

  function write(url, selection) {
    const target = new URL(url);
    const chosen = ids.filter(id => selection.has(id));
    target.searchParams.delete("quellen");
    if (chosen.length < ids.length) {
      target.search += (target.search ? "&" : "?") + "quellen=" + (chosen.join(",") || "none");
    }
    return target;
  }

  return { read, write, isBook: id => bookIds.has(id) };
})();
