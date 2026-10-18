(() => {
  const modes = ['focal','fit','separate','portrait','form-below'];
  const names = ['Adjusted focal point','Full photo at the top','Separate photo below the copy','Mobile portrait photo','Form below the photo hero'];
  const params = new URLSearchParams(location.search);
  const select = document.getElementById('layout-preview-option');
  const status = document.getElementById('layout-preview-status');
  const hero = document.querySelector('main .hero');
  const grid = hero.querySelector('.hero-grid');
  const form = grid.querySelector('.hero-form');
  const media = hero.querySelector('.motion-media');
  const photos = [...media.querySelectorAll('img')];
  const selected = photos.find(image => (image.dataset.src || image.getAttribute('src')).endsWith('/healthcare.webp'));
  const desktopSrc = selected.dataset.src;
  const desktopSet = selected.dataset.srcset;
  const mobile = matchMedia('(max-width:760px)');
  const separate = document.createElement('figure');
  separate.className = 'layout-separate-photo';
  const separateImage = document.createElement('img');
  separateImage.src = desktopSrc;
  separateImage.srcset = desktopSet;
  separateImage.sizes = '100vw';
  separateImage.alt = 'A visitor speaking with a healthcare receptionist, with a clinician nearby';
  separate.append(separateImage);
  grid.insertBefore(separate,form);
  const below = document.createElement('section');
  below.className = 'layout-form-below';
  below.setAttribute('aria-label','Start a conversation');
  const belowShell = document.createElement('div');
  belowShell.className = 'shell';
  below.append(belowShell);
  hero.after(below);
  if(params.get('embed') === '1') document.body.classList.add('layout-embedded');
  select.value = modes.includes(params.get('option')) ? params.get('option') : 'focal';
  let request = 0;
  function publishSize() {
    if(parent === window) return;
    const height = Math.ceil(Math.max(hero.getBoundingClientRect().bottom,below.getBoundingClientRect().bottom) + scrollY);
    parent.postMessage({kind:'vnw-mobile-layout-height',option:select.value,height},location.origin);
  }
  async function apply() {
    const sequence = ++request;
    const mode = select.value;
    document.body.dataset.layoutOption = mode;
    if(mode === 'form-below' && mobile.matches) belowShell.append(form);
    else grid.append(form);
    const portrait = mode === 'portrait' && mobile.matches;
    const src = portrait ? 'assets/home-hero-options/mobile-portrait-healthcare-preview.jpg' : desktopSrc;
    const srcset = portrait ? '' : desktopSet;
    if(selected.getAttribute('srcset') !== srcset) selected.setAttribute('srcset',srcset);
    if(selected.getAttribute('src') !== src) selected.src = src;
    try { await selected.decode(); } catch {
      // A breakpoint/srcset change can cancel a pending decode; let the load
      // event settle it, rather than labelling a successfully loaded image broken.
      if(!selected.complete) await new Promise(resolve => {selected.addEventListener('load',resolve,{once:true});selected.addEventListener('error',resolve,{once:true});});
    }
    if(sequence !== request) return;
    const loaded = selected.complete && selected.naturalWidth > 0;
    photos.forEach(image => {image.style.opacity = image === selected ? '1':'0';image.style.zIndex = image === selected ? '2':'1';});
    document.body.dataset.previewReady = loaded ? mode : 'error';
    status.textContent = loaded ? `${names[modes.indexOf(mode)]}. Preview only—forms do not send.` : 'Photo did not load. Please refresh the preview.';
    publishSize();
  }
  select.addEventListener('change',apply);
  mobile.addEventListener('change',apply);
  selected.addEventListener('load',publishSize);
  new ResizeObserver(publishSize).observe(hero);
  new ResizeObserver(publishSize).observe(below);
  document.addEventListener('submit',event => {
    event.preventDefault();event.stopImmediatePropagation();
    const message = event.target.querySelector('.form-status');
    if(message) message.textContent = 'Preview only—no message has been sent.';
  },true);
  apply();
})();
