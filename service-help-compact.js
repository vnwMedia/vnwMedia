(() => {
  const section=document.querySelector('#what-we-help');
  if(!section)return;
  section.classList.add('service-help-compact');
  section.querySelectorAll('.csp-question-card').forEach((card,index)=>{
    const art=card.querySelector('.cq-art');
    if(art&&!art.parentElement.classList.contains('shc-art-frame')){
      const frame=document.createElement('div');
      frame.className='shc-art-frame';
      art.before(frame);frame.append(art);
    }
    if(!card.querySelector('.shc-index')){
      const number=document.createElement('span');
      number.className='shc-index';
      number.textContent='0'+(index+1);
      card.prepend(number);
    }
  });
})();
