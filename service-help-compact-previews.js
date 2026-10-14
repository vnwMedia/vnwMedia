(() => {
  const section=document.querySelector('#what-we-help');
  if(!section)return;
  const option=document.body.dataset.helpOption;
  const service=SERVICE_CATALOG.find(s=>'service-'+s.slug===document.body.dataset.page);
  document.title=service.name+' — Compact Outcomes Option '+option+' | VNW Media';
  const shell=section.querySelector('.shell');
  const cards=[...section.querySelectorAll('.csp-question-card')].map(card=>({
    question:card.querySelector('.csp-question-prompt span').textContent,
    title:card.querySelector('h3').textContent,
    body:card.querySelector('.cq-card-body>p').textContent,
    art:card.querySelector('.cq-art').outerHTML
  }));
  section.classList.add('help-compact','help-compact-'+option);
  const tools=document.createElement('div');
  tools.className='hc-tools';
  tools.innerHTML='<span>OPTION '+option+' / '+['','Compact answer cards','Explore the outcomes','Question-led accordion'][option]+'</span><label>Service example <select aria-label="Service example">'+SERVICE_CATALOG.map(s=>'<option value="'+s.slug+'" '+(s.slug===service.slug?'selected':'')+'>'+esc(s.name)+'</option>').join('')+'</select></label>';
  shell.prepend(tools);
  const grid=section.querySelector('.csp-question-grid');
  const action=grid.querySelector('.csp-help-contact').outerHTML;
  if(option==='2'){
    grid.className='hc-explorer';
    grid.innerHTML='<div class="hc-tabs" role="tablist" aria-label="Service outcomes">'+cards.map((c,i)=>'<button type="button" role="tab" id="hc-tab-'+i+'" aria-controls="hc-panel-'+i+'" aria-selected="'+(i===0)+'" tabindex="'+(i===0?'0':'-1')+'"><span>0'+(i+1)+'</span><b>'+esc(c.title)+'</b></button>').join('')+'</div><div class="hc-panels">'+cards.map((c,i)=>'<article role="tabpanel" id="hc-panel-'+i+'" aria-labelledby="hc-tab-'+i+'" '+(i?'hidden':'')+'><p class="hc-question">'+esc(c.question)+'</p><h3>'+esc(c.title)+'</h3><div class="hc-panel-body"><p>'+esc(c.body)+'</p>'+c.art+'</div></article>').join('')+'</div>'+action;
    const tabs=[...grid.querySelectorAll('[role="tab"]')];
    const activate=index=>{tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;grid.querySelector('#hc-panel-'+i).hidden=i!==index;});};
    tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(i));tab.addEventListener('keydown',event=>{let next=i;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(i+1)%4;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(i+3)%4;else if(event.key==='Home')next=0;else if(event.key==='End')next=3;else return;event.preventDefault();activate(next);tabs[next].focus();});});
  }else if(option==='3'){
    grid.className='hc-accordion';
    grid.innerHTML=cards.map((c,i)=>'<details '+(!i?'open':'')+'><summary><span class="hc-number">0'+(i+1)+'</span><span><small>'+esc(c.question)+'</small><strong>'+esc(c.title)+'</strong></span><b class="hc-toggle" aria-hidden="true">+</b></summary><p>'+esc(c.body)+'</p></details>').join('')+action;
    grid.querySelectorAll('details').forEach(item=>item.addEventListener('toggle',()=>{if(item.open)grid.querySelectorAll('details').forEach(other=>{if(other!==item)other.open=false;});}));
  }
  tools.querySelector('select').addEventListener('change',event=>{const url=new URL(location.href);url.searchParams.set('service',event.target.value);url.hash='what-we-help';location.href=url.href;});
})();
