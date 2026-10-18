const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const formPattern=/<form\b(?=[^>]*\bclass=["'][^"']*\bhero-form\b)[^>]*>[\s\S]*?<\/form>/g;
const plain=html=>html.replace(/<br\s*\/?\s*>/gi,' ').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
let forms=0,staticForms=0,locationForms=0,serviceForms=0;
function verify(html,label){
 const matches=html.match(formPattern)||[];
 for(const form of matches){
  assert(form.match(/^<form\b[^>]*aria-label="Let’s Grow Your Business Together"/),label+' accessible form name matches');
  assert.equal(plain(form.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)[1]),'Let’s Grow Your Business Together',label+' title');
  const title=form.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)[1];
  assert.deepEqual([...title.matchAll(/<span class="hero-form-title-line">([^<]+)<\/span>/g)].map(match=>match[1]),['Let’s Grow Your','Business Together'],label+' exact two-line title');
  assert(!title.includes('<br'),label+' legacy mobile break suppression cannot change title lines');
  assert.equal(plain(form.match(/<button\b[^>]*type=["']submit["'][^>]*>([\s\S]*?)<\/button>/)[1]),'Let’s Get Started',label+' button');
  const inputs=[...form.matchAll(/<input\b[^>]*>/g)].map(m=>m[0]);
  const visible=inputs.filter(tag=>!tag.includes('type="hidden"'));
  assert.deepEqual(visible.map(tag=>tag.match(/\bname="([^"]+)"/)[1]),['name','company','phone','email','website'],label+' preserves five inquiry fields');
  for(const tag of visible.slice(0,4))assert(/\brequired\b/.test(tag),label+' required field');
  assert(!/\brequired\b/.test(visible[4]),label+' website stays optional');
  assert(form.includes('role="status"'),label+' preserves validation/status output');forms++;
 }
 return matches.length;
}
const locationSource=read('location-pages.js');
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','assets','Liquid Soldier','ai-intake-system-wordpress-upload'].includes(item.name))continue;const file=path.join(dir,item.name);if(item.isDirectory())walk(file);else if(item.name.endsWith('.html')){
 const html=fs.readFileSync(file,'utf8');staticForms+=verify(html,path.relative(root,file));
 for(const script of html.matchAll(/src=["']((?:\.\.\/)*(?:pages|location-pages)\.js)([^"']*)["']/g))assert.equal(script[2],'?v=20261018-growth-title-lines',file+' current template version');
 if(html.includes('hero-form')||html.includes('pages.js'))assert(/site-buttons\.css\?v=20261018-growth-title-lines/.test(html),file+' current shared title styles');
 if(!html.includes('location-pages.js'))continue;
 const attrs=html.match(/<body\b([^>]*)>/)?.[1]||'',dataset={};
 for(const [,key,value]of attrs.matchAll(/data-([\w-]+)="([^"]*)"/g))dataset[key.replace(/-([a-z])/g,(_,x)=>x.toUpperCase())]=value;
 const app={innerHTML:''},context={URL,location:{href:'https://vnwmedia.github.io/vnwMedia/'+path.relative(root,file)},document:{body:{dataset},getElementById:()=>app}};
 vm.createContext(context);vm.runInContext(locationSource,context);
 const count=verify(app.innerHTML,path.relative(root,file)+' rendered');locationForms+=count;
 if(dataset.locationPage||dataset.locationService)assert.equal(count,1,file+' renders its inquiry form');
}}}
walk(root);
const context={document:{body:{dataset:{depth:'1'}}}};vm.createContext(context);
for(const file of ['service-catalog.js','pages.js'])vm.runInContext(read(file).replace(/bootPages\(\);\s*$/,''),context);
vm.runInContext('this.services=SERVICE_CATALOG;this.render=serviceHeroForm;',context);
for(const service of context.services){const html=context.render(service);serviceForms+=verify(html,'service '+service.slug);assert(html.includes(`name="interest" value="${service.name.replaceAll('&','&amp;')}"`),service.slug+' retains service interest');}
// The retired design studies are no longer counted as production inquiry forms.
assert(staticForms>=65);assert(locationForms>=40);assert.equal(serviceForms,28);
verify(read('scripts/build-industries.mjs'),'industry generator');
assert(read('site-buttons.css').includes('html body .hero-form h2 .hero-form-title-line{display:block;white-space:nowrap}'),'shared title lines remain intact on mobile and desktop');
assert(read('site-buttons.js').includes('Tell us what’s next.'),'mobile message sheet is a separate form and remains unchanged');
assert(read('index.html').includes('Request My Plan'),'lower-page message form remains unchanged');
console.log(`PASS: approved title/button on ${staticForms} static forms, ${locationForms} rendered location forms, all ${serviceForms} service forms, and the industry generator. Fields, validation, service interest and other form types preserved.`);
