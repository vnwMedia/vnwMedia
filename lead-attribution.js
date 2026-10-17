// Shared lead-email formatting and tab-scoped attribution. No lead data is stored.
(() => {
  'use strict';
  const root = new URL('.', document.currentScript.src);
  const storageKey = 'vnw-lead-attribution-v1';
  const sessionTimeout = 30 * 60 * 1000;
  const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const singleLine = (value, max = 220) => String(value || '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
  const campaign = url => Object.fromEntries(campaignKeys.map(key => [key, singleLine(url.searchParams.get(key), 160)]).filter(([, value]) => value));
  function safeUrl(value) {
    if (!value) return '';
    try {
      const url = new URL(value, location.href);
      if (!['https:', 'http:'].includes(url.protocol)) return 'Local preview';
      const tagged = campaign(url);
      url.username = ''; url.password = ''; url.hash = ''; url.search = '';
      for (const [key, val] of Object.entries(tagged)) url.searchParams.set(key, val);
      return url.href;
    } catch { return ''; }
  }
  function currentPage() {
    const pathname = location.pathname.startsWith(root.pathname) ? '/' + location.pathname.slice(root.pathname.length) : location.pathname;
    const pagePath = pathname === '/index.html' ? '/' : pathname;
    const type = pagePath === '/' ? 'Homepage' : /^\/services\//.test(pagePath) ? 'Service page' : /^\/locations\//.test(pagePath) ? 'Location landing page' : /^\/industries\//.test(pagePath) ? 'Industry landing page' : /^\/case-studies\//.test(pagePath) ? 'Case study' : /^\/resources\//.test(pagePath) ? 'Resource page' : pagePath === '/contact.html' ? 'Contact page' : 'Website page';
    return {
      title: singleLine(document.title.replace(/\s*\|\s*VNW Media.*$/i, '')) || pagePath,
      heading: singleLine(document.querySelector('main h1,h1')?.textContent),
      path: pagePath, type, url: safeUrl(location.href)
    };
  }
  let session;
  function captureVisit() {
    if (session) return session;
    const now = Date.now(), page = currentPage();
    try { session = JSON.parse(sessionStorage.getItem(storageKey)); } catch { /* Storage may be blocked. */ }
    // Accept only a recent, same-site tab session. Never persist contact-form values.
    if (!session || session.version !== 1 || session.root !== root.href || !session.entry || !session.lastPage || !Number.isFinite(session.updatedAt) || now - session.updatedAt > sessionTimeout || session.updatedAt > now) {
      session = {version: 1, root: root.href, entry: page, entryReferrer: safeUrl(document.referrer), lastPage: page, previousPage: null};
    } else if (session.lastPage.path !== page.path) {
      session.previousPage = session.lastPage;
      session.lastPage = page;
    }
    const tags = campaign(new URL(location.href));
    if (Object.keys(tags).length) session.lastTagged = {page, tags};
    session.updatedAt = now;
    try { sessionStorage.setItem(storageKey, JSON.stringify(session)); } catch { /* Current-page attribution still works without storage. */ }
    return session;
  }
  function formDetails(form) {
    const mobile = form.id === 'vnw-mobile-email-form';
    const hero = form.matches('.hero-form');
    const label = mobile ? 'Mobile quick-contact form' : hero ? 'Hero strategy form' : 'Page contact form';
    const kind = mobile ? 'mobile-quick-contact' : hero ? 'hero-strategy' : 'page-contact';
    const sameKind = [...document.forms].filter(other => other !== form && (mobile ? other.id === form.id : hero ? other.matches('.hero-form') : other.matches('.plan-form')));
    const index = [...document.forms].filter(other => other === form || sameKind.includes(other)).indexOf(form) + 1;
    return {label, id: form.id || `${kind}${sameKind.length ? '-' + index : ''}`, name: singleLine(form.getAttribute('aria-label') || form.querySelector('h2')?.textContent || label), section: singleLine(form.closest('section[id]')?.id, 100)};
  }
  function buildDraft(form) {
    const visit = captureVisit(), page = currentPage(), details = formDetails(form);
    const data = new FormData(form);
    const field = name => String(data.get(name) || '').trim();
    const company = singleLine(field('company'));
    const subject = singleLine(`[VNW Lead] ${page.title} | ${details.label}${company ? ' | ' + company : ''}`, 240);
    const tagged = visit.lastTagged;
    const lines = [
      'NEW WEBSITE INQUIRY', '',
      `Name: ${singleLine(field('name'))}`, `Business: ${company}`, `Phone: ${singleLine(field('phone'))}`,
      `Email: ${singleLine(field('email'))}`, `Website: ${singleLine(field('website'))}`,
      `Service / interest: ${singleLine(field('interest')) || page.title}`, '',
      'Message / goals:', field('message') || 'Not provided', '',
      'LEAD SOURCE', `Submitted from: ${page.title}`, `Page type: ${page.type}`,
      `Page URL: ${page.url}`, `Page path: ${page.path}`, `Page heading: ${page.heading || 'Not provided'}`,
      `Form: ${details.label}`, `Form ID: ${details.id}`, `Form name: ${details.name}`,
      `Section: ${details.section || 'Not specified'}`,
      `Layout: ${matchMedia('(max-width: 800px)').matches ? 'Mobile' : 'Desktop'} (${innerWidth} x ${innerHeight})`,
      `Draft created (UTC): ${new Date().toISOString()}`, '',
      'VISIT CONTEXT (this browser tab)', `First landing page: ${visit.entry.title}`,
      `First landing URL: ${visit.entry.url}`,
      `Previous page: ${visit.previousPage?.title || 'No prior page recorded'}`,
      `Previous page URL: ${visit.previousPage?.url || 'Not available'}`,
      `Entry referrer: ${visit.entryReferrer || 'Not available (direct, private, or not supplied by browser)'}`, '',
      'CAMPAIGN DETAILS',
      `Campaign landing URL: ${tagged?.page?.url || 'No tagged visit recorded'}`,
      ...campaignKeys.map(key => `${key}: ${tagged?.tags?.[key] || 'Not provided'}`), '',
      'Source details reflect browser-provided information, not independently verified ad-platform attribution.'
    ];
    const body = lines.join('\n');
    return {subject, body, mailto: `mailto:contactus@vnwmedia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`};
  }
  function isLeadForm(form) {
    return form instanceof HTMLFormElement && !form.hasAttribute('data-preview-form') &&
      (form.matches('.hero-form,.plan-form,#vnw-mobile-email-form,[data-vnw-lead-form]'));
  }
  function handleSubmit(event) {
    const form = event.target;
    if (!isLeadForm(form) || event.defaultPrevented) return;
    event.preventDefault();
    if (!form.reportValidity()) return;
    const draft = buildDraft(form);
    const mobile = form.id === 'vnw-mobile-email-form';
    const status = mobile ? document.querySelector('.vnw-mobile-email-sheet__status') : form.querySelector('.form-status');
    if (status) status.textContent = 'Your email app should open with a draft. Please press Send there to complete your inquiry.';
    location.href = draft.mailto;
    // Opening a mail draft is not a confirmed delivery. Preserve the existing honest confirmation page.
    if (!mobile) setTimeout(() => location.assign(new URL('thank-you.html?delivery=email', root).href), 300);
  }
  window.VNWLeadEmail = Object.freeze({buildDraft});
  document.addEventListener('submit', handleSubmit);
  window.addEventListener('pageshow', event => {
    if (event.persisted) { session = undefined; captureVisit(); }
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', captureVisit, {once: true});
  else captureVisit();
})();
