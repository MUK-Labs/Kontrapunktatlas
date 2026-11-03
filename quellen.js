(() => {
  "use strict";
  const list = document.getElementById("source-list");
  const count = document.getElementById("source-count");
  const links = document.querySelectorAll(".atlas-return");
  const checkboxes = [];
  const groups = new Map();
  const sources = ATLAS.sources;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  for (const source of sources) {
    if (!groups.has(source.group)) {
      const section = element("fieldset", "bibliography-group");
      const works = element("ul", "bibliography-works");
      section.append(element("legend", "", source.group));
      if (source.group === "Unterrichtshandout") {
        section.append(element("p", "bibliography-hint", "Auf den gedruckten Seiten 6 und 8 vergleicht Artacho die fünf Spezies im modalen und tonalen Satz. Seite 9 stellt seine Lesart von Hindemiths zweistimmigem Kontrapunkt daneben."));
      }
      section.append(works);
      list.append(section);
      groups.set(source.group, works);
    }

    const item = element("li", "bibliography-work");
    const label = element("label", "bibliography-label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "source-" + source.id;
    checkbox.value = source.id;
    checkboxes.push(checkbox);
    const citation = element("span", "bibliography-citation");
    const title = element("span", AtlasSources.isBook(source.id) ? "book-title" : "", source.title);
    citation.append(element("strong", "", source.name), title);
    label.append(checkbox, citation);
    const meta = element("div", "bibliography-meta");
    meta.append(element("code", "", source.id));
    if (source.url) {
      const link = element("a", "", "Zum Nachweis");
      link.href = source.url;
      link.setAttribute("aria-label", "Nachweis zu " + source.name + ", " + source.title);
      meta.append(link);
    }
    item.append(label, meta);
    groups.get(source.group).append(item);
  }

  function render(selected, url) {
    for (const checkbox of checkboxes) checkbox.checked = selected.has(checkbox.value);
    count.textContent = selected.size + " von " + sources.length + " Quellen ausgewählt";
    const target = new URL("index.html", url);
    target.search = url.search;
    target.hash = url.hash;
    for (const link of links) link.href = target.href;
  }

  function update(selected) {
    const url = AtlasSources.write(new URL(location.href), selected);
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
  restore();
})();
