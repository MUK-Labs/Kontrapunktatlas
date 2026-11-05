const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
// jsdom is a development-only dependency; an external install can use NODE_PATH.
let jsdomPath;
try { jsdomPath = require.resolve('jsdom'); }
catch (error) { if (error.code !== 'MODULE_NOT_FOUND') throw error; }
const JSDOM = jsdomPath ? require(jsdomPath).JSDOM : null;
const root = path.resolve(__dirname, '..');
const base = 'https://example.org/Kontrapunktatlas/quellen.html';

function page(url = base, extraSource) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, 'quellen.html'), 'utf8'), {
    url, runScripts: 'outside-only', pretendToBeVisual: true
  });
  const scrolls = [];
  dom.window.HTMLElement.prototype.scrollIntoView = function (options) { scrolls.push({ id: this.id, source: this.dataset.source, options }); };
  for (const file of ['atlas-data.js', 'author-links.js', 'source-selection.js', 'source-order.js', 'source-timeline.js', 'quellen.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), dom.getInternalVMContext(), { filename: file });
    if (file === 'atlas-data.js' && extraSource) {
      vm.runInContext('ATLAS.sources.push(' + JSON.stringify(extraSource) + ')', dom.getInternalVMContext());
    }
  }
  return { dom, window: dom.window, doc: dom.window.document, scrolls };
}
const ids = nodes => [...nodes].map(node => node.dataset.source).sort();
const controls = doc => ids(doc.querySelectorAll('#source-timeline button[data-source]'));
const selected = doc => [...doc.querySelectorAll('#source-list input:checked')].map(input => input.value).sort();
const snapshot = ({ window, doc }) => ({
  href: window.location.href, selected: selected(doc),
  cards: [...doc.querySelectorAll('.bibliography-work')].map(node => node.id),
  returns: [...doc.querySelectorAll('.atlas-return')].map(node => node.href)
});
function restore(state, query, event = 'popstate') {
  state.window.history.pushState({}, '', base + query);
  state.window.dispatchEvent(new state.window.Event(event));
}
function check(name, url, action, extraSource) {
  test(name, { skip: !JSDOM && 'jsdom is needed for DOM regression tests (development only)' }, () => {
    const state = page(url, extraSource);
    try { action(state); } finally { state.dom.window.close(); }
  });
}

check('timeline follows the full list and bottom return link, before the footer', base, ({ doc }) => {
  const timeline = doc.getElementById('source-timeline');
  assert.equal(timeline.previousElementSibling.matches('[data-selection-return]'), true);
  assert.ok(doc.getElementById('source-list').compareDocumentPosition(timeline) & 4);
  assert.ok(timeline.compareDocumentPosition(doc.querySelector('footer')) & 4);
  assert.deepEqual(controls(doc), selected(doc));
  assert.equal(timeline.hidden, false);
  for (const button of timeline.querySelectorAll('button[data-source]')) {
    assert.equal(button.type, 'button');
    assert.ok(doc.getElementById(button.getAttribute('aria-controls')));
  }
});

check('initial URL selection filters dated and undated controls and recalculates the range',
  base + '?quellen=prout1890,york1907,spalding1904&sortierung=autor#frage=grundrahmen', ({ doc }) => {
    assert.deepEqual(controls(doc), ['prout1890', 'spalding1904', 'york1907']);
    assert.deepEqual([...doc.querySelectorAll('.source-timeline-point')].map(node => node.dataset.source), ['spalding1904', 'york1907']);
    assert.match(doc.querySelector('.source-timeline-summary').textContent, /1904–1907.*2 datierte Quellen/);
    assert.equal(doc.querySelector('.source-timeline-undated').hidden, false);
    assert.equal(doc.querySelector('.source-timeline-undated summary').textContent, '1 Quelle ohne belegtes Jahr');
    assert.match(doc.querySelector('[data-source="york1907"]').getAttribute('aria-label'), /1907 \(Copyright\)/);
    assert.equal(doc.querySelector('.source-timeline-empty').hidden, true);
  });

