(() => {
  "use strict";
  const list = document.getElementById("source-list");
  const count = document.getElementById("source-count");
  const atlasLinks = document.querySelectorAll(".atlas-return:not([data-selection-return])");
  const selectionLinks = document.querySelectorAll("[data-selection-return]");
  const differencesLinks = document.querySelectorAll("[data-unterschiede]");
  const returnHint = document.getElementById("source-return-hint");
  const atlasHint = returnHint.textContent;
  const checkboxes = [];
  const items = new Map();
  const sources = ATLAS.sources;
  const order = document.getElementById("source-order");
  const orderHint = document.getElementById("source-order-hint");
  const handoutHint = "Auf den gedruckten Seiten 6 und 8 vergleicht Artacho die fünf Spezies im modalen und tonalen Satz. Seite 9 stellt seine Lesart von Hindemiths zweistimmigem Kontrapunkt daneben.";
  let displayedOrder;
  let locatedSource;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  for (const source of sources) {
    const item = element("li", "bibliography-work");
    const row = element("div", "bibliography-label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "source-" + source.id;
    checkbox.value = source.id;
    checkboxes.push(checkbox);
    const citation = element("span", "bibliography-citation");
    const author = element("strong", "", source.name);
    author.id = checkbox.id + "-author";
    const title = element("span", AtlasSources.isBook(source.id) ? "book-title" : "", source.title);
    title.id = checkbox.id + "-title";
    item.id = "source-card-" + source.id;
    item.tabIndex = -1;
    item.setAttribute("aria-labelledby", author.id + " " + title.id);
    checkbox.setAttribute("aria-labelledby", author.id + " " + title.id);
    citation.append(author, title);
    // Keep the citation selectable without putting biography links inside a label.
    citation.addEventListener("click", event => {
      if (event.defaultPrevented || event.target.closest("a, button, input")) return;
      checkbox.click();
    });
    row.append(checkbox, citation);
    const meta = element("div", "bibliography-meta");
    meta.append(element("code", "", source.id));
    const kind = element("span", "bibliography-kind", source.group);
    const year = element("span", "bibliography-year", AtlasSourceOrder.yearLabel(source));
    year.id = checkbox.id + "-year";
    item.setAttribute("aria-describedby", year.id);
    meta.append(kind, year);
    if (source.url) {
      const link = element("a", "", "Zum Nachweis");
      link.href = source.url;
      link.setAttribute("aria-label", "Nachweis zu " + source.name + ", " + source.title);
      meta.append(link);
    }
    item.append(row, meta);
    const dateNote = source.publicationNote ? element("p", "bibliography-note", source.publicationNote) : null;
    if (dateNote) item.append(dateNote);
    const handoutNote = source.id === "artacho-handout" ? element("p", "bibliography-note", handoutHint) : null;
    if (handoutNote) item.append(handoutNote);
    const timelineBack = element("button", "bibliography-timeline-back", "Zur Zeitleiste ↓");
    timelineBack.type = "button";
    timelineBack.hidden = true;
    timelineBack.addEventListener("click", () => timeline.focusSource(source.id));
    item.append(timelineBack);
    items.set(source.id, { item, checkbox, kind, year, dateNote, handoutNote, timelineBack });
  }

  function arrange(mode) {
    order.value = mode;
    if (displayedOrder === mode) return;
    displayedOrder = mode;
    orderHint.textContent = mode === "autor"
      ? "Nach dem Nachnamen der zuerst genannten Person. Gemeinsam verfasste Werke bleiben zusammen."
      : mode === "jahr"
        ? "Erscheinungsjahr der verwendeten Ausgabe, älteste zuerst. Quellen ohne belegtes Jahr stehen am Ende."
        : "Nach Quellenart gruppiert. Die Auswahl bleibt beim Umsortieren erhalten.";
    const active = list.contains(document.activeElement) ? document.activeElement : null;
    list.replaceChildren();
    for (const group of AtlasSourceOrder.sections(sources, mode)) {
      const section = element("fieldset", "bibliography-group");
      const works = element("ul", "bibliography-works");
      section.append(element("legend", "", group.label));
      if (mode === "typ" && group.key === "Unterrichtshandout") {
        section.append(element("p", "bibliography-hint", handoutHint));
      }
      for (const source of group.sources) {
        const entry = items.get(source.id);
        entry.kind.hidden = mode === "typ";
        entry.year.hidden = mode !== "jahr" && source.id !== locatedSource;
        if (entry.dateNote) entry.dateNote.hidden = mode !== "jahr" && source.id !== locatedSource;
        if (entry.handoutNote) entry.handoutNote.hidden = mode === "typ";
        works.append(entry.item);
      }
      section.append(works);
      list.append(section);
    }
    AtlasAuthors.linkify(list);
    if (active?.isConnected) active.focus({ preventScroll: true });
  }

  function markLocatedSource(id) {
    const previous = items.get(locatedSource);
    if (!id && previous?.timelineBack === document.activeElement) {
      previous.checkbox.focus({ preventScroll: true });
      previous.checkbox.scrollIntoView({ block: "nearest" });
    }
    locatedSource = id;
    for (const [sourceId, entry] of items) {
      const active = sourceId === id;
      entry.item.classList.toggle("is-located-source", active);
      entry.timelineBack.hidden = !active;
      entry.year.hidden = displayedOrder !== "jahr" && !active;
      if (entry.dateNote) entry.dateNote.hidden = displayedOrder !== "jahr" && !active;
    }
  }

  function locateSource(id) {
    const target = items.get(id);
    if (!target) return;
    markLocatedSource(id);
    // A local jump must not replace the hash that restores a question or comparison.
    target.item.focus({ preventScroll: true });
    target.item.scrollIntoView({ block: "center" });
  }

  function render(selected, url) {
    arrange(AtlasSourceOrder.read(url));
    for (const checkbox of checkboxes) checkbox.checked = selected.has(checkbox.value);
    if (locatedSource && !selected.has(locatedSource)) markLocatedSource(null);
    timeline.update(sources.filter(source => selected.has(source.id)));
    count.textContent = selected.size + " von " + sources.length + " Quellen ausgewählt";
    const fromDifferences = url.searchParams.get("von") === "unterschiede";
    const atlas = new URL("index.html", url);
    atlas.search = url.search;
    atlas.searchParams.delete("von");
    atlas.searchParams.delete("sortierung");
    atlas.hash = fromDifferences ? "" : url.hash;
    for (const link of atlasLinks) link.href = atlas.href;

    // Ordinary page navigation opens the overview; the selection CTAs restore its state.
    const differences = AtlasSources.write(new URL("unterschiede.html", url), selected);
    for (const link of differencesLinks) link.href = differences.href;

    const target = new URL(fromDifferences ? "unterschiede.html" : "index.html", url);
    target.search = url.search;
    target.searchParams.delete("von");
    target.searchParams.delete("sortierung");
    target.hash = url.hash;
    const label = fromDifferences ? "Mit dieser Auswahl zu den Unterschieden" : "Mit dieser Auswahl zum Atlas";
    for (const link of selectionLinks) {
      link.href = target.href;
      const arrow = element("span", "", "→");
      arrow.setAttribute("aria-hidden", "true");
      link.replaceChildren(document.createTextNode(label + " "), arrow);
    }
    returnHint.textContent = fromDifferences
      ? "Ein Vergleich erscheint, wenn beide beteiligten Werke ausgewählt sind. Beim Zurückkehren bleiben deine Filter und der gewählte Vergleich in der Adresse erhalten."
      : atlasHint;
  }

  function update(selected, mode = AtlasSourceOrder.read(location.href)) {
    const url = AtlasSourceOrder.write(AtlasSources.write(new URL(location.href), selected), mode);
    if (url.href !== location.href) {
      try {
        history.replaceState(history.state, "", url.href);
      } catch (error) {
        if (error.name !== "SecurityError" || url.protocol !== "file:") throw error;
        location.replace(url.href);
        return;
      }
    }
    render(selected, url);
  }

  function restore() {
    const url = new URL(location.href);
    const selected = AtlasSources.read(url);
    render(selected, AtlasSources.write(url, selected));
  }

  list.addEventListener("change", event => {
    if (event.target.type === "checkbox") {
      update(new Set(checkboxes.filter(box => box.checked).map(box => box.value)));
    }
  });
  order.addEventListener("change", () => update(new Set(checkboxes.filter(box => box.checked).map(box => box.value)), order.value));
  document.getElementById("source-all").addEventListener("click", () => update(new Set(sources.map(s => s.id))));
  document.getElementById("source-none").addEventListener("click", () => update(new Set()));
  document.getElementById("skip-sources").addEventListener("click", event => {
    event.preventDefault();
    list.focus();
    list.scrollIntoView();
  });
  window.addEventListener("popstate", restore);
  window.addEventListener("pageshow", restore);
  window.addEventListener("hashchange", restore);
  const timeline = AtlasSourceTimeline.mount(document.getElementById("source-timeline"), [], locateSource);
  restore();
})();
