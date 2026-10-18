(() => {
  const images = [...document.querySelectorAll('.motion-media img')];
  const video = document.querySelector('.motion-media video');
  const button = document.getElementById('motionPause');
  const label = document.getElementById('motionIndustry');
  const names = ['Home Services & Contractors','Medical, Dental & Eye Care','Automotive & Auto Body','Restaurants & Hospitality','Daycare & Education','Legal & Professional Services','Real Estate & Property','Retail & eCommerce'];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reducedMotion.matches;
  let visible = true, started = false, frame = 0;
  const ready = new Set(), loading = new Map();
  const fadeDuration = 1.7;
  // Begin at the same scale as the opening still; do not jump ahead in the zoom.
  let elapsed = 0, previous;
  function loadImage(index) {
    if (loading.has(index)) return loading.get(index);
    const image = images[index];
    if (image.dataset.srcset) image.srcset = image.dataset.srcset;
    if (image.dataset.src) image.src = image.dataset.src;
    const promise = image.decode().then(() => { ready.add(index); return true; }).catch(() => false);
    loading.set(index, promise);
    return promise;
  }
  function canAnimate() { return started && !paused && !document.hidden && visible; }
  function schedule() { if (canAnimate() && !frame) frame = requestAnimationFrame(render); }
  function stop() { cancelAnimationFrame(frame); frame = 0; previous = undefined; }
  function updateButton() { if (!button) return; button.textContent = paused ? 'Play motion' : 'Pause motion'; button.setAttribute('aria-pressed', String(paused)); }
  function render(time) {
    frame = 0;
    if (!canAnimate()) { previous = undefined; return; }
    const step = previous === undefined ? 0 : Math.min((time - previous) / 1000, .1);
    const proposed = elapsed + step;
    const incoming = Math.floor(proposed / 6) % images.length;
    // Hold the current photograph if a slow connection has not decoded the next one.
    if (ready.has(incoming)) elapsed = proposed;
    previous = time;
    const clock = video ? video.currentTime : elapsed;
    const next = (Math.floor(clock / 6) + 1) % images.length;
    loadImage(next);
    images.forEach((image, index) => {
      const phase = ((clock - index * 6) % 48 + 48) % 48;
      const fade = Math.min(phase / fadeDuration, 1);
      const openingStill = index === 0 && clock < fadeDuration;
      const opacity = openingStill ? 1 : phase < fadeDuration ? fade * fade * (3 - 2 * fade) : phase < 6 + fadeDuration ? 1 : 0;
      image.style.zIndex = phase < 6 ? '2' : '1';
      image.style.opacity = opacity;
      image.style.transform = `scale(${1 + .085 * Math.min(phase / 8, 1)})`;
    });
    if (label) label.textContent = names[Math.floor(clock / 6) % names.length];
    schedule();
  }
  button?.addEventListener('click', () => { paused = !paused; if(video) { if(paused) video.pause(); else video.play().catch(() => {paused = true; updateButton();}); } updateButton(); if (paused) stop(); else schedule(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else schedule(); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) schedule(); else stop(); });
    const hero = document.querySelector('.motion-media')?.closest('.hero');
    if (hero) observer.observe(hero);
  }
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updateButton(); if (paused) stop(); else schedule(); });
  if(video && paused) { video.autoplay = false; video.pause(); }
  updateButton();
  // Paint the opening image first; later slides must not compete with the initial render.
  async function start() {
    if (!images.length) return;
    await loadImage(0);
    started = true;
    if (paused && !button) return;
    await new Promise(resolve => setTimeout(resolve, 1200));
    // Fetch only the following slide, not all seven hidden photographs at once.
    // Each later slide is decoded during the preceding six-second interval.
    schedule();
  }
  start();
})();
