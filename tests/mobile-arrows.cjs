const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),js=fs.readFileSync(path.join(root,'site-buttons.js'),'utf8');
// Exercise the actual shared normalizer with a small DOM model, not a second implementation.
let body;
class Node {
 constructor(tag=null,data=''){this.tag=tag;this.data=data;this.children=[];this.attrs={};this.parentNode=null;}
 get parentElement(){return this.parentNode?.tag?this.parentNode:null;}
 get isConnected(){let n=this;while(n&&n!==body)n=n.parentNode;return n===body;}
 get textContent(){return this.tag||this.fragment?this.children.map(n=>n.textContent).join(''):this.data;}
 setAttribute(k,v){this.attrs[k]=v;}
 append(...nodes){for(const node of nodes){if(node.fragment){this.append(...node.children.slice());node.children=[];}else{node.parentNode=this;this.children.push(node);}}}
 replaceWith(node){const parent=this.parentNode,index=parent.children.indexOf(this),nodes=node.fragment?node.children.slice():[node];parent.children.splice(index,1,...nodes);for(const n of nodes)n.parentNode=parent;this.parentNode=null;}
 closest(selectors){for(let node=this;node;node=node.parentNode){if(selectors.split(',').some(s=>{s=s.trim();if(s==='[contenteditable]')return 'contenteditable'in node.attrs;if(s==='[role="button"]')return node.attrs.role==='button';return node.tag===s;}))return node;}return null;}
}
const text=s=>new Node(null,s),element=(tag,...nodes)=>{const n=new Node(tag);n.append(...nodes);return n;};
body=element('body');
const simple=element('a',text('SEO '),element('span',text('↗')));simple.attrs.href='/services/seo.html';
const emoji=element('a',text('Web Design ↗\uFE0F'));
const textStyle=element('a',text('Explore ↗\uFE0E'));
const inline=element('a',text('Read ↗ and ↗\uFE0F'));
const button=element('button',text('Send message ↗'));
const standalone=element('span',text('↗'));
const prose=element('p',text('A ↗ in explanatory copy.'));
const code=element('pre',element('a',text('Code example ↗')));
const editor=element('div',element('a',text('Editable ↗')));editor.attrs.contenteditable='true';
const existingSvg=element('a',element('svg',text('↗')));
const right=element('a',text('Next →'));
body.append(simple,emoji,textStyle,inline,button,standalone,prose,code,editor,existingSvg,right);
const all=(node=body)=>[node,...node.children.flatMap(child=>all(child))];
const mq={matches:false};
const document={body,createTextNode:text,createDocumentFragment:()=>{const n=new Node();n.fragment=true;return n;},createElementNS:(namespace,tag)=>{assert.equal(namespace,'http://www.w3.org/2000/svg');return element(tag);},createTreeWalker:()=>{const texts=all().filter(n=>!n.tag),walker={currentNode:null};let i=0;walker.nextNode=()=>{walker.currentNode=texts[i++];return !!walker.currentNode;};return walker;}};
const context={document,NodeFilter:{SHOW_TEXT:4},matchMedia:()=>mq};vm.createContext(context);
const snippet=js.slice(js.indexOf('  const mobileArrowMedia'),js.indexOf('  function isBlue'));
vm.runInContext(snippet+'\nthis.normalize=normalizeMobileArrows;this.originals=mobileArrowOriginals;',context);
const icons=()=>all().filter(n=>n.attrs.class==='site-mobile-arrow');
const before=body.textContent;context.normalize();assert.equal(body.textContent,before);assert.equal(icons().length,0,'desktop does not replace any arrow');
mq.matches=true;context.normalize();assert.equal(icons().length,7,'all mobile arrow text and variation-selector forms become vectors');
for(const icon of icons()){assert.equal(icon.tag,'svg');assert.equal(icon.attrs['aria-hidden'],'true');assert.equal(icon.attrs.focusable,'false');assert.equal(icon.attrs.stroke,'currentColor');assert.equal(icon.attrs.fill,'none');assert.equal(icon.children[0].attrs.d,'M6 18 18 6M6 6h12v12');}
assert.equal(simple.textContent,'SEO ');assert.equal(simple.attrs.href,'/services/seo.html');assert.equal(prose.textContent,'A ↗ in explanatory copy.');assert.equal(code.textContent,'Code example ↗');assert.equal(editor.textContent,'Editable ↗');assert.equal(existingSvg.textContent,'↗');assert.equal(right.textContent,'Next →');
context.normalize();assert.equal(icons().length,7,'normalization is idempotent');
const late=element('a',text('Late-rendered service ↗'));body.append(late);context.normalize();assert.equal(icons().length,8,'late-rendered services are covered');
mq.matches=false;context.normalize();assert.equal(icons().length,0);assert.equal(context.originals.size,0);assert.equal(body.textContent,before+'Late-rendered service ↗','resizing to desktop restores the exact text and variation selectors');
mq.matches=true;context.normalize();assert.equal(icons().length,8);const removed=icons()[0];removed.replaceWith(text(''));context.normalize();assert.equal(context.originals.size,7,'detached icons are released');
const css=fs.readFileSync(path.join(root,'site-buttons.css'),'utf8');
assert(/@media\(max-width:800px\)\{\s*html body svg\.site-mobile-arrow/.test(css),'vector style is mobile-only');
assert(css.includes('stroke:currentColor!important'),'arrows inherit the existing text color');
assert(css.includes('fill:none!important'),'arrows have no emoji tile or filled background');
assert(js.includes("mobileArrowMedia.addEventListener('change', () => normalize())"),'breakpoint changes restore desktop');
assert(js.includes('if (scanArrows) normalizeMobileArrows()'),'animation-only style updates do not scan the whole text tree');
let pages=0;
function needsMobileArrows(html){
 // Discover full VNW pages independently of whether they already load the fix.
 // Bare redirect stubs and reusable fragments are not standalone site pages.
 return /<html\b/i.test(html) && (!/<meta\b[^>]*http-equiv=["']refresh["']/i.test(html) || /site-buttons\.js/.test(html)) &&
  /(?:src|href)=["'](?:\.\.\/)*(?:styles\.css|script\.js|pages\.js|location-pages\.js|site-buttons\.js)(?:[?"'])/.test(html);
}
assert(needsMobileArrows('<html><link href="../styles.css?v=test"><a>SEO ↗</a></html>'),'coverage detects pages missing the shared fix');
assert(!needsMobileArrows('<html><meta http-equiv="refresh" content="0;url=../work.html"><link href="../styles.css"></html>'),'redirects are excluded');
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','assets','Liquid Soldier','ai-intake-system-wordpress-upload'].includes(item.name))continue;const file=path.join(dir,item.name);if(item.isDirectory())walk(file);else if(item.name.endsWith('.html')){const html=fs.readFileSync(file,'utf8');if(!needsMobileArrows(html))continue;pages++;for(const extension of ['css','js']){const version=extension==='css'?'20261017-mobile-arrows':'20261017-menu-contact-sheet';const matches=html.match(new RegExp(`(?:src|href)=["'](?:\\.\\./)*site-buttons\\.${extension}\\?v=${version}["']`,'g'))||[];assert.equal(matches.length,1,file+' loads the current shared '+extension+' exactly once');}}}}
walk(root);assert(pages>=226,'all retained regular/utility pages and compatible redirects are covered');
console.log(`PASS: ${pages} pages; plain/emoji/text variants, inline and nested arrows, dynamic content, protected text, inherited colors, unchanged links, idempotence, desktop restoration and mobile-only styles.`);
