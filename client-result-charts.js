// Presentation-only enhancement for the existing illustrative service results.
// Keep each card's figures, service scope, and supporting copy unchanged.
function renderClientResultGraph(client,service,index){
  const seed=Array.from(client+'-'+service).reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0);
  const pace=[.8,1.2,1.65,2,.95][seed%5];
  const rise=.48+(seed%25)/100;
  const points=Array.from({length:6},(_,i)=>{
    const wobble=i===0||i===5?0:(((seed>>>(i*4))%11)-5)/100;
    const level=.08+rise*Math.max(0,Math.min(1,Math.pow(i/5,pace)+wobble));
    return [10+i*56,86-level*68];
  });
  const line=points.map(([x,y],i)=>(i?'L':'M')+x+' '+y.toFixed(1)).join(' ');
  const gradient='client-result-'+client.replace(/[^a-z0-9-]/gi,'')+'-'+index;
  const label=String(service).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  return `<div class="client-result-graph"><svg class="client-result-chart" viewBox="0 0 300 100" role="img" aria-label="Sample data: illustrative trend for ${label}"><defs><linearGradient id="${gradient}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#08b7ed" stop-opacity=".3"/><stop offset="1" stop-color="#08b7ed" stop-opacity="0"/></linearGradient></defs><path class="client-result-chart-grid" d="M10 20H290M10 50H290M10 86H290"/><path d="${line}L290 96H10Z" fill="url(#${gradient})"/><path d="${line}" fill="none" stroke="#08b7ed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="290" cy="${points[5][1].toFixed(1)}" r="4" fill="#71d6b3"/></svg><div class="client-result-chart-labels"><span>Earlier period</span><span>Later period</span></div></div>`;
}

function enhanceClientResultCharts(){
  const section=document.querySelector('.scm-ms-signals.aoc-results-preview');
  // These existing result blocks are samples, not verified time-series reports.
  if(!section||!/sample/i.test(section.querySelector('.aoc-period')?.textContent||''))return;
  if(!section.id)section.id='service-progress';
  section.classList.add('client-result-charts');
  section.querySelectorAll('.aoc-service-result').forEach((card,index)=>{
    if(card.querySelector('.client-result-chart,.portfolio-trend-chart'))return;
    const comparison=card.querySelector('.aoc-comparison');
    const value=card.querySelector(':scope > strong');
    if(!comparison||!value)return;
    card.classList.add('client-result-chart-card');
    const primary=document.createElement('div');
    primary.className='client-result-primary';
    value.before(primary);
    primary.append(value);
    const badge=document.createElement('span');
    badge.className='client-result-sample';badge.textContent='Sample data';
    primary.append(badge);
    comparison.insertAdjacentHTML('afterend',renderClientResultGraph(document.body.dataset.page,card.querySelector('h3')?.textContent||'Service',index));
  });
  if(!section.querySelector('.client-result-disclosure')){
    const disclosure=document.createElement('p');
    disclosure.className='client-result-disclosure';
    disclosure.textContent='Sample data — illustrative figures and trend lines, not actual client results.';
    section.querySelector('.lr-heading')?.append(disclosure);
  }
}
enhanceClientResultCharts();
