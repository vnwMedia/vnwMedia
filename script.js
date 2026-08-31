// Open the first answer in each FAQ group once, without locking it open
// or changing unrelated details/summary components.
function initializeFaqDefaults() {
  const groups = new Set();
  document.querySelectorAll("details").forEach((item) => {
    if (!item.closest('[class*="faq"], [id*="faq"]')) return;
    const group = item.parentElement;
    if (groups.has(group)) return;
    groups.add(group);
    item.open = true;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeFaqDefaults, { once: true });
} else {
  initializeFaqDefaults();
}

const siteHeaderElement = document.querySelector(".site-header");
const isNestedPage = /\/(?:services|industries|case-studies|resources)\//.test(location.pathname);
const navRoot = isNestedPage ? "../" : "";
// Keep every footer and the homepage service directory aligned with the catalog.
document.querySelectorAll("footer h4").forEach(heading => {
  if (heading.textContent.trim().toLowerCase() !== "services") return;
  const column = heading.parentElement;
  column.classList.add("footer-services");
  column.innerHTML = serviceFooterMarkup(navRoot);
});
const homepageServices = document.querySelector("main > #services.services");
if (homepageServices && !document.querySelector("#all-services")) {
  homepageServices.insertAdjacentHTML("afterend", serviceDirectoryMarkup(navRoot, true));
}

const servicesMegaNav = serviceMenuMarkup(navRoot);

if (siteHeaderElement) {
  siteHeaderElement.innerHTML = `<nav class="nav shell" aria-label="Main navigation">
    <a class="logo" href="${navRoot}index.html" aria-label="VNW Media home"><img src="${navRoot}assets/vnwMedia-LogoBlk.png" alt="VNW Media"></a>
    <a class="nav-phone" href="tel:17328200609" aria-label="Call VNW Media at (732) 820-0609"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92z"/></svg></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-mobile-menu" aria-haspopup="dialog"><span class="sr-only">Open mobile menu</span><i></i><i></i></button>
    <div class="nav-menu" id="nav-menu"><a href="${navRoot}our-story.html">Our Story</a><a href="${navRoot}work.html?v=30">Work</a>${servicesMegaNav}<a href="${navRoot}industries.html">Industries</a><a href="${navRoot}case-studies.html?v=16">Case Studies</a><a href="${navRoot}resources.html">Resources</a></div>
    <div class="nav-actions"><a class="pill pill-blue" href="${navRoot}contact.html">Get Started</a></div>
  </nav>`;
}

const headerToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const servicesDropdown = document.querySelector(".nav-services");
const servicesTrigger = document.querySelector(".nav-services-trigger");
let servicesMenuCloseTimer = 0;
let servicesMenuPinned = false;
const forms = document.querySelectorAll("form");
const heroForm = document.querySelector(".hero-form");

function setServicesMenuOpen(open, pinned = servicesMenuPinned) {
  clearTimeout(servicesMenuCloseTimer);
  servicesMenuCloseTimer = 0;
  servicesMenuPinned = open ? pinned : false;
  servicesDropdown?.classList.toggle("mega-open", open);
  servicesDropdown?.classList.toggle("is-open", open);
  servicesTrigger?.setAttribute("aria-expanded", String(open));
}

function scheduleServicesMenuClose() {
  if (servicesMenuPinned) return;
  clearTimeout(servicesMenuCloseTimer);
  servicesMenuCloseTimer = setTimeout(() => setServicesMenuOpen(false), 260);
}

servicesTrigger?.setAttribute("aria-expanded", "false");

servicesTrigger?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const shouldOpen = !servicesDropdown?.classList.contains("mega-open") || !servicesMenuPinned;
  setServicesMenuOpen(shouldOpen, shouldOpen);
});

servicesDropdown?.addEventListener("pointerenter", () => setServicesMenuOpen(true, servicesMenuPinned));
servicesDropdown?.addEventListener("pointerleave", scheduleServicesMenuClose);
servicesDropdown?.addEventListener("focusin", () => setServicesMenuOpen(true, servicesMenuPinned));
servicesDropdown?.addEventListener("focusout", (event) => {
  if (!servicesDropdown.contains(event.relatedTarget)) scheduleServicesMenuClose();
});

