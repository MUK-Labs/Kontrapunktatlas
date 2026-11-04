/* Context belongs to a cited answer; publication dates never assign a style. */
const AtlasContexts = (() => {
  "use strict";
  const styles = Object.freeze({
    medieval: "Mittelalter",
    renaissance: "Renaissance",
    baroque: "Barock",
    "classical-romantic": "Klassik / Romantik",
    modern: "20./21. Jahrhundert"
  });
  const bases = Object.freeze({
    passage: "Aus der konkreten Passage",
    book: "Aus dem erklärten Lehrbuchrahmen",
    repertoire: "Redaktionell aus dem Repertoire erschlossen"
  });
  const text = value => typeof value === "string" && value.trim().length > 0;

  // Missing or incomplete evidence is unclassified, never a cross-style claim.
  function normalize(answer) {
    const context = answer?.context;
    if (!context || typeof context !== "object" || Array.isArray(context) ||
        !["specific", "cross-style", "unclassified"].includes(context.reach) ||
        !Array.isArray(context.styles) ||
        context.styles.some(id => typeof id !== "string" || !Object.hasOwn(styles, id)) ||
        !text(context.frame)) return null;
    const ids = [...new Set(context.styles)];
    if (context.reach === "specific" && !ids.length) return null;
    if (context.reach === "unclassified" && ids.length) return null;
    const evidence = context.evidence;
    if (!evidence || typeof evidence !== "object" || Array.isArray(evidence) ||
        typeof evidence.basis !== "string" || !Object.hasOwn(bases, evidence.basis) ||
        !text(evidence.locator) || !text(evidence.note)) return null;
    return {
      styles: ids,
      reach: context.reach,
      frame: context.frame.trim(),
      evidence: {
        basis: evidence.basis,
        locator: evidence.locator.trim(),
        note: evidence.note.trim()
      }
    };
  }

  function el(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  }

  function badge(id, label) {
    const node = el("span", "context-badge context-" + id, label);
    node.dataset.context = id;
    return node;
  }

  function render(answer) {
    const context = normalize(answer);
    const block = el("div", "answer-context");
    block.setAttribute("role", "group");
    block.setAttribute("aria-label", "Stilbezug und Aufgabenrahmen");
    block.dataset.reach = context?.reach || "unclassified";
    const row = el("div", "context-row");
    row.append(el("span", "context-label", "Stilbezug"));
    block.append(row);
    if (!context) {
      row.append(badge("unclassified", "Noch nicht eingeordnet"));
      return block;
    }
    if (context.reach === "unclassified") row.append(badge("unclassified", "Noch nicht eingeordnet"));
    if (context.reach === "cross-style") row.append(badge("cross-style", "Stilübergreifend"));
    for (const id of context.styles) row.append(badge(id, styles[id]));
    const frame = el("div", "context-row context-task");
    frame.append(el("span", "context-label", "Aufgabenrahmen"), el("span", "context-frame", context.frame));
    block.append(frame);
    const details = el("details", "context-evidence");
    details.append(el("summary", "", "Einordnung und Beleg"));
    details.append(el("p", "context-basis", bases[context.evidence.basis]));
    details.append(el("p", "context-note", context.evidence.note));
    details.append(el("p", "context-locator", context.evidence.locator));
    block.append(details);
    return block;
  }

  function legend() {
    const details = el("details", "context-key");
    details.append(el("summary", "", "Stilbezug und Aufgabenrahmen"));
    details.append(el("p", "", "Der Stilbezug bezeichnet die musikalische Tradition, auf die sich diese Aussage bezieht. Er bedeutet nicht, dass sie ausschließlich dort gilt. Das Erscheinungsjahr des Buchs bestimmt die Zuordnung nicht."));
    const labels = el("div", "context-legend");
    labels.setAttribute("aria-label", "Stilbezüge");
    for (const [id, label] of Object.entries(styles)) labels.append(badge(id, label));
    details.append(labels);
    details.append(el("p", "", "Der Aufgabenrahmen nennt die konkrete Praxis, etwa eine Speziesübung, freien Satz oder Repertoireanalyse. Die Spezies ist gesondert angegeben."));
    const meanings = el("ul", "context-meanings");
    const broad = el("li");
    broad.append(badge("cross-style", "Stilübergreifend"), " kennzeichnet einen ausdrücklich weiter gefassten Ansatz.");
    const unknown = el("li");
    unknown.append(badge("unclassified", "Noch nicht eingeordnet"), " bedeutet, dass der Stilbezug noch nicht bestimmt ist. Daraus folgt keine allgemeine Gültigkeit.");
    meanings.append(broad, unknown);
    details.append(meanings);
    details.append(el("p", "", "Einordnung und Beleg zeigt, ob die Zuordnung aus der Passage, dem erklärten Lehrbuchrahmen oder dem untersuchten Repertoire hervorgeht. Unterschiedliche Stilbezüge allein begründen keinen Widerspruch; jeder Vergleich bleibt einzeln erläutert."));
    return details;
  }

  return Object.freeze({ styles, bases, normalize, render, legend });
})();
