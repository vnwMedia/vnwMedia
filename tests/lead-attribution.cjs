const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),source=fs.readFileSync(path.join(root,'lead-attribution.js'),'utf8');
const origin='https://vnwmedia.github.io/vnwMedia/';
class Form {
 constructor(kind='hero',fields={},extra={}){this.kind=kind;this.fields={name:'Alex Morgan',company:'Example Dental',phone:'(202) 555-0147',email:'alex@example.com',website:'https://example.com',interest:kind==='hero'?'Search Engine Optimization':'',message:'',...fields};this.id=kind==='mobile'?'vnw-mobile-email-form':'';this.valid=true;Object.assign(this,extra);}
 matches(selectors){return selectors.split(',').some(s=>s==='.hero-form'?this.kind==='hero':s==='.plan-form'?this.kind==='plan':s==='#vnw-mobile-email-form'?this.kind==='mobile':s==='[data-vnw-lead-form]'?this.explicit:false);}
 getAttribute(name){return name==='aria-label'?(this.label||'Plan your Search Engine Optimization strategy'):null;}
 hasAttribute(name){return name==='data-preview-form'&&!!this.preview;}
 querySelector(s){return s==='h2'?{textContent:'Plan your digital growth strategy'}:s==='.form-status'?this.status:null;}
 closest(){return {id:this.kind==='hero'?'top':'contact'};}
 reportValidity(){return this.valid;}
}
function browser({url=origin+'services/seo.html',title='SEO Strategy & Services | VNW Media',heading='Build search visibility around the services and locations that matter.',storage=new Map(),referrer='',width=1280,blocked=false,forms=[new Form()],time=Date.parse('2026-10-16T20:00:00Z')}={}){
 const events={},timers=[],navigations=[],status={textContent:''};const parsed=new URL(url);
 const location={href:url,pathname:parsed.pathname,assign:value=>navigations.push(value)};
 const document={currentScript:{src:origin+'lead-attribution.js?v=test'},title,referrer,readyState:'complete',forms,
  querySelector:s=>s.includes('h1')?{textContent:heading}:s==='.vnw-mobile-email-sheet__status'?status:null,
  addEventListener:(event,fn)=>{events[event]=fn;}};
 const sessionStorage={getItem:key=>{if(blocked)throw Error('blocked');return storage.get(key)||null;},setItem:(key,value)=>{if(blocked)throw Error('blocked');storage.set(key,value);}};
 class FixedDate extends Date{constructor(...args){super(...(args.length?args:[time]));}static now(){return time;}}
 const c={URL,document,location,sessionStorage,Date:FixedDate,innerWidth:width,innerHeight:844,matchMedia:()=>({matches:width<=800}),HTMLFormElement:Form,FormData:class{constructor(form){this.form=form;}get(name){return this.form.fields[name]||null;}},setTimeout:fn=>timers.push(fn),addEventListener:(event,fn)=>{events[event]=fn;}};
 c.window=c;vm.createContext(c);vm.runInContext(source,c);
 return {c,events,timers,navigations,storage,status,draft:form=>c.VNWLeadEmail.buildDraft(form||forms[0])};
}
const first=browser({url:origin+'?utm_source=google&utm_medium=cpc&utm_campaign=fall-search&email=private@example.com&token=private#contact',title:'VNW Media | Web Design & Digital Marketing',referrer:'https://www.google.com/search?q=private+search'});
const service=browser({url:origin+'services/seo.html',storage:first.storage});
const draft=service.draft();
assert.equal(draft.subject,'[VNW Lead] SEO Strategy & Services | Example Dental');
for(const line of ['From: SEO Strategy & Services','Page: '+origin+'services/seo.html','Form: Hero strategy form (Desktop)','Service: Search Engine Optimization','Campaign: google / cpc / fall-search'])assert(draft.body.includes(line),line);
for(const removed of ['Form ID:', 'Page heading:', 'Draft created', 'utm_source:', 'VISIT CONTEXT', 'Not provided', '1280 x 844', 'Entry referrer:'])assert(!draft.body.includes(removed),removed+' stays out of the concise email');
assert(draft.body.split('\n').length<=16,'the example remains short enough to scan');
assert(!draft.body.includes('private@example.com'));assert(!draft.body.includes('token='));assert(!draft.body.includes('private+search'));
const contact=browser({url:origin+'contact.html',title:'Contact VNW Media | Plan Your Digital Strategy',storage:first.storage,forms:[new Form('plan')]});
assert(contact.draft().body.includes('Came from: SEO Strategy & Services — '+origin+'services/seo.html'));
assert(contact.draft().body.includes('Form: Page contact form'));
assert(contact.draft().body.includes('Campaign: google / cpc / fall-search'));
const refreshed=browser({url:origin+'contact.html',storage:first.storage,forms:[new Form('plan')]});
assert(refreshed.draft().body.includes('Came from: SEO Strategy & Services — '+origin+'services/seo.html'),'reload retains previous page');
service.events.pageshow({persisted:true});assert.equal(JSON.parse([...service.storage.values()][0]).previousPage.path,'/contact.html','back-forward cache restores current visit context');
const mobileForm=new Form('mobile');
const mobile=browser({url:origin+'case-studies/jb-body-works-review.html',width:390,forms:[mobileForm],title:'Review — J B Body Works Case Study | VNW Media'});
assert(mobile.draft().body.includes('From: Review — J B Body Works Case Study'));assert(mobile.draft().body.includes('Form: Mobile quick-contact form (Mobile)'));
assert(!mobile.draft().body.includes('Entry referrer:'));
function submit(b,form,prevented=false){let event={target:form,defaultPrevented:prevented,preventDefault(){this.defaultPrevented=true;}};b.events.submit(event);return event;}
assert.equal(submit(mobile,mobileForm).defaultPrevented,true);assert(mobile.c.location.href.startsWith('mailto:contactus@vnwmedia.com?subject='));assert(mobile.status.textContent.includes('Please press Send'));assert.equal(mobile.timers.length,0);
const normal=browser();submit(normal,normal.c.document.forms[0]);assert.equal(normal.timers.length,1);normal.timers[0]();assert.deepEqual(normal.navigations,[origin+'thank-you.html?delivery=email']);
const invalid=browser();invalid.c.document.forms[0].valid=false;submit(invalid,invalid.c.document.forms[0]);assert.equal(invalid.c.location.href,origin+'services/seo.html');assert.equal(invalid.timers.length,0);
const preview=new Form('hero',{}, {preview:true});const previewBrowser=browser({forms:[preview]});assert.equal(submit(previewBrowser,preview).defaultPrevented,false);
const prior=browser();submit(prior,prior.c.document.forms[0],true);assert(!prior.c.location.href.startsWith('mailto:'));
const late=browser({forms:[]});const lateForm=new Form('hero',{interest:'SEO in Morganville, NJ'});late.c.document.forms.push(lateForm);submit(late,lateForm);assert(decodeURIComponent(late.c.location.href).includes('Service: SEO in Morganville, NJ'),'late-rendered forms are handled');
for(const route of ['industries/healthcare.html','locations/new-jersey/morganville/seo.html','resources/article.html'])assert(browser({url:origin+route}).draft().body.includes('Page: '+origin+route));
assert(browser({blocked:true}).draft().body.includes('Page: '+origin+'services/seo.html'),'blocked storage does not break leads');
const expired=browser({storage:first.storage,time:Date.parse('2026-10-16T21:00:00Z')});assert(!expired.draft().body.includes('Campaign:'),'expired tab context is cleared');
const corrupt=new Map([['vnw-lead-attribution-v1','{broken']]);assert(browser({storage:corrupt}).draft().body.includes('From: SEO Strategy'));
const direct=browser();const directBody=direct.draft().body;assert(!directBody.includes('Campaign:'));assert(!directBody.includes('Came from:'));assert(!directBody.includes('Message:'));
const minimal=browser({forms:[new Form('plan',{company:'',phone:'',website:'',message:'I need a new website.'})]}).draft();assert(minimal.body.includes('Message:\nI need a new website.'));for(const empty of ['Business:','Phone:','Website:','Service:'])assert(!minimal.body.includes(empty),'empty optional fields are omitted');
const injection=browser({forms:[new Form('hero',{company:'Acme\r\nBcc: attacker@example.com',message:'Hello & thanks?\nUnicode: café ✓'})]});const injected=injection.draft();assert(!/[\r\n]/.test(injected.subject));assert.equal(new URL(injected.mailto).searchParams.get('body'),injected.body);
for(const value of direct.storage.values()){assert(!value.includes('alex@example.com'));assert(!value.includes('Example Dental'));assert(!value.includes('Please help us'));}
let pages=0;
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','assets','Liquid Soldier','ai-intake-system-wordpress-upload'].includes(item.name))continue;const file=path.join(dir,item.name);if(item.isDirectory())walk(file);else if(item.name.endsWith('.html')){const html=fs.readFileSync(file,'utf8');if(!html.includes('site-buttons.js'))continue;pages++;const scripts=[...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/g)].map(m=>m[1]);const lead=scripts.filter(src=>src.split('?')[0].endsWith('lead-attribution.js'));const assetBase=html.match(/<base href="([^"]+)"/)?.[1]||'';assert.equal(lead.length,1,file+' loads exactly one handler');assert(fs.existsSync(path.resolve(path.dirname(file),assetBase,lead[0].split('?')[0])),file+' has correct relative attribution path');assert(scripts.indexOf(lead[0])<scripts.findIndex(s=>s.includes('site-buttons.js')),file+' initializes attribution before shared contact UI');for(const form of html.matchAll(/<form\b([^>]*)>/g)){const attrs=form[1];assert(/data-preview-form|hero-form|plan-form|vnw-mobile-email-form|data-vnw-lead-form/.test(attrs),file+' has a supported lead form');}}}}
walk(root);assert(pages>=226);assert(!fs.readFileSync(path.join(root,'script.js'),'utf8').includes('form.addEventListener("submit"'));assert(!fs.readFileSync(path.join(root,'site-buttons.js'),'utf8').includes("form.addEventListener('submit'"));
console.log(`PASS: ${pages} pages wired; hero, lower-page, mobile and late-rendered forms; landing/previous-page continuity; UTM retention; privacy filtering; expiry/blocked storage; validation; mailto encoding; no duplicate handlers or outbound sends.`);
const exampleBody=JSON.parse(fs.readFileSync(path.join(root,'tests/fixtures/lead-email-example.json'),'utf8')).body;
assert.equal(exampleBody,draft.body,'the fictional email fixture matches the actual formatter output without a published test page');
console.log('\nEXAMPLE SUBJECT: '+draft.subject+'\n\n'+draft.body);
