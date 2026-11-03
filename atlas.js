/* Classic scripts also work when the atlas is opened directly from disk. */
(() => {
  "use strict";
  const { topics: allTopics, examples: scores, sources } = ATLAS;
  const sourceIds = AtlasSources.read(location.href);
  const allSources = sourceIds.size === sources.length;
  const withHandout = sourceIds.has("artacho-handout");
  const allById = new Map(allTopics.map(topic => [topic.id, topic]));

  const speciesTopics = new Set(allTopics.filter(topic =>
    topic.species || topic.authors?.some(a => a.speciesScope?.length)
  ).map(topic => topic.id));

  // Filter before building the index or rendering any part of a question.
  function scopeTopic(topic) {
    const originalAuthors = topic.authors || [];
    const authors = originalAuthors.filter(a => sourceIds.has(a.source)).map(a => {
      if (!a.comparison || a.comparisonSources?.every(id => sourceIds.has(id))) return a;
      return { ...a, comparison: undefined };
    });
    const species = withHandout ? topic.species : undefined;
    const comparisons = withHandout ? topic.comparisons : [];
    if (!authors.length && !species && !comparisons.length) return null;
    const complete = authors.length === originalAuthors.length &&
      (withHandout || (!topic.species && !topic.comparisons.length));
    const showReading = topic.readingSources
      ? topic.readingSources.every(id => sourceIds.has(id)) : complete;
    return { ...topic, species, comparisons, authors,
      reading: showReading ? topic.reading : undefined, tags: complete ? topic.tags : [] };
  }

  const topics = allSources ? allTopics : allTopics.map(scopeTopic).filter(Boolean);
  const byId = new Map(topics.map(topic => [topic.id, topic]));
  const first = byId.get("sprungfolge") || topics[0];
  const search = document.querySelector("#search");
  const group = document.querySelector("#group");
  const perspective = document.querySelector("#perspective");
  const biographies = document.querySelector("#author-biographies");
  const illustrated = document.querySelector("#illustrated");
  const contrasted = document.querySelector("#contrasted");
  const list = document.querySelector("#question-list");
  const count = document.querySelector("#result-count");
  const detail = document.querySelector("#detail");
  const status = document.querySelector("#status");
  const handout = sources.find(source => source.id === "artacho-handout").url;
  const summary = document.getElementById("source-summary");
  summary.textContent = allSources ? "Alle " + sources.length + " Quellen" :
    sourceIds.size + " von " + sources.length + " Quellen";
  if (!allSources) summary.title = [...sourceIds].join(", ");
  let selected = first;
  let species = 0;
  let answerId = "";
  let focusedAnswerId = "";
  let answerNotice = "";
  let answerExcluded = false;
  let nextFocus = "";
  const pageTitle = document.title;

  function el(tag, className, value) {
    const result = document.createElement(tag);
    if (className) result.className = className;
    if (value !== undefined) result.textContent = value;
    return result;
  }

  function link(label, href, className) {
    const a = el("a", className, label);
    a.href = href;
    return a;
  }

  function sourceLink(page) {
    const pdfPage = {6: 1, 8: 2, 9: 3}[page];
    return link("Handout S. " + page, handout + "#page=" + pdfPage, "source-link");
  }

  function button(label, className, onClick) {
    const b = el("button", className, label);
    b.type = "button";
    b.addEventListener("click", onClick);
    return b;
  }

  function fragment(topic, n, answer = "") {
    // Use the full question to keep its species route even with a narrow source selection.
    return AtlasRelations.fragment(allById.get(topic.id) || topic, n, answer);
  }

  function sourcesPage(topic) {
    const url = new URL("quellen.html", location.href);
    url.search = location.search;
    url.searchParams.delete("von");
    url.hash = topic ? fragment(topic, species, answerId) : "";
    return AtlasSources.write(url, sourceIds).href;
  }

  function normalize(value) {
    return value.toLocaleLowerCase("de").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/ß/g, "ss");
  }

  function searchable(topic) {
    const fields = [topic.title, topic.group, ...topic.tags, topic.species?.label];
    if (topic.species) fields.push("Artacho Handout streng modal tonal Speziesvergleich");
    for (const c of topic.comparisons) fields.push(c.label, "Hindemith zweistimmig");
    if (topic.comparisons.length) fields.push("Artacho Handout Lehrmodelle");
    for (const a of topic.authors || []) {
      fields.push(a.name, a.work, a.text, a.locator, a.comparison);
      for (const id of a.examples || []) fields.push(scores[id].title, scores[id].caption, scores[id].credit);
    }
    for (const { relation } of AtlasRelations.pairs(topic, sourceIds)) fields.push(relation.note);
    return normalize(fields.filter(Boolean).join(" "));
  }

  const searchIndex = new Map(topics.map(topic => [topic.id, searchable(topic)]));
  group.replaceChildren(new Option("Alle Themenbereiche", ""));
  for (const name of [...new Set(topics.map(t => t.group))].sort((a,b) => a.localeCompare(b, "de"))) {
    group.add(new Option(name, name));
  }
  perspective.replaceChildren(new Option("Alle Quellen und Modelle", ""));
  if (withHandout) {
    perspective.add(new Option("Artacho · Speziestabellen", "species"));
    perspective.add(new Option("Hindemith · nach Artacho", "comparisons"));
  }
  const authors = topics.flatMap(topic => (topic.authors || []).map(author => author.name));
  for (const name of [...new Set(authors)].sort((a,b) => a.localeCompare(b, "de"))) {
    perspective.add(new Option(name, "author:" + name));
  }

  function matchesPerspective(topic) {
    if (!perspective.value) return true;
    if (perspective.value === "species") return Boolean(topic.species);
    if (perspective.value === "comparisons") return topic.comparisons.length > 0;
    return (topic.authors || []).some(a => "author:" + a.name === perspective.value);
  }

  function renderList() {
    const authorName = perspective.value.startsWith("author:") ? perspective.value.slice(7) :
      perspective.value === "comparisons" ? "Paul Hindemith" : "";
    biographies.hidden = !AtlasAuthors.mentions(authorName).length;
    biographies.textContent = biographies.hidden ? "" : "Wikipedia: " + authorName;
    AtlasAuthors.linkify(biographies);
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    const matches = topics.filter(topic =>
      (!group.value || topic.group === group.value) &&
      matchesPerspective(topic) &&
      (!contrasted.checked || AtlasRelations.pairs(topic, sourceIds).length) &&
      (!illustrated.checked || topic.authors?.some(a => a.examples?.length &&
        (!perspective.value.startsWith("author:") || perspective.value === "author:" + a.name))) &&
      terms.every(term => searchIndex.get(topic.id).includes(term))
    );
    count.textContent = matches.length + (matches.length === 1 ? " Frage" : " Fragen") +
      (matches.length !== topics.length ? " von " + topics.length : "");
    list.replaceChildren();
    for (const topic of matches) {
      const a = link("", fragment(topic, species), "question-item");
      a.append(el("span", "question-label", topic.title));
      const comparisons = AtlasRelations.pairs(topic, sourceIds).length;
      if (comparisons) {
        const badge = el("span", "relation-count", "↔ " + comparisons);
        badge.setAttribute("aria-label", comparisons + " verknüpfte Vergleiche");
        a.append(badge);
      }
      if (topic === selected) {
        a.classList.add("is-active");
        a.setAttribute("aria-current", "page");
      }
      a.addEventListener("click", event => {
        if (event.button || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
        if (a.hash === location.hash) {
          event.preventDefault();
          detail.querySelector("h2").focus();
        } else {
          nextFocus = "title";
        }
      });
      list.append(a);
    }
    if (!topics.length) {
      list.append(el("p", "empty-state", "Keine Quelle ausgewählt."));
    } else if (!matches.length) {
      list.append(el("p", "empty-state", "Keine passende Frage gefunden."));
      list.append(button("Filter zurücksetzen", "source-link", () => {
        search.value = "";
        group.value = "";
        perspective.value = "";
        illustrated.checked = false;
        contrasted.checked = false;
        renderList();
        search.focus();
      }));
      list.append(proposal(null, search.value.trim()));
    }
  }

  function scopeHeading(title, links) {
    const header = el("div", "scope-heading");
    header.append(el("h3", "", title));
    const refs = el("div", "entry-actions");
    refs.append(...links);
    header.append(refs);
    return header;
  }

  function speciesCell(values, index) {
    const td = el("td");
    const value = values[index];
    if (value !== "Gleich") {
      td.textContent = value || "Keine Angabe im Handout";
      return td;
    }
    let reference = index - 1;
    while (reference >= 0 && values[reference] === "Gleich") reference--;
    td.append(el("span", "", values[reference] || value));
    if (reference >= 0) {
      td.append(el("small", "ref", "Im Handout „Gleich“ (wie S" + (reference + 1) + ")."));
    }
    return td;
  }

  function speciesPicker(topic, matchingAuthors) {
    const section = el("section", "detail-section");
    section.append(el("h3", "", "Nach Spezies vergleichen"));
    const controls = el("div", "species-controls");
    controls.setAttribute("role", "group");
    controls.setAttribute("aria-label", "Spezies auswählen");
    controls.setAttribute("aria-describedby", "species-hint");
    for (let n = 0; n <= 5; n++) {
      const b = button(n ? "S" + n : "Alle", "species-btn", () => {
        if (n !== species) {
          nextFocus = "species";
          location.hash = fragment(topic, n);
        }
      });
      b.setAttribute("aria-label", n ? "Spezies " + n : "Alle Beiträge anzeigen");
      b.setAttribute("aria-pressed", String(n === species));
      b.classList.toggle("is-active", n === species);
      controls.append(b);
    }
    section.append(controls);
    let hint = "Wähle eine Spezies, um die dafür belegten Aussagen und Notenbeispiele zu sehen. Die Nummer folgt der Einteilung des jeweiligen Lehrwerks.";
    if (species) {
      hint = topic.species || matchingAuthors.length
        ? "„Alle“ öffnet die vollständige Frage mit den übrigen Beiträgen deiner Quellenauswahl."
        : "Für S" + species + " ist in deiner Quellenauswahl bisher kein Beleg zu dieser Frage zugeordnet. Mit „Alle“ siehst du die übrigen Beiträge.";
    }
    const description = el("p", "ref", hint);
    description.id = "species-hint";
    section.append(description);
    return section;
  }

  function speciesSection(topic) {
    const section = el("section", "detail-section");
    section.append(scopeHeading("Speziesvergleich im Handout", [sourceLink(6), sourceLink(8)]));
    section.append(el("p", "ref", "Tabellenzeile „" + topic.species.label + "“"));
    const wrap = el("div", "table-scroll");
    const table = el("table", "comparison-table");
    table.setAttribute("aria-label", "Modaler und tonaler Kontrapunkt nach Spezies");
    const head = table.createTHead().insertRow();
    for (const label of ["Spezies", "Streng modal", "Streng tonal"]) {
      const th = el("th", "", label);
      th.scope = "col";
      head.append(th);
    }
    const body = table.createTBody();
    for (const n of species ? [species] : [1,2,3,4,5]) {
      const row = body.insertRow();
      const th = el("th", "", "S" + n);
      th.scope = "row";
      row.append(th, speciesCell(topic.species.modal, n - 1), speciesCell(topic.species.tonal, n - 1));
    }
    wrap.append(table);
    section.append(wrap);
    return section;
  }

  function comparisonSection(topic) {
    const section = el("section", "detail-section");
    section.append(scopeHeading("Lehrmodelle im Vergleich", [sourceLink(9)]));
    section.append(el("p", "ref", "Nach Adrián Artachos Handout. Hindemiths zweistimmiger Kontrapunkt wird hier unabhängig von der Spezies betrachtet."));
    for (const c of topic.comparisons) {
      section.append(el("h4", "", c.label));
      const grid = el("div", "tradition-grid");
      for (const [key, name] of [["modal","Streng modal"], ["tonal","Streng tonal"], ["hindemith","Hindemith · zweistimmig"]]) {
        const card = el("div", "tradition-card " + key);
        card.append(el("h5", "", name), el("p", "", c[key] || "Keine Angabe im Handout"));
        grid.append(card);
      }
      section.append(grid);
      if (c.comment) {
        const note = el("p", "comment");
        note.append(el("strong", "", "Kommentar im Handout · "), c.comment);
        section.append(note);
      }
    }
    return section;
  }

  function authorsSection(authors, topic) {
    const section = el("section", "detail-section");
    const heading = el("h3", "", authors.some(a => a.kind === "partitur")
      ? "Lehrwerke, Analysen und Partitur" : "Aus den Lehrwerken");
    heading.id = "lehrwerke";
    heading.tabIndex = -1;
    section.append(heading);
    const visibleIds = new Set(authors.map(a => a.id));
    const relations = AtlasRelations.pairs(topic, sourceIds)
      .filter(p => visibleIds.has(p.from.id) || visibleIds.has(p.to.id));
    if (relations.length) section.append(relationsKey(relations.length));
    const entries = authors.length > 1 ? el("div", "tradition-grid authors-grid") : section;
    const visibleSources = new Set(authors.map(a => a.source));
    if (topic.species) visibleSources.add("artacho-handout");
    for (const a of authors) {
      const connections = AtlasRelations.connections(topic, a.id, sourceIds);
      const card = el("article", "tradition-card author-answer");
      card.id = "antwort-" + a.id;
      card.tabIndex = -1;
      card.setAttribute("aria-labelledby", card.id + "-titel");
      card.classList.toggle("is-focused-answer", a.id === focusedAnswerId);
      if (a.kind === "partitur") card.append(el("span", "eyebrow", "Partiturbeobachtung"));
      const header = el("div", "answer-heading");
      const title = el("h4", "", a.name);
      title.id = card.id + "-titel";
      const permalink = answerLink("Antwortlink", topic, species, a, "answer-permalink");
      permalink.setAttribute("aria-label", "Direktlink zur Antwort von " + a.name + ": " + a.locator);
      if (a.id === focusedAnswerId) permalink.setAttribute("aria-current", "location");
      header.append(title, permalink);
      card.append(header);
      if (speciesTopics.has(topic.id)) {
        const label = a.speciesScope?.length ? a.speciesScope.map(n => "S" + n).join(" · ") :
          a.speciesScope ? "Speziesunabhängiger Ansatz" : "Ohne Spezieszuordnung";
        card.append(el("small", "species-scope", label));
      }
      card.append(el("p", "", a.text));
      const citation = [a.work, a.locator].filter(Boolean).join(", ");
      // Keep biography links independent of the link to the cited book/page.
      const ref = el("small", "ref", citation);
      if (a.work && AtlasSources.isBook(a.source)) ref.classList.add("book-title");
      if (a.url && /^https?:\/\//i.test(a.url)) {
        ref.append(" · ", link(a.catalogue ? "Bibliotheksnachweis" : "Fundstelle öffnen", a.url, "source-link"));
      }
      card.append(ref);
      if (a.comparison && (!species || a.comparisonSources?.every(id => visibleSources.has(id)))) {
        const comparison = el(connections.length ? "details" : "p", "author-comparison");
        if (connections.length) {
          comparison.append(el("summary", "", "Ausführlicher redaktioneller Vergleich"), el("p", "", a.comparison));
        } else {
          comparison.append(el("strong", "", "Redaktioneller Vergleich · "), a.comparison);
        }
        card.append(comparison);
      }
      if (a.examples?.length) {
        card.append(button("Zum Notenbeispiel", "score-jump", () =>
          document.getElementById("bild-" + a.examples[0]).focus()));
      }
      if (connections.length) card.append(answerRelations(connections, topic, a));
      entries.append(card);
    }
    if (entries !== section) section.append(entries);
    return section;
  }

  function focusAnswer(id) {
    const card = document.getElementById("antwort-" + id);
    card?.focus({ preventScroll: true });
    card?.scrollIntoView({ block: "start" });
  }

  function answerLink(label, topic, n, answer, className) {
    const a = link(label, fragment(topic, n, answer.id), className);
    a.addEventListener("click", event => {
      if (event.button || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      if (a.hash === location.hash) {
        event.preventDefault();
        focusAnswer(answer.id);
      }
    });
    return a;
  }

  function relationsKey(count) {
    const key = el("details", "relations-key");
    key.id = "positionenvergleich";
    key.tabIndex = -1;
    const summary = el("summary", "", "Positionen vergleichen · " + count +
      (count === 1 ? " verknüpfter Vergleich" : " verknüpfte Vergleiche"));
    key.append(summary, el("p", "", "Die Links unter einer Antwort führen zur jeweils anderen Position. Die Einordnung und Erläuterung stammen von der Redaktion."));
    const labels = el("ul", "relation-legend");
    for (const [type, info] of Object.entries(AtlasRelations.types)) {
      const item = el("li");
      item.append(el("span", "relation-badge relation-" + type, info.label), " ", info.description);
      labels.append(item);
    }
    key.append(labels);
    return key;
  }

  function answerRelations(connections, topic, answer) {
    const nav = el("nav", "answer-relations");
    nav.setAttribute("aria-label", "Andere Positionen zur Antwort von " + answer.name);
    nav.append(el("h5", "", "Andere Positionen"));
    const list = el("ul", "relation-list");
    const nameCounts = new Map();
    for (const { target } of connections) nameCounts.set(target.name, (nameCounts.get(target.name) || 0) + 1);
    for (const relation of connections) {
      const target = relation.target;
      const n = AtlasRelations.targetSpecies(target, species);
      const item = el("li", "answer-relation relation-" + relation.type);
      const targetLine = el("div", "relation-target");
      const badge = el("span", "relation-badge relation-" + relation.type, AtlasRelations.types[relation.type].label);
      const label = target.name + (n !== species ? (n ? " · S" + n + " öffnen" : " · Alle öffnen") : "");
      const a = answerLink(label, topic, n, target, "relation-link");
      a.title = [target.work, target.locator].filter(Boolean).join(", ");
      a.setAttribute("aria-label", AtlasRelations.types[relation.type].label + " · " + label + ". " + target.locator);
      const note = el("p", "relation-note", relation.note);
      note.id = "vergleich-" + answer.id + "-" + target.id;
      a.setAttribute("aria-describedby", note.id);
      targetLine.append(badge, a);
      if (nameCounts.get(target.name) > 1) targetLine.append(el("small", "relation-locator", target.locator));
      item.append(targetLine, note);
      list.append(item);
    }
    nav.append(list);
    return nav;
  }

  function examplesSection(examples) {
    const section = el("section", "detail-section");
    const heading = el("h3", "", "Notenbeispiele");
    heading.id = "notenbeispiele";
    heading.tabIndex = -1;
    section.append(heading);
    for (const [id, name] of examples) {
      const example = scores[id];
      const bookLink = example.kind === "buchbeispiel";
      const exercise = example.kind === "leseuebung";
      const analysis = example.kind === "leseanalyse";
      const figure = el(bookLink ? "article" : "figure", "score-example");
      figure.id = "bild-" + id;
      figure.tabIndex = -1;
      if (!bookLink) {
        const enlarge = link("", example.image);
        enlarge.setAttribute("aria-label", example.title + " · Notenbild vergrößern");
        const img = el("img");
        img.src = example.image;
        img.alt = example.alt;
        img.loading = "lazy";
        enlarge.append(img);
        figure.append(enlarge);
      }
      const caption = el(bookLink ? "div" : "figcaption", "score-caption");
      const label = analysis ? "Lesehilfe zum Buchbeispiel" : exercise ? "Leseübung der Redaktion" : bookLink ? name + " · Beispiel im Buch" : name;
      const sourceLabel = example.catalogue ? "Bibliotheksnachweis zum Lehrwerk" :
        bookLink || analysis ? "Notenbeispiel im Buch öffnen (PDF)" :
        exercise ? "Regel im Buch öffnen (PDF)" : "Originalseite öffnen";
      caption.append(el("span", "eyebrow", label), el("h4", "", example.title),
        el("p", "", example.caption), el("small", "ref", example.credit),
        link(sourceLabel, example.url, "source-link"));
      figure.append(caption);
      section.append(figure);
    }
    return section;
  }

  function proposal(topic, idea = "") {
    const wrapper = el("details", "suggest");
    wrapper.append(el("summary", "", topic ? "Ergänzung oder Korrektur vorschlagen" : "Neue Frage vorschlagen"));
    const p = el("p", "", topic
      ? "Welche Stelle würdest du ergänzen? Nenne das Lehrwerk und die Seite oder das Notenbeispiel. Vorschläge werden redaktionell geprüft."
      : "Welche Frage fehlt? Ergänze, falls bekannt, ein Lehrwerk mit Fundstelle. Vorschläge werden redaktionell geprüft.");
    const label = el("label", "", "Vorschlag zum Kopieren oder Einreichen");
    label.htmlFor = topic ? "proposal-text" : "new-question-text";
    const draft = el("textarea");
    draft.id = label.htmlFor;
    draft.rows = 7;
    draft.value = (topic
      ? "Frage: " + topic.title + "\nKennung: " + topic.id +
        (species ? "\nSpezies: S" + species : "") + "\n\nVorschlag oder Korrektur:"
      : "Neue Frage: " + idea + "\n\nVergleich oder Übungssituation:") +
      "\n\nAutor/in, Werk, Ausgabe und Fundstelle:\n";
    const issue = link("Vorschlag auf GitHub öffnen", "", "source-link");
    const sync = () => {
      const title = topic ? "Ergänzung: " + topic.title : draft.value.split("\n", 1)[0].trim() || "Neue Frage";
      const params = new URLSearchParams({ title, body: draft.value });
      issue.href = "https://github.com/MUK-Labs/Kontrapunktatlas/issues/new?" + params;
    };
    sync();
    const copy = button("Vorschlag kopieren", "source-link", async event => {
      const control = event.currentTarget;
      try {
        await navigator.clipboard.writeText(draft.value);
        status.textContent = "Vorschlag in die Zwischenablage kopiert.";
        control.textContent = "Vorschlag kopiert";
      } catch {
        draft.focus();
        draft.select();
        status.textContent = "Der Text ist markiert. Jetzt mit dem Kopierbefehl deines Geräts kopieren.";
        control.textContent = "Text markiert · jetzt kopieren";
      }
    });
    draft.addEventListener("input", () => {
      sync();
      copy.textContent = "Vorschlag kopieren";
    });
    const actions = el("div", "entry-actions");
    actions.append(copy, issue);
    wrapper.append(p, label, draft, actions, el("p", "ref", "Ohne GitHub-Konto kannst du den Text kopieren und per E-Mail weitergeben."));
    return wrapper;
  }

  function share(topic) {
    const offline = location.protocol === "file:";
    const hashOnly = offline && allSources;
    const label = hashOnly ? "Sprungmarke" : focusedAnswerId ? "Antwortlink" : "Link";
    return button(label + " kopieren", "source-link", async event => {
      const control = event.currentTarget;
      const hash = fragment(topic, species, focusedAnswerId);
      const base = offline ? "https://muk-labs.github.io/Kontrapunktatlas/" : location.href;
      const value = hashOnly ? hash : AtlasSources.write(new URL(hash, base), sourceIds).href;
      try {
        await navigator.clipboard.writeText(value);
        status.textContent = hashOnly ? "Sprungmarke für den Atlas kopiert." : "Link zur aktuellen Ansicht kopiert.";
        control.textContent = label + " kopiert";
      } catch {
        window.prompt(hashOnly ? "Sprungmarke für den Atlas kopieren" : "Link zur aktuellen Ansicht kopieren", value);
      }
    });
  }

  function renderDetail() {
    const topic = selected;
    const authors = (topic.authors || []).filter(a => !species || a.speciesScope?.includes(species));
    const examples = new Map();
    for (const a of authors) {
      for (const id of a.examples || []) examples.set(id, a.name);
    }
    const head = el("header", "detail-header");
    const title = el("h2", "entry-title", topic.title);
    title.tabIndex = -1;
    const actions = el("div", "entry-actions");
    if (authors.length) actions.append(button("Quellenbelege (" + authors.length + ")", "", () =>
      document.getElementById("lehrwerke").focus()));
    if (examples.size) actions.append(button("Notenbeispiele (" + examples.size + ")", "", () =>
      document.getElementById("notenbeispiele").focus()));
    actions.append(share(topic));
    head.append(el("p", "entry-kicker", topic.group), title, actions);
    detail.replaceChildren(head);
    if (answerNotice) detail.append(answerMessage(topic));
    if (speciesTopics.has(topic.id)) detail.append(speciesPicker(topic, authors));
    if (topic.reading && !species) {
      const note = el("p", "reading");
      note.append(el("strong", "", "Beim Vergleichen · "), topic.reading);
      detail.append(note);
    }
    if (topic.species) detail.append(speciesSection(topic));
    if (topic.comparisons.length && !species) detail.append(comparisonSection(topic));
    if (authors.length) detail.append(authorsSection(authors, topic));
    if (examples.size) detail.append(examplesSection(examples));
    if (!topic.species && !topic.comparisons.length && !topic.authors?.length) {
      const empty = el("section", "empty-state");
      empty.append(el("h3", "", "Quellenbeleg gesucht"), el("p", "", "Diese Frage ist im Atlas noch offen. Ein Lehrbuchbeleg mit Ausgabe und Fundstelle kann den Vergleich ergänzen."));
      detail.append(empty);
    }
    const related = (topic.related || []).map(id => byId.get(id)).filter(Boolean);
    if (related.length) {
      const nav = el("nav", "cross-links");
      nav.setAttribute("aria-label", "Verwandte Fragen");
      nav.append(el("h3", "", "Verwandte Fragen"));
      for (const other of related) {
        const a = link(other.title, fragment(other, species), "source-link");
        a.addEventListener("click", event => {
          if (!event.button && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) nextFocus = "title";
        });
        nav.append(a);
      }
      detail.append(nav);
    }
    detail.append(proposal(topic));
    AtlasAuthors.linkify(detail);
    document.title = topic.title + " · " + pageTitle;
  }

  function renderUnavailable(requested) {
    const header = el("header", "detail-header");
    const title = el("h2", "entry-title", requested?.title || "Quellen für den Atlas wählen");
    title.tabIndex = -1;
    header.append(el("p", "entry-kicker", requested?.group || "Quellenauswahl"), title);
    const empty = el("section", "detail-section");
    empty.append(el("p", "", sourceIds.size
      ? "Zu dieser Frage gibt es in den ausgewählten Werken keinen Beitrag."
      : "Wähle mindestens eine Quelle, um Fragen und Notenbeispiele zu sehen."));
    const actions = el("div", "entry-actions");
    if (first) actions.append(link("Erste passende Frage öffnen", fragment(first, 0), "source-link"));
    actions.append(link("Quellenauswahl ändern", sourcesPage(requested), "source-link"));
    empty.append(actions);
    detail.replaceChildren(header, empty);
    if (answerNotice) detail.append(answerMessage(requested));
    AtlasAuthors.linkify(detail);
    document.title = title.textContent + " · " + pageTitle;
  }

  function answerMessage(topic) {
    const message = el("p", "answer-notice", answerNotice);
    if (answerExcluded) message.append(" ", link("Quellenauswahl ändern", sourcesPage(topic), "source-link"));
    return message;
  }

  function readRoute(initial = false) {
    const params = new URLSearchParams(location.hash.slice(1));
    if (!params.has("frage") && location.hash && !initial) {
      nextFocus = "";
      return;
    }
    const id = params.get("frage");
    const requested = allById.get(id);
    selected = requested ? byId.get(id) : first;
    const n = params.get("spezies") || "";
    species = speciesTopics.has((requested || selected)?.id) && /^[1-5]$/.test(n) ? Number(n) : 0;
    answerId = requested ? params.get("antwort") || "" : "";
    focusedAnswerId = "";
    answerNotice = "";
    answerExcluded = false;
    if (answerId && requested) {
      const answer = (requested.authors || []).find(a => a.id === answerId);
      if (!answer) answerNotice = "Die verlinkte Antwort ist zu dieser Frage nicht vorhanden.";
      else if (!sourceIds.has(answer.source)) {
        answerExcluded = true;
        answerNotice = "Die verlinkte Antwort von " + answer.name + " ist durch deine Quellenauswahl ausgeblendet.";
      } else {
        focusedAnswerId = answer.id;
        const targetSpecies = AtlasRelations.targetSpecies(answer, species);
        if (targetSpecies !== species) {
          answerNotice = "Die verlinkte Antwort ist unter S" + species + " nicht zugeordnet. Geöffnet wurde " +
            (targetSpecies ? "S" + targetSpecies : "die Ansicht „Alle“") + ".";
          species = targetSpecies;
        }
      }
    }
    if (id && !requested) {
      answerNotice = "Die angefragte Frage wurde nicht gefunden. Angezeigt wird " +
        (selected ? "„" + selected.title + "“." : "die Quellenauswahl.");
    }
    const target = sourcesPage(requested || selected);
    for (const a of document.querySelectorAll("[data-quellen]")) a.href = target;
    renderList();
    if (selected) renderDetail();
    else renderUnavailable(requested);
    if (focusedAnswerId) focusAnswer(focusedAnswerId);
    else if (nextFocus === "species") detail.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
    else if (!initial || nextFocus === "title") detail.querySelector("h2").focus();
    else if (requested) detail.scrollIntoView({block: "start"});
    status.textContent = id && !requested ? "Unbekannte Frage." : answerNotice;
    nextFocus = "";
  }

  search.addEventListener("input", renderList);
  group.addEventListener("change", renderList);
  perspective.addEventListener("change", renderList);
  illustrated.addEventListener("change", renderList);
  contrasted.addEventListener("change", renderList);
  const home = new URL("index.html", location.href);
  home.search = location.search;
  home.searchParams.delete("von");
  document.querySelector(".brand").href = AtlasSources.write(home, sourceIds).href;
  const differences = AtlasSources.write(new URL("unterschiede.html", location.href), sourceIds).href;
  for (const a of document.querySelectorAll("[data-unterschiede]")) a.href = differences;
  for (const a of document.querySelectorAll(".case-links a")) {
    const id = new URLSearchParams(a.getAttribute("href").slice(1)).get("frage");
    if (!byId.has(id)) {
      a.hidden = true;
      continue;
    }
    a.addEventListener("click", event => {
      if (event.button || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      if (a.dataset.group || group.value) {
        group.value = a.dataset.group || "";
        search.value = "";
        perspective.value = "";
        illustrated.checked = false;
        contrasted.checked = false;
        renderList();
      }
      if (a.hash === location.hash) detail.querySelector("h2").focus();
      else nextFocus = "title";
    });
  }
  window.addEventListener("hashchange", () => readRoute());
  readRoute(true);
  AtlasAuthors.linkify(document.body);
})();
