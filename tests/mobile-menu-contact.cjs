const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),nav=fs.readFileSync(path.join(root,'script.js'),'utf8'),buttons=fs.readFileSync(path.join(root,'site-buttons.js'),'utf8');
const closeSource=nav.slice(nav.indexOf('  function closeMenu('),nav.indexOf('  function focusOpenMenu('));
const clickStart=nav.indexOf("  dialog.addEventListener('click', event => {",nav.indexOf('function initializeMobileNavigation()'));
const clickSource=nav.slice(clickStart,nav.indexOf("  dialog.querySelector('.sm-tabs').addEventListener",clickStart));
function menu({mobile=true,reduced=false,sheet=true}={}){
 const log=[],timers=new Map(),listeners={};let timer=0;
 const dialog={open:true,classList:{remove:()=>log.push('start-close')},close(){this.open=false;log.push('closed');},addEventListener:(type,fn)=>listeners[type]=fn};
 const document={getElementById:()=>sheet?{}:null,dispatchEvent:event=>log.push(event.type)};
 const c={dialog,document,headerToggle:{setAttribute:()=>{}},mobileViewport:{matches:mobile},reducedMotion:{matches:reduced},closeTimer:undefined,openFrame:0,openFocusTimer:0,focusPending:true,clearTimeout:id=>timers.delete(id),cancelAnimationFrame:()=>{},setTimeout:(fn,ms)=>{assert.equal(ms,480);timers.set(++timer,fn);return timer;},unlockPage:()=>log.push('unlocked'),CustomEvent:class{constructor(type){this.type=type;}}};
 vm.createContext(c);vm.runInContext(closeSource+clickSource,c);
 const click=(kind='project')=>{const target={closest:s=>s==='[data-open-mobile-email]'&&kind==='project'?{}:s==='a'&&['project','link'].includes(kind)?{}:s==='[data-sm-close]'&&kind==='close'?{}:null};const event={target,defaultPrevented:false,preventDefault(){this.defaultPrevented=true;}};listeners.click(event);return event;};
 return {c,dialog,log,timers,click,finish:()=>{const work=[...timers.values()];timers.clear();work.forEach(fn=>fn());}};
}
const m=menu();assert(m.click().defaultPrevented,'menu CTA must not navigate');assert(!m.dialog.open,'menu closes during the same click');assert.equal(m.timers.size,0,'project handoff adds no delayed timer');assert.deepEqual(m.log,['start-close','closed','unlocked','vnw:open-mobile-email'],'the menu and scroll lock are removed before the sheet opens immediately');
const reduced=menu({reduced:true});assert(reduced.click().defaultPrevented);assert.equal(reduced.timers.size,0);assert.equal(reduced.log.at(-1),'vnw:open-mobile-email');
for(const settings of [{mobile:false},{sheet:false}]){const b=menu(settings);assert(!b.click().defaultPrevented,'unavailable/mobile-only sheet retains the Contact link fallback');assert(!b.dialog.open);assert(!b.log.includes('vnw:open-mobile-email'));}
const ordinary=menu();assert(!ordinary.click('link').defaultPrevented,'normal Contact and service links still navigate');assert(!ordinary.dialog.open);assert(!ordinary.log.includes('vnw:open-mobile-email'));
const cancelled=menu();cancelled.click('close');assert(cancelled.dialog.open,'ordinary menu closing retains its existing animation');assert.equal(cancelled.timers.size,1);cancelled.finish();assert(!cancelled.dialog.open);assert(!cancelled.log.includes('vnw:open-mobile-email'),'ordinary closing does not open a form');
const resized=menu();resized.click('close');resized.c.closeMenu(true);resized.finish();assert.equal(resized.timers.size,0);assert(!resized.log.includes('vnw:open-mobile-email'),'desktop resize cancels the ordinary closing timer without opening a sheet');

const sheetStart=buttons.indexOf('    function closeSheet('),sheetEnd=buttons.indexOf("    sheet.addEventListener('click'",sheetStart),sheetSource=buttons.slice(sheetStart,sheetEnd);
function sheet(){
 const events={},log=[],bodyClasses=new Set();let active;
 const focusable=name=>({isConnected:true,focus:()=>{active=name;}}),trigger=focusable('floating-trigger'),menuToggle=focusable('menu-toggle');
 const c={sheet:{hidden:true},contact:{inert:false},dialog:{focus:()=>{active='email-dialog';}},status:{textContent:'Old status'},trigger,sheetReturnFocus:trigger,mobileArrowMedia:{matches:true},setOpen:open=>log.push(open),emailLink:{addEventListener:(type,fn)=>events['email-'+type]=fn},document:{querySelector:()=>menuToggle,addEventListener:(type,fn)=>events[type]=fn,body:{classList:{add:name=>bodyClasses.add(name),remove:name=>bodyClasses.delete(name)}}}};
 vm.createContext(c);vm.runInContext(sheetSource,c);return {c,events,log,bodyClasses,active:()=>active};
}
const shared=sheet();shared.events['vnw:open-mobile-email']();assert.equal(shared.c.sheet.hidden,false);assert(shared.c.contact.inert);assert(shared.bodyClasses.has('vnw-mobile-email-open'));assert.equal(shared.active(),'email-dialog');assert.equal(shared.c.status.textContent,'');shared.c.closeSheet();assert.equal(shared.active(),'menu-toggle');assert.equal(shared.c.sheet.hidden,true);assert.equal(shared.c.contact.inert,false);
let prevented=false;shared.events['email-click']({preventDefault(){prevented=true;}});assert(prevented);assert.equal(shared.active(),'email-dialog');shared.c.closeSheet();assert.equal(shared.active(),'floating-trigger','existing Let’s Talk > Email behavior is preserved');
shared.c.mobileArrowMedia.matches=false;shared.events['vnw:open-mobile-email']();assert(shared.c.sheet.hidden,'the mobile form does not open on desktop');
assert(nav.includes('href="${navRoot}contact.html" data-open-mobile-email aria-haspopup="dialog" aria-controls="vnw-mobile-email-sheet"'));
assert(fs.readFileSync(path.join(root,'site-buttons.css'),'utf8').includes('@keyframes vnw-mobile-email-in{from{transform:translateY(100%)}to{transform:translateY(0)}}'),'same bottom-up animation is reused');
let menuPages=0;
function verifyVersions(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','assets','Liquid Soldier','ai-intake-system-wordpress-upload'].includes(item.name))continue;const file=path.join(dir,item.name);if(item.isDirectory())verifyVersions(file);else if(item.name.endsWith('.html')){const html=fs.readFileSync(file,'utf8');if(!/src=["'](?:\.\.\/)*script\.js/.test(html))continue;menuPages++;assert(/src=["'](?:\.\.\/)*script\.js\?v=20261017-mobile-review-pause["']/.test(html),file+' refreshes the current shared interactions');}}}
verifyVersions(root);assert(menuPages>=300);
console.log(`PASS: ${menuPages} menu pages; zero-delay handoff, menu unlock before sheet, ordinary close animation, reduced motion, resize, Contact fallback, normal links, focus return, and existing floating Email interaction.`);
