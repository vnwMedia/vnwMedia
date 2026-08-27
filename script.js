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
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu"><span class="sr-only">Toggle navigation</span><i></i><i></i></button>
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

headerToggle?.addEventListener("click", () => {
  const open = headerToggle.getAttribute("aria-expanded") === "true";
  headerToggle.setAttribute("aria-expanded", String(!open));
  document.body.classList.toggle("nav-open", !open);
  if (open) setServicesMenuOpen(false);
});

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
