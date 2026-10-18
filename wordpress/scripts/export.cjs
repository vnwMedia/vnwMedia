// Capture generated page content before interactive enhancements clone tickers.
const fs=require('fs'), path=require('path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || '/Users/vnwmediallc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const project=path.resolve(__dirname,'../..'), root=process.env.VNW_SOURCE_ROOT||project, out=path.join(project,'wordpress/theme/vnw-media/content');
(async()=>{
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
await page.route('**/*',async route=>{
 const u=route.request().url();
 if(/^https?:/.test(u))return route.abort();
 const name=new URL(u).pathname.split('/').pop();
 if(['script.js','tickers.js','resources-live.js','site-buttons.js','lead-attribution.js','home-hero-motion.js'].includes(name))return route.fulfill({body:''});
 return route.continue();
});
const inventory=JSON.parse(fs.readFileSync(path.join(project,'wordpress/page-inventory.json')));
const records=[];
for(const record of inventory.records){
 if(record.type==='redirect'){records.push(record);continue;}
 errors.length=0;
 await page.goto('file://'+path.join(root,record.source),{waitUntil:'load'});
 // Apply only the shared navigation/directory setup, not animation or event setup.
 const script=fs.readFileSync(path.join(root,'script.js'),'utf8');
 await page.addScriptTag({content:script.slice(script.indexOf('const siteHeaderElement'),script.indexOf('function markCurrentPrimaryNavigation'))});
 const data=await page.evaluate(()=>{
  const main=document.querySelector('main');
  if(!main)throw Error('Missing main');
  const heading=document.querySelector('h1');
  const backgrounds=[];
  function scan(el,path){ const image=getComputedStyle(el).backgroundImage;
   if(image.includes('url(')&&!el.style.backgroundImage.includes('url('))backgrounds.push({path,tag:el.tagName.toLowerCase(),classes:el.className,image});
   [...el.children].forEach((child,i)=>scan(child,[...path,i])); }
  scan(main,[]);
  return {title:heading?.textContent.trim()||document.title,document_title:document.title,
   backgrounds,html:main.outerHTML,header:document.querySelector('.site-header')?.outerHTML,
   footer:document.querySelector('#vnw-site-footer')?.outerHTML,
   body_attributes:Object.fromEntries([...document.body.attributes].map(a=>[a.name,a.value])),
   inline_styles:[...document.querySelectorAll('head style')].map(x=>x.textContent),
   description:document.querySelector('meta[name="description"]')?.content||'',
   schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(x=>x.textContent)};
 });
 if(errors.length)throw Error(record.source+': '+errors.join('; '));
 function normalize(html){
  return html.replaceAll('file://'+root+'/','{{THEME}}').replaceAll('https://vnwmedia.github.io/vnwMedia/','{{HOME}}');
 }
 data.html=normalize(data.html);data.header=normalize(data.header||'');data.footer=normalize(data.footer||'');
 records.push({...record,...data});
 console.log(record.source);
}
fs.writeFileSync(path.join(out,'export.json'),JSON.stringify({baseline:inventory.baseline_commit,records},null,2));
fs.writeFileSync(path.join(project,'wordpress/theme/vnw-media/elementor/backgrounds.json'),JSON.stringify(Object.fromEntries(records.filter(r=>r.backgrounds).map(r=>[r.source,r.backgrounds.map(b=>({...b,image:b.image.replaceAll('file://'+root+'/','{{THEME}}')}))]))));
await browser.close();
})();
