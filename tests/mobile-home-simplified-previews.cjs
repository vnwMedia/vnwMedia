const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const live=read('index.html'),page=read('mobile-home-simplified-preview.html'),hub=read('mobile-home-simplified-options.html');
const css=read('mobile-home-simplified-preview.css'),js=read('mobile-home-simplified-preview.js');
for(const html of [page,hub]){
  assert(html.includes('name="robots" content="noindex,nofollow"'));
  assert(html.indexOf('preview.css')<html.indexOf('site-buttons.css')||html.indexOf('options.css')<html.indexOf('site-buttons.css'));
  assert(html.includes('lead-attribution.js')&&html.includes('site-buttons.js'));
}
assert(!live.includes('mobile-home-simplified'),'live homepage does not import any study files');
assert.equal((hub.match(/<iframe /g)||[]).length,3);
for(const mode of ['light','focused','minimal']){assert(hub.includes(`option=${mode}&amp;embed=1`));assert(page.includes(`value="${mode}"`));}
assert(page.includes('<h2>Let’s Grow <br />Your Business</h2>')&&page.includes('>Let’s Get Started</button>'));
assert(page.includes('Digital marketing that <em>gets your business results.</em>'));
assert(page.includes('mobile-hero-focal-points.css'),'approved focal points retained');
assert.equal((page.match(/<form data-preview-form/g)||[]).length,(page.match(/<form\b/g)||[]).length);
assert(js.includes("document.addEventListener('submit'")&&js.includes('event.preventDefault();event.stopImmediatePropagation();'));
assert(!page.includes('src="home-hero-motion.js'),'same paused photo in each comparison');
assert(css.includes('@media(max-width:760px)'));
assert(js.includes("mobile.matches && select.value === 'focused'")&&js.includes("mobile.matches && select.value === 'minimal'"));
assert(js.includes('else grid.insertBefore(form,disclosure)'),'same five-field form returns to the desktop grid');
assert(js.includes('dialog.showModal()')&&js.includes('dialog.close()'),'native accessible modal supports close and Escape');
assert(js.includes('disclosure.open = true'),'main action opens the compact form');
assert(js.includes('selected.decode()')&&js.includes('new ResizeObserver'),'wait for photo readiness and report complete frame sizes');
assert(css.includes('@media(prefers-reduced-motion:reduce)'));
console.log('PASS: three isolated, mobile-only simplification options; unchanged headline/brand/form; progressive disclosure and native dialog; inert forms; desktop restoration.');
