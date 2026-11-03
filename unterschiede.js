/* The directory is generated from the same cited pairs as the question pages. */
(() => {
  "use strict";
  const allSourceIds = new Set(ATLAS.sources.map(source => source.id));
  const allEntries = AtlasDisagreements.entries(ATLAS.topics, allSourceIds);
  const allById = new Map(allEntries.map(entry => [entry.id, entry]));
  const typeInputs = [...document.querySelectorAll('input[name="art"]')];
  const search = document.getElementById("comparison-search");
  const group = document.getElementById("comparison-group");
  const author = document.getElementById("comparison-author");
  const species = document.getElementById("comparison-species");
  const list = document.getElementById("vergleichsliste");
  const count = document.getElementById("comparison-count");
  const notice = document.getElementById("comparison-notice");
  const status = document.getElementById("comparison-status");
  const share = document.getElementById("comparison-share");
  const copyFallback = document.getElementById("comparison-copy-fallback");
  const copyValue = document.getElementById("comparison-copy-value");
  let sourceIds;
  let entries;
  let state;
  let lastReadURL = "";

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(label, href, className) {
    const node = el("a", className, label);
    node.href = href;
    return node;
  }

  function button(label, action) {
    const node = el("button", "", label);
    node.type = "button";
    node.addEventListener("click", action);
    return node;
  }

  function pageURL(filename) {
    return AtlasSources.write(new URL(filename, location.href), sourceIds);
  }

  function sourcesURL() {
    const url = AtlasDisagreements.write(pageURL("quellen.html"), state);
    url.searchParams.set("von", "unterschiede");
    return url;
  }

  function answerURL(entry, answer) {
    const current = /^[1-5]$/.test(state.species) ? Number(state.species) : 0;
    const target = AtlasRelations.targetSpecies(answer, current);
    const url = pageURL("index.html");
    url.hash = AtlasRelations.fragment(entry.topic, target, answer.id);
    return url;
  }

  function questionURL(topic) {
    const url = pageURL("index.html");
    url.hash = AtlasRelations.fragment(topic, 0);
    return url;
  }

  function pairURL(entry) {
    return AtlasDisagreements.write(pageURL("unterschiede.html"), { ...state, pair: entry.id });
  }

  function scopeLabel(answer) {
    return answer.speciesScope?.length ? answer.speciesScope.map(n => "S" + n).join(" · ") :
      answer.speciesScope ? "Speziesunabhängig" : "Ohne Spezieszuordnung";
  }

  function options(select, values, emptyLabel, value) {
    select.replaceChildren(new Option(emptyLabel, ""));
    for (const item of [...new Set(values)].sort((a, b) => a.localeCompare(b, "de"))) {
      select.add(new Option(item, item));
    }
    if (value && ![...select.options].some(option => option.value === value)) {
      select.add(new Option(value + " · in dieser Auswahl nicht vorhanden", value));
    }
    select.value = value;
  }

  function controls() {
    for (const input of typeInputs) {
      input.checked = state.types.includes(input.value);
      input.closest("label").classList.toggle("is-active", input.checked);
    }
    search.value = state.search;
    species.value = state.species;
    options(group, entries.map(entry => entry.topic.group), "Alle Themenbereiche", state.group);
    options(author, entries.flatMap(entry => [entry.from.name, entry.to.name]), "Alle Autoren", state.author);
  }

  function focusPair(id) {
    const card = document.getElementById("vergleich-" + id);
    card?.focus({ preventScroll: true });
    card?.scrollIntoView({ block: "start" });
  }

  function position(entry, answer) {
    const section = el("section", "comparison-position");
    section.append(el("h4", "", answer.name));
    section.append(el("small", "species-scope", scopeLabel(answer)));
    section.append(el("p", "comparison-locator", answer.locator));
    const destination = link("Antwort im Atlas →", answerURL(entry, answer), "source-link comparison-answer-link");
    destination.setAttribute("aria-label", "Antwort von " + answer.name + " im Atlas öffnen. " + answer.locator);
    section.append(destination);
    return section;
  }

  function fullAnswer(answer) {
    const section = el("section", "comparison-full-answer");
    section.append(el("h5", "", answer.name), el("p", "", answer.text));
    const citation = el("p", "ref");
    const work = el("span", AtlasSources.isBook(answer.source) ? "book-title" : "", answer.work);
    citation.append(work, " · ", answer.locator);
    if (answer.url && /^https?:\/\//i.test(answer.url)) {
      citation.append(" · ", link(answer.catalogue ? "Bibliotheksnachweis" : "Fundstelle öffnen", answer.url, "source-link"));
    }
    section.append(citation);
    return section;
  }

  function card(entry, expanded) {
    const row = el("article", "comparison-card relation-" + entry.relation.type);
    row.id = "vergleich-" + entry.id;
    row.tabIndex = -1;
    row.setAttribute("aria-labelledby", row.id + "-title");
    row.classList.toggle("is-focused-comparison", state.pair === entry.id);
    const header = el("div", "comparison-card-head");
    const heading = el("h3", "comparison-card-title");
    heading.id = row.id + "-title";
    heading.append(el("span", "relation-badge relation-" + entry.relation.type, AtlasRelations.types[entry.relation.type].label));
    heading.append(el("span", "sr-only", " · " + entry.from.name + " und " + entry.to.name));
    const permalink = link("Vergleichslink", pairURL(entry), "comparison-permalink");
    permalink.setAttribute("aria-label", "Direktlink zu diesem Vergleich: " + entry.topic.title + " · " + entry.from.name + " und " + entry.to.name);
    if (state.pair === entry.id) permalink.setAttribute("aria-current", "location");
    permalink.addEventListener("click", event => {
      if (event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (permalink.href === location.href) {
        event.preventDefault();
        focusPair(entry.id);
      }
    });
    header.append(heading, permalink);
    row.append(header, el("p", "comparison-explanation", entry.relation.note));
    const participants = el("div", "comparison-positions");
    participants.append(position(entry, entry.from), position(entry, entry.to));
    row.append(participants);
    const details = el("details", "comparison-texts");
    details.open = expanded || state.pair === entry.id;
    const summary = el("summary", "", "Beide Antworten lesen");
    details.append(summary);
    const full = el("div", "comparison-positions");
    full.append(fullAnswer(entry.from), fullAnswer(entry.to));
    details.append(full);
    row.append(details);
    return row;
  }

  function emptyState() {
    const box = el("section", "comparison-empty");
    box.append(el("h3", "", "Keine passenden Vergleiche"));
    if (!entries.length) {
      box.append(el("p", "", "Für diese Quellenauswahl ist noch kein Vergleich zwischen zwei Antworten verzeichnet. Damit ein Vergleich erscheint, müssen beide beteiligten Werke ausgewählt sein."));
      box.append(link("Quellen wählen", sourcesURL(), "source-link"));
    } else {
      box.append(el("p", "", state.types.length
        ? "Ändere die Suche oder die Filter. Mit „Filter zurücksetzen“ kehrst du zu den Widersprüchen und Nuancen deiner Quellenauswahl zurück."
        : "Wähle mindestens eine Art des Vergleichs, um die passenden Einträge zu sehen."));
      const actions = el("div", "entry-actions");
      actions.append(button("Filter zurücksetzen", reset));
      const other = AtlasDisagreements.filter(entries, { ...state, types: Object.keys(AtlasRelations.types) });
      if (other.length) actions.append(button("Alle Vergleichsarten anzeigen", () => commit({ ...state, types: Object.keys(AtlasRelations.types), pair: "" })));
      box.append(actions);
    }
    return box;
  }

  function renderNotice(visible) {
    notice.replaceChildren();
    notice.hidden = true;
    if (!state.pair) return;
    const entry = allById.get(state.pair);
    if (!entry) {
      notice.append(el("p", "", "Der verlinkte Vergleich wurde nicht gefunden. Das Verzeichnis zeigt die zu deinen Filtern passenden Einträge."));
    } else if (!sourceIds.has(entry.from.source) || !sourceIds.has(entry.to.source)) {
      notice.append(el("p", "", "Der verlinkte Vergleich ist durch deine Quellenauswahl ausgeblendet. Wähle beide beteiligten Werke, um ihn zu öffnen."));
      notice.append(link("Quellenauswahl ändern", sourcesURL(), "source-link"));
    } else if (!visible.some(item => item.id === state.pair)) {
      notice.append(el("p", "", "Der verlinkte Vergleich passt nicht zu den aktuellen Filtern."));
      const actions = el("div", "entry-actions");
      actions.append(button("Verlinkten Vergleich anzeigen", () => commit({ ...AtlasDisagreements.read(new URL("unterschiede.html", location.href)), types: [entry.relation.type], pair: entry.id }, true)));
      notice.append(actions);
    }
    notice.hidden = !notice.childElementCount;
  }

  function render(focus = false) {
    const expanded = new Set([...list.querySelectorAll(".comparison-card")]
      .filter(row => row.querySelector("details")?.open).map(row => row.id));
    const visible = AtlasDisagreements.filter(entries, state);
    const topicGroups = new Map();
    for (const entry of visible) {
      if (!topicGroups.has(entry.topic.id)) topicGroups.set(entry.topic.id, []);
      topicGroups.get(entry.topic.id).push(entry);
    }
    list.replaceChildren();
    for (const rows of topicGroups.values()) {
      const topic = rows[0].topic;
      const section = el("section", "comparison-question");
      section.setAttribute("aria-labelledby", "frage-" + topic.id);
      const header = el("header", "comparison-question-head");
      header.append(el("p", "eyebrow", topic.group));
      const heading = el("h2");
      heading.id = "frage-" + topic.id;
      heading.append(link(topic.title, questionURL(topic)));
      header.append(heading);
      section.append(header);
      for (const entry of rows) section.append(card(entry, expanded.has("vergleich-" + entry.id)));
      list.append(section);
    }
    if (!visible.length) list.append(emptyState());
    count.textContent = visible.length + (visible.length === 1 ? " Vergleich" : " Vergleiche") +
      " zu " + topicGroups.size + (topicGroups.size === 1 ? " Frage" : " Fragen");
    const facetEntries = AtlasDisagreements.filter(entries, { ...state, types: Object.keys(AtlasRelations.types) });
    for (const type of Object.keys(AtlasRelations.types)) {
      document.getElementById("count-" + type).textContent = "(" + facetEntries.filter(entry => entry.relation.type === type).length + ")";
    }
    document.getElementById("comparison-scope-hint").hidden = !state.species;
    document.getElementById("comparison-source-summary").textContent = sourceIds.size === allSourceIds.size
      ? "Alle " + allSourceIds.size + " Quellen" : sourceIds.size + " von " + allSourceIds.size + " Quellen";
    for (const a of document.querySelectorAll("[data-atlas]")) a.href = pageURL("index.html").href;
    for (const a of document.querySelectorAll("[data-quellen]")) a.href = sourcesURL().href;
    share.textContent = state.pair ? "Vergleich kopieren" : "Ansicht kopieren";
    renderNotice(visible);
    AtlasAuthors.linkify(list);
    if (focus && visible.some(entry => entry.id === state.pair)) focusPair(state.pair);
  }

  function restore(force = false) {
    if (!force && lastReadURL === location.href) return;
    lastReadURL = location.href;
    sourceIds = AtlasSources.read(location.href);
    entries = AtlasDisagreements.entries(ATLAS.topics, sourceIds);
    state = AtlasDisagreements.read(location.href);
    controls();
    render(Boolean(state.pair));
  }

  function commit(next, focus = false, replace = false) {
    const url = AtlasDisagreements.write(AtlasSources.write(new URL(location.href), sourceIds), next);
    if (url.href !== location.href) {
      try {
        history[replace ? "replaceState" : "pushState"](null, "", url.href);
      } catch (error) {
        if (error.name !== "SecurityError" || url.protocol !== "file:") throw error;
        location.assign(url.href);
        return;
      }
    }
    lastReadURL = location.href;
    state = AtlasDisagreements.read(url);
    controls();
    render(focus);
    copyFallback.hidden = true;
  }

  function fromControls(replace = false) {
    commit({ types: typeInputs.filter(input => input.checked).map(input => input.value),
      search: search.value, group: group.value, author: author.value, species: species.value, pair: "" }, false, replace);
  }

  function reset() {
    commit({ types: AtlasDisagreements.defaultTypes });
  }

  typeInputs.forEach(input => input.addEventListener("change", () => fromControls()));
  [group, author, species].forEach(input => input.addEventListener("change", () => fromControls()));
  search.addEventListener("input", () => fromControls(true));
  document.getElementById("comparison-reset").addEventListener("click", reset);
  share.addEventListener("click", async () => {
    const base = location.protocol === "file:" ? "https://muk-labs.github.io/Kontrapunktatlas/unterschiede.html" : location.href;
    const url = AtlasDisagreements.write(AtlasSources.write(new URL(base), sourceIds), state).href;
    try {
      await navigator.clipboard.writeText(url);
      status.textContent = state.pair ? "Link zum Vergleich kopiert." : "Link zur gefilterten Ansicht kopiert.";
      share.textContent = "Link kopiert";
    } catch {
      copyValue.value = url;
      copyFallback.hidden = false;
      copyValue.focus();
      copyValue.select();
      status.textContent = "Der Link ist markiert. Kopiere ihn mit dem Kopierbefehl deines Geräts.";
    }
  });
  document.getElementById("comparison-copy-close").addEventListener("click", () => {
    copyFallback.hidden = true;
    share.focus();
  });
  // Keep in-page jumps separate from filter hashes so they do not reset the directory.
  for (const selector of [".skip-link", ".comparison-back a"]) {
    document.querySelector(selector).addEventListener("click", event => {
      if (event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const target = selector === ".skip-link" ? list : search;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
    });
  }
  window.addEventListener("hashchange", () => restore());
  window.addEventListener("popstate", () => restore());
  window.addEventListener("pageshow", () => restore(true));
  restore(true);
})();
