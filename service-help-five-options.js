(() => {
  const section=document.querySelector('#what-we-help');
  if(!section)return;
  const option=document.body.dataset.helpDesign;
  const service=SERVICE_CATALOG.find(s=>'service-'+s.slug===document.body.dataset.page);
  document.title=service.name+' — Illustrated Outcomes '+option+' | VNW Media';
  section.classList.add('five-help','five-help-'+option);
  const shell=section.querySelector('.shell'),heading=section.querySelector('.csp-help-heading'),grid=section.querySelector('.csp-question-grid');
  const tools=document.createElement('div');
  tools.className='fh-tools';
  const names=['','Compact illustrated cards','Split editorial board','Open illustrated stories','Four-part collection','Illustrated service ledger'];
  tools.innerHTML='<span>DESIGN '+option+' / '+names[option]+'</span><label>Service example <select aria-label="Service example">'+SERVICE_CATALOG.map(s=>'<option value="'+s.slug+'" '+(service.slug===s.slug?'selected':'')+'>'+esc(s.name)+'</option>').join('')+'</select></label>';
  shell.prepend(tools);
  section.querySelectorAll('.csp-question-card').forEach((card,i)=>{
    const art=card.querySelector('.cq-art'),frame=document.createElement('div');
    frame.className='fh-art-frame';art.before(frame);frame.append(art);
    const number=document.createElement('span');number.className='fh-index';number.textContent='0'+(i+1);
    card.prepend(number);
    if(option==='3'||option==='5'){
      card.append(frame);
      card.append(card.querySelector('.cq-card-body>p'));
      card.querySelector('.cq-card-body').remove();
    }
  });
  if(option==='2'){
    const layout=document.createElement('div');layout.className='fh-split';heading.before(layout);layout.append(heading,grid);
    const action=grid.querySelector('.csp-help-contact');heading.append(action);
  }
  tools.querySelector('select').addEventListener('change',e=>{const url=new URL(location.href);url.searchParams.set('service',e.target.value);url.hash='what-we-help';location.href=url.href;});
})();
