const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),source=fs.readFileSync(path.join(root,'tickers.js'),'utf8');
const start=source.indexOf('    // Measure after web fonts settle;');
const end=source.indexOf('\n  }\n\n  if (document.readyState',start);
assert(start>=0&&end>start,'exercise the actual shared resize/font scheduling code');
const helperStart=source.indexOf('  function tickerMeasurementsChanged(');
const helperEnd=source.indexOf('\n  function initializeTickers()',helperStart);
const helper=helperStart>=0?source.slice(helperStart,helperEnd):'';
async function scenario({fonts=true}={}){
 const events={},fontEvents={},frames=new Map(),builds=[],observed=[];let nextFrame=0,observer;
 const records=[390,300].map((width,index)=>({viewport:{clientWidth:width},cycle:{width:2400+index*400,getBoundingClientRect(){return {width:this.width};}},lastWidth:0,lastCycleWidth:0,speed:42}));
 const build=record=>{builds.push(records.indexOf(record));record.lastWidth=record.viewport.clientWidth;record.lastCycleWidth=record.cycle.width;};
 const context={records,build,Math,Promise,document:{fonts:fonts?{ready:Promise.resolve(),addEventListener:(name,fn)=>fontEvents[name]=fn}:undefined},window:{addEventListener:(name,fn,options)=>{assert(options.passive);events[name]=fn;}},requestAnimationFrame:fn=>{frames.set(++nextFrame,fn);return nextFrame;},cancelAnimationFrame:id=>frames.delete(id),ResizeObserver:class{constructor(fn){observer=fn;}observe(viewport){observed.push(viewport);}}};
 vm.createContext(context);vm.runInContext(helper+'\n'+source.slice(start,end),context);await Promise.resolve();await Promise.resolve();
 const flush=()=>{const queue=[...frames.values()];frames.clear();queue.forEach(fn=>fn());};
 const notify=()=>observer(records.map(record=>({target:record.viewport,contentRect:{width:record.viewport.clientWidth-14,height:72}})));
 return {records,builds,events,fontEvents,frames,flush,notify,observed};
}
(async()=>{
 const s=await scenario();assert.deepEqual(s.builds,[0,1]);assert.equal(s.observed.length,2);
 s.notify();s.flush();assert.deepEqual(s.builds,[0,1],'initial observer delivery must not reset the animation when logo padding differs from the content-box width');
 for(let i=0;i<20;i++)s.events.resize();s.flush();assert.deepEqual(s.builds,[0,1],'mobile address-bar height changes must never rebuild or restart either ticker');
 assert.equal(s.frames.size,0,'resize burst is coalesced and flushed');
 s.notify();s.flush();assert.deepEqual(s.builds,[0,1],'height-only observer notifications do not reset the loop');
 s.fontEvents.loadingdone();s.flush();assert.deepEqual(s.builds,[0,1],'loading an unrelated font does not reset an unchanged ticker');
 s.records[0].viewport.clientWidth=414;s.events.resize();s.flush();assert.deepEqual(s.builds,[0,1,0],'real width changes rebuild only the affected track');
 s.notify();s.flush();assert.deepEqual(s.builds,[0,1,0],'consistent client-width measurements prevent observer feedback rebuilds');
 s.records[1].cycle.width+=100;s.fontEvents.loadingdone();s.flush();assert.deepEqual(s.builds,[0,1,0,1],'real font/text measurement changes still refresh the affected cycle');
 s.records[0].viewport.clientWidth=1280;s.events.resize();s.flush();assert.equal(s.builds.at(-1),0,'desktop resizing still measures the track');
 const desktopBuilds=s.builds.length;s.events.resize();s.flush();assert.equal(s.builds.length,desktopBuilds,'desktop height-only resize also retains the animation');
 s.records[0].viewport.clientWidth=0;s.events.resize();s.flush();assert.equal(s.builds.length,desktopBuilds,'hidden zero-width tracks are not needlessly rebuilt');
 s.records[0].viewport.clientWidth=390;s.notify();s.flush();assert.equal(s.builds.length,desktopBuilds+1,'track is measured again when it becomes visible');
 const fallback=await scenario({fonts:false});fallback.events.resize();fallback.flush();assert.deepEqual(fallback.builds,[0,1],'font-API fallback keeps the same resize safeguards');
 assert(source.includes('const speed = isServices ? 42'),'existing ticker pace is unchanged');
 const css=fs.readFileSync(path.join(root,'tickers.css'),'utf8');assert(css.includes('animation-play-state:running!important'));assert(css.includes('@media(prefers-reduced-motion:reduce)'));
 let wiredPages=0;
 function verifyVersions(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','assets','Liquid Soldier','ai-intake-system-wordpress-upload'].includes(item.name))continue;const file=path.join(dir,item.name);if(item.isDirectory())verifyVersions(file);else if(item.name.endsWith('.html')){const html=fs.readFileSync(file,'utf8'),scripts=[...html.matchAll(/<script\b[^>]*src=["']([^"']*tickers\.js[^"']*)["']/g)].map(match=>match[1]);if(!scripts.length)continue;const assetBase=html.match(/<base href="([^"]+)"/)?.[1]||'';assert.equal(scripts.length,1,file+' loads the shared ticker once');assert.equal(scripts[0].split('?')[1],html.includes('data-page="work"')?'v=20261019-work-client-only':'v=20261018-mobile-scroll-continuity',file+' gets the scroll-continuity fix');assert(fs.existsSync(path.resolve(path.dirname(file),assetBase,scripts[0].split('?')[0])));wiredPages++;}}}
 verifyVersions(root);assert(wiredPages>=198,'all existing pages that use the shared ticker remain covered');
 for(const file of ['scripts/build-industries.mjs','scripts/build-resources.py','scripts/generate-nyc-borough-location-pages.py'])assert(fs.readFileSync(path.join(root,file),'utf8').includes('tickers.js?v=20261018-mobile-scroll-continuity'),'future generated pages load the fix');
 console.log(`PASS: all ${wiredPages} ticker pages and all three page generators load the refreshed shared ticker script.`);
 console.log('PASS: mobile height-only resize and initial/height-only observer events never restart the ticker; unrelated fonts ignored; true width/text changes selectively rebuild; desktop pace, continuous scrolling and reduced motion preserved.');
})().catch(error=>{console.error(error);process.exitCode=1;});
