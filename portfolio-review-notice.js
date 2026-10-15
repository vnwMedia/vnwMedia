// Review-only presentation; not loaded by the live Work page.
(()=>{
  const notice=document.createElement('aside');
  notice.className='portfolio-review-notice';
  notice.innerHTML='<div class="shell"><strong>Client additions / Review only</strong><p>The 13 proposed clients appear after KYPCL and before SkyRex below. Open each case study to review its logo, copy, service scope, and temporary Positive Growth status. The live Our Work page is unchanged.</p><nav aria-label="New client review links">'+PORTFOLIO_CLIENT_ADDITIONS.map(p=>'<a href="case-studies/'+p.slug+'-review.html">'+esc(p.name)+' ↗</a>').join('')+'</nav><a class="pill pill-blue" href="#page-content">Review Selected Work <span aria-hidden="true">↓</span></a></div>';
  document.querySelector('main').prepend(notice);
})();
