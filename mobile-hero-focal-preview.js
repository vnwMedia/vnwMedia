(() => {
  const focalPoints = {
    'restaurants-hospitality':68, 'home-services':72, healthcare:78,
    automotive:74, 'daycare-education':62, 'legal-professional-services':58,
    'real-estate':75, 'retail-ecommerce':65
  };
  const images = [...document.querySelectorAll('.hero-bg.motion-media img')];
  const chooser = document.getElementById('focal-preview-scene');
  const status = document.getElementById('focal-preview-status');
  const controls = document.querySelectorAll('[data-focal-choice]');
  let pending = 0;
  images.forEach(image => {
    const source = image.dataset.src || image.getAttribute('src');
    image.dataset.focalScene = source.split('/').pop().replace('.webp','');
    image.style.setProperty('--focal-x', `${focalPoints[image.dataset.focalScene]}%`);
  });
  function label() {
    status.textContent = document.body.dataset.focalMode === 'current'
      ? 'Same image size and shade. Current top-center crop.'
      : 'Same image size and shade. Adjusted focal point.';
  }
  async function chooseScene() {
    const request = ++pending;
    const selected = images.find(image => image.dataset.focalScene === chooser.value);
    if (selected.dataset.srcset) selected.srcset = selected.dataset.srcset;
    if (selected.dataset.src) selected.src = selected.dataset.src;
    try { await selected.decode(); } catch { status.textContent = 'Photo could not load. Please select another photo.'; return; }
    if (request !== pending) return;
    // Hold identical opening stills for a fair comparison, rather than letting
    // the live slideshow change photos or zoom while a crop is being compared.
    images.forEach(image => {
      image.style.opacity = image === selected ? '1' : '0';
      image.style.zIndex = image === selected ? '2' : '1';
    });
    document.body.dataset.focalScene = selected.dataset.focalScene;
    label();
  }
  controls.forEach(control => control.addEventListener('click', () => {
    document.body.dataset.focalMode = control.dataset.focalChoice;
    controls.forEach(button => button.setAttribute('aria-pressed', String(button === control)));
    label();
  }));
  chooser.addEventListener('change', chooseScene);
  // No real inquiries can be sent from this isolated design preview.
  document.addEventListener('submit', event => {
    event.preventDefault(); event.stopImmediatePropagation();
    const message = event.target.querySelector('.form-status');
    if (message) message.textContent = 'Preview only—no message has been sent.';
  }, true);
  chooseScene();
})();
