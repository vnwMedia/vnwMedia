const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),source=fs.readFileSync(path.join(root,'home-hero-motion.js'),'utf8');
const flush=async()=>{for(let i=0;i<6;i++)await Promise.resolve();};
async function scenario({reduced=false,slow=false}={}){
  const frames=new Map(),timers=[],events={},mediaEvents={};let id=0,observer,release;
  const blocked=new Promise(resolve=>{release=resolve;});
  const images=Array.from({length:8},(_,i)=>({dataset:i?{src:`slide-${i}.webp`,srcset:`slide-${i}-small.webp 960w`}:{},style:{},decode:()=>i===1&&slow?blocked:Promise.resolve(),closest:()=>({})}));
  images[0].src='slide-0.webp';
  const document={hidden:false,querySelectorAll:()=>images,querySelector:s=>s==='.motion-media'?images[0]:null,getElementById:()=>null,addEventListener:(name,fn)=>{events[name]=fn;}};
  const media={matches:reduced,addEventListener:(name,fn)=>{mediaEvents[name]=fn;}};
  const c={document,matchMedia:()=>media,setTimeout:fn=>{timers.push(fn);},requestAnimationFrame:fn=>{frames.set(++id,fn);return id;},cancelAnimationFrame:n=>frames.delete(n),IntersectionObserver:class{constructor(fn){observer=fn;}observe(){}}};
  c.window=c;vm.createContext(c);vm.runInContext(source,c);await flush();
  if(timers.length){timers.shift()();await flush();}
  let time=0;
  const tick=async(count=1)=>{for(let n=0;n<count;n++){const queue=[...frames.values()];frames.clear();for(const fn of queue)fn(time);time+=100;await flush();}};
  return {images,frames,events,mediaEvents,media,document,tick,release,observer:visible=>observer([{isIntersecting:visible}])};
}
(async()=>{
 const s=await scenario();await s.tick();
 assert.equal(s.images.filter(i=>i.src).length,2,'initial load requests only first and next slide');
 await s.tick(65);assert(s.images[1].style.opacity>0,'next slide fades in');
 assert.equal(s.images.filter(i=>i.src).length,3,'only the following slide is prefetched');
 s.observer(false);assert.equal(s.frames.size,0,'off-screen animation stops');
 s.observer(true);assert.equal(s.frames.size,1,'visible animation resumes');
 s.document.hidden=true;s.events.visibilitychange();assert.equal(s.frames.size,0);
 s.document.hidden=false;s.events.visibilitychange();assert.equal(s.frames.size,1);
 s.media.matches=true;s.mediaEvents.change();assert.equal(s.frames.size,0,'reduced motion stops the loop');
 const r=await scenario({reduced:true});assert.equal(r.frames.size,0);assert.equal(r.images.filter(i=>i.src).length,1,'reduced motion does not download hidden slides');
 const slow=await scenario({slow:true});await slow.tick(80);assert.equal(slow.images[0].style.opacity,1,'slow image decoding never exposes a blank frame');
 slow.release();await flush();await slow.tick(20);assert(slow.images[1].style.opacity>0,'transition resumes when decoded');
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),css=fs.readFileSync(path.join(root,'styles.css'),'utf8');
 assert(!html.includes('fonts.googleapis.com'),'homepage has no third-party font stylesheet');
 assert(!css.startsWith('@import'),'shared CSS has no blocking font import');
 assert(css.includes('body[data-page="home"] .trust-factors{grid-template-columns:repeat(2,minmax(0,1fr))}'),'narrow-phone trust labels cannot force horizontal overflow');
 for(const font of ['inter-latin','fraunces-latin'])assert.equal(fs.readFileSync(path.join(root,'assets/fonts',font+'.woff2')).subarray(0,4).toString(),'wOF2');
 assert(html.includes('srcset="assets/home-team-circle-option-3-480.webp'));
 assert(html.includes('width="646" height="128"'),'logo reserves its dimensions');
 assert(html.indexOf('site-buttons.css')>html.indexOf('home-hero-motion.css'),'shared button styles remain last');
 for(const width of [480,960])assert(fs.statSync(path.join(root,`assets/home-team-circle-option-3-${width}.webp`)).size<fs.statSync(path.join(root,'assets/home-team-circle-option-3.webp')).size);
 console.log('PASS: progressive image loading, slow-network fallback, hidden-tab/off-screen pause, reduced motion, local fonts, responsive images, shared buttons.');
})().catch(e=>{console.error(e);process.exitCode=1;});
