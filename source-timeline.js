/* Publication dates, never dates inferred from a title, author, or source ID. */
const AtlasSourceTimeline = (() => {
  "use strict";
  const targetSize = 32;
  const edge = 26;
  const minimumWidth = 960;

  function layout(sources, availableWidth) {
    const width = Math.max(128,
      Number.isFinite(availableWidth) ? Math.round(availableWidth) : minimumWidth);
    const ordered = AtlasSourceOrder.sections(sources, "jahr");
    const dated = ordered.find(section => section.key === "jahr")?.sources || [];
    const undated = ordered.find(section => section.key === "undatiert")?.sources || [];
    if (!dated.length) return { width, height: 0, points: [], ticks: [], undated, range: null, targetSize };

    const first = AtlasSourceOrder.yearOf(dated[0]);
    const last = AtlasSourceOrder.yearOf(dated.at(-1));
    const xFor = year => first === last ? width / 2 :
      edge + (year - first) / (last - first) * (width - edge * 2);
    const laneEnds = [];
    const points = dated.map(source => {
      const year = AtlasSourceOrder.yearOf(source);
      const x = xFor(year);
      let lane = laneEnds.findIndex(end => x - end >= targetSize + 2);
      if (lane < 0) lane = laneEnds.length;
      laneEnds[lane] = x;
      return { source, year, x, lane };
    });
    const axisY = laneEnds.length * targetSize + 12;
    for (const point of points) point.y = axisY - 24 - point.lane * targetSize;

    const years = [first];
    if (first !== last) {
      const rawStep = (last - first) / Math.max(2, (width - edge * 2) / 110);
      const magnitude = 10 ** Math.floor(Math.log10(rawStep));
      const step = Math.max(1, [1, 2, 5, 10].find(value => value * magnitude >= rawStep) * magnitude);
      for (let year = Math.ceil(first / step) * step; year < last; year += step) {
        if (Number.isInteger(year) && xFor(year) - xFor(years.at(-1)) >= 64 && xFor(last) - xFor(year) >= 64) {
          years.push(year);
        }
      }
      years.push(last);
    }
    const ticks = years.map(year => ({ year, x: xFor(year) }));
    return { width, height: axisY + 30, axisY, points, ticks, undated, range: [first, last], targetSize };
  }

  function mount(container, sources, onNavigate) {
    const doc = container.ownerDocument;
    const view = doc.defaultView;
    const element = (tag, className, text) => {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    };
    const heading = element("h2", "", "Quellen im Zeitverlauf");
    heading.id = "source-timeline-heading";
    const summary = element("p", "source-timeline-summary");
    const head = element("div", "source-timeline-head");
    head.append(heading, summary);
    const hint = element("p", "bibliography-hint",
      "Ein Punkt pro Quelle, nach dem Jahr der verwendeten Ausgabe. Wähle einen Punkt, um zum Eintrag zu springen.");
    hint.id = "source-timeline-hint";
    const viewport = element("div", "source-timeline-viewport");
    const plot = element("div", "source-timeline-plot");
    const axis = element("div", "source-timeline-axis");
    axis.setAttribute("aria-hidden", "true");
    const points = element("ol", "source-timeline-points");
    points.setAttribute("aria-label", "Quellen nach Erscheinungsjahr");
    points.setAttribute("aria-describedby", hint.id);
    plot.append(axis, points);
    viewport.append(plot);
    const scrollHint = element("p", "source-timeline-scroll-hint", "↔ Seitlich scrollen; ältere Quellen liegen links.");
    scrollHint.hidden = true;
    const tooltip = element("div", "source-timeline-tooltip");
    tooltip.id = "source-timeline-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.hidden = true;
    container.replaceChildren(head, hint, viewport, scrollHint, tooltip);
    container.hidden = false;

    const initial = layout(sources, minimumWidth);
    const buttons = new Map();
    const pointItems = new Map();
    let tooltipButton = null;
    let hideTimer;
    let currentButton = null;
    let drawnWidth;
    let firstLayout = true;
    let undatedDetails;

    function hideTooltip() {
      view.clearTimeout(hideTimer);
      tooltip.hidden = true;
      if (tooltipButton) tooltipButton.removeAttribute("aria-describedby");
      tooltipButton = null;
    }

    function positionTooltip() {
      if (!tooltipButton || tooltip.hidden) return;
      const anchor = tooltipButton.getBoundingClientRect();
      const bounds = tooltip.getBoundingClientRect();
      const viewportBounds = viewport.getBoundingClientRect();
      if (anchor.right <= viewportBounds.left || anchor.left >= viewportBounds.right ||
          anchor.bottom <= 0 || anchor.top >= view.innerHeight) {
        hideTooltip();
        return;
      }
      tooltip.style.left = Math.max(12, Math.min(anchor.left + anchor.width / 2 - bounds.width / 2,
        view.innerWidth - bounds.width - 12)) + "px";
      const above = anchor.top - bounds.height - 8;
      tooltip.style.top = Math.max(8, above >= 8 ? above :
        Math.min(anchor.bottom + 8, view.innerHeight - bounds.height - 8)) + "px";
    }

    function showTooltip(button, source) {
      hideTooltip();
      tooltipButton = button;
      tooltip.replaceChildren(
        element("strong", "", source.name + " · " + AtlasSourceOrder.yearLabel(source)),
        element("span", "", source.title)
      );
      button.setAttribute("aria-describedby", tooltip.id);
      tooltip.hidden = false;
      positionTooltip();
    }

    function deferHide(button) {
      view.clearTimeout(hideTimer);
      hideTimer = view.setTimeout(() => {
        if (doc.activeElement !== button && !tooltip.matches(":hover") && !button.matches(":hover")) hideTooltip();
      }, 120);
    }

    function activate(button, source) {
      hideTooltip();
      if (currentButton) currentButton.removeAttribute("aria-current");
      currentButton = button;
      button.setAttribute("aria-current", "location");
      onNavigate(source.id);
    }

    function sourceButton(source, dated) {
      const button = element("button", dated ? "source-timeline-point" : "source-timeline-undated-button");
      button.type = "button";
      button.dataset.source = source.id;
      button.setAttribute("aria-controls", "source-card-" + source.id);
      button.setAttribute("aria-label", source.name + " · " + AtlasSourceOrder.yearLabel(source) +
        " · " + source.title + " – zum Quelleintrag");
      if (dated) {
        const dot = element("span", "source-timeline-dot");
        dot.setAttribute("aria-hidden", "true");
        button.append(dot);
        button.addEventListener("pointerenter", event => {
          if (event.pointerType !== "touch") showTooltip(button, source);
        });
        button.addEventListener("pointerleave", () => deferHide(button));
        button.addEventListener("focus", () => showTooltip(button, source));
        button.addEventListener("blur", () => deferHide(button));
      } else {
        button.append(element("strong", "", source.name), element("span", "", source.title));
      }
      button.addEventListener("click", () => activate(button, source));
      buttons.set(source.id, button);
      return button;
    }

    for (const point of initial.points) {
      const item = element("li", "source-timeline-item");
      item.append(sourceButton(point.source, true));
      pointItems.set(point.source.id, item);
      points.append(item);
    }
    if (initial.undated.length) {
      undatedDetails = element("details", "source-timeline-undated");
      const label = initial.undated.length === 1 ? "1 Quelle ohne belegtes Jahr" :
        initial.undated.length + " Quellen ohne belegtes Jahr";
      const undatedList = element("ul", "source-timeline-undated-list");
      for (const source of initial.undated) {
        const item = element("li");
        item.append(sourceButton(source, false));
        undatedList.append(item);
      }
      undatedDetails.append(element("summary", "", label), undatedList);
      container.append(undatedDetails);
    }
    viewport.hidden = !initial.points.length;
    summary.textContent = initial.range
      ? (initial.range[0] === initial.range[1] ? initial.range[0] : initial.range.join("–")) +
        " · " + initial.points.length + (initial.points.length === 1 ? " datierte Quelle" : " datierte Quellen")
      : "Keine Quellen mit belegtem Erscheinungsjahr";

    function reflow() {
      if (!initial.points.length) return;
      const width = Math.max(minimumWidth, Math.floor(viewport.clientWidth));
      scrollHint.hidden = viewport.clientWidth >= width;
      if (drawnWidth !== width) {
        drawnWidth = width;
        const geometry = layout(sources, width);
        plot.style.width = geometry.width + "px";
        plot.style.height = geometry.height + "px";
        axis.style.top = geometry.axisY + "px";
        axis.replaceChildren();
        for (const tick of geometry.ticks) {
          const label = element("span", "source-timeline-tick", String(tick.year));
          label.style.left = tick.x + "px";
          axis.append(label);
        }
        for (const point of geometry.points) {
          const item = pointItems.get(point.source.id);
          item.style.left = point.x + "px";
          item.style.top = point.y + "px";
        }
      }
      if (firstLayout) {
        firstLayout = false;
        // Show the populated end on phones, then leave scrolling to the reader.
        if (view.innerWidth < 660) viewport.scrollLeft = viewport.scrollWidth - viewport.clientWidth;
      }
      positionTooltip();
    }
    tooltip.addEventListener("pointerenter", () => view.clearTimeout(hideTimer));
    tooltip.addEventListener("pointerleave", () => {
      if (tooltipButton) deferHide(tooltipButton);
    });
    doc.addEventListener("keydown", event => {
      if (event.key === "Escape" && !tooltip.hidden) {
        hideTooltip();
        event.preventDefault();
      }
    });
    doc.addEventListener("pointerdown", event => {
      if (tooltipButton && !tooltipButton.contains(event.target) && !tooltip.contains(event.target)) hideTooltip();
    });
    view.addEventListener("scroll", positionTooltip, true);
    view.addEventListener("resize", reflow);
    if (view.ResizeObserver) new view.ResizeObserver(reflow).observe(viewport);
    reflow();

    return Object.freeze({
      focusSource(id) {
        const button = buttons.get(id);
        if (!button) return;
        if (button.classList.contains("source-timeline-undated-button")) undatedDetails.open = true;
        button.focus({ preventScroll: true });
        button.scrollIntoView({ block: "center", inline: "center" });
        if (pointItems.has(id)) showTooltip(button, sources.find(source => source.id === id));
      }
    });
  }

  return Object.freeze({ layout, mount });
})();
