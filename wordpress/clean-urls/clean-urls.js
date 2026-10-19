/* Clean dynamic menu, footer and contact-sheet links; shared with the GitHub preview. */
(() => {
 'use strict';
 const config = window.vnwCleanRoutes;
 if (!config) return;
 const home = new URL(config.home), routes = config.routes;
 function clean(value) {
  if (!value || /^(?:#|mailto:|tel:|data:|javascript:)/i.test(value)) return value;
  try {
   const url = new URL(value, location.href);
   if (url.origin !== home.origin || !url.pathname.startsWith(home.pathname)) return value;
   const key = url.pathname.slice(home.pathname.length).replace(/\/+$/, '');
   if (!Object.prototype.hasOwnProperty.call(routes, key)) return value;
   const target = new URL(routes[key], home);
   target.search = url.search;
   if (url.hash) target.hash = url.hash;
   return target.href;
  } catch { return value; }
 }
 function normalize(root) {
  const nodes = root instanceof Element && root.matches('a[href],form[action]') ? [root] : [];
  nodes.push(...root.querySelectorAll('a[href],form[action]'));
  for (const node of nodes) {
   const attribute = node.tagName === 'FORM' ? 'action' : 'href';
   const value = node.getAttribute(attribute);
   // Directory previews retain their source asset base; navigation uses resolved URLs.
   const next = value?.startsWith('#') ? (document.querySelector('base') ? new URL(value,location.href).href : value) : clean(node[attribute] || value);
   if (next !== value) node.setAttribute(attribute, next);
  }
 }
 function markNavigation() {
  const relative = location.pathname.slice(home.pathname.length).replace(/\/+$/, '');
  const first = relative.split('/')[0];
  const section = first === 'case-studies' ? 'work' : first;
  for (const link of document.querySelectorAll('.site-header .nav-menu > a,.site-header .nav-services-trigger')) {
   let selected = false;
   try { selected = new URL(clean(link.href)).pathname.slice(home.pathname.length).replace(/\/+$/, '').split('/')[0] === section; } catch {}
   link.classList.toggle('active', selected);
   if (selected) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
  }
 }
 if (config.redirectLegacy) {
  const destination = clean(location.href);
  if (destination !== location.href) { location.replace(destination); return; }
 }
 function initialize() {
 normalize(document); markNavigation();
 new MutationObserver(records => {
  for (const record of records) {
   if (record.type === 'attributes') normalize(record.target);
   else for (const node of record.addedNodes) if (node instanceof Element) normalize(node);
  }
  markNavigation();
 }).observe(document.body, {subtree:true,childList:true,attributes:true,attributeFilter:['href','action']});
 }
 if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',initialize,{once:true}); else initialize();
 window.VNWCleanUrls = Object.freeze({clean});
})();