check('an explicitly empty selection has instructions and no stale source controls or axis',
  base + '?quellen=none', ({ doc }) => {
    assert.deepEqual(controls(doc), []);
    assert.equal(doc.querySelector('.source-timeline-summary').textContent, 'Keine Quellen ausgewählt');
    assert.equal(doc.querySelector('.source-timeline-empty').hidden, false);
    assert.match(doc.querySelector('.source-timeline-empty').textContent, /Wähle oben/);
    assert.equal(doc.querySelector('.source-timeline-viewport').hidden, true);
    assert.equal(doc.querySelector('.source-timeline-undated').hidden, true);
    assert.equal(doc.querySelectorAll('.source-timeline-tick').length, 0);
    assert.ok(doc.querySelectorAll('.bibliography-work').length > 40);
  });

check('individual toggles and select-all/none update the component without losing checkbox focus',
  base + '?quellen=spalding1904&sortierung=autor&lang=de#frage=grundrahmen', ({ window, doc }) => {
    const existing = doc.querySelector('[data-source="spalding1904"]');
    for (const id of ['york1907', 'prout1890']) {
      const box = doc.getElementById('source-' + id);
      box.focus(); box.click();
      assert.equal(doc.activeElement, box);
      assert.deepEqual(controls(doc), selected(doc));
      assert.equal(doc.querySelector('[data-source="spalding1904"]'), existing);
    }
    const checkbox = doc.getElementById('source-spalding1904');
    checkbox.focus(); checkbox.click();
    assert.equal(doc.activeElement, checkbox);
    assert.deepEqual(controls(doc), ['prout1890', 'york1907']);
    assert.match(doc.querySelector('.source-timeline-summary').textContent, /^1907 · 1 datierte Quelle$/);
    const hash = window.location.hash;
    for (const action of ['source-none', 'source-all', 'source-none']) {
      const button = doc.getElementById(action);
      button.focus(); button.click();
      assert.equal(doc.activeElement, button);
      assert.deepEqual(controls(doc), selected(doc));
      assert.equal(window.location.hash, hash);
      assert.equal(new URL(window.location.href).searchParams.get('lang'), 'de');
      assert.equal(doc.getElementById('source-order').value, 'autor');
    }
  });

for (const prefix of [base, 'file:///tmp/Kontrapunktatlas/quellen.html']) {
  check('dated and undated jumps preserve URL, selection, order and return links: ' + new URL(prefix).protocol,
    prefix + '?quellen=spalding1904,prout1890&sortierung=autor&von=unterschiede#art=context&vergleich=frage~a~b', state => {
      const { doc } = state;
      const before = snapshot(state);
      for (const id of ['spalding1904', 'prout1890']) {
        const button = doc.querySelector('[data-source="' + id + '"]');
        button.focus(); button.click();
        const card = doc.getElementById('source-card-' + id);
        assert.equal(doc.activeElement, card);
        assert.equal(card.classList.contains('is-located-source'), true);
        assert.equal(card.querySelector('.bibliography-year').hidden, false);
        assert.deepEqual(snapshot(state), before);
        const back = card.querySelector('.bibliography-timeline-back');
        assert.match(back.textContent, /↓/);
        back.click();
        assert.equal(doc.activeElement, button);
        assert.deepEqual(snapshot(state), before);
      }
      assert.equal(doc.querySelector('.source-timeline-undated').open, true);
    });
}

check('deselecting a located source removes its highlight and unavailable return action',
  base + '?quellen=spalding1904,york1907', ({ doc }) => {
    doc.querySelector('[data-source="spalding1904"]').click();
    const card = doc.getElementById('source-card-spalding1904');
    const box = doc.getElementById('source-spalding1904');
    box.focus(); box.click();
    assert.equal(doc.activeElement, box);
    assert.equal(card.classList.contains('is-located-source'), false);
    assert.equal(card.querySelector('.bibliography-timeline-back').hidden, true);
    assert.equal(card.querySelector('.bibliography-year').hidden, true);
    assert.equal(doc.querySelector('[data-source="spalding1904"]'), null);
    box.click();
    assert.equal(card.querySelector('.bibliography-timeline-back').hidden, true);
    assert.equal(doc.querySelector('[data-source="spalding1904"]').hasAttribute('aria-current'), false);
  });

