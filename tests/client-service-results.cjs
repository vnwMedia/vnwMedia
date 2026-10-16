const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const catalog={document:{body:{dataset:{depth:'1'}}}};
vm.createContext(catalog);
for(const file of ['service-catalog.js','client-projects.js','portfolio-client-additions.js','pages.js'])vm.runInContext(read(file).replace(/bootPages\(\);\s*$/,''),catalog,{filename:file});
vm.runInContext(`this.order=WORK_PORTFOLIO_ORDER;this.scopeFor=slug=>{
 const project=ADDITIONAL_CLIENT_PROJECTS.find(p=>p.slug===slug);
 return project?renderAdditionalClientCaseStudy(project):slug==='brooklyn-motors'?brooklynMotorsCaseStudy():renderClientCaseStudy(CLIENT_CASE_STUDIES[slug]);
};`,catalog);
const source=read('client-service-results.js'),headlines=[],allScenarios=[],clients=[];
let existingModern=0;
for(const slug of catalog.order){
 const page=read('case-studies/'+slug+'.html');
 if(page.includes('portfolio-client-results.js')){existingModern++;continue;}
 assert(page.includes('client-service-results.js'),'every older Work client uses the shared comparison renderer: '+slug);
 assert(!page.includes('art-construction-results-preview.js'),'public case study must not load the old renderer');
 assert(page.includes('portfolio-client-additions.css'),'load shared comparison styling');
 assert(page.indexOf('site-buttons.css')>page.indexOf('portfolio-client-additions.css'));
 assert(page.indexOf('site-buttons.js')>page.indexOf('client-service-results.js'));
 const html=catalog.scopeFor(slug);
 const nav=html.match(/<nav aria-label="[^"]+ case study sections">([\s\S]*?)<\/nav>/)[1];
 const names=[...nav.matchAll(/<a [^>]+>([^<]+)<\/a>/g)].map(m=>m[1]);
 const heading={innerHTML:''},grid={innerHTML:''};
 const section={classList:{add(){}},querySelector:s=>s==='.lr-heading'?heading:s==='.lr-grid'?grid:null};
 const c={document:{body:{dataset:{page:'case-'+slug}},querySelector:()=>section,querySelectorAll:()=>names.map(textContent=>({textContent}))}};
 vm.createContext(c);vm.runInContext(source,c);
 vm.runInContext('this.metrics=clientResultSampleMetrics;this.format=clientResultMetricValue;this.scenarios=CLIENT_RESULT_SCENARIOS;',c);
 clients.push(slug);
 assert.equal((grid.innerHTML.match(/class="aoc-service-result portfolio-metric-card"/g)||[]).length,names.length,slug+' preserve confirmed services');
 assert.equal((grid.innerHTML.match(/class="portfolio-metric-change"/g)||[]).length,names.length*2,slug+' two supporting comparisons per service');
 assert.equal((heading.innerHTML.match(/Sample 90-day results/g)||[]).length,1);
 assert(!/aoc-secondary|aoc-context|undefined|NaN/.test(grid.innerHTML));
 const clientDeltas=[];
 for(const name of names){
  const metrics=c.metrics(slug,name);
  assert.equal(metrics.length,3);
  assert.equal(JSON.stringify(metrics),JSON.stringify(c.metrics(slug,name)),'stable examples on reload');
  allScenarios.push(JSON.stringify(metrics.map(m=>[m.before,m.after])));
  headlines.push(metrics[0].delta);clientDeltas.push(metrics[0].delta);
  for(const m of metrics){
   assert(Number.isFinite(m.before)&&Number.isFinite(m.after)&&m.before>0&&m.after>0);
   assert.equal(m.delta,Math.round((m.after/m.before-1)*100),'calculate the displayed change from the displayed values');
   assert(m.unit==='$'?m.after<m.before:m.after>m.before,'show an improvement, including lower advertising costs');
   if(m.unit==='%')assert(m.after<=100&&m.before<=100,'rates cannot exceed 100%');
   assert(grid.innerHTML.includes(c.format(m.before,m.unit))&&grid.innerHTML.includes(c.format(m.after,m.unit)));
   assert(grid.innerHTML.includes((m.delta>0?'+':'')+m.delta+'%'));
  }
 }
 assert.equal(new Set(clientDeltas).size,clientDeltas.length,'vary headline improvement by service for '+slug);
 if(slug==='vision-centers'){
  assert.deepEqual(Array.from(clientDeltas),[105,106,107]);
  assert.equal(JSON.stringify(c.scenarios[slug]),JSON.stringify({gbp:[[1094,2243],[88,132],[214,336]],seo:[[3185,6561],[64,97],[42,78]],reputation:[[100,207],[78,96],[78,199]]}));
 }
 console.log(slug+': PASS — '+names.length+' confirmed services, positive varied comparisons, fixed sample values');
}
assert.equal(clients.length,16);assert.equal(existingModern,10);
assert.equal(headlines.length,77);
assert.equal(new Set(allScenarios).size,allScenarios.length,'each service/client has a distinct combination of values');
assert(new Set(headlines).size>=70,'headline gains vary across the portfolio');
assert(Math.min(...headlines)<20&&Math.max(...headlines)>130,'include modest and stronger sample improvements');
console.log('PASS: all 26 Work clients covered; 77 shared comparison cards; existing modern pages retained.');
