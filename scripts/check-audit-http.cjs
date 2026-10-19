// Read-only HTTP checks: never submit a form, follow admin actions, or send an email.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),mode=process.argv[2]||'local';
if(!['local','public','external'].includes(mode))throw Error('Expected local, public, or external');
const audit=JSON.parse(fs.readFileSync(path.join(root,'reports/navigation-images-validation-2026-10-19.json'),'utf8'));
const local='http://127.0.0.1:8765/vnwMedia/',live='https://vnwmedia.github.io/vnwMedia/';
const urls=mode==='external'?audit.external_destinations_not_submitted.filter(u=>!u.startsWith(live)):audit.targets.map(t=>mode==='public'?t.url.replace(local,live):t.url);
const results=[];let cursor=0;
async function worker(){while(cursor<urls.length){const url=urls[cursor++];try{const r=await fetch(url,{method:'GET',headers:{Range:'bytes=0-1023'},signal:AbortSignal.timeout(15000)});await r.body?.cancel();results.push({url,status:r.status,final:r.url,type:r.headers.get('content-type')});}catch(e){results.push({url,error:e.message});}}}
Promise.all(Array.from({length:8},worker)).then(()=>{
 const report={mode,date:'2026-10-19',checked:results.length,passed:results.filter(r=>r.status>=200&&r.status<300).length,failures:results.filter(r=>!(r.status>=200&&r.status<300)),results};
 fs.writeFileSync(path.join(root,'reports/navigation-http-'+mode+'-2026-10-19.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify({...report,results:undefined},null,2));if(mode!=='external'&&report.failures.length)process.exitCode=1;
});
