// Illustrative 90-day scenarios only; these are not measured client results.
// Values are fixed so each client's examples remain consistent between visits.
const CLIENT_RESULT_METRICS = {
  "web": [["Website inquiries",""],["Inquiry conversion rate","%"],["Engaged sessions","%"]],
  "seo": [["Organic website visits",""],["Search impressions",""],["Organic inquiries",""]],
  "gbp": [["Profile interactions",""],["Profile-driven calls",""],["Website clicks",""]],
  "gbp-ads": [["Local advertising inquiries",""],["Cost per inquiry","$"],["Conversion rate","%"]],
  "ppc": [["Advertising inquiries",""],["Cost per inquiry","$"],["Conversion rate","%"]],
  "geo": [["AI search mentions",""],["Discovery topics covered",""],["AI referral visits",""]],
  "lead": [["Qualified inquiries",""],["Inquiry-to-consultation rate","%"],["Consultation bookings",""]],
  "reputation": [["New reviews",""],["Review response rate","%"],["Reviews responded to",""]],
};

const CLIENT_RESULT_SCENARIOS = {
  "nycadsco": {
    "seo": [[3023,6167],[26600,34048],[144,189]],
    "ppc": [[87,139],[66,44],[3.5,4.3]],
    "gbp": [[3721,6809],[145,199],[639,1150]],
    "reputation": [[43,70],[77,93],[33,65]],
  },
  "vision-centers": {
    "gbp": [[1094,2243],[88,132],[214,336]],
    "seo": [[3185,6561],[64,97],[42,78]],
    "reputation": [[100,207],[78,96],[78,199]],
  },
  "sfadsco": {
    "seo": [[2169,2972],[22700,32007],[105,175]],
    "ppc": [[73,143],[88,70],[4.3,7.2]],
    "gbp": [[4680,9032],[66,106],[221,298]],
    "reputation": [[63,80],[61,82],[38,66]],
  },
  "la-rosa-chicken-grill": {
    "seo": [[1230,1574],[48000,94560],[107,127]],
    "gbp": [[2116,4571],[166,199],[383,475]],
    "gbp-ads": [[136,211],[145,123],[2.9,4.9]],
    "reputation": [[20,35],[73,80],[15,28]],
  },
  "brooklyn-motors": {
    "web": [[40,83],[2.2,3.0],[40,52]],
    "seo": [[1881,3649],[15900,19239],[120,222]],
    "gbp": [[2216,4210],[128,189],[372,606]],
    "gbp-ads": [[65,138],[90,55],[3.1,3.9]],
    "ppc": [[145,175],[123,105],[4.9,7.4]],
    "geo": [[39,78],[12,15],[182,349]],
  },
  "kypcl": {
    "seo": [[3389,4372],[18300,21777],[33,62]],
    "gbp": [[3987,4904],[46,79],[265,419]],
    "gbp-ads": [[127,215],[90,54],[3.1,6.0]],
    "reputation": [[40,78],[67,75],[27,58]],
    "web": [[45,94],[2.9,4.8],[62,71]],
    "lead": [[47,77],[33,48],[16,37]],
  },
  "skyrex-inc": {
    "web": [[55,98],[2.2,3.0],[43,61]],
    "seo": [[2555,5825],[37400,46002],[59,103]],
    "gbp": [[4691,9898],[75,94],[347,656]],
    "gbp-ads": [[55,87],[151,85],[4.8,6.5]],
    "geo": [[44,81],[25,33],[93,177]],
  },
  "cti-logistics": {
    "web": [[98,222],[3.6,5.1],[40,47]],
    "seo": [[3034,7312],[61600,83160],[99,124]],
    "gbp": [[4317,9627],[168,297],[488,737]],
    "gbp-ads": [[133,211],[108,80],[4.4,5.1]],
    "geo": [[52,80],[16,24],[237,313]],
  },
  "fordoz-pharma": {
    "web": [[99,199],[2.9,3.7],[47,55]],
    "seo": [[3865,4522],[41300,71862],[111,154]],
    "gbp": [[1385,2978],[131,237],[416,782]],
    "gbp-ads": [[130,150],[55,35],[4.9,8.6]],
    "geo": [[38,92],[12,18],[184,256]],
  },
  "platinum-valet-parking": {
    "web": [[58,130],[4.4,6.0],[47,55]],
    "seo": [[2119,4789],[50400,70056],[69,132]],
    "gbp": [[3728,5816],[57,71],[530,694]],
    "gbp-ads": [[113,136],[54,45],[4.2,7.3]],
    "geo": [[18,25],[25,42],[156,328]],
  },
  "raidex-construction": {
    "web": [[77,162],[4.3,6.2],[59,69]],
    "seo": [[1213,1698],[41600,77376],[34,50]],
    "gbp": [[1642,3103],[157,279],[200,282]],
    "gbp-ads": [[62,84],[111,75],[4.4,5.4]],
    "geo": [[61,82],[20,26],[157,309]],
  },
  "catanzaros-power-washing": {
    "web": [[101,155],[2.8,4.6],[45,59]],
    "seo": [[4029,8139],[42100,53888],[43,61]],
    "gbp": [[4180,9112],[154,189],[419,800]],
    "gbp-ads": [[58,134],[105,81],[2.1,3.2]],
    "geo": [[28,48],[14,18],[30,57]],
  },
  "coin-jewelry-gallery-boca-raton": {
    "web": [[86,128],[3.7,4.4],[44,60]],
    "seo": [[3748,5472],[28500,35340],[64,107]],
    "gbp": [[1630,3847],[137,163],[151,236]],
    "gbp-ads": [[51,124],[74,47],[3.1,5.1]],
    "geo": [[72,127],[23,34],[198,390]],
  },
  "nj-steps-to-success": {
    "web": [[102,173],[2.1,2.6],[58,75]],
    "seo": [[952,2190],[48900,97311],[108,138]],
    "gbp": [[2863,6127],[162,196],[392,686]],
    "gbp-ads": [[101,183],[133,112],[4.0,4.8]],
    "geo": [[58,80],[22,27],[105,131]],
  },
  "h2bros-plumbing": {
    "web": [[73,179],[2.4,2.8],[42,58]],
    "seo": [[1564,1939],[43200,73872],[47,88]],
    "gbp": [[3660,6149],[87,112],[388,737]],
    "gbp-ads": [[71,151],[133,100],[2.9,5.6]],
    "geo": [[70,88],[24,38],[40,64]],
  },
  "art-of-construction": {
    "web": [[68,124],[1.9,2.3],[40,57]],
    "seo": [[1133,2028],[52800,91344],[50,94]],
    "gbp": [[3460,8200],[172,320],[541,822]],
    "gbp-ads": [[32,53],[65,46],[4.0,7.1]],
    "geo": [[18,31],[20,25],[122,245]],
  },
};

