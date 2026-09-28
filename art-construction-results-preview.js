// Separate design preview. Sample figures are not verified client reporting.
(() => {
  const section = document.querySelector('.scm-ms-signals.lr-results');
  if (!section) return;
  section.classList.add('aoc-results-preview');
  const services = [
    ['Web Design', '+38%', 'More project inquiries', '29 → 40 monthly inquiries', '4.8% inquiry conversion rate', 'A clearer website turns project interest into conversations.'],
    ['SEO', '+46%', 'Organic search growth', '1,240 → 1,810 monthly visits', '18 keywords in the top 10', 'More visibility for laundromat buildouts and commercial renovations.'],
    ['Google Business Profile', '+32%', 'More profile interactions', '185 → 244 monthly actions', '76 calls from local discovery', 'Local searches turn into calls, website visits, and project interest.'],
    ['Google Business Profile Search Ads', '34', 'Qualified project leads', '+26% compared with 27 leads', '$48 average cost per lead', 'Search advertising connects active demand with the right service.'],
    ['GEO / AI Marketing', '+75%', 'More AI search mentions', '8 → 14 tracked answer mentions', '6 relevant discovery topics', 'A stronger presence in AI-assisted construction research.']
  ];
  section.querySelector('.lr-heading').innerHTML = '<p class="section-tag">FIVE SERVICES. CONNECTED PROGRESS.</p><h2>From being found to being chosen.</h2><p class="aoc-period">Design preview · Sample 90-day results</p>';
  section.querySelector('.lr-grid').innerHTML = services.map((s,i) => `<article class="aoc-service-result"><div class="aoc-card-top"><span>0${i+1}</span><h3>${s[0]}</h3><span class="aoc-trend" aria-label="Positive trend">↗</span></div><strong>${s[1]}</strong><h4>${s[2]}</h4><p class="aoc-comparison">${s[3]}</p><div class="aoc-secondary">${s[4]}</div><p class="aoc-context">${s[5]}</p></article>`).join('');
  section.querySelector('.lr-footnote')?.remove();
})();
