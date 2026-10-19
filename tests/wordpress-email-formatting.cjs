const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process'),assert=require('node:assert/strict'),{test}=require('node:test');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
test('WordPress inquiry formatter removes the duplicate body without changing delivery',async t=>{
 const patch=path.join(root,'wordpress/email-formatting/fix-email-format.patch');
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'vnw-email-format-test-'));
 try {
  const theme=path.join(temp,'wordpress/theme/vnw-media');fs.mkdirSync(theme,{recursive:true});
  const baseline=read('tests/fixtures/wordpress-contact-handler-0.4.3.php');
  fs.writeFileSync(path.join(theme,'functions.php'),baseline);
  for(const args of [['apply','--check',patch],['apply',patch]]){
   const applied=cp.spawnSync('git',args,{cwd:temp,encoding:'utf8'});assert.equal(applied.status,0,applied.stderr);
  }
  const fixed=fs.readFileSync(path.join(theme,'functions.php'),'utf8');
  const helper=fs.readFileSync(path.join(theme,'inquiry-email.php'),'utf8');
  assert.equal(helper,read('wordpress/email-formatting/inquiry-email.php'),'patch includes the exact tested formatter');
  const oldLine=baseline.split('\n').find(line=>line.startsWith(" $body='';foreach"));
  assert.equal(fixed.replace(" require_once __DIR__.'/inquiry-email.php';\n $body=vnw_inquiry_email_body($_POST);",oldLine),baseline,'all validation, rate limiting, recipient, subject, Reply-To and redirects remain byte-for-byte unchanged');
  const fixture=JSON.parse(read('tests/fixtures/lead-email-example.json'));
  const fields={name:'Alex Morgan',company:'Example Dental',phone:'(202) 555-0147',email:'alex@example.com',website:'https://example.com',interest:'Search Engine Optimization',message:'',source_page:'https://vnwmedia.github.io/vnwMedia/services/seo.html',source_title:'SEO Strategy & Services | VNW Media',form_name:'Page contact form',lead_context:fixture.body,vnw_nonce:'test-valid-nonce',return_to:'https://vnwmedia.net/services/seo.html'};
  const input=JSON.stringify({fields});
  const files={'before.php':baseline.replace('function vnw_contact(){','function vnw_contact_before_fix(){'),'functions.php':fixed,'inquiry-email.php':helper,'test.php':read('tests/wordpress-email-formatting.php'),'input.json':input};
  const check=data=>{
   const r=data.results,body=name=>{assert.equal(r[name].mails.length,1,name+' sends exactly once');return r[name].mails[0].body;};
   assert.equal((body('before').match(/^Name:/gm)||[]).length,2,'the original handler reproduces the screenshot');
   assert.equal(body('hero'),fixture.body+'\n','one concise summary keeps full attribution and campaign');
   assert.equal(body('mobile'),fixture.body.replace('Hero strategy form (Desktop)','Mobile quick-contact form (Mobile)')+'\n');
   for(const name of ['hero','mobile','contact','fallback','malformed','mismatch','minimal']){
    const value=body(name);assert.equal((value.match(/^Name:/gm)||[]).length,1,name+' name once');assert.equal((value.match(/^Email:/gm)||[]).length,1,name+' email once');
    assert(!value.includes('Lead_context:')&&!value.includes('Source_page:')&&!value.includes('Source_title:')&&!value.includes('Form_name:'),name+' no redundant raw-field block');
    const mail=r[name].mails[0];assert.equal(mail.recipient,'contactus@vnwmedia.com');assert.equal(mail.subject,'VNW Media website inquiry');assert.deepEqual(mail.headers,['Reply-To: alex@example.com']);assert.equal(r[name].redirect,'https://vnwmedia.net/thank-you.html');
   }
   assert(body('fallback').includes('Message:\nPlease help us.\nWe need a clearer website.'));
   assert(body('contact').includes('Message:\nNeed a "fresh" website.\nO\'Brien & café ✓'),'message punctuation, line breaks and Unicode retained');
   assert(body('contact').includes('Form: Page contact form (Desktop)')&&body('contact').includes('Came from: SEO — https://vnwmedia.net/services/seo.html')&&body('contact').includes('Campaign: google / cpc / fall-search'),'contact form keeps originating-page and campaign context');
   for(const name of ['fallback','malformed','mismatch']){assert(body(name).includes('From: SEO Strategy & Services'));assert(body(name).includes('Page: '+fields.source_page));assert(body(name).includes('Form: Page contact form'));}
   for(const key of ['Business:','Phone:','Website:','Service:','Message:'])assert(!body('minimal').includes(key),'omit empty '+key);
   for(const name of ['invalid_nonce','honeypot','invalid_email','rate_limit','get_request']){assert.equal(r[name].mails.length,0,name+' blocks sending');assert(r[name].redirect.endsWith('?inquiry=error'));}
   assert.equal(r.failed_delivery.mails.length,1);assert(r.failed_delivery.redirect.endsWith('?inquiry=error'));
   assert(!r.arrays.includes('Array')&&!r.arrays.includes('unexpected'));assert(!r.sanitized.includes('<script>')&&!r.sanitized.includes('<b>'));assert(r.bounded.length<6500);
   console.log(`PASS PHP ${data.php_version}: duplicate reproduced before patch; one summary after; desktop/mobile, campaign/page/form attribution, fallback, empty fields, sanitization and all delivery safeguards preserved. No actual emails sent.`);
  };
  const native=process.env.PHP_BINARY||'php';
  if(cp.spawnSync(native,['-v'],{encoding:'utf8'}).status===0){
   for(const [name,source]of Object.entries(files))fs.writeFileSync(path.join(theme,name),source);
   const result=cp.spawnSync(native,[path.join(theme,'test.php')],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);check(JSON.parse(result.stdout));return;
  }
  const runtime=process.env.VNW_PHP_WASM_ROOT||'/private/tmp/vnw-wp-runtime';
  const moduleRoot=path.join(runtime,'node_modules');
  if(!fs.existsSync(path.join(moduleRoot,'@php-wasm/node/index.cjs'))){t.skip('PHP integration requires native PHP or the existing WordPress Playground runtime. Patch/static safeguards passed.');return;}
  const {PHP}=require(path.join(moduleRoot,'@php-wasm/universal/index.cjs'));
  const {loadNodeRuntime}=require(path.join(moduleRoot,'@php-wasm/node/index.cjs'));
  for(const version of ['8.2','8.5']){
   const php=new PHP(await loadNodeRuntime(version,{emscriptenOptions:{processId:process.pid}}));
   try {php.mkdir('/email-test');for(const [name,source]of Object.entries(files))php.writeFile('/email-test/'+name,source);const result=await php.run({scriptPath:'/email-test/test.php'});assert.equal(result.exitCode,0,result.errors);assert.equal(result.errors,'');check(JSON.parse(result.text));} finally {php.exit();}
  }
 } finally {fs.rmSync(temp,{recursive:true,force:true});}
});