check('popstate retains a surviving point and gives a removed point a stable focus fallback',
  base + '?quellen=spalding1904,york1907', state => {
    const { doc } = state;
    const york = doc.querySelector('[data-source="york1907"]');
    york.focus();
    restore(state, '?quellen=york1907,prout1890&sortierung=jahr#frage=parallelen');
    assert.equal(doc.activeElement, york);
    assert.equal(doc.querySelector('[data-source="york1907"]'), york);
    assert.deepEqual(controls(doc), selected(doc));
    restore(state, '?quellen=none&sortierung=autor#frage=parallelen');
    assert.equal(doc.activeElement.id, 'source-timeline-heading');
    assert.equal(doc.querySelector('#source-timeline-tooltip').hidden, true);
    assert.deepEqual(controls(doc), []);
  });

check('history can remove a focused card-return action and reorder cards without hiding focus',
  base + '?quellen=spalding1904,york1907', state => {
    const { doc } = state;
    doc.querySelector('[data-source="spalding1904"]').click();
    const back = doc.querySelector('#source-card-spalding1904 .bibliography-timeline-back');
    back.focus();
    restore(state, '?quellen=york1907&sortierung=jahr#frage=grundrahmen');
    assert.equal(doc.activeElement.id, 'source-spalding1904');
    assert.equal(back.hidden, true);
    assert.equal(doc.querySelectorAll('.is-located-source').length, 0);
    assert.deepEqual(controls(doc), ['york1907']);
  });

check('undated-only selections remain accessible and loss of disclosure focus is handled',
  base + '?quellen=prout1890', state => {
    const { doc } = state;
    const details = doc.querySelector('.source-timeline-undated');
    const summary = details.querySelector('summary');
    assert.equal(doc.querySelector('.source-timeline-viewport').hidden, true);
    assert.equal(doc.querySelector('.source-timeline-empty').hidden, true);
    assert.match(doc.querySelector('.source-timeline-summary').textContent, /Keine ausgewählten Quellen mit belegtem/);
    details.open = true;
    summary.focus();
    restore(state, '?quellen=prout1890,spalding1904', 'pageshow');
    assert.equal(doc.activeElement, summary);
    assert.equal(details.open, true);
    restore(state, '?quellen=spalding1904', 'hashchange');
    assert.equal(doc.activeElement.id, 'source-timeline-heading');
    assert.equal(details.hidden, true);
    assert.deepEqual(controls(doc), ['spalding1904']);
  });

check('new source records participate dynamically with their qualified edition date',
  base + '?quellen=qa-modern-edition,spalding1904', ({ doc }) => {
    assert.deepEqual(controls(doc), ['qa-modern-edition', 'spalding1904']);
    const point = doc.querySelector('[data-source="qa-modern-edition"]');
    assert.match(point.getAttribute('aria-label'), /2019 \(Edition\)/);
    point.click();
    assert.equal(doc.activeElement.id, 'source-card-qa-modern-edition');
    assert.equal(doc.querySelector('#source-card-qa-modern-edition .bibliography-year').textContent, '2019 (Edition)');
    assert.match(doc.querySelector('#source-card-qa-modern-edition .bibliography-note').textContent, /Datum der modernen Edition/);
  }, { id: 'qa-modern-edition', name: 'Testautor', title: 'Testedition', group: 'Lehrwerke', sortAuthor: 'Testautor',
    publicationYear: 2019, publicationLabel: '2019 (Edition)', publicationNote: 'Datum der modernen Edition.' });

check('same-year editions retain distinct labels and chronological focus order after sorting',
  base + '?quellen=york1907,bach1866-wtk2,bach1866-wtk1,spalding1904', ({ doc, window }) => {
    const expected = ['bach1866-wtk1', 'bach1866-wtk2', 'spalding1904', 'york1907'];
    const original = [...doc.querySelectorAll('.source-timeline-point')];
    assert.deepEqual(original.map(node => node.dataset.source), expected);
    assert.match(original[0].getAttribute('aria-label'), /Teil I \(/);
    assert.match(original[1].getAttribute('aria-label'), /Teil II \(/);
    for (const mode of ['jahr', 'autor', 'typ']) {
      const order = doc.getElementById('source-order');
      order.value = mode;
      order.dispatchEvent(new window.Event('change', { bubbles: true }));
      assert.deepEqual([...doc.querySelectorAll('.source-timeline-point')], original);
    }
  });
