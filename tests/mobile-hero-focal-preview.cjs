const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const live=read('index.html'),html=read('mobile-hero-focal-preview.html'),css=read('mobile-hero-focal-preview.css'),js=read('mobile-hero-focal-preview.js');
assert(html.includes('name="robots" content="noindex,nofollow"'));
assert(!live.includes('mobile-hero-focal-preview'),'live homepage never loads preview code');
assert(!html.includes('src="home-hero-motion.js'),'preview holds still frames for fair comparison');
assert(html.includes('defer src="mobile-hero-focal-preview.js'));
assert(html.indexOf('mobile-hero-focal-preview.css')<html.indexOf('site-buttons.css'),'shared button styling stays last');
for(const className of ['hero-bg motion-media','shell hero-grid','hero-copy reveal','hero-form reveal']){
 assert(html.includes(`class="${className}"`),'preview retains '+className);
}
assert.equal((html.match(/<form data-preview-form/g)||[]).length,(html.match(/<form\b/g)||[]).length,'all static preview forms are inert');
assert(js.includes("document.addEventListener('submit'"));assert(js.includes('event.preventDefault(); event.stopImmediatePropagation();'));
assert.equal((html.match(/<option value=/g)||[]).length,8,'all slideshow scenes can be compared');
assert(css.startsWith('/* Isolated Option 1 study. No sizing, image, overlay or desktop crop changes. */\n@media(max-width:760px)'));
const cropRule=css.slice(0,css.indexOf('.focal-preview-controls'));
assert(cropRule.includes('object-position:var(--focal-x,50%) top!important'));
assert(!/object-fit|transform|filter|height:|width:|background:/.test(cropRule.match(/img\{([\s\S]*?)\}/)[1]),'the experiment changes focal position only');
assert(js.includes('selected.decode()'),'selected image finishes loading before comparison');
assert(!js.includes('scale(')&&!js.includes('requestAnimationFrame'),'still-frame size is unchanged');
assert(live.includes('src="home-hero-motion.js?v=20261016-progressive"'),'live slideshow remains untouched');
console.log('PASS: isolated noindex preview, unchanged live homepage, mobile-only crop position, all 8 scene controls, stable still-frame comparison, shared styles and disabled preview submissions.');
