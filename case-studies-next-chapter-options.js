(() => {
  const template = document.getElementById('chapter-options-template');
  const main = document.querySelector('#app main');
  if (!template || !main) return;
  main.replaceChildren(template.content.cloneNode(true));
  document.title = 'Case Studies — Five Next Chapter Options | VNW Media';
  const panels = [...main.querySelectorAll('.chapter-accordion details')];
  const photo = main.querySelector('#chapter-active-photo');
  const caption = main.querySelector('#chapter-active-caption');
  panels.forEach(panel => panel.addEventListener('toggle', () => {
    if (!panel.open) return;
    panels.forEach(other => { if (other !== panel) other.open = false; });
    photo.src = panel.dataset.image;
    photo.alt = panel.dataset.alt;
    caption.textContent = panel.dataset.caption;
  }));
})();
