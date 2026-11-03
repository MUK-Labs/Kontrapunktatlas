/* One indexed entry per editorial pair; filters keep both positions together. */
const AtlasDisagreements = (() => {
  "use strict";
  const typeOrder = Object.keys(AtlasRelations.types);
  const defaultTypes = Object.freeze(["contradiction", "nuance"]);

  function canonicalTypes(values) {
    const chosen = new Set(values);
    return typeOrder.filter(type => chosen.has(type));
  }

  function normalize(value) {
    return String(value ?? "").toLocaleLowerCase("de").normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").replace(/ß/g, "ss");
  }

  function species(value) {
    const text = String(value ?? "");
    return text === "free" || /^[1-5]$/.test(text) ? text : "";
  }

  function stateValues(state = {}) {
    return {
      types: canonicalTypes(state.types ?? defaultTypes),
      search: String(state.search ?? ""),
      group: String(state.group ?? ""),
      author: String(state.author ?? ""),
      species: species(state.species),
      pair: String(state.pair ?? "")
    };
  }

  function entries(topics, sourceIds) {
    const seen = new Set();
    const indexed = [];
    for (const topic of topics) {
      for (const pair of AtlasRelations.pairs(topic, sourceIds)) {
        const id = [topic.id, ...[pair.from.id, pair.to.id].sort()].join("~");
        if (seen.has(id)) continue;
        seen.add(id);
        indexed.push({ id, topic, ...pair });
      }
    }
    return indexed;
  }

  function searchable(entry) {
    const fields = [entry.topic.title, entry.topic.group, entry.relation.note];
    for (const answer of [entry.from, entry.to]) {
      fields.push(answer.name, answer.work, answer.text, answer.locator);
    }
    return normalize(fields.filter(Boolean).join(" "));
  }

  function filter(indexed, state = {}) {
    const selected = stateValues(state);
    const terms = normalize(selected.search).trim().split(/\s+/).filter(Boolean);
    return indexed.filter(entry => {
      const answers = [entry.from, entry.to];
      return selected.types.includes(entry.relation.type) &&
        (!selected.group || entry.topic.group === selected.group) &&
        (!selected.author || answers.some(answer => answer.name === selected.author)) &&
        (!selected.species || answers.some(answer => selected.species === "free"
          ? Array.isArray(answer.speciesScope) && answer.speciesScope.length === 0
          : answer.speciesScope?.includes(Number(selected.species)))) &&
        terms.every(term => searchable(entry).includes(term));
    });
  }

  function read(url) {
    const params = new URLSearchParams(new URL(url).hash.slice(1));
    const types = params.has("art") ? params.getAll("art").flatMap(value =>
      value.split(",").map(type => type.trim().toLowerCase())) : defaultTypes;
    const scope = params.get("spezies");
    return stateValues({
      types,
      search: params.get("suche"),
      group: params.get("bereich"),
      author: params.get("autor"),
      species: scope === "frei" ? "free" : scope,
      pair: params.get("vergleich")
    });
  }

  function write(url, state = {}) {
    const target = new URL(url);
    const selected = stateValues(state);
    const params = new URLSearchParams();
    if (selected.types.join(",") !== defaultTypes.join(",")) {
      params.set("art", selected.types.join(",") || "none");
    }
    if (selected.search) params.set("suche", selected.search);
    if (selected.group) params.set("bereich", selected.group);
    if (selected.author) params.set("autor", selected.author);
    if (selected.species) params.set("spezies", selected.species === "free" ? "frei" : selected.species);
    if (selected.pair) params.set("vergleich", selected.pair);
    target.hash = params.toString();
    return target;
  }

  return { defaultTypes, entries, normalize, filter, read, write };
})();
