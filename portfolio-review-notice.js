// Review-only presentation; not loaded by the live Work page.
(()=>{
  const total=PORTFOLIO_CLIENT_ADDITIONS.length;
  const grid=document.querySelector('.work-grid');
  grid.innerHTML=PORTFOLIO_CLIENT_ADDITIONS.map(renderPortfolioAdditionCard).join('');
  // These cards are inserted after the shared reveal observer is initialized.
  // Keep review content visible immediately instead of waiting for that observer.
  grid.querySelectorAll('.reveal').forEach(card=>card.classList.remove('reveal'));
  document.querySelector('#reviews')?.remove();
  document.querySelector('.work-agency-head h2').textContent=total+' new clients. Ready for your review.';
  document.querySelector('.work-agency-head>p').textContent='Only the proposed additions are shown here. Open each case study to review the client’s services and imagery.';
  const notice=document.createElement('aside');
  notice.className='portfolio-review-notice';
  notice.innerHTML='<div class="shell"><strong>'+total+' new clients / Review only</strong><p>This page shows only the '+total+' proposed additions and their case-study previews. The existing clients are not included. The live Our Work page is unchanged.</p><nav aria-label="New client review links">'+PORTFOLIO_CLIENT_ADDITIONS.map(p=>'<a href="case-studies/'+p.slug+'-review.html">'+esc(p.name)+' ↗</a>').join('')+'</nav><a class="pill pill-blue" href="#page-content">Review new clients <span aria-hidden="true">↓</span></a></div>';
  document.querySelector('main').prepend(notice);
})();
