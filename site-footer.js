// Homepage footer shared by every VNW Media page, including article and review pages.
(() => {
 const root = new URL('.', document.currentScript.src);
 const template = "<footer class=\"footer\">\n      <div class=\"shell footer-grid\">\n        <div class=\"footer-about\">\n          <img src=\"assets/vnwMedia-LogoBlk.png?v=127\" alt=\"VNW Media\" />\n          <p>New Jersey\u2019s full-service web and digital marketing company. Strategy, creative, and campaigns that move business forward.</p>\n          <div class=\"social\" aria-label=\"VNW Media social profiles\">\n            <a href=\"https://www.instagram.com/vnwmediallc/\" aria-label=\"Instagram\" title=\"Instagram\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><circle cx=\"17.4\" cy=\"6.7\" r=\"1\" fill=\"currentColor\"/></svg></a>\n            <a href=\"https://www.linkedin.com/company/vnw-media-llc\" aria-label=\"LinkedIn\" title=\"LinkedIn\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M6.5 8.2H3.4V18h3.1V8.2Zm.2-3a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0ZM18.9 12.4c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5 1-2.9 1.6V8.2H9.1V18h3.1v-4.9c0-1.3.2-2.6 1.9-2.6 1.6 0 1.7 1.5 1.7 2.7V18h3.1v-5.6Z\"/></svg></a>\n            <a href=\"https://www.facebook.com/vnwmedia/\" aria-label=\"Facebook\" title=\"Facebook\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M14.2 8.2V6.5c0-.8.5-1 1.1-1h2.6V2h-3.6C10.9 2 10 4 10 6.2v2H7.6v3.9H10V22h4.2v-9.9h3.1l.5-3.9h-3.6Z\"/></svg></a>\n          </div>\n        </div>\n        <div><h4>Services</h4><a href=\"services/web-design.html\">Web Design</a><a href=\"services/seo.html\">SEO</a><a href=\"services/google-ppc.html\">Google PPC</a><a href=\"services/social-media.html\">Social Media</a><a href=\"services/brand-strategy.html\">Brand Strategy</a></div>\n        <div><h4>Company</h4><a href=\"case-studies.html\">Case Studies</a><a href=\"our-story.html#process\">Process</a><a href=\"clients.html\">Reviews</a><a href=\"resources.html#faq\">FAQ</a><a href=\"contact.html\">Contact</a><a href=\"resources.html\">Resources</a></div>\n        <div><h4>Contact</h4><span>contactus@vnwmedia.com</span><span>(732) 820-0609</span><span>Morganville, NJ 07751</span></div>\n      </div>\n      <div class=\"shell copyright\"><span>\u00a9 2026 VNW Media LLC. All rights reserved.</span><a href=\"#top\">Back to top \u2191</a></div>\n    </footer>";
 function mountFooter() {
  document.querySelectorAll('footer.footer, footer.review-footer, footer.review-foot').forEach(f => f.remove());
  const holder = document.createElement('div');
  holder.innerHTML = template;
  const footer = holder.firstElementChild;
  footer.id = 'vnw-site-footer';
  footer.setAttribute('aria-label', 'VNW Media footer');
  footer.querySelectorAll('[href], [src]').forEach(el => {
   const attr = el.hasAttribute('href') ? 'href' : 'src';
   const value = el.getAttribute(attr);
   if (value && !value.startsWith('#')) el.setAttribute(attr, new URL(value, root).href);
  });
  const services = [...footer.querySelectorAll('h4')].find(h => h.textContent === 'Services').parentElement;
  services.classList.add('footer-services');
  services.innerHTML = serviceFooterMarkup(root.href);
  document.body.append(footer);
  footer.querySelector('a[href="#top"]').addEventListener('click', event => {
   event.preventDefault();
   window.scrollTo({top:0, behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  });
 }
 if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountFooter, {once:true});
 else mountFooter();
})();
