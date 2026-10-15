// Temporary qualitative status requested by VNW Media; no invented metrics.
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
  target.innerHTML=`<div class="shell"><div class="lr-location-layout"><aside class="lr-location"><p class="section-tag">Service Scope</p><strong>${services.length}<span>${services.length===1?'service':'connected services'}</span></strong><h2>${esc(p.headline)}</h2><p>${esc(p.summary)} Our work focuses on ${esc(p.focus.toLowerCase())}.</p><a class="pill pill-blue" href="../contact.html">Discuss your business <span aria-hidden="true">↗</span></a></aside><div><div class="lr-heading"><p class="section-tag">Service Progress / ${esc(p.name)}</p><h2>Connected work. Positive direction.</h2><p class="aoc-period">Temporary status: client-specific performance figures and reporting periods have not yet been supplied.</p></div><div class="lr-grid">${services.map((s,i)=>`<article class="aoc-service-result"><div class="aoc-card-top"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(s.label)}</h3><span class="aoc-trend" aria-hidden="true">↗</span></div><strong>Positive Growth</strong><h4>${esc(s.focus)}</h4><p class="aoc-context">A temporary qualitative status for this service. Verified metrics will be added when available.</p></article>`).join('')}</div></div></div></div>`;
})();