function clientResultServiceKey(name){
  if(/reputation/i.test(name))return 'reputation';
  if(/GEO|AI Marketing/i.test(name))return 'geo';
  if(/ads/i.test(name)&&/Google Business|GBP/i.test(name))return 'gbp-ads';
  if(/ads|PPC|paid/i.test(name))return 'ppc';
  if(/Google Business|GBP/i.test(name))return 'gbp';
  if(/SEO/i.test(name))return 'seo';
  if(/lead/i.test(name))return 'lead';
  if(/web/i.test(name))return 'web';
  throw new Error('Unmapped confirmed service: '+name);
}

function clientResultSampleMetrics(slug,name){
  const key=clientResultServiceKey(name);
  const schema=CLIENT_RESULT_METRICS[key].map(metric=>[...metric]);
  // Preserve the Vision Centers figures and labels already approved in the new layout.
  if(slug==='vision-centers'){
    schema[0][0]={gbp:'More profile interactions',seo:'Organic search growth',reputation:'More new reviews'}[key];
    if(key==='seo')schema[1]=['Keywords in the top 10',''];
  }
  return schema.map(([label,unit],index)=>{
    const [before,after]=CLIENT_RESULT_SCENARIOS[slug][key][index];
    return {label,unit,before,after,delta:Math.round((after/before-1)*100)};
  });
}

function clientResultMetricValue(value,unit){
  const formatted=value.toLocaleString('en-US',{maximumFractionDigits:1});
  return unit==='$'?'$'+formatted:formatted+unit;
}

(()=>{
  const slug=document.body.dataset.page?.replace(/^case-/,'');
  if(!CLIENT_RESULT_SCENARIOS[slug])return;
  const section=document.querySelector('.scm-ms-signals.lr-results');
  // Use the confirmed service navigation, not the ticker rebuilt by tickers.js.
  const specialScopes={
    'sfadsco':['SEO','PPC','Google Business Profile Organic Management','Reputation Management'],
    'nycadsco':['SEO','PPC','Google Business Profile Organic Management','Reputation Management'],
    'vision-centers':['Google Business Profile Management','Organic SEO','Reputation Management'],
    'la-rosa-chicken-grill':['SEO for 11 locations','Google Business Profile Management','Google Business Profile Search Ads','Reputation Management']
  };
  const names=specialScopes[slug]||[...new Set([...document.querySelectorAll('.scm-ms-work nav a')].map(el=>el.textContent.trim()))];
  if(!section||!names.length)return;
  const esc=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  section.classList.add('aoc-results-preview');
  section.querySelector('.lr-heading').innerHTML='<p class="section-tag">CONNECTED SERVICES. CONNECTED PROGRESS.</p><h2>From being found to being chosen.</h2><p class="aoc-period">Sample 90-day results</p>';
  section.querySelector('.lr-grid').innerHTML=names.map((name,index)=>{
    const metrics=clientResultSampleMetrics(slug,name),primary=metrics[0];
    const supporting=metrics.slice(1).map(metric=>`<div><dt>${esc(metric.label)}</dt><dd class="portfolio-metric-values">${clientResultMetricValue(metric.before,metric.unit)} <span aria-hidden="true">→</span> <b>${clientResultMetricValue(metric.after,metric.unit)}</b></dd><dd class="portfolio-metric-change"><strong>${metric.delta>0?'+':''}${metric.delta}%</strong>${metric.unit==='$'?'<span>cost per inquiry</span>':''}</dd></div>`).join('');
    return `<article class="aoc-service-result portfolio-metric-card"><div class="aoc-card-top"><span>${String(index+1).padStart(2,'0')}</span><h3>${esc(name)}</h3><span class="aoc-trend" aria-hidden="true">↗</span></div><strong>+${primary.delta}%</strong><h4>${esc(primary.label)}</h4><p class="aoc-comparison portfolio-metric-comparison">${clientResultMetricValue(primary.before,primary.unit)} → ${clientResultMetricValue(primary.after,primary.unit)} over a 90-day period</p><dl class="portfolio-secondary-metrics">${supporting}</dl></article>`;
  }).join('');
  section.querySelector('.lr-footnote')?.remove();
})();
