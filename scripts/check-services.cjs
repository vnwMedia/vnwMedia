const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({document:{body:{dataset:{depth:'1'}}}});
vm.runInContext(fs.readFileSync(path.join(root,'service-catalog.js'),'utf8'),context);
vm.runInContext(fs.readFileSync(path.join(root,'pages.js'),'utf8').replace(/bootPages\(\);\s*$/, ''),context);
const catalog=JSON.parse(vm.runInContext('JSON.stringify(SERVICE_CATALOG)',context));
const required=['lead-generation','seo','yelp-seo','google-business-profile','google-ppc','geo','social-media','reputation-management','email-marketing','text-marketing','web-design','website-maintenance'];
for(const slug of required) assert(catalog.some(s=>s.slug===slug),`Missing package category: ${slug}`);
assert.equal(new Set(catalog.map(s=>s.slug)).size,catalog.length,'Service slugs must be unique');
for(const service of catalog){
 const file=path.join(root,'services',service.slug+'.html');
 assert(fs.existsSync(file),`Missing page: ${service.slug}`);
 const shell=fs.readFileSync(file,'utf8');
 assert(shell.indexOf('service-catalog.js')<shell.indexOf('pages.js'),'Catalog must load first');
 const output=vm.runInContext(`detail('service', DATA.services.find(s=>s[1]===${JSON.stringify(service.slug)}))`,context);
 assert(output.includes('<h1>'),'Missing service heading');
 assert(output.includes('service-deliverables'),'Missing service-specific scope');
 assert(output.includes('<details open>'),'First FAQ must be open');
 assert(!/undefined|\[object Object\]/.test(output),'Invalid rendered value');
 for(const match of output.matchAll(/(?:href|src)="([^"#]+)"/g)){
  const target=match[1].split(/[?#]/)[0];
  if(/^(https?:|mailto:|tel:)/.test(target)) continue;
  assert(fs.existsSync(path.resolve(root,'services',target)),`Broken link on ${service.slug}: ${target}`);
 }
}
// Exercise all existing generated layouts after changing the shared catalog.
const generatedPages=vm.runInContext('Object.keys(topPages)',context);
for(const id of generatedPages){
  const output=vm.runInContext(`topPage(${JSON.stringify(id)})`,context);
  assert(output.includes('<h1>'),`Missing heading in generated page: ${id}`);
  assert(!/undefined|\[object Object\]/.test(output),`Invalid generated page: ${id}`);
}
const menu = vm.runInContext('serviceMenuMarkup("../")',context);
assert(menu.includes('mega-option-seven'),'Selected Option 7 menu missing');
assert(!menu.includes('mega-feature'),'Option 7 must not include a promotional block');
assert(menu.includes('../services.html#all-services'),'Directory link must respect page depth');
// The combined preview must retain Option 1's canonical labels without aliases.
const previewContext=vm.createContext({document:{querySelector:()=>null}});
vm.runInContext(fs.readFileSync(path.join(root,'service-catalog.js'),'utf8'),previewContext);
const previewSource=fs.readFileSync(path.join(root,'compact-menu-preview.js'),'utf8');
vm.runInContext(previewSource.split("selector.addEventListener('click'")[0],previewContext);
const previewLinks=JSON.parse(vm.runInContext('JSON.stringify(pillarGroups.flatMap(p=>p.groups.flatMap(g=>g.links)))',previewContext));
const previewLabels=previewLinks.map(([label])=>label);
assert.equal(new Set(previewLabels.map(label=>label.toLowerCase())).size,previewLabels.length,'Combined menu repeats a service');
const canonicalLabels=JSON.parse(vm.runInContext('JSON.stringify(SERVICE_MENU_LABELS)',context));
for(const service of catalog.filter(s=>!['content-writing','video-editing'].includes(s.slug))){
  const label=canonicalLabels[service.slug] || service.name;
  assert(previewLinks.some(([name,href])=>name===label && href===`services/${service.slug}.html`),`Combined menu lost Option 1 service: ${label}`);
}
for(const label of ['Packaging Design','Influencer & Creator Partnerships','CRM & Lead Nurture','Landing Pages & CRO','Content Writing','Video & Ad Creative','Brand Strategy','Graphics & Collateral','Google Ads','Meta Ads','TikTok Ads','LinkedIn Ads','Automation & Flows']){
  assert(!previewLabels.includes(label),`Removed or overlapping entry remains: ${label}`);
}
for(const label of ['Landing Pages','App Design & Development','Social Media Consultation','Community Management']){
  assert(previewLabels.includes(label),`Distinct service missing: ${label}`);
}
for(const [,href] of previewLinks) assert(fs.existsSync(path.join(root,href)),`Broken preview link: ${href}`);
assert.equal((menu.match(/title="/g)||[]).length,previewLinks.length,'Live menu must match the preview service count');
for(const prefix of ['', '../']){
  const output=vm.runInContext(`serviceMenuMarkup(${JSON.stringify(prefix)})`,context);
  const menuLinks=[...output.matchAll(/<a href="([^"]+)" title="([^"]+)"/g)].map(([,href,label])=>[label.replaceAll('&amp;','&'),href]);
  assert.deepEqual(menuLinks,previewLinks.map(([label,href])=>[label,prefix+href]),'Live menu must match Option 7 labels, ordering, and depth-aware links');
  for(const pillar of ['Create','Connect','Convert']) assert(output.includes(`>${pillar}</h2>`),`Missing live menu pillar: ${pillar}`);
}
let shells=0;
for(const entry of fs.readdirSync(root,{recursive:true})){
 if(!entry.endsWith('.html'))continue;
 const source=fs.readFileSync(path.join(root,entry),'utf8');
 const dependent=source.search(/src=["'](?:\.\.\/)?(?:pages|script)\.js/);
 if(dependent<0)continue;
 assert(source.indexOf('service-catalog.js')>=0 && source.indexOf('service-catalog.js')<dependent,`Wrong load order: ${entry}`);
 shells++;
}
console.log(`PASS: ${catalog.length} service pages, ${previewLinks.length} combined menu entries, all 12 PDF categories, local links/assets, FAQ defaults, and ${shells} page load orders.`);
