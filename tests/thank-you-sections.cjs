const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const page=read('thank-you.html');
function render(search=''){
 const app={innerHTML:''};
 const context={URLSearchParams,location:{search},document:{title:'Thank you | VNW Media',body:{dataset:{page:'thank-you',depth:'0'}},querySelector:selector=>{assert.equal(selector,'#app');return app;},createElement:tag=>{assert.equal(tag,'textarea');return {value:'',innerHTML:''};}}};
 vm.createContext(context);
 for(const file of ['service-catalog.js','pages.js'])vm.runInContext(read(file),context,{filename:file});
 vm.runInContext('this.sharedReviews=googleTestimonials("reviews");',context);
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
for(const asset of ['tickers.css?v=20260927-full-width-scroll','tickers.js?v=20261018-mobile-scroll-continuity','script.js?v=20261017-review-hold','pages.js?v=20261019-thank-you-proof'])assert(page.includes(asset),'load '+asset);
assert(page.indexOf('pages.js?')<page.indexOf('script.js?')&&page.indexOf('script.js?')<page.indexOf('tickers.js?'),'render reviews before shared animation handlers');
assert(page.indexOf('tickers.js?')<page.indexOf('site-buttons.js?'),'shared buttons enhance rendered content last');
assert(page.includes('content="noindex,follow"'),'confirmation page remains excluded from search results');
console.log('PASS: thank-you and email-draft states preserve messages/actions, add one homepage capabilities ticker and the unchanged 22-review section before the footer, and load existing responsive animation handlers in order.');