// Option 2A is shared by every page, using the same catalog as the desktop menu.
initializeMobileNavigation();

function initializeMobileNavigation() {
  if (!headerToggle) return;
  const safe = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
  const arrow = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12"/></svg>';
  const link = ([label, href], className = "") => `<a class="${className}" href="${navRoot}${safe(href)}"><span>${safe(label)}</span><span class="sm-arrow" aria-hidden="true">${arrow}</span></a>`;
  const mainLinks = [['Our Story','our-story.html'],['Work','work.html'],['Industries','industries.html'],['Case Studies','case-studies.html'],['Resources','resources.html'],['Contact','contact.html']];
  const services = SERVICE_MENU_PILLARS.flatMap(pillar => pillar.groups.flatMap(group => group.links));
  const allServicesLink = () => link(['View all services','services.html#all-services'], 'sm-all-services');
  const dialog = document.createElement('dialog');
  dialog.id = 'site-mobile-menu';
  dialog.className = 'site-mobile-menu';
  dialog.setAttribute('aria-label', 'Mobile navigation');
  dialog.setAttribute('autofocus', '');
  dialog.innerHTML = `<div class="sm-panel">
    <header class="sm-top">
      <a class="sm-logo" href="${navRoot}index.html" aria-label="VNW Media home"><img src="${navRoot}assets/vnwMedia-LogoBlk.png" alt="VNW Media" width="646" height="128"></a>
      <div class="sm-actions"><a class="sm-icon" href="tel:17328200609" aria-label="Call VNW Media at (732) 820-0609"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92z"/></svg></a><button class="sm-icon" type="button" data-sm-close aria-label="Close mobile menu">×</button></div>
    </header>
    <div class="sm-scroll">
      <h2 class="sm-title">Let’s get you there.</h2>
      <nav class="sm-main" aria-label="Mobile main navigation">${mainLinks.map(item => link(item)).join('')}</nav>
      <div class="sm-search-wrap"><div class="sm-search-heading"><label for="sm-search">Find a service</label><button type="button" data-sm-clear hidden>Clear</button></div><input id="sm-search" type="search" placeholder="Search all services…" autocomplete="off" aria-controls="sm-results"></div>
      <div class="sm-browse"><div class="sm-tabs" role="tablist" aria-label="Service categories">${SERVICE_MENU_PILLARS.map((pillar, index) => `<button type="button" role="tab" id="sm-tab-${index}" data-sm-tab="${index}" aria-controls="sm-services" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}">${safe(pillar.name)}</button>`).join('')}</div><section id="sm-services" role="tabpanel" aria-labelledby="sm-tab-0"></section>${allServicesLink()}</div>
      <div id="sm-results" hidden><p class="sm-result-count" role="status" aria-live="polite" aria-atomic="true"></p><div class="sm-result-content"></div></div>
    </div>
    <footer class="sm-footer"><a class="sm-cta" href="${navRoot}contact.html">Let’s talk about your project</a><p>One team. Your next stage of growth.</p></footer>
  </div>`;
  document.body.append(dialog);
  const panel = dialog.querySelector('.sm-panel');
  const tabs = [...dialog.querySelectorAll('[data-sm-tab]')];
  const servicePanel = dialog.querySelector('#sm-services');
  const search = dialog.querySelector('#sm-search');
  const results = dialog.querySelector('#sm-results');
  const clear = dialog.querySelector('[data-sm-clear]');
  const mobileViewport = matchMedia('(max-width:800px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion:reduce)');
  let closeTimer;
  let openFrame = 0;
  let openFocusTimer = 0;
  let focusPending = false;
  let savedScrollY = 0;
  let savedBodyStyle = null;
  let touchStart = null;

  function selectTab(index) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    const pillar = SERVICE_MENU_PILLARS[index];
    servicePanel.setAttribute('aria-labelledby', `sm-tab-${index}`);
    servicePanel.innerHTML = `<p class="sm-caption">${safe(pillar.description)}</p>${pillar.groups.map(group => `<section class="sm-group"><h3>${safe(group.name)}</h3>${group.links.map(item => link(item)).join('')}</section>`).join('')}`;
  }

  function updateSearch() {
    const query = search.value.trim().toLowerCase();
    clear.hidden = !query;
    dialog.querySelector('.sm-browse').hidden = !!query;
    results.hidden = !query;
    if (!query) {
      results.querySelector('.sm-result-count').textContent = '';
      results.querySelector('.sm-result-content').replaceChildren();
      return;
    }
    const matches = services.filter(([label]) => label.toLowerCase().includes(query));
    results.querySelector('.sm-result-count').textContent = `${matches.length} service${matches.length === 1 ? '' : 's'} found · all categories`;
    results.querySelector('.sm-result-content').innerHTML = `${matches.length ? `<div class="sm-result-links">${matches.map(item => link(item)).join('')}</div>` : '<p class="sm-empty">No services found.<small>Try “SEO,” “website,” or “email.”</small></p>'}${allServicesLink()}`;
  }

  function unlockPage() {
    if (savedBodyStyle === null) return;
    Object.assign(document.body.style, savedBodyStyle);
    savedBodyStyle = null;
    document.body.classList.remove('mobile-menu-open');
    window.scrollTo({ top: savedScrollY, behavior: 'instant' });
  }

  function closeMenu(immediate = false) {
    clearTimeout(closeTimer);
    cancelAnimationFrame(openFrame);
    clearTimeout(openFocusTimer);
    focusPending = false;
    dialog.classList.remove('is-open');
    headerToggle.setAttribute('aria-expanded', 'false');
    const finish = () => {
      if (dialog.open) dialog.close();
      unlockPage();
    };
    if (immediate || reducedMotion.matches) finish();
    else closeTimer = setTimeout(finish, 480);
  }

  function focusOpenMenu() {
    if (!focusPending || !dialog.open || !dialog.classList.contains('is-open')) return;
    clearTimeout(openFocusTimer);
    focusPending = false;
    dialog.querySelector('[data-sm-close]').focus({ preventScroll: true });
  }
  panel.addEventListener('transitionend', event => {
    if (event.target === panel && event.propertyName === 'transform') focusOpenMenu();
  });

  headerToggle.addEventListener('click', () => {
    if (!mobileViewport.matches) return;
    if (dialog.open) { closeMenu(); return; }
    clearTimeout(closeTimer);
    cancelAnimationFrame(openFrame);
    clearTimeout(openFocusTimer);
    setServicesMenuOpen(false);
    savedScrollY = window.scrollY;
    savedBodyStyle = Object.fromEntries(['position','top','left','right','width','overflow'].map(key => [key, document.body.style[key]]));
    Object.assign(document.body.style, { position:'fixed', top:`-${savedScrollY}px`, left:'0', right:'0', width:'100%', overflow:'hidden' });
    document.body.classList.add('mobile-menu-open');
    // Let the dialog receive initial focus, not an offscreen control. Focusing
    // the translated close button here can scroll the dialog horizontally.
    panel.inert = true;
    dialog.classList.remove('is-open');
    dialog.showModal();
    dialog.scrollLeft = 0;
    // Commit the right-side starting position before changing the transform.
    void panel.offsetWidth;
    panel.inert = false;
    focusPending = true;
    headerToggle.setAttribute('aria-expanded', 'true');
    openFrame = requestAnimationFrame(() => {
      openFrame = 0;
      if (!dialog.open || !focusPending) return;
      dialog.classList.add('is-open');
      if (reducedMotion.matches) focusOpenMenu();
      else openFocusTimer = setTimeout(focusOpenMenu, 520);
    });
  });
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeMenu(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); closeMenu(); }
  });
  dialog.addEventListener('close', () => {
    clearTimeout(closeTimer);
    cancelAnimationFrame(openFrame);
    clearTimeout(openFocusTimer);
    focusPending = false;
    dialog.classList.remove('is-open');
    headerToggle.setAttribute('aria-expanded', 'false');
    unlockPage();
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target.closest('[data-sm-close]')) closeMenu();
    else if (event.target.closest('a')) closeMenu(true);
    else if (event.target.closest('[data-sm-clear]')) { search.value = ''; updateSearch(); search.focus(); }
    else if (event.target.closest('[data-sm-tab]')) selectTab(Number(event.target.closest('[data-sm-tab]').dataset.smTab));
  });
  dialog.querySelector('.sm-tabs').addEventListener('keydown', event => {
    const index = tabs.indexOf(event.target);
    if (index < 0 || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(next);
    tabs[next].focus();
  });
  ['input','change','search'].forEach(eventName => search.addEventListener(eventName, updateSearch));
  panel.addEventListener('touchstart', event => {
    touchStart = event.touches.length === 1 && !event.target.closest('input') ? {x:event.touches[0].clientX, y:event.touches[0].clientY} : null;
  }, {passive:true});
  panel.addEventListener('touchend', event => {
    if (!touchStart || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (dx > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) closeMenu();
    touchStart = null;
  }, {passive:true});
  panel.addEventListener('touchcancel', () => { touchStart = null; }, {passive:true});
  mobileViewport.addEventListener('change', () => { if (!mobileViewport.matches) closeMenu(true); });
  selectTab(0);
}

document.addEventListener("click", (event) => {
  if (servicesDropdown && !servicesDropdown.contains(event.target)) {
    setServicesMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setServicesMenuOpen(false);
});

navMenu?.addEventListener("click", (event) => {
  const link = event.target instanceof Element ? event.target.closest("a") : null;
  if (link) {
    headerToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    setServicesMenuOpen(false);
  }
});

const siteHeader = siteHeaderElement;
let navBackgroundFrame = 0;

function navigationColorIsLight(value) {
  const match = value?.match(/rgba?\(([^)]+)\)/);
  if (!match) return false;
  const [red, green, blue, alpha = 1] = match[1].split(",").map((part) => Number.parseFloat(part));
  if (alpha < .35) return false;
  return (.2126 * red + .7152 * green + .0722 * blue) > 180;
}

function elementUnderNavigationIsLight(sampleY) {
  let surface = document.elementsFromPoint(innerWidth * .5, sampleY).find((element) => !siteHeader?.contains(element));
  while (surface && surface !== document.documentElement) {
    if (surface.dataset?.navTheme) return surface.dataset.navTheme === "light";
    const styles = getComputedStyle(surface);
    if (styles.backgroundImage !== "none") return navigationColorIsLight(styles.color);
    if (styles.backgroundColor !== "transparent" && styles.backgroundColor !== "rgba(0, 0, 0, 0)") {
      return navigationColorIsLight(styles.backgroundColor);
    }
    surface = surface.parentElement;
  }
  return navigationColorIsLight(getComputedStyle(document.body).backgroundColor);
}

function updateNavigationBackground() {
  navBackgroundFrame = 0;
  if (!siteHeader) return;
  const sampleY = Math.max(1, Math.min(innerHeight - 1, siteHeader.offsetHeight * .5));
  const activeSection = Array.from(document.querySelectorAll("[data-nav-theme]")).filter((section) => {
    const bounds = section.getBoundingClientRect();
    return bounds.top <= sampleY && bounds.bottom > sampleY;
  }).pop();
  const overLightSection = activeSection
    ? activeSection.dataset.navTheme === "light"
    : elementUnderNavigationIsLight(sampleY);
  siteHeader.classList.toggle("nav-over-light", overLightSection);
}

function scheduleNavigationBackground() {
  if (!navBackgroundFrame) navBackgroundFrame = requestAnimationFrame(updateNavigationBackground);
}

scheduleNavigationBackground();
addEventListener("load", scheduleNavigationBackground);
addEventListener("scroll", scheduleNavigationBackground, { passive: true });
addEventListener("resize", scheduleNavigationBackground);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .1 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

if (heroForm) {
  const mobileCtaObserver = new IntersectionObserver((entries) => {
    document.body.classList.toggle("hero-form-visible", entries[0]?.isIntersecting);
  }, { threshold: .08 });
  mobileCtaObserver.observe(heroForm);
}

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const website = String(data.get("website") || "").trim();
    const interest = String(data.get("interest") || "Digital marketing strategy").trim();
    const budget = String(data.get("budget") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`VNW Media strategy request${company ? ` — ${company}` : ""}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company}\nWebsite: ${website}\nInterest: ${interest}\nBudget: ${budget}\n\nGoals:\n${message}`);
    location.href = `mailto:contactus@vnwmedia.com?subject=${subject}&body=${body}`;
    const status = form.querySelector(".form-status");
    if (status) status.textContent = `Thanks${name ? `, ${name}` : ""}. Your email app is opening now.`;
  });
});
