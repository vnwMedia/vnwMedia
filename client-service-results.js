// Illustrative figures for layout review, never client-report data.
(() => {
  const clients = ['h2bros-plumbing','nj-steps-to-success','coin-jewelry-gallery-boca-raton','catanzaros-power-washing','raidex-construction','platinum-valet-parking','fordoz-pharma','cti-logistics','skyrex-inc','kypcl','brooklyn-motors','sfadsco','vision-centers','nycadsco','la-rosa-chicken-grill'];
  const index = clients.indexOf(document.body.dataset.page?.replace(/^case-/, ''));
  if (index < 0) return;
  const section = document.querySelector('.scm-ms-signals.lr-results');
  // Read the confirmed scope, not the animated ticker (which is rebuilt by tickers.js).
  const specialScopes = {
    'sfadsco':['SEO','PPC','Google Business Profile Organic Management','Reputation Management'],
    'nycadsco':['SEO','PPC','Google Business Profile Organic Management','Reputation Management'],
    'vision-centers':['Google Business Profile Management','Organic SEO','Reputation Management'],
    'la-rosa-chicken-grill':['SEO for 11 locations','Google Business Profile Management','Google Business Profile Search Ads','Reputation Management']
  };
  const names = specialScopes[clients[index]] || [...new Set([...document.querySelectorAll('.scm-ms-work nav a')].map(el => el.textContent.trim()))];
  if (!section || !names.length) return;
  const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  section.classList.add('aoc-results-preview');
  section.querySelector('.lr-heading').innerHTML = '<p class="section-tag">CONNECTED SERVICES. CONNECTED PROGRESS.</p><h2>From being found to being chosen.</h2><p class="aoc-period">Sample 90-day results</p>';
  // Fixed illustrative comparisons for Vision Centers, not measured client results.
  // Preserve the existing later-period calls, top-10 keywords, and response rate.
  const visionSupportingMetrics = {
    'Google Business Profile Management':[
      {label:'Profile-driven calls',before:88,after:132,unit:''},
      {label:'Website clicks',before:214,after:336,unit:''}
    ],
    'Organic SEO':[
      {label:'Keywords in the top 10',before:64,after:97,unit:''},
      {label:'Organic inquiries',before:42,after:78,unit:''}
    ],
    'Reputation Management':[
      {label:'Review response rate',before:78,after:96,unit:'%'},
      {label:'Reviews responded to',before:78,after:199,unit:''}
    ]
  };
  const renderSupportingMetrics = metrics => '<dl class="portfolio-secondary-metrics">'+metrics.map(metric=>{
    const delta=Math.round((metric.after/metric.before-1)*100);
    const format=value=>value.toLocaleString('en-US',{maximumFractionDigits:1})+metric.unit;
    return '<div><dt>'+esc(metric.label)+'</dt><dd class="portfolio-metric-values">'+format(metric.before)+' <span aria-hidden="true">→</span> <b>'+format(metric.after)+'</b></dd><dd class="portfolio-metric-change"><strong>'+(delta>0?'+':'')+delta+'%</strong></dd></div>';
  }).join('')+'</dl>';
  section.querySelector('.lr-grid').innerHTML = names.map((name,i) => {
    const seed = index * 7 + i;
    const growth = 21 + seed;
    let label, before, extra, context;
    if (/reputation/i.test(name)) {
      label='More new reviews'; before=14+seed; extra=(94+(index%5))+'% response rate'; context='A more active review presence supports customer confidence.';
    } else if (/GEO|AI Marketing/i.test(name)) {
      label='More AI search mentions'; before=8+seed; extra=(5+index)+' discovery topics tracked'; context='Clearer service information supports AI-assisted discovery.';
    } else if (/ads|PPC|paid/i.test(name)) {
      label='More advertising inquiries'; before=22+seed; extra='$'+(39+index*3+i)+' average cost per inquiry'; context='Paid search connects relevant demand with a clear next step.';
    } else if (/Google Business|GBP/i.test(name)) {
      label='More profile interactions'; before=170+seed*11; extra=(48+seed)+' profile-driven calls'; context='Local discovery turns into calls, visits, and website interest.';
    } else if (/SEO/i.test(name)) {
      label='Organic search growth'; before=720+seed*29; extra=(12+seed)+' keywords in the top 10'; context='Relevant search visibility brings more visitors to the business.';
    } else if (/lead/i.test(name)) {
      label='More qualified inquiries'; before=25+seed; extra=(18+index)+'% inquiry-to-consultation rate'; context='A focused inquiry path helps turn interest into conversations.';
    } else if (/web/i.test(name)) {
      label='More website inquiries'; before=30+seed; extra=(3.2+index*.13+i*.1).toFixed(1)+'% inquiry conversion rate'; context='A clearer website makes the next step easier to take.';
    } else {
      throw new Error('Unmapped confirmed service: '+name);
    }
    const after = Math.round(before*(1+growth/100));
    const actualGrowth = Math.round((after/before-1)*100);
    const supporting=clients[index]==='vision-centers'?renderSupportingMetrics(visionSupportingMetrics[name]):'<div class="aoc-secondary">'+extra+'</div><p class="aoc-context">'+context+'</p>';
    return '<article class="aoc-service-result"><div class="aoc-card-top"><span>'+String(i+1).padStart(2,'0')+'</span><h3>'+esc(name)+'</h3><span class="aoc-trend" aria-label="Positive trend">↗</span></div><strong>+'+actualGrowth+'%</strong><h4>'+label+'</h4><p class="aoc-comparison">'+before.toLocaleString('en-US')+' → '+after.toLocaleString('en-US')+' over comparable 90-day periods</p>'+supporting+'</article>';
  }).join('');
  section.querySelector('.lr-footnote')?.remove();
})();
