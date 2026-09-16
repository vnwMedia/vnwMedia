// Normalize existing and dynamically rendered CTAs without changing their actions.
(() => {
  const ctas = 'a.pill,a.cta,a.button,a.fc-button,a.nc-button,a.mp-button,a.sd-button,a.promo-button,a.tab-cta,a.option-button,a.sm-cta,a.mobile-plan';
  const controls = 'button,input[type="submit"],input[type="button"],[role="button"]';
  function isBlue(color) {
    const rgb = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
    return !!rgb && +rgb[1] < 70 && +rgb[2] >= 100 && +rgb[3] >= 150 && (rgb[4] === undefined || +rgb[4] >= .9);
  }
  function normalize() {
    document.querySelectorAll(ctas).forEach(link => {
      link.classList.add('site-button');
      const outline = link.classList.contains('pill-outline') || link.classList.contains('sd-outline') || link.classList.contains('outline');
      link.classList.toggle('site-button-outline', outline);
      link.classList.toggle('site-button-primary', !outline);
      // The homepage navigation and telephone buttons intentionally have no CTA arrow.
      if (link.closest('header,.site-header,.site-mobile-menu') || link.getAttribute('href')?.startsWith('tel:')) return;
      if (!/[↗→]/.test(link.textContent) && !link.querySelector('svg')) {
        const arrow = document.createElement('span');
        arrow.className = 'site-button-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '↗';
        link.append(arrow);
      }
    });
    document.querySelectorAll(controls).forEach(control => {
      const submit = control.matches('input[type="submit"],button[type="submit"]') || (control.matches('button:not([type])') && !!control.closest('form'));
      if (submit) control.classList.add('site-button', 'site-button-primary');
      // Only correct blue controls' text; selected-state and toggle logic stay intact.
      control.classList.toggle('site-control-blue', isBlue(getComputedStyle(control).backgroundColor));
    });
  }
  function start() {
    normalize();
    let queued = false;
    const observer = new MutationObserver(records => {
      if (!records.some(record => record.type === 'childList' || (record.type === 'attributes' && !['class'].includes(record.attributeName)))) return;
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; normalize(); });
    });
    observer.observe(document.body, {subtree:true,childList:true,attributes:true,attributeFilter:['aria-pressed','aria-selected','style','hidden']});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
