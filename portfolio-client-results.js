// Service-specific illustrative dashboards, clearly disclosed as sample data.
(()=>{
  const p=PORTFOLIO_CLIENT_ADDITIONS.find(p=>'case-'+p.slug===document.body.dataset.page);
  const target=document.querySelector('.scm-ms-signals');
  if(!p||!target)return;
  document.body.setAttribute('data-portfolio-addition','');
  const review=document.createElement('aside');
  review.className='portfolio-review-case-note';
  review.innerHTML='<a href="../portfolio-review.html#page-content">← Back to client review</a><span>Review only · Awaiting approval</span>';
  document.querySelector('.scm-ms-hero').after(review);
  const services=p.scope.map(k=>PORTFOLIO_ADDITION_SERVICES[k]);
  const ticker=document.createElement('section');
  ticker.className='trust-strip';
  ticker.setAttribute('aria-label',p.name+' services provided by VNW Media');
  ticker.innerHTML='<div class="trust-track"><small>'+esc(p.name)+'</small><i aria-hidden="true"></i>'+services.map(s=>'<span>'+esc(s.label)+'</span>').join('')+'</div>';
  document.querySelector('.scm-ms-hero').after(ticker);
  target.classList.add('lr-results','aoc-results-preview','portfolio-positive-results');
  target.id='service-progress';
  target.dataset.layout='3';
  const cards=p.scope.map((key,i)=>{
    const s=PORTFOLIO_ADDITION_SERVICES[key],metrics=portfolioSampleMetrics(p,key),m=metrics[0];
    return `<article class="aoc-service-result portfolio-metric-card"><div class="aoc-card-top"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(s.label)}</h3><span class="aoc-trend" aria-hidden="true">↗</span></div><div class="portfolio-metric-primary"><strong>+${m.delta}%</strong><span>Sample data</span></div><h4>${esc(m.label)}</h4><p class="portfolio-metric-comparison">${portfolioMetricValue(m.before,m.unit)} <span aria-hidden="true">→</span> <b>${portfolioMetricValue(m.after,m.unit)}</b></p><dl class="portfolio-secondary-metrics">${metrics.slice(1).map(metric=>`<div><dt>${esc(metric.label)}</dt><dd>${portfolioMetricValue(metric.before,metric.unit)} <span aria-hidden="true">→</span> <b>${portfolioMetricValue(metric.after,metric.unit)}</b><small>${metric.delta>0?'+':''}${metric.delta}%${metric.unit==='$'?' cost per inquiry':''}</small></dd></div>`).join('')}</dl></article>`;
  }).join('');
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">Service Scope</p><strong>${services.length}<span>${services.length===1?'service':'connected services'}</span></strong><h2>${esc(p.headline)}</h2><p>${esc(p.summary)} Our work focuses on ${esc(p.focus.toLowerCase())}.</p><a class="pill pill-blue" href="../contact.html">Discuss your business <span aria-hidden="true">↗</span></a></aside><div><div class="lr-heading"><p class="section-tag">Performance Dashboard / ${esc(p.name)}</p><h2>Discovery. Engagement. Action.</h2><p class="portfolio-data-disclosure">Sample data — illustrative figures for design review, not actual client results.</p></div><div class="lr-grid">${cards}</div></div></div></div>`;
})();
