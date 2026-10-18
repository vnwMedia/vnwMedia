const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const live=read('index.html'),page=read('mobile-hero-layout-preview.html'),hub=read('mobile-hero-options-preview.html');
const css=read('mobile-hero-layout-preview.css'),js=read('mobile-hero-layout-preview.js');
const modes=['focal','fit','separate','portrait','form-below'];
for(const html of [hub,page]){
  assert(html.includes('name="robots" content="noindex,nofollow"'),'all preview pages are noindex');
  assert(html.indexOf('preview.css')<html.indexOf('site-buttons.css'),'shared button styles follow preview styles');
  assert(html.includes('site-buttons.js'),'shared mobile arrows remain available');
}
assert(!live.includes('mobile-hero-layout-preview')&&!live.includes('mobile-hero-options-preview'),'live homepage never imports preview files');
assert.equal((hub.match(/<iframe /g)||[]).length,5,'five real mobile views are shown together');
for(const mode of modes){assert(hub.includes(`option=${mode}&amp;embed=1`));assert(page.includes(`value="${mode}"`));}
assert(page.includes('<h2>Let’s Grow <br />Your Business</h2>')&&page.includes('>Let’s Get Started</button>'),'approved form copy preserved');
assert.equal((page.match(/<form data-preview-form/g)||[]).length,(page.match(/<form\b/g)||[]).length);
assert(js.includes("document.addEventListener('submit'")&&js.includes('event.preventDefault();event.stopImmediatePropagation();'),'all preview inquiries blocked');
assert(!page.includes('src="home-hero-motion.js'),'same still image used for direct layout comparison');
assert(css.includes('@media(max-width:760px)'),'layout proposals use mobile-only breakpoint');
assert(css.includes('object-fit:contain')&&css.includes('aspect-ratio:16/9'),'full photo retains landscape ratio');
assert(js.includes("mode === 'form-below' && mobile.matches")&&js.includes('else grid.append(form)'),'form returns to original desktop grid');
assert(js.includes("mode === 'portrait' && mobile.matches"),'portrait substitution is mobile-only');
assert(js.includes('selected.decode()')&&js.includes('new ResizeObserver'),'image readiness and complete frame heights checked');
assert(fs.statSync(path.join(root,'assets/home-hero-options/mobile-portrait-healthcare-preview.jpg')).size<500000,'portrait is compressed for the web');
console.log('PASS: five isolated mobile layouts, noindex comparison hub, preserved content and desktop layout, inert preview forms, compressed portrait photo.');
