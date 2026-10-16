const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const c={document:{body:{dataset:{depth:'0'}},querySelector:()=>null}};
vm.createContext(c);
for(const file of ['service-catalog.js','client-projects.js','portfolio-client-additions.js','pages.js','portfolio-industry-options.js']){
 let source=fs.readFileSync(path.join(root,file),'utf8');
 if(file==='pages.js')source=source.replace(/bootPages\(\);\s*$/,'');
 vm.runInContext(source,c,{filename:file});
}
vm.runInContext('this.clients=PORTFOLIO_CLIENT_ADDITIONS;this.groups=PORTFOLIO_FILTER_INDUSTRIES;this.mapping=PORTFOLIO_FILTER_CLIENT_INDUSTRY;this.layouts=PORTFOLIO_FILTER_LAYOUTS;this.filter=portfolioIndustryClients;this.renderFilters=renderPortfolioIndustryFilters;this.renderCards=renderPortfolioIndustryCards;',c);
assert.equal(c.clients.length,14);assert.equal(c.layouts.length,3);
assert.equal(Object.keys(c.mapping).length,14);
assert.equal(new Set(c.groups.map(x=>x.id)).size,c.groups.length);
for(const p of c.clients)assert(c.groups.some(x=>x.id===c.mapping[p.slug]),p.slug+' needs a valid industry');
assert.equal(c.groups.reduce((sum,x)=>sum+c.filter(x.id).length,0),14,'each client belongs to exactly one industry');
assert.equal(c.filter('all').length,14);
assert.deepEqual(Array.from(c.filter('healthcare'),x=>x.slug),['aesthetic-island-nyc','harlem-east-life-plan','prestige-beauty-project']);
assert.deepEqual(Array.from(c.filter('wellness'),x=>x.slug),['argana-day-spa']);
assert.equal(c.filter('education').length,2);assert.equal(c.filter('legal').length,3);
assert(c.filter('legal').some(p=>p.slug==='ofshtein-law-firm'));
for(const layout of c.layouts){
 for(const industry of ['all',...c.groups.map(x=>x.id)]){
  const filters=c.renderFilters(layout.id,industry),cards=c.renderCards(industry);
  assert.equal((cards.match(/class="work-card work-agency-card reveal"/g)||[]).length,c.filter(industry).length);
  assert(!/undefined|NaN|portfolio-card-stat|portfolio-trend-chart/.test(filters+cards));
  assert.equal((filters.match(layout.id==='directory'?/aria-current="true"/g:/aria-pressed="true"/g)||[]).length,1);
  if(layout.id==='sidebar')assert(filters.includes('id="pif-industry-select"'));
 }
 console.log(layout.name+': PASS — all 10 filters, correct counts, preserved cards, selected state');
}
const page=fs.readFileSync(path.join(root,'portfolio-industry-options.html'),'utf8');
assert(page.includes('noindex,nofollow'));
assert(page.indexOf('portfolio-industry-options.js')>page.indexOf('pages.js'));
assert(page.indexOf('site-buttons.css')>page.indexOf('portfolio-industry-options.css'));
assert(page.indexOf('site-buttons.js')>page.indexOf('portfolio-industry-options.js'));
for(const name of ['work.html','portfolio-review.html'])assert(!fs.readFileSync(path.join(root,name),'utf8').includes('portfolio-industry-options'));
assert(!fs.readFileSync(path.join(root,'sitemap.xml'),'utf8').includes('portfolio-industry-options'));
console.log('Three isolated industry-filter previews passed. Existing portfolio pages are unchanged.');
