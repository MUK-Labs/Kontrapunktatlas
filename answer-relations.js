/* Explicit editorial relationships; no disagreements are inferred from author names. */
const AtlasRelations = (() => {
  "use strict";
  const types = {
    contradiction: {
      label: "Widerspruch",
      description: "Unvereinbare Regeln für eine vergleichbare Aufgabe."
    },
    nuance: {
      label: "Nuance",
      description: "Eine Erlaubnis oder Einschränkung fällt unterschiedlich aus."
    },
    context: {
      label: "Anderer Kontext",
      description: "Stil, Aufgabe, Stimmenzahl oder Begriffsgebrauch unterscheiden sich."
    }
  };

  function pairs(topic, sourceIds) {
    const answers = new Map((topic.authors || []).filter(a => sourceIds.has(a.source))
      .map(a => [a.id, a]));
    return (topic.relations || []).filter(r =>
      Object.hasOwn(types, r.type) && r.from !== r.to && answers.has(r.from) && answers.has(r.to)
    ).map(relation => ({ relation, from: answers.get(relation.from), to: answers.get(relation.to) }));
  }

  function connections(topic, answerId, sourceIds) {
    return pairs(topic, sourceIds).filter(p => p.from.id === answerId || p.to.id === answerId)
      .map(p => ({ ...p.relation, target: p.from.id === answerId ? p.to : p.from }));
  }

  // Keep "Alle" or a compatible species; otherwise open the target's own classification.
  function targetSpecies(answer, current) {
    if (!current || answer.speciesScope?.includes(current)) return current;
    return answer.speciesScope?.[0] || 0;
  }

  function fragment(topic, species, answerId = "") {
    const params = new URLSearchParams({ frage: topic.id });
    const hasSpecies = topic.species || topic.authors?.some(a => a.speciesScope?.length);
    if (hasSpecies && species) params.set("spezies", String(species));
    if (answerId) params.set("antwort", answerId);
    return "#" + params;
  }

  return { types, pairs, connections, targetSpecies, fragment };
})();
