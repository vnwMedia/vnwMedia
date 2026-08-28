// Each animated track contains two equal cycles, including the boundary gap.
// Moving exactly one cycle makes the reset visually identical to the last frame.
(() => {
  const selector = '.trust-track, .res-mag-marquee, .res-cmd-strip > .shell, .res-bento-scroll > div, .res-signal-marquee > div, .res-dispatch-strip > div, .ticker-track';

  function initializeTickers() {
    const records = [];
    document.querySelectorAll(selector).forEach(track => {
      if (track.dataset.loopTicker) return;
      const originalStyle = getComputedStyle(track);
      const originalWidth = track.getBoundingClientRect().width;
      const oldDuration = parseFloat(originalStyle.animationDuration) || 28;
      const gap = originalStyle.columnGap === 'normal' ? '48px' : originalStyle.columnGap;
      const isServices = track.closest('[aria-label="VNW Media capabilities"]') && typeof SERVICE_MENU_PILLARS !== 'undefined';
      if (isServices) {
        const names = [...new Set(SERVICE_MENU_PILLARS.flatMap(pillar => pillar.groups.flatMap(group => group.links.map(([name]) => name))))];
        const intro = document.createElement('small');
        intro.textContent = 'Built to move businesses forward';
        const divider = document.createElement('i');
        divider.setAttribute('aria-hidden', 'true');
        track.replaceChildren(intro, divider, ...names.map(name => {
          const item = document.createElement('span');
          item.textContent = name;
          return item;
        }));
      }

      // Remove the hand-written partial repeats used by the old animations.
      const seen = new Set();
      const items = [...track.children].filter(item => {
        const key = item.tagName + ':' + item.textContent.trim();
        if (item.tagName === 'SPAN' && seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      if (!items.length) return;
      const templates = items.map(item => item.cloneNode(true));
      const viewport = document.createElement('div');
      viewport.className = 'ticker-window';
      viewport.style.marginBlockStart = originalStyle.marginBlockStart;
      viewport.style.marginBlockEnd = originalStyle.marginBlockEnd;
      if (!track.closest('[aria-hidden="true"]')) {
        viewport.tabIndex = 0;
        viewport.setAttribute('role', 'region');
        viewport.setAttribute('aria-label', track.parentElement.getAttribute('aria-label') || 'Scrolling topics');
        viewport.setAttribute('aria-description', 'Focus here to pause the ticker.');
      }
      track.before(viewport);
      viewport.append(track);
      track.dataset.loopTicker = 'true';
      track.classList.add('seamless-track');
      if (!track.classList.contains('trust-track')) track.style.setProperty('--ticker-gap', gap);
      const cycle = document.createElement('div');
      cycle.className = 'ticker-cycle';
      cycle.append(...templates.map(item => item.cloneNode(true)));
      track.replaceChildren(cycle);
      const speed = isServices ? 42 : Math.max(18, Math.min(42, originalWidth * .45 / oldDuration));
      records.push({track, viewport, cycle, templates, speed, lastWidth:0});
    });

    function build(record) {
      const {track, viewport, cycle, templates, speed} = record;
      track.classList.remove('ticker-ready');
      track.querySelectorAll('.ticker-cycle-copy').forEach(copy => copy.remove());
      cycle.replaceChildren(...templates.map(item => item.cloneNode(true)));
      const baseWidth = cycle.getBoundingClientRect().width;
      if (!baseWidth || !viewport.clientWidth) return;
      // A cycle must cover the entire viewport, even for short topic lists.
      const repetitions = Math.max(1, Math.ceil(viewport.clientWidth / baseWidth));
      for (let i = 1; i < repetitions; i++) {
        templates.forEach(template => {
          const item = template.cloneNode(true);
          item.dataset.tickerRepeat = 'true';
          item.setAttribute('aria-hidden', 'true');
          item.inert = true;
          cycle.append(item);
        });
      }
      const copy = cycle.cloneNode(true);
      copy.classList.add('ticker-cycle-copy');
      copy.setAttribute('aria-hidden', 'true');
      copy.inert = true;
      copy.querySelectorAll('[id]').forEach(item => item.removeAttribute('id'));
      track.append(copy);
      const distance = cycle.getBoundingClientRect().width;
      track.style.setProperty('--ticker-duration', `${distance / speed}s`);
      record.lastWidth = viewport.clientWidth;
      track.classList.add('ticker-ready');
    }

    // Measure after web fonts settle; otherwise the two cycles can change width
    // after the animation starts and expose a visible reset.
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
      records.forEach(build);
      let frame = 0;
      const refresh = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => records.forEach(build));
      };
      const observer = new ResizeObserver(entries => {
        if (entries.some(entry => {
          const record = records.find(item => item.viewport === entry.target);
          return record && Math.abs(record.lastWidth - entry.contentRect.width) > .5;
        })) refresh();
      });
      records.forEach(({viewport}) => observer.observe(viewport));
      addEventListener('resize', refresh, {passive:true});
      document.fonts?.addEventListener('loadingdone', refresh);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeTickers, {once:true});
  else initializeTickers();
})();
