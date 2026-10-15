const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),c={document:{body:{dataset:{depth:'1'}},querySelector:()=>null}};
vm.createContext(c);
for(const file of ['service-catalog.js','client-projects.js','portfolio-client-additions.js','pages.js']){
 let text=fs.readFileSync(path.join(root,file),'utf8');
 if(file==='pages.js')text=text.replace(/bootPages\(\);\s*$/,'');
 vm.runInContext(text,c,{filename:file});
}
vm.runInContext('this.clients=PORTFOLIO_CLIENT_ADDITIONS;this.render=renderPortfolioAdditionCase;this.card=renderPortfolioAdditionCard;this.scope=PORTFOLIO_ADDITION_SERVICES;',c);
assert.equal(c.clients.length,13);
assert.equal(new Set(c.clients.map(p=>p.slug)).size,13);
for(const p of c.clients){
 const file=fs.readFileSync(path.join(root,'case-studies',p.slug+'-review.html'),'utf8');
 assert(file.includes('noindex,nofollow'));
 assert(file.includes('data-page="case-'+p.slug+'"'));
 assert(file.indexOf('site-buttons.css')>file.indexOf('portfolio-client-additions.css'));
 assert(!file.includes('client-service-results.js'),'no sample numeric results');
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
 console.log(p.slug+': PASS — actual logo, preview page, confirmed service scope, valid links');
}
const work=fs.readFileSync(path.join(root,'work.html'),'utf8');
assert(!work.includes('portfolio-client-additions'),'live Work page must remain unchanged');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const p of c.clients)assert(!sitemap.includes(p.slug+'-review'));
console.log('All 13 review-only case studies passed. Live Work page is not connected to the additions.');
