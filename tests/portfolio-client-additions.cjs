const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),c={document:{body:{dataset:{depth:'1'}},querySelector:()=>null}};
vm.createContext(c);
for(const file of ['service-catalog.js','client-projects.js','portfolio-client-additions.js','pages.js']){
 let text=fs.readFileSync(path.join(root,file),'utf8');
 if(file==='pages.js')text=text.replace(/bootPages\(\);\s*$/,'');
 vm.runInContext(text,c,{filename:file});
}
vm.runInContext('this.clients=PORTFOLIO_CLIENT_ADDITIONS;this.render=renderPortfolioAdditionCase;this.card=renderPortfolioAdditionCard;this.scope=PORTFOLIO_ADDITION_SERVICES;this.metrics=portfolioSampleMetrics;',c);
assert.equal(c.clients.length,13);
assert.equal(new Set(c.clients.map(p=>p.slug)).size,13);
assert.equal(c.clients.find(p=>p.slug==='argana-day-spa').logo,'assets/client-projects/argana-day-spa-logo.png','restore Argana original background');
for(const slug of ['calvin-schwartz','genius-kids'])assert(c.clients.find(p=>p.slug===slug).logo.endsWith('-logo-transparent.svg'),'preserve other transparent logos');
const serviceDeltas={};
for(const p of c.clients){
 const file=fs.readFileSync(path.join(root,'case-studies',p.slug+'-review.html'),'utf8');
 assert(file.includes('noindex,nofollow'));
 assert(file.includes('data-page="case-'+p.slug+'"'));
 assert(file.indexOf('site-buttons.css')>file.indexOf('portfolio-client-additions.css'));
 assert(!file.includes('client-service-results.js'),'no legacy undisclosed numeric results');
 assert(!file.includes('client-case-study-enhancements.js'),'no unrelated service metrics');
 assert(file.includes('portfolio-client-results.js'));
 for(const asset of [p.logo,p.desktop])assert(fs.statSync(path.join(root,asset)).size>1000,'missing asset '+asset);
 const html=c.render(p);
 assert(!html.includes('undefined'),p.slug+' undefined content');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert(html.includes(p.logo));
 assert(html.includes('digital-experience-clients/'+p.slug+'-devices.svg'),p.slug+' needs the portfolio device presentation');
 assert(fs.existsSync(path.join(root,'assets/digital-experience-clients',p.slug+'-devices.svg')));
 for(const k of p.scope)assert(html.includes(c.scope[k].label));
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);
 for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
  if(href.startsWith('#'))assert(ids.includes(href.slice(1)));
  else if(!/^(https?:|mailto:|tel:)/.test(href))assert(fs.existsSync(path.resolve(root,'case-studies',href.split('#')[0])),p.slug+' broken link '+href);
 }
 const card=c.card(p);assert(card.includes(p.slug+'-review.html'));assert(!/GBP Search Ads|GEO \/ AI/.test(card));
 assert(!/Positive Growth/.test(html+card),p.slug+' must replace the old status');
 assert(!/portfolio-card-stat|portfolio-trend-chart|Sample data|Not client-reported results/.test(card),'review cards must retain the original chart-free layout');
 for(const key of p.scope){
  const metrics=c.metrics(p,key);assert.equal(metrics.length,3);
  (serviceDeltas[key]??=[]).push(metrics[0].delta);
  assert.equal(JSON.stringify(metrics),JSON.stringify(c.metrics(p,key)),'sample figures stay stable on reload');
  for(const m of metrics){
   assert(Number.isFinite(m.before)&&Number.isFinite(m.after)&&m.before>0);
   assert.equal(m.delta,Math.round((m.after/m.before-1)*100));
   assert(m.unit==='$'?m.after<m.before:m.after>m.before,'sample improvement '+key);
  }
 }
 const resultTarget={classList:{add(){}},dataset:{},innerHTML:''};
 c.document.body.dataset.page='case-'+p.slug;c.document.body.setAttribute=()=>{};
 c.document.createElement=()=>({setAttribute(){}});
 c.document.querySelector=s=>s==='.scm-ms-signals'?resultTarget:{after(){}};
 vm.runInContext(fs.readFileSync(path.join(root,'portfolio-client-results.js'),'utf8'),c);
 assert.equal((resultTarget.innerHTML.match(/class="aoc-service-result portfolio-metric-card"/g)||[]).length,p.scope.length);
 assert(resultTarget.innerHTML.includes('<p class="portfolio-data-disclosure">Sample 90-day results</p>'));
 assert.equal((resultTarget.innerHTML.match(/sample/gi)||[]).length,1,'one section-level sample label, no repeated pills');
 assert(!/Sample data|illustrative figures|client-reported figures/i.test(html),'no repeated sample notices elsewhere on the case study');
 assert(!/<svg|portfolio-trend-chart|Earlier period|Later period/.test(resultTarget.innerHTML),'case-study results must remain graph-free');
 assert(!/Positive Growth|undefined|NaN/.test(resultTarget.innerHTML));
 console.log(p.slug+': PASS — actual logo, preview page, confirmed service scope, valid links');
}
for(const [key,deltas] of Object.entries(serviceDeltas))assert.equal(new Set(deltas).size,deltas.length,'distinct sample improvements for '+key);
const allDeltas=Object.values(serviceDeltas).flat();
assert(Math.min(...allDeltas)<20&&Math.max(...allDeltas)>100,'include both patient and stronger sample improvements');
const work=fs.readFileSync(path.join(root,'work.html'),'utf8');
assert(!work.includes('portfolio-client-additions'),'live Work page must remain unchanged');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const p of c.clients)assert(!sitemap.includes(p.slug+'-review'));
console.log('All 13 review-only case studies passed. Live Work page is not connected to the additions.');
