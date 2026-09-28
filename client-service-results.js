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
  const original = section.querySelector('.lr-grid').innerHTML;
  section.classList.add('aoc-results-preview');
  section.querySelector('.lr-heading').innerHTML = '<p class="section-tag">CONNECTED SERVICES. CONNECTED PROGRESS.</p><h2>From being found to being chosen.</h2><p class="aoc-period">Design preview · Sample 90-day results</p>';
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
    return '<article class="aoc-service-result"><div class="aoc-card-top"><span>'+String(i+1).padStart(2,'0')+'</span><h3>'+esc(name)+'</h3><span class="aoc-trend" aria-label="Positive trend">↗</span></div><strong>+'+actualGrowth+'%</strong><h4>'+label+'</h4><p class="aoc-comparison">'+before.toLocaleString('en-US')+' → '+after.toLocaleString('en-US')+' over comparable 90-day periods</p><div class="aoc-secondary">'+extra+'</div><p class="aoc-context">'+context+'</p></article>';
  }).join('');
  section.querySelector('.lr-footnote')?.remove();
  // Keep the supplied La Rosa report available separately from illustrative cards.
  if (clients[index]==='la-rosa-chicken-grill') {
    const report=document.createElement('details');
    report.className='client-verified-report';
    report.innerHTML='<summary>View supplied results for Old Bridge and Tinton Falls</summary><div class="lr-grid">'+original+'</div>';
    section.querySelector('.shell').append(report);
  }
})();
