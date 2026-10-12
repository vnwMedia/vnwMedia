(() => {
  const images = [...document.querySelectorAll('.motion-media img')];
  const video = document.querySelector('.motion-media video');
  const button = document.getElementById('motionPause');
  const label = document.getElementById('motionIndustry');
  const names = ['Home Services & Contractors','Medical, Dental & Eye Care','Automotive & Auto Body','Restaurants & Hospitality','Daycare & Education','Legal & Professional Services','Real Estate & Property','Retail & eCommerce'];
  let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let elapsed = 2, previous;
  function updateButton() { button.textContent = paused ? 'Play motion' : 'Pause motion'; button.setAttribute('aria-pressed', String(paused)); }
  function render(time) {
    if (previous !== undefined && !paused && !document.hidden) elapsed += Math.min((time - previous) / 1000, .1);
    previous = time;
    const clock = video ? video.currentTime : elapsed;
    images.forEach((image, index) => {
      const phase = ((clock - index * 6) % 48 + 48) % 48;
      const fade = Math.min(phase / 2, 1);
      const opacity = phase < 2 ? fade * fade * (3 - 2 * fade) : phase < 8 ? 1 : 0;
      image.style.zIndex = phase < 6 ? '2' : '1';
      image.style.opacity = opacity;
      image.style.transform = `scale(${1 + .06 * Math.min(phase / 8, 1)})`;
    });
    label.textContent = names[Math.floor(clock / 6) % names.length];
    requestAnimationFrame(render);
  }
  button.addEventListener('click', () => { paused = !paused; if(video) { if(paused) video.pause(); else video.play().catch(() => {paused = true; updateButton();}); } updateButton(); });
  if(video && paused) { video.autoplay = false; video.pause(); }
  updateButton();
  // Decode all eight photos before animating so a newly revealed image never flashes blank.
  Promise.allSettled(images.map(image => image.decode())).then(() => requestAnimationFrame(render));
})();
