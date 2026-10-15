const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const context={document:{body:{dataset:{depth:'0'}},querySelector:()=>null}};
vm.createContext(context);
for(const file of ['service-catalog.js','client-projects.js','pages.js','client-result-charts.js']){
 let source=fs.readFileSync(path.join(root,file),'utf8');
 if(file==='pages.js')source=source.replace(/bootPages\(\);\s*$/,'');
 vm.runInContext(source,context,{filename:file});
}
vm.runInContext('this.workHTML=workPageOne();this.graph=renderClientResultGraph;',context);
const clients=[...new Set([...context.workHTML.matchAll(/href="(?:\.\.\/)?case-studies\/([^"#]+)\.html/g)].map(m=>m[1]))];
assert.equal(clients.length,16,'cover every existing client linked from Our Work');
const lines=new Set();
for(const slug of clients){
 const page=fs.readFileSync(path.join(root,'case-studies',slug+'.html'),'utf8');
 const chartScript=page.indexOf('client-result-charts.js');
 const renderer=Math.max(page.indexOf('client-service-results.js'),page.indexOf('art-construction-results-preview.js'));
 assert(renderer>=0&&chartScript>renderer,'enhance after the service-result renderer: '+slug);
 assert(page.indexOf('client-result-charts.css')<page.indexOf('site-buttons.css'),'shared buttons stay last');
 assert(chartScript<page.indexOf('site-buttons.js'));
 const graph=context.graph('case-'+slug,'SEO',0);
 assert(graph.includes('Sample data: illustrative trend for SEO'));
 assert(graph.includes('Earlier period')&&graph.includes('Later period'));
 assert.equal((graph.match(/<svg /g)||[]).length,1);
 assert.equal((graph.match(/<circle /g)||[]).length,1);
 assert(!/NaN|undefined/.test(graph));
 assert.equal(graph,context.graph('case-'+slug,'SEO',0),'stable charts on refresh');
 const line=[...graph.matchAll(/<path d="([^"]+)"/g)][1][1];
 assert(!lines.has(line),'unique client trend');lines.add(line);
 console.log(slug+': PASS — graph dependency order, labels, unique stable trend');
}
const escaped=context.graph('case-test','SEO <test> & "quotes"',0);
assert(!escaped.includes('<test>'));assert(escaped.includes('&lt;test&gt;'));
const work=fs.readFileSync(path.join(root,'work.html'),'utf8');
assert(!work.includes('client-result-charts'),'do not add charts to the Work listing');
console.log('All 16 published client case studies are covered; listing cards remain unchanged.');
