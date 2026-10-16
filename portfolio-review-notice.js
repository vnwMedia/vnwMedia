// The review page shares the public portfolio renderer and client order.
(()=>{
  const total=document.querySelectorAll('.work-grid > .work-card').length;
  const notice=document.createElement('aside');
  notice.className='portfolio-review-notice';
  notice.innerHTML='<div class="shell"><strong>'+total+' clients / Portfolio review</strong><p>This page shows the same clients and order as Our Work. All case-study links open the public portfolio pages.</p><a class="pill pill-blue" href="work.html#page-content">View Our Work <span aria-hidden="true">↗</span></a></div>';
  document.querySelector('main').prepend(notice);
})();
