/* Classic scripts also work when the atlas is opened directly from disk. */
(() => {
  "use strict";
  const { topics, examples: scores } = ATLAS;
  const byId = new Map(topics.map(topic => [topic.id, topic]));
  const first = byId.get("sprungfolge") || topics[0];
  const search = document.querySelector("#search");
  const group = document.querySelector("#group");
  const perspective = document.querySelector("#perspective");
  const illustrated = document.querySelector("#illustrated");
  const list = document.querySelector("#question-list");
  const count = document.querySelector("#result-count");
  const detail = document.querySelector("#detail");
  const status = document.querySelector("#status");
  const handout = document.querySelector(".pdf-link").href;
  let selected = first;
  let species = 0;
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

  function fragment(topic, n) {
    const params = new URLSearchParams({ frage: topic.id });
    if (topic.species && n) params.set("spezies", String(n));
    return "#" + params;
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
      fields.push(a.name, a.work, a.text, a.locator);
      for (const id of a.examples || []) fields.push(scores[id].title, scores[id].caption);
    }
    return normalize(fields.filter(Boolean).join(" "));
  }

  const searchIndex = new Map(topics.map(topic => [topic.id, searchable(topic)]));
  group.replaceChildren(new Option("Alle Themenbereiche", ""));
  for (const name of [...new Set(topics.map(t => t.group))].sort((a,b) => a.localeCompare(b, "de"))) {
    group.add(new Option(name, name));
  }
  perspective.replaceChildren(new Option("Alle Quellen und Modelle", ""));
  perspective.add(new Option("Artacho · Speziestabellen", "species"));
  perspective.add(new Option("Hindemith · nach Artacho", "comparisons"));
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
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    const matches = topics.filter(topic =>
      (!group.value || topic.group === group.value) &&
      matchesPerspective(topic) &&
      (!illustrated.checked || topic.authors?.some(a => a.examples?.length &&
        (!perspective.value.startsWith("author:") || perspective.value === "author:" + a.name))) &&
      terms.every(term => searchIndex.get(topic.id).includes(term))
    );
    count.textContent = matches.length + (matches.length === 1 ? " Frage" : " Fragen") +
      (matches.length !== topics.length ? " von " + topics.length : "");
    list.replaceChildren();
    for (const topic of matches) {
      const a = link(topic.title, fragment(topic, species), "question-item");
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
    if (!matches.length) {
      list.append(el("p", "empty-state", "Keine passende Frage gefunden."));
      list.append(button("Filter zurücksetzen", "source-link", () => {
        search.value = "";
        group.value = "";
        perspective.value = "";
        illustrated.checked = false;
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

  function speciesSection(topic) {
    const section = el("section", "detail-section");
    section.append(scopeHeading("Speziesvergleich", [sourceLink(6), sourceLink(8)]));
    section.append(el("p", "ref", "Tabellenzeile „" + topic.species.label + "“"));
    const controls = el("div", "species-controls");
    controls.setAttribute("role", "group");
    controls.setAttribute("aria-label", "Spezies auswählen");
    for (let n = 0; n <= 5; n++) {
      const b = button(n ? "S" + n : "Alle", "species-btn", () => {
        if (n !== species) {
          nextFocus = "species";
          location.hash = fragment(topic, n);
        }
      });
      b.setAttribute("aria-label", n ? "Spezies " + n : "Alle fünf Spezies");
      b.setAttribute("aria-pressed", String(n === species));
      b.classList.toggle("is-active", n === species);
      controls.append(b);
    }
    section.append(controls);
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

  function authorsSection(authors) {
    const section = el("section", "detail-section");
    const heading = el("h3", "", authors.some(a => a.kind === "partitur")
      ? "Lehrwerke, Analysen und Partitur" : "Aus den Lehrwerken");
    heading.id = "lehrwerke";
    heading.tabIndex = -1;
    section.append(heading);
    const entries = authors.length > 1 ? el("div", "tradition-grid authors-grid") : section;
    for (const a of authors) {
      const card = el("div", "tradition-card");
      if (a.kind === "partitur") card.append(el("span", "eyebrow", "Partiturbeobachtung"));
      card.append(el("h4", "", a.name), el("p", "", a.text));
      const citation = [a.work, a.locator].filter(Boolean).join(", ");
      card.append(a.url && /^https?:\/\//i.test(a.url)
        ? link(citation || "Quelle öffnen", a.url, "source-link")
        : el("small", "ref", citation));
      if (a.examples?.length) {
        card.append(button("Zum Notenbild", "score-jump", () =>
          document.getElementById("bild-" + a.examples[0]).focus()));
      }
      entries.append(card);
    }
    if (entries !== section) section.append(entries);
    return section;
  }

  function examplesSection(examples) {
    const section = el("section", "detail-section");
    const heading = el("h3", "", "Notenbeispiele aus den Quellen");
    heading.id = "notenbeispiele";
    heading.tabIndex = -1;
    section.append(heading);
    for (const { name, id } of examples) {
      const example = scores[id];
      const figure = el("figure", "score-example");
      figure.id = "bild-" + id;
      figure.tabIndex = -1;
      const enlarge = link("", example.image);
      enlarge.setAttribute("aria-label", example.title + " · Notenbild vergrößern");
      const img = el("img");
      img.src = example.image;
      img.alt = example.alt;
      img.loading = "lazy";
      enlarge.append(img);
      const caption = el("figcaption");
      caption.append(el("span", "eyebrow", name), el("h4", "", example.title),
        el("p", "", example.caption), el("small", "ref", example.credit),
        link("Originalseite öffnen", example.url, "source-link"));
      figure.append(enlarge, caption);
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
        (topic.species && species ? "\nSpezies: S" + species : "") + "\n\nVorschlag oder Korrektur:"
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
    return button(offline ? "Sprungmarke kopieren" : "Link kopieren", "source-link", async event => {
      const control = event.currentTarget;
      const hash = fragment(topic, species);
      const value = offline ? hash : new URL(hash, location.href).href;
      try {
        await navigator.clipboard.writeText(value);
        status.textContent = offline ? "Sprungmarke für den Atlas kopiert." : "Link zur aktuellen Ansicht kopiert.";
        control.textContent = offline ? "Sprungmarke kopiert" : "Link kopiert";
      } catch {
        window.prompt(offline ? "Sprungmarke für den Atlas kopieren" : "Link zur aktuellen Ansicht kopieren", value);
      }
    });
  }

  function renderDetail() {
    const topic = selected;
    const examples = (topic.authors || []).flatMap(a =>
      (a.examples || []).map(id => ({ name: a.name, id })));
    const head = el("header", "detail-header");
    const title = el("h2", "entry-title", topic.title);
    title.tabIndex = -1;
    const actions = el("div", "entry-actions");
    if (topic.authors?.length) actions.append(button("Quellenbelege (" + topic.authors.length + ")", "", () =>
      document.getElementById("lehrwerke").focus()));
    if (examples.length) actions.append(button("Notenbeispiele (" + examples.length + ")", "", () =>
      document.getElementById("notenbeispiele").focus()));
    actions.append(share(topic));
    head.append(el("p", "entry-kicker", topic.group), title, actions);
    detail.replaceChildren(head);
    if (topic.reading) {
      const note = el("p", "reading");
      note.append(el("strong", "", "Beim Vergleichen · "), topic.reading);
      detail.append(note);
    }
    if (topic.species) detail.append(speciesSection(topic));
    if (topic.comparisons.length) detail.append(comparisonSection(topic));
    if (topic.authors?.length) detail.append(authorsSection(topic.authors));
    if (examples.length) detail.append(examplesSection(examples));
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
    document.title = topic.title + " · " + pageTitle;
  }

  function readRoute(initial = false) {
    const params = new URLSearchParams(location.hash.slice(1));
    if (!params.has("frage") && location.hash && !initial) {
      nextFocus = "";
      return;
    }
    const id = params.get("frage");
    const known = byId.get(id);
    selected = known || first;
    const n = params.get("spezies") || "";
    species = selected.species && /^[1-5]$/.test(n) ? Number(n) : 0;
    renderList();
    renderDetail();
    if (nextFocus === "title") detail.querySelector("h2").focus();
    if (initial && known) detail.scrollIntoView({block: "start"});
    if (nextFocus === "species") detail.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
    status.textContent = id && !known ? "Unbekannte Frage. Der erste Eintrag wird angezeigt." : "";
    nextFocus = "";
  }

  search.addEventListener("input", renderList);
  group.addEventListener("change", renderList);
  perspective.addEventListener("change", renderList);
  illustrated.addEventListener("change", renderList);
  for (const a of document.querySelectorAll(".case-links a")) {
    a.addEventListener("click", event => {
      if (event.button || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      if (a.dataset.group || group.value) {
        group.value = a.dataset.group || "";
        search.value = "";
        perspective.value = "";
        illustrated.checked = false;
        renderList();
      }
      if (a.hash === location.hash) detail.querySelector("h2").focus();
      else nextFocus = "title";
    });
  }
  window.addEventListener("hashchange", () => readRoute());
  readRoute(true);
})();
