// Normalize existing and dynamically rendered CTAs without changing their actions.
(() => {
  const ctas = 'a.pill,a.cta,a.button,a.fc-button,a.nc-button,a.mp-button,a.sd-button,a.promo-button,a.tab-cta,a.option-button,a.sm-cta,a.mobile-plan';
  const controls = 'button,input[type="submit"],input[type="button"],[role="button"]';
  function isBlue(color) {
    const rgb = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
    return !!rgb && +rgb[1] < 70 && +rgb[2] >= 100 && +rgb[3] >= 150 && (rgb[4] === undefined || +rgb[4] >= .9);
  }
  function normalize() {
    document.querySelectorAll('a').forEach(link => {
      if (/^explore services\s*[↗→]?$/i.test(link.textContent.trim())) link.classList.add('site-explore-services');
    });
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
  function mountMobileContact() {
    // Keep design studies as studies, while retaining the contact action on the thank-you page.
    const isPreview = document.querySelector('meta[name="robots"][content*="noindex"]') &&
      !/\/thank-you\.html$/.test(location.pathname);
    if (isPreview || document.querySelector('.vnw-mobile-contact')) return;

    const contact = document.createElement('nav');
    contact.className = 'vnw-mobile-contact';
    contact.setAttribute('aria-label', 'Quick contact');
    contact.innerHTML = `
      <div class="vnw-mobile-contact__choices" id="vnw-mobile-contact-choices" aria-hidden="true" inert>
        <a href="tel:+17328200609" aria-label="Call VNW Media at (732) 820-0609">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 3.3 5.6 2.7a2 2 0 0 0-2.5 1.2l-.6 1.7a3 3 0 0 0 .1 2.1 24 24 0 0 0 13.7 13.7 3 3 0 0 0 2.1.1l1.7-.6a2 2 0 0 0 1.2-2.5l-.6-1.7a2 2 0 0 0-2.3-1.3l-2.4.5a2 2 0 0 1-1.8-.5l-5.6-5.6a2 2 0 0 1-.5-1.8l.5-2.4a2 2 0 0 0-1.3-2.3Z"/><path d="M15.8 3.8a5.5 5.5 0 0 1 4.4 4.4"/><path d="M15.8 6.9a2.4 2.4 0 0 1 1.3 1.3"/></svg>
          <span>Call</span>
        </a>
        <a href="mailto:contactus@vnwmedia.com" aria-label="Open the VNW Media email form" aria-haspopup="dialog" aria-controls="vnw-mobile-email-sheet">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.3" y="4.4" width="19.4" height="15.2" rx="3.6"/><path d="m3.5 7 7 5.4a2.5 2.5 0 0 0 3 0l7-5.4"/><path d="m3.5 17 5.2-4.1M20.5 17l-5.2-4.1"/></svg>
          <span>Email</span>
        </a>
      </div>
      <button class="vnw-mobile-contact__trigger" type="button" aria-expanded="false" aria-controls="vnw-mobile-contact-choices" aria-label="Open call and email choices">
        <span class="vnw-mobile-contact__label">Let’s talk</span>
        <span class="vnw-mobile-contact__close" aria-hidden="true">×</span>
      </button>`;
    document.body.append(contact);
    document.body.classList.add('has-vnw-mobile-contact');

    // The mobile Email action uses the approved Option 29 bottom sheet.
    const sheet = document.createElement('div');
    sheet.className = 'vnw-mobile-email-sheet';
    sheet.id = 'vnw-mobile-email-sheet';
    sheet.hidden = true;
    sheet.innerHTML = `
      <div class="vnw-mobile-email-sheet__scrim" data-email-close></div>
      <section class="vnw-mobile-email-sheet__card" role="dialog" aria-modal="true" aria-labelledby="vnw-mobile-email-title" aria-describedby="vnw-mobile-email-description" tabindex="-1">
        <span class="vnw-mobile-email-sheet__grabber" aria-hidden="true"></span>
        <div class="vnw-mobile-email-sheet__heading">
          <p class="vnw-mobile-email-sheet__kicker">Start a conversation</p>
          <button class="vnw-mobile-email-sheet__close" type="button" data-email-close aria-label="Close email form">×</button>
        </div>
        <h2 id="vnw-mobile-email-title">Tell us what’s next.</h2>
        <p class="vnw-mobile-email-sheet__description" id="vnw-mobile-email-description">Your contact details and a brief note are enough.</p>
        <form id="vnw-mobile-email-form">
          <div class="vnw-mobile-email-sheet__pair">
            <label>Full name<input name="name" type="text" autocomplete="name" placeholder="Your name" required></label>
            <label>Phone<input name="phone" type="tel" autocomplete="tel" placeholder="Your number" required></label>
          </div>
          <label>Email address<input name="email" type="email" autocomplete="email" placeholder="you@company.com" required></label>
          <label>Website (optional)<input name="website" type="url" autocomplete="url" placeholder="https://yourwebsite.com"></label>
          <label>Your message<textarea name="message" rows="2" placeholder="What would you like to improve?" required></textarea></label>
        </form>
        <div class="vnw-mobile-email-sheet__footer">
          <button class="vnw-mobile-email-sheet__send" type="submit" form="vnw-mobile-email-form">Send message <span aria-hidden="true">↗</span></button>
          <p class="vnw-mobile-email-sheet__status" role="status" aria-live="polite"></p>
        </div>
      </section>`;
    document.body.append(sheet);

    const trigger = contact.querySelector('.vnw-mobile-contact__trigger');
    const choices = contact.querySelector('.vnw-mobile-contact__choices');
    const emailLink = choices.querySelector('a[href^="mailto:"]');
    const dialog = sheet.querySelector('[role="dialog"]');
    const form = sheet.querySelector('form');
    const status = sheet.querySelector('[role="status"]');
    function setOpen(open, moveFocus = false) {
      contact.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
      trigger.setAttribute('aria-label', open ? 'Close contact choices' : 'Open call and email choices');
      choices.setAttribute('aria-hidden', String(!open));
      choices.inert = !open;
      if (moveFocus) (open ? choices.querySelector('a') : trigger).focus({preventScroll:true});
    }
    trigger.addEventListener('click', () => setOpen(!contact.classList.contains('is-open'), true));
    function closeSheet(restoreFocus = true) {
      if (sheet.hidden) return;
      sheet.hidden = true;
      document.body.classList.remove('vnw-mobile-email-open');
      contact.inert = false;
      if (restoreFocus) trigger.focus({preventScroll:true});
    }
    emailLink.addEventListener('click', event => {
      event.preventDefault();
      setOpen(false);
      status.textContent = '';
      sheet.hidden = false;
      document.body.classList.add('vnw-mobile-email-open');
      contact.inert = true;
      dialog.focus({preventScroll:true});
    });
    sheet.addEventListener('click', event => {
      if (event.target.closest('[data-email-close]')) closeSheet();
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const email = String(data.get('email') || '').trim();
      const website = String(data.get('website') || '').trim();
      const message = String(data.get('message') || '').trim();
      const subject = encodeURIComponent(`VNW Media inquiry — ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nWebsite: ${website}\n\nMessage:\n${message}`);
      status.textContent = 'Your email app should open with a draft. Please press Send there.';
      location.href = `mailto:contactus@vnwmedia.com?subject=${subject}&body=${body}`;
    });
    document.addEventListener('click', event => {
      if (contact.classList.contains('is-open') && !contact.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (!sheet.hidden) {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeSheet();
        } else if (event.key === 'Tab') {
          const focusable = [...sheet.querySelectorAll('button,input,textarea,a[href]')];
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
        return;
      }
      if (event.key === 'Escape' && contact.classList.contains('is-open')) setOpen(false, true);
    });
    matchMedia('(min-width: 801px)').addEventListener('change', event => {
      if (event.matches) {
        setOpen(false);
        closeSheet(false);
      }
    });
  }
  function start() {
    mountMobileContact();
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
