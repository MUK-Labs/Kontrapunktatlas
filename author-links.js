/* Shared author biographies; classic scripts keep the downloaded atlas usable offline. */
const AtlasAuthors = (() => {
  "use strict";
  const aliases = new Map();
  for (const person of ATLAS.people) {
    for (const name of [person.name, ...(person.aliases || [])]) aliases.set(name, person);
    for (const name of person.exclude || []) aliases.set(name, null);
  }
  const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const names = [...aliases.keys()].sort((a, b) => b.length - a.length).map(escape).join("|");
  // Full names take precedence over surnames. Keep German and English possessives intact.
  const pattern = new RegExp("(^|[^\\p{L}\\p{M}\\p{N}_])(" + names +
    ")((?:[’']s|s|[’'])?)(?=$|[^\\p{L}\\p{M}\\p{N}_])", "gu");
  const skip = "a, button, select, option, textarea, input, label, code, pre, script, style, " +
    "noscript, svg, math, [contenteditable]:not([contenteditable='false']), [data-no-author-links]";

  function mentions(text) {
    const result = [];
    for (const match of text.matchAll(pattern)) {
      const person = aliases.get(match[2]);
      if (!person?.wikipedia) continue;
      result.push({ start: match.index + match[1].length,
        text: match[2] + match[3], person });
    }
    return result;
  }

  function linkify(root) {
    const doc = root.ownerDocument;
    const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: node => node.parentElement?.closest(skip)
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const matches = mentions(node.data);
      if (!matches.length) continue;
      const fragment = doc.createDocumentFragment();
      let end = 0;
      for (const match of matches) {
        fragment.append(doc.createTextNode(node.data.slice(end, match.start)));
        const a = doc.createElement("a");
        a.className = "author-link";
        a.textContent = match.text;
        a.href = match.person.wikipedia;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.title = match.person.name + " auf Wikipedia (neuer Tab)";
        a.setAttribute("aria-label", match.text + " – Wikipedia (neuer Tab)");
        fragment.append(a);
        end = match.start + match.text.length;
      }
      fragment.append(doc.createTextNode(node.data.slice(end)));
      node.replaceWith(fragment);
    }
  }

  return Object.freeze({ mentions, linkify });
})();
