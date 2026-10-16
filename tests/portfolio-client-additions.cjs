const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),c={document:{body:{dataset:{depth:'1'}},querySelector:()=>null}};
vm.createContext(c);
for(const file of ['service-catalog.js','client-projects.js','portfolio-client-additions.js','pages.js']){
 let text=fs.readFileSync(path.join(root,file),'utf8');
 if(file==='pages.js')text=text.replace(/bootPages\(\);\s*$/,'');
 vm.runInContext(text,c,{filename:file});
}
vm.runInContext('this.clients=PORTFOLIO_CLIENT_ADDITIONS;this.render=renderPortfolioAdditionCase;this.card=renderPortfolioAdditionCard;this.scope=PORTFOLIO_ADDITION_SERVICES;this.metrics=portfolioSampleMetrics;this.formatMetric=portfolioMetricValue;',c);
assert.equal(c.clients.length,14);
assert.equal(new Set(c.clients.map(p=>p.slug)).size,14);
vm.runInContext('this.reviewClients=PORTFOLIO_REVIEW_CLIENTS;',c);
assert.equal(c.reviewClients.length,10);
for(const slug of ['glass-company-nyc','liquid-soldier','lm-attorney','ofshtein-law-firm']){
  assert(!c.reviewClients.some(p=>p.slug===slug),'removed client is absent from the review list');
  assert(c.clients.some(p=>p.slug===slug),'preserve case-study data and files');
}
const reviewNotice=fs.readFileSync(path.join(root,'portfolio-review-notice.js'),'utf8');
assert(reviewNotice.includes("document.querySelectorAll('.work-grid > .work-card').length"),'review count matches the entire rendered portfolio');
assert(!reviewNotice.includes('grid.innerHTML'),'review must preserve the shared portfolio order');
const catering=c.clients.find(p=>p.slug==='classical-caterers');
const calvin=c.clients.find(p=>p.slug==='calvin-schwartz');
assert.equal(calvin.logo,'assets/client-projects/calvin-schwartz-logo-vector.svg');
const calvinMark=fs.readFileSync(path.join(root,calvin.logo),'utf8');
assert(calvinMark.includes('<text ')&&!calvinMark.includes('<image'),'use sharp vector lettering, not a raster screenshot');
for(const word of ['Novelist','Journalist','Broadcaster','College Lecturer','Podcaster'])assert(calvinMark.includes(word));
assert.equal(calvin.coverImage,'assets/client-projects/calvin-schwartz-portrait-cover.svg');
assert(c.card(calvin).includes(calvin.coverImage)&&c.render(calvin).includes(calvin.coverImage));
assert(c.render(calvin).includes('calvin-schwartz-devices.svg?v=20261016-fully-loaded'));
assert(fs.readFileSync(path.join(root,calvin.coverImage),'utf8').includes('data:image/webp;base64,'),'embed Calvin’s real portrait');
const aesthetic=c.clients.find(p=>p.slug==='aesthetic-island-nyc');
assert.equal(aesthetic.coverImage,'assets/client-projects/aesthetic-island-nyc-beauty.jpg');
assert(fs.statSync(path.join(root,aesthetic.coverImage)).size>1000);
assert(c.card(aesthetic).includes(aesthetic.coverImage)&&c.render(aesthetic).includes(aesthetic.coverImage),'use the same beauty image on card and case-study hero');
assert(c.card(aesthetic).includes(aesthetic.coverAlt)&&c.render(aesthetic).includes(aesthetic.coverAlt));
assert(aesthetic.desktop.endsWith('aesthetic-island-nyc-desktop.png'),'preserve actual website device preview');
assert.equal(catering.coverImage,'assets/client-projects/classical-caterers-hall.jpg');
assert(fs.statSync(path.join(root,catering.coverImage)).size>1000);
assert(c.card(catering).includes(catering.coverImage),'catering card uses the hall image');
assert(c.render(catering).includes(catering.coverImage),'catering hero uses the same hall image');
assert(c.card(catering).includes(catering.coverAlt),'use accurate illustrative-image alt text');
assert(catering.desktop.endsWith('classical-caterers-desktop.png'),'preserve the actual website capture');
const harlem=c.clients.find(p=>p.slug==='harlem-east-life-plan');
assert.deepEqual(Array.from(harlem.scope),['web','seo','ppc','gbp','reputation']);
for(const key of ['gbp','reputation']){
  assert(c.card(harlem).includes(c.scope[key].label),'Harlem card includes the added service');
  assert(c.render(harlem).includes('id="'+c.scope[key].id+'"'),'Harlem case study includes the added service section');
  assert.equal(c.metrics(harlem,key).length,3,'added services have disclosed sample metrics');
}
assert(harlem.story.includes('without disclosing patient information'));
assert.equal(harlem.logo,'assets/client-projects/harlem-east-life-plan-logo-white-text.svg');
const whiteLogo=fs.readFileSync(path.join(root,harlem.logo),'utf8');
assert(whiteLogo.includes('data:image/webp;base64,'),'white logo reuses original artwork');
assert(whiteLogo.includes('clip-path="url(#symbol)"')&&whiteLogo.includes('filter="url(#white-lettering)"'),'preserve colored symbol; recolor lettering only');
assert.equal(harlem.coverImage,'assets/client-projects/harlem-east-life-plan-care.jpg');
assert(fs.statSync(path.join(root,harlem.coverImage)).size>1000);
assert(c.card(harlem).includes(harlem.coverImage)&&c.render(harlem).includes(harlem.coverImage));
assert(c.card(harlem).includes(harlem.coverAlt));
assert(harlem.desktop.endsWith('harlem-east-life-plan-desktop.png'),'preserve actual website capture');
const jb=c.clients.find(p=>p.slug==='jb-body-works');
assert(c.render(jb).includes('jb-body-works-devices.svg?v=20261016-video-loaded'),'load the refreshed video-ready device preview rather than a cached black screen');
const jbCapture=JSON.parse(fs.readFileSync(path.join(root,'assets/client-projects/jb-body-works-capture.json'),'utf8'));
assert(jbCapture.verification.includes('visually confirmed'));
assert.equal(jbCapture.desktop.width,1440);assert.equal(jbCapture.mobile.width,390);
assert.equal(jb.coverImage,'assets/client-projects/jb-body-works-collision-repair.jpg');
assert(fs.statSync(path.join(root,jb.coverImage)).size>1000);
assert(c.card(jb).includes(jb.coverImage)&&c.render(jb).includes(jb.coverImage),'use collision-repair imagery on card and hero');
assert(c.card(jb).includes(jb.coverAlt));
assert(jb.desktop.endsWith('jb-body-works-desktop.png'),'preserve actual website capture and device presentation');
assert.deepEqual(Array.from(jb.scope),['seo','reputation']);
assert(c.render(jb).includes('id="reputation-management"'),'include reputation-management service section');
assert(jb.story.includes('SEO and Reputation Management'));
const mb=c.clients.find(p=>p.slug==='mb-law');
assert.equal(mb.logo,'assets/client-projects/mb-law-logo-vector.svg');
const mbWhiteLogo=fs.readFileSync(path.join(root,mb.logo),'utf8');
assert(mbWhiteLogo.includes('<path')&&!mbWhiteLogo.includes('<image')&&!mbWhiteLogo.includes('<text'),'render the law-firm logo as self-contained vector outlines');
assert.equal(mb.coverImage,'assets/client-projects/mb-law-legal-office.jpg');
assert(fs.statSync(path.join(root,mb.coverImage)).size>1000);
assert(c.card(mb).includes(mb.coverImage)&&c.render(mb).includes(mb.coverImage));
assert(c.card(mb).includes(mb.coverAlt));
assert(mb.desktop.endsWith('mb-law-desktop.png'),'preserve actual website capture and device presentation');
assert.deepEqual(Array.from(mb.scope),['web','seo','gbp'],'do not change the law-firm service scope');
const olf=c.clients.find(p=>p.slug==='ofshtein-law-firm');
assert.deepEqual(Array.from(olf.scope),['ppc'],'OLF provides PPC only');
assert.equal(olf.website,'https://olf.law/');
assert.equal(olf.logo,'assets/client-projects/ofshtein-law-firm-logo.png');
assert(c.card(olf).includes('Our scope: PPC.')&&!c.card(olf).includes('Web Design'));
assert(olf.story.includes('PPC only'));
assert(fs.statSync(path.join(root,olf.coverImage)).size>1000);
assert(c.render(olf).includes(olf.coverImage));
assert(!c.render(olf).includes('id="website-ux"')&&!c.render(olf).includes('id="seo"'),'do not claim website development or SEO');
for(const p of c.clients.filter(p=>![calvin.slug,aesthetic.slug,catering.slug,harlem.slug,jb.slug,mb.slug,olf.slug].includes(p.slug)))assert(!p.coverImage,'other clients retain their images');
const prestige=c.clients.find(p=>p.slug==='prestige-beauty-project');
assert.deepEqual(Array.from(prestige.scope),['web','seo','gbp','reputation']);
assert.equal(prestige.heroImage,'assets/client-projects/prestige-beauty-project-aesthetics-studio.jpg');
assert(fs.statSync(path.join(root,prestige.heroImage)).size>1000);
assert(c.render(prestige).includes(prestige.heroImage)&&c.render(prestige).includes(prestige.heroAlt));
assert(c.card(prestige).includes(prestige.desktop)&&!c.card(prestige).includes(prestige.heroImage),'replace only the case-study hero image');
assert(c.render(prestige).includes('id="reputation-management"'),'include reputation service details');
for(const p of c.clients.filter(p=>p.slug!==prestige.slug))assert(!p.heroImage,'preserve other client hero choices');
assert.equal(c.clients.find(p=>p.slug==='argana-day-spa').logo,'assets/client-projects/argana-day-spa-logo.png','restore Argana original background');
assert(c.clients.find(p=>p.slug==='genius-kids').logo.endsWith('-logo-transparent.svg'),'preserve other transparent logos');
assert.deepEqual(Array.from(c.clients.find(p=>p.slug==='aesthetic-island-nyc').scope),['ppc','gbp','reputation']);
assert.deepEqual(Array.from(c.clients.find(p=>p.slug==='argana-day-spa').scope),['gbp','reputation']);
for(const p of c.clients.filter(p=>!['aesthetic-island-nyc','argana-day-spa','jb-body-works','prestige-beauty-project','harlem-east-life-plan'].includes(p.slug)))assert(!p.scope.includes('reputation'),'do not broaden other client scopes');
const serviceDeltas={};
for(const p of c.clients){
 const file=fs.readFileSync(path.join(root,'case-studies',p.slug+'-review.html'),'utf8');
 assert(file.includes('noindex,nofollow'));
 assert(file.includes('data-page="case-'+p.slug+'"'));
 assert(file.indexOf('site-buttons.css')>file.indexOf('portfolio-client-additions.css'));
 assert(!file.includes('client-service-results.js'),'no legacy undisclosed numeric results');
 assert(!file.includes('client-case-study-enhancements.js'),'no unrelated service metrics');
 assert(file.includes('portfolio-client-results.js'));
 for(const asset of [p.logo,p.desktop])assert(fs.statSync(path.join(root,asset)).size>(asset.endsWith('.svg')?200:1000),'missing asset '+asset);
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
 assert.equal((resultTarget.innerHTML.match(/class="aoc-comparison portfolio-metric-comparison"/g)||[]).length,p.scope.length,'use the live case-study green comparison pattern');
 assert.equal((resultTarget.innerHTML.match(/class="portfolio-metric-change"/g)||[]).length,p.scope.length*2,'each supporting KPI has a two-row improvement callout');
 assert.equal((resultTarget.innerHTML.match(/class="portfolio-metric-values"/g)||[]).length,p.scope.length*2,'keep before-and-after values separate from the larger delta');
 assert.equal((resultTarget.innerHTML.match(/over comparable 90-day periods/g)||[]).length,p.scope.length);
 for(const key of p.scope){
  const metrics=c.metrics(p,key);
  assert(resultTarget.innerHTML.includes('<strong>+'+metrics[0].delta+'%</strong>'),'keep the original client growth figure');
  for(const m of metrics){
   assert(resultTarget.innerHTML.includes(m.label),'keep every existing KPI label');
   assert(resultTarget.innerHTML.includes(c.formatMetric(m.before,m.unit))&&resultTarget.innerHTML.includes(c.formatMetric(m.after,m.unit)),'keep every existing before/after figure');
  }
 }
 assert(!resultTarget.innerHTML.includes('portfolio-metric-primary'),'use the shared direct-value card hierarchy');
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
for(const file of ['work.html','portfolio-review.html']){
 const page=fs.readFileSync(path.join(root,file),'utf8');
 assert(page.includes('portfolio-client-additions.js'));
 assert(page.indexOf('portfolio-client-additions.js')<page.indexOf('pages.js'),'load new clients before the shared renderer');
 assert(page.indexOf('site-buttons.css')>page.indexOf('portfolio-client-additions.css'));
 assert(page.indexOf('site-buttons.js')>page.indexOf('pages.js'));
}
const w={document:{body:{dataset:{depth:'0'}}}};
vm.createContext(w);
for(const file of ['service-catalog.js','client-projects.js','portfolio-client-additions.js','pages.js']){
 let source=fs.readFileSync(path.join(root,file),'utf8');
 if(file==='pages.js')source=source.replace(/bootPages\(\);\s*$/,'');
 vm.runInContext(source,w,{filename:file});
}
vm.runInContext('this.workCards=renderWorkPortfolioCards;this.existing=[...DATA.cases.map(p=>p[1]),...ADDITIONAL_CLIENT_PROJECTS.map(p=>p.slug)];',w);
const portfolio=w.workCards();
const links=[...portfolio.matchAll(/class="work-case-link" href="([^"]+)"/g)].map(m=>m[1]);
const slugs=links.map(link=>path.basename(link,'.html'));
assert.equal(slugs.length,26);assert.equal(new Set(slugs).size,26);
assert.deepEqual(slugs.slice(0,7),['nycadsco','vision-centers','sfadsco','harlem-east-life-plan','aesthetic-island-nyc','prestige-beauty-project','la-rosa-chicken-grill']);
assert.deepEqual([...slugs].sort(),[...w.existing,...c.reviewClients.map(p=>p.slug)].sort(),'include every existing and visible review client exactly once');
assert.equal(portfolio,w.workCards(),'mixed lower portfolio order stays stable on reload');
for(const p of c.reviewClients.filter(p=>!['harlem-east-life-plan','aesthetic-island-nyc','prestige-beauty-project'].includes(p.slug)))assert(slugs.indexOf(p.slug)>=13,'remaining new clients belong in the bottom half');
for(const href of links)assert(fs.existsSync(path.join(root,href)),'public case-study link exists: '+href);
assert(!portfolio.includes('-review.html')&&!portfolio.includes('undefined'));
for(const p of c.reviewClients){
 const source=fs.readFileSync(path.join(root,'case-studies',p.slug+'.html'),'utf8');
 assert(!source.includes('noindex')&&!source.includes('<title>Review'));
 assert(source.includes('data-portfolio-published="true"'));
 assert(source.includes('rel="canonical" href="https://vnwmedia.github.io/vnwMedia/case-studies/'+p.slug+'.html"'));
 assert(source.includes('data-page="case-'+p.slug+'"'));
 assert(source.indexOf('site-buttons.css')>source.indexOf('portfolio-client-additions.css'));
 assert(source.indexOf('site-buttons.js')>source.indexOf('portfolio-client-results.js'));
 const inserted=[],result={classList:{add(){}},dataset:{},innerHTML:''};
 c.document.body.dataset.page='case-'+p.slug;
 c.document.body.dataset.portfolioPublished='true';
 c.document.querySelector=selector=>selector==='.scm-ms-signals'?result:{after:element=>inserted.push(element)};
 vm.runInContext(fs.readFileSync(path.join(root,'portfolio-client-results.js'),'utf8'),c);
 assert(!inserted.some(element=>element.className==='portfolio-review-case-note'),'published pages omit the awaiting-approval notice');
 assert(result.innerHTML.includes('Sample 90-day results'),'retain clear disclosure of illustrative performance');
 if(p.scopeParagraphs)for(const paragraph of p.scopeParagraphs)assert(result.innerHTML.includes(paragraph),'retain expanded service copy');
}

const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const p of c.clients)assert(!sitemap.includes(p.slug+'-review'));
for(const p of c.reviewClients)assert(sitemap.includes('/case-studies/'+p.slug+'.html'),'published case study is discoverable');
console.log('PASS: 26 unique public portfolio clients, required positions, stable lower order, 10 published case studies, and preserved review pages.');
