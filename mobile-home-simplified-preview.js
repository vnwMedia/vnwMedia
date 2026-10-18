(() => {
  const modes = ['light','focused','minimal'];
  const params = new URLSearchParams(location.search);
  const select = document.getElementById('simplify-preview-option');
  const status = document.getElementById('simplify-preview-status');
  const hero = document.querySelector('main .hero');
  const grid = hero.querySelector('.hero-grid');
  const form = grid.querySelector('.hero-form');
  const primary = hero.querySelector('[data-simplify-cta]');
  const mobile = matchMedia('(max-width:760px)');
  const photos = [...hero.querySelectorAll('.motion-media img')];
  const selected = photos.find(photo => photo.dataset.src?.endsWith('/home-services.webp'));
  const disclosure = document.createElement('details');
  disclosure.className = 'simplify-form-disclosure';
  disclosure.innerHTML = '<summary><strong>Let’s Grow Your Business</strong><small>Tap to open the short form</small></summary>';
  grid.append(disclosure);
  const dialog = document.createElement('dialog');
  dialog.className = 'simplify-dialog';
  dialog.setAttribute('aria-label','Let’s Grow Your Business — preview form');
  dialog.innerHTML = '<button class="simplify-dialog-close" type="button" aria-label="Close form">×</button>';
  document.body.append(dialog);
  dialog.querySelector('button').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => {
    if(event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if(event.clientY < box.top || event.clientX < box.left || event.clientX > box.right) dialog.close();
  });
  if(params.get('embed') === '1') {
    document.body.classList.add('simplify-embedded');
    const work = hero.querySelector('.pill-outline');
    work.href = 'work.html';
    work.target = '_top';
  }
  select.value = modes.includes(params.get('option')) ? params.get('option') : 'light';
  function publishSize() {
    if(parent === window) return;
    parent.postMessage({kind:'vnw-mobile-simplified-height',option:select.value,height:Math.ceil(hero.getBoundingClientRect().bottom + scrollY)},location.origin);
  }
  function apply() {
    if(dialog.open) dialog.close();
    document.body.dataset.simplifyOption = select.value;
    if(mobile.matches && select.value === 'focused') disclosure.append(form);
    else if(mobile.matches && select.value === 'minimal') dialog.append(form);
    else grid.insertBefore(form,disclosure);
    primary.setAttribute('href',mobile.matches ? '#simplify-form' : 'contact.html');
    primary.removeAttribute('aria-haspopup');
    primary.removeAttribute('aria-controls');
    if(mobile.matches && select.value === 'minimal') {
      dialog.id = 'simplify-contact-sheet';
      primary.setAttribute('aria-haspopup','dialog');
      primary.setAttribute('aria-controls',dialog.id);
    }
    status.textContent = 'Preview only—forms do not send. Desktop layout is unchanged.';
    publishSize();
  }
  primary.addEventListener('click',event => {
    if(!mobile.matches) return;
    event.preventDefault();
    if(select.value === 'minimal') dialog.showModal();
    else {
      if(select.value === 'focused') disclosure.open = true;
      form.scrollIntoView({behavior:'auto',block:'center'});
      form.querySelector('input').focus({preventScroll:true});
    }
  });
  select.addEventListener('change',apply);
  mobile.addEventListener('change',apply);
  new ResizeObserver(publishSize).observe(hero);
  disclosure.addEventListener('toggle',publishSize);
  document.addEventListener('submit',event => {
    event.preventDefault();event.stopImmediatePropagation();
    const message = event.target.querySelector('.form-status');
    if(message) message.textContent = 'Preview only—no message has been sent.';
  },true);
  apply();
  selected.srcset = selected.dataset.srcset;
  selected.src = selected.dataset.src;
  async function showPhoto() {
    try { await selected.decode(); } catch {
      if(!selected.complete) await new Promise(resolve => {selected.addEventListener('load',resolve,{once:true});selected.addEventListener('error',resolve,{once:true});});
    }
    photos.forEach(photo => {photo.style.opacity = photo === selected ? '1' : '0';photo.style.zIndex = photo === selected ? '2' : '1';});
    document.body.dataset.previewReady = selected.naturalWidth > 0 ? 'true' : 'error';
    publishSize();
  }
  showPhoto();
})();
