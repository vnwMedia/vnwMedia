const fs=require('node:fs'),http=require('node:http'),assert=require('node:assert/strict');
// Local HTTP fixture only: never targets production or sends email.
const path=require('node:path');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'../theme/vnw-media'),sent=[];
const fields='<input type="hidden" name="action" value="vnw_contact"><input name="name" required><input name="email" type="email" required><input name="website" type="url"><button type="submit">Send test</button>';
const server=http.createServer((req,res)=>{
 if(req.method==='POST'){let body='';req.on('data',b=>body+=b);req.on('end',()=>{sent.push(body);res.end('<h1>Test submission received</h1>');});return;}
 if(['/clean-urls.js','/form-bridge.js'].includes(req.url)){res.setHeader('Content-Type','application/javascript');res.end(fs.readFileSync(root+req.url));return;}
 res.setHeader('Content-Type','text/html');res.end('<h1>Loop regression</h1><a href="/contact.html">Contact</a><form data-vnw-form>'+fields+'</form><button id="mobile">Open mobile</button><script>window.vnwSite={home:location.origin+"/",formAction:location.origin+"/wp-admin/admin-post.php",nonce:"test-nonce"};window.vnwCleanRoutes={home:location.origin+"/",routes:{"contact.html":"contact/",contact:"contact/"}};document.querySelector("#mobile").onclick=()=>{const f=document.createElement("form");f.id="vnw-mobile-email-form";f.innerHTML='+JSON.stringify(fields)+';document.body.append(f)};</script><script src="/form-bridge.js"></script><script src="/clean-urls.js"></script>');
});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;const b=await chromium.launch({...(process.env.VNW_CHROME_PATH?{executablePath:process.env.VNW_CHROME_PATH}:process.platform==='darwin'?{executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}:{}),headless:true});
 try{for(const width of [1280,390]){const p=await b.newPage({viewport:{width,height:844}});await p.goto(base);if(width===390)await p.locator('#mobile').click();const form=p.locator(width===390?'#vnw-mobile-email-form':'form[data-vnw-form]').first();
  await form.locator('[name=name]').fill('Loop test');await form.locator('[name=email]').fill('qa@example.com');await form.locator('[name=website]').fill('example.com');
  assert.equal(await form.getAttribute('action'),base+'/wp-admin/admin-post.php');assert.equal(await form.locator('[name=action]').inputValue(),'vnw_contact');
  assert.equal(await p.locator('a').getAttribute('href'),base+'/contact/');
  await form.locator('button').click();await p.locator('h1').filter({hasText:'Test submission received'}).waitFor();await p.close();}
 assert.equal(sent.length,2);for(const body of sent){const d=new URLSearchParams(body);assert.equal(d.get('action'),'vnw_contact');assert.equal(d.get('vnw_nonce'),'test-nonce');}
 console.log('PASS: desktop and dynamic mobile forms stay responsive, preserve their WordPress endpoint/hidden action/nonce, normalize navigation, and submit exactly once. No mail sent.');
 }finally{await b.close();server.close();}
})().catch(e=>{console.error(e);process.exitCode=1;server.close();});
