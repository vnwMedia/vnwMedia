const {chromium}=require('/Users/vnwmediallc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs');
const base=process.env.VNW_TEST_URL||'http://127.0.0.1:9425';
const output=process.env.VNW_TEST_REPORT||'/tmp/vnw-latest-forms.json';
if(!['localhost','127.0.0.1'].includes(new URL(base).hostname))throw Error('Disposable local tests only');
const result={scenarios:[],javascriptErrors:[],delivery:'intercepted locally; inbox not tested'};

(async()=>{
 const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000},serviceWorkers:'block'});
  await context.route('https://**',r=>r.abort());
  await context.addCookies([{name:'playground_auto_login_already_happened',value:'1',domain:new URL(base).hostname,path:'/'}]);
  const page=await context.newPage();page.setDefaultTimeout(60000);
  page.on('pageerror',e=>result.javascriptErrors.push(e.message));
  const healthcare='/industries/healthcare/ppc/';
  await page.goto(base+healthcare,{waitUntil:'domcontentloaded'});
  // Old cached markup and newly inserted forms must receive the same correction.
  await page.evaluate(()=>{
   const form=document.createElement('form');form.id='vnw-test-dynamic';form.dataset.vnwForm='';
   form.innerHTML='<input name="website" type="url"><input name="email" type="email" required>';
   document.body.append(form);
  });
  await page.waitForFunction(()=>document.querySelector('#vnw-test-dynamic [name=website]')?.type==='text');
  const dynamic=page.locator('#vnw-test-dynamic');
  await dynamic.locator('[name=website]').fill('www.aol.com');
  await dynamic.locator('[name=email]').fill('qa@example.com');
  if(!await dynamic.evaluate(f=>f.checkValidity()))throw Error('Dynamically inserted bare website rejected');
  await dynamic.evaluate(f=>f.remove());result.dynamicLegacyForm='passed';
  const noScript=await browser.newContext({javaScriptEnabled:false,serviceWorkers:'block'});
  await noScript.addCookies([{name:'playground_auto_login_already_happened',value:'1',domain:new URL(base).hostname,path:'/'}]);
  const plain=await noScript.newPage();await plain.goto(base+healthcare,{waitUntil:'domcontentloaded'});
  if(await plain.locator('form[data-vnw-form] input[name=website]').first().getAttribute('type')!=='text')throw Error('Server-rendered website fix requires JavaScript');
  await noScript.close();result.withoutJavaScript='passed';
  const cases=[
   {path:healthcare,website:'www.aol.com'},
   {path:'/',website:'aol.com'},
   {path:'/contact.html',website:'https://www.aol.com'},
   {path:healthcare,website:'http://www.aol.com'},
  ];
  async function fill(form,website,label){
   for(const [name,value] of Object.entries({name:label,company:'Intercepted local test',phone:'2025550100',email:'qa@example.com',website,message:'Website field regression test'})){
    const field=form.locator('[name="'+name+'"]');if(await field.count())await field.fill(value);
   }
  }
  async function checkMail(website,label){
   await page.waitForURL('**/thank-you.html');
   const mail=await(await context.request.get(base+'/wp-json/vnw-test/v1/mail')).json();
   if(![mail.to].flat().includes('contactus@vnwmedia.com')||!mail.message.includes(label)||!mail.message.includes('Website: '+website+'\n'))throw Error('Submitted website value or mail context missing');
   if(!/thank/i.test(await page.locator('h1').innerText()))throw Error('Thank-you page missing');
   for (const field of ['Name','Email','Website']) if ((mail.message.match(new RegExp('^'+field+': ', 'gm'))||[]).length!==1) throw Error('Duplicated '+field+' field');
   if (/Lead_context:/i.test(mail.message)) throw Error('Raw context duplicated');
   if (!mail.message.startsWith('NEW WEBSITE INQUIRY\n') || !mail.message.includes('Form: ') || !mail.message.includes('Page: ')) throw Error('Concise summary missing');
   if (![mail.headers].flat().includes('Reply-To: qa@example.com')) throw Error('Reply-To changed');
   const reviews=page.locator('#thank-you-reviews');
   if (await reviews.locator('.testimonial-ticker-card').count()<22) throw Error('Thank-you missing client reviews');
   if (await reviews.evaluate(e=>getComputedStyle(e).backgroundColor)!=='rgb(238, 234, 227)') throw Error('Thank-you light palette missing');
   return mail;
  }
  for(const [index,item] of cases.entries()){
   await page.goto(base+item.path,{waitUntil:'domcontentloaded'});
   const form=page.locator('form[data-vnw-form]').first();
   const label='Website QA desktop '+index;
   await fill(form,item.website,label);
   const website=form.locator('[name=website]');
   if(await website.getAttribute('type')!=='text'||await website.getAttribute('inputmode')!=='url')throw Error('Website still requires a protocol');
   await website.fill('');
   if(!await form.evaluate(f=>f.checkValidity()))throw Error('Optional website became required');
   await website.fill(item.website);
   await form.locator('[name=email]').fill('invalid-email');
   if(await form.evaluate(f=>f.checkValidity()))throw Error('Email validation was removed');
   await form.locator('[name=email]').fill('qa@example.com');
   await form.locator('[name=name]').fill('');
   if(await form.evaluate(f=>f.checkValidity()))throw Error('Required name validation was removed');
   await form.locator('[name=name]').fill(label);
   if(!await form.evaluate(f=>f.checkValidity()))throw Error('Valid form was blocked: '+item.website);
   await form.locator('button[type=submit],input[type=submit]').first().click();
   await checkMail(item.website,label);
   result.scenarios.push({...item,viewport:'desktop',submitted:true,thankYou:true,emailAndRequiredValidation:true,optionalWebsite:true});
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+healthcare+'?utm_source=test&utm_campaign=website-field-qa',{waitUntil:'domcontentloaded'});
  await page.locator('.vnw-mobile-contact__trigger').click();
  await page.locator('.vnw-mobile-contact__choices a[href^="mailto:"]').click();
  const mobile=page.locator('#vnw-mobile-email-form');
  await fill(mobile,'www.aol.com','Website QA mobile');
  if(!await mobile.evaluate(f=>f.checkValidity()))throw Error('Mobile www address rejected');
  await mobile.locator('[name=website]').fill('aol.com');
  if(!await mobile.evaluate(f=>f.checkValidity()))throw Error('Mobile bare domain rejected');
  await page.locator('.vnw-mobile-email-sheet__send').click();
  const mail=await checkMail('aol.com','Website QA mobile');
  if(!mail.message.includes('healthcare/ppc')||!mail.message.includes('website-field-qa'))throw Error('Mobile source/campaign context missing');
  result.scenarios.push({viewport:'mobile',website:'aol.com',wwwAccepted:true,submitted:true,thankYou:true,sourceAndCampaign:true});
  const invalid=await context.request.post(base+'/wp-admin/admin-post.php',{form:{action:'vnw_contact',name:'Test',email:'qa@example.com',return_to:base+'/contact.html'},maxRedirects:0});
  if(!invalid.headers().location?.includes('inquiry=error'))throw Error('Invalid nonce accepted');
  result.invalidNonce='rejected';
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base+'/thank-you.html',{waitUntil:'domcontentloaded'});
  await page.screenshot({path:'/tmp/vnw-latest-thank-you-desktop.jpg',type:'jpeg',quality:85,fullPage:true});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'/tmp/vnw-latest-thank-you-mobile.jpg',type:'jpeg',quality:85,fullPage:true});
  result.emailSummary='one summary with one copy of each field; attribution and Reply-To retained';
  result.thankYou='hero, services strip, 22 reviews, shared light palette';
  if(result.javascriptErrors.length)throw Error('Browser JavaScript errors');
  fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
