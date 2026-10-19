const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const page=read('thank-you.html');
function render(search='',pageId='thank-you'){
 const app={innerHTML:''};
 const context={URLSearchParams,location:{search},document:{title:'VNW Media',body:{dataset:{page:pageId,depth:'0'}},querySelector:selector=>{assert.equal(selector,'#app');return app;},createElement:tag=>{assert.equal(tag,'textarea');return {value:'',innerHTML:''};}}};
 vm.createContext(context);
 for(const file of ['service-catalog.js','pages.js'])vm.runInContext(read(file),context,{filename:file});
 vm.runInContext('this.sharedReviews=googleTestimonials(document.body.dataset.page==="thank-you"?"thank-you-reviews":"contact-reviews").replace(\'data-nav-theme="dark"\',\'data-nav-theme="light"\');',context);
 return {html:app.innerHTML,reviews:context.sharedReviews};
}
for(const search of ['', '?delivery=email']){
 const {html,reviews}=render(search);
 assert.equal((html.match(/class="thank-you-page section"/g)||[]).length,1);
 assert.equal((html.match(/aria-label="VNW Media capabilities"/g)||[]).length,1,'one capabilities strip');
 assert.equal((html.match(/class="trust-track"/g)||[]).length,1,'one shared ticker track');
 assert(html.includes('Built to move businesses forward'));
 assert(html.includes(reviews),'reuse the shared client reviews unchanged');
 assert.equal((html.match(/data-testimonial-ticker\s/g)||[]).length,1);
 assert.equal((html.match(/class="testimonial-ticker-card"/g)||[]).length,22,'same 22 client reviews as the homepage');
 const hero=html.indexOf('class="thank-you-page section"'),ticker=html.indexOf('class="trust-strip"'),testimonials=html.indexOf('class="testimonials '),footer=html.indexOf('<footer class="footer">');
 assert(hero<ticker&&ticker<testimonials&&testimonials<footer,'hero, services ticker, testimonials, footer order');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert(html.includes('href="index.html"')&&html.includes('href="tel:17328200609"')&&html.includes('href="mailto:contactus@vnwmedia.com"'),'confirmation actions preserved');
 assert(html.includes('Read all Google reviews')&&html.includes('query_place_id=ChIJH8x-SSDNw4kRL5QM6uUWIV4'),'existing Google reviews destination');
 if(search)assert(html.includes('Please send the draft to complete your inquiry. This website cannot confirm email delivery.'),'email-draft warning remains honest');
 else assert(html.includes('Thank you for contacting VNW Media. We look forward to discussing your business and your next steps.'));
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
 assert.equal(ids.length,new Set(ids).size,'no duplicate IDs');
}
for(const asset of ['tickers.css?v=20260927-full-width-scroll','tickers.js?v=20261018-mobile-scroll-continuity','script.js?v=20261017-review-hold','pages.js?v=20261019-light-client-feedback'])assert(page.includes(asset),'load '+asset);
assert(page.indexOf('pages.js?')<page.indexOf('script.js?')&&page.indexOf('script.js?')<page.indexOf('tickers.js?'),'render reviews before shared animation handlers');
assert(page.indexOf('tickers.js?')<page.indexOf('site-buttons.js?'),'shared buttons enhance rendered content last');
assert(page.includes('content="noindex,follow"'),'confirmation page remains excluded from search results');
const lightCss=read('contact-testimonials.css'),lightTheme=':is(#contact-reviews,#thank-you-reviews,#case-reviews)';
assert(lightCss.includes(lightTheme+'{background:#eeeae3;color:#141b1e}'));
assert(lightCss.includes(lightTheme+' .testimonial-ticker-card{background:#fff;color:#303a3e;border-color:#d4cec4}'));
assert(read('resources.html').includes('contact-testimonials.css'),'same stylesheet as the Resources reference');
assert(!lightCss.includes('animation')&&!lightCss.includes('@media'),'theme preserves existing responsive scrolling and reduced motion');
for(const id of ['thank-you','contact']){
 const {html,reviews}=render('',id),sectionId=id==='thank-you'?'thank-you-reviews':'contact-reviews';
 assert(html.includes(reviews)&&html.includes(`id="${sectionId}" data-nav-theme="light"`),id+' uses the shared light reviews');
 const source=read(id+'.html');
 assert(source.includes('contact-testimonials.css?v=20261019-light-client-feedback'),id+' current shared light stylesheet');
 assert(source.indexOf('styles.css?')<source.indexOf('contact-testimonials.css?')&&source.indexOf('contact-testimonials.css?')<source.indexOf('site-buttons.css?'),id+' stylesheet order');
}
console.log('PASS: thank-you/email-draft messages and actions, capability ticker and unchanged 22 reviews; Contact and Thank You share Resources’ light palette, correct navigation theme and responsive animation handlers.');
