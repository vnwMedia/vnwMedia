(() => {
  const images = [...document.querySelectorAll('.motion-media img')];
  const video = document.querySelector('.motion-media video');
  const button = document.getElementById('motionPause');
  const label = document.getElementById('motionIndustry');
  const names = ['Home Services & Contractors','Medical, Dental & Eye Care','Automotive & Auto Body','Restaurants & Hospitality','Daycare & Education','Legal & Professional Services','Real Estate & Property','Retail & eCommerce'];
  let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fadeDuration = 1.7;
  // Begin at the same scale as the opening still; do not jump ahead in the zoom.
  let elapsed = 0, previous;
  function updateButton() { if (!button) return; button.textContent = paused ? 'Play motion' : 'Pause motion'; button.setAttribute('aria-pressed', String(paused)); }
  function render(time) {
    if (previous !== undefined && !paused && !document.hidden) elapsed += Math.min((time - previous) / 1000, .1);
    previous = time;
    const clock = video ? video.currentTime : elapsed;
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
    requestAnimationFrame(render);
  }
  button?.addEventListener('click', () => { paused = !paused; if(video) { if(paused) video.pause(); else video.play().catch(() => {paused = true; updateButton();}); } updateButton(); });
  if(video && paused) { video.autoplay = false; video.pause(); }
  updateButton();
  // Paint the opening image first; later slides must not compete with the initial render.
  async function start() {
    if (!images.length) return;
    await images[0].decode().catch(() => {});
    if (paused && !button) return;
    await new Promise(resolve => setTimeout(resolve, 1200));
    for (const image of images.slice(1)) {
      if (image.dataset.srcset) image.srcset = image.dataset.srcset;
      if (image.dataset.src) image.src = image.dataset.src;
      await image.decode().catch(() => {});
    }
    requestAnimationFrame(render);
  }
  start();
})();
