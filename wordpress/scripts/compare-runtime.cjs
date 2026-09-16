const {chromium}=require('/Users/vnwmediallc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');const fs=require('fs');const root=require('path').resolve(__dirname,'../..');
(async()=>{const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});const p=await b.newPage();await p.route('https://**',r=>r.abort());let results=[];
for(const width of [1440,390])for(const file of ['index.html','our-story.html','work.html','services.html','industries.html','case-studies.html','resources.html','resources/professional-website-design-solutions-that-help-new-jersey-businesses-grow.html']){
 await p.setViewportSize({width,height:1000});let sizes=[];
 for(const base of ['file://'+root+'/', 'http://127.0.0.1:9402/']){await p.goto(base+file,{waitUntil:'load'});await p.evaluate(()=>Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode().catch(()=>{});})));await p.waitForTimeout(500);sizes.push(await p.evaluate(()=>({height:document.querySelector('main').getBoundingClientRect().height,hero:document.querySelector('main>section, main .sd-hero')?.getBoundingClientRect().height,overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src)})));}
 results.push({width,file,source:sizes[0],wordpress:sizes[1]});console.log(width,file,Math.round(sizes[1].height-sizes[0].height),sizes[1].broken.length,sizes[1].overflow);
 if(file==='resources.html')await p.screenshot({path:'/private/tmp/vnw-wp-resources-'+width+'.png'});
}
fs.writeFileSync('/private/tmp/vnw-wp-comparison.json',JSON.stringify(results,null,2));await b.close();})();
