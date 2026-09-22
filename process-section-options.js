const stages = [
  ['Discover','discover','We learn your offer, audience, competitors, goals, current performance, and where prospects are getting lost.','Business discovery workshop'],
  ['Strategize','strategize','We define the message, customer journey, channel mix, project priorities, and measurements that matter.','Team mapping a strategy'],
  ['Create','create','Design, content, development, SEO, and campaigns come together as one consistent experience.','Creative team reviewing layouts'],
  ['Launch','launch','We test the details, connect tracking, prepare your team, and take the new system live with confidence.','Team completing a project handoff'],
  ['Improve','improve','Performance insights guide practical refinements that strengthen traffic quality, engagement, and conversion.','Team reviewing performance']
];
const picture = s => `assets/process-contact-${s[1]}-v2.png`;
const tabs = document.querySelector('.chapter-tabs');
stages.forEach((s,i) => {
  const button = document.createElement('button');
  button.type='button'; button.role='tab'; button.id=`chapter-${i}`;
  button.setAttribute('aria-controls','cinema-panel');
  button.innerHTML=`<span>0${i+1}</span>${s[0]}`;
  button.addEventListener('click',()=>selectChapter(i)); tabs.append(button);
  document.querySelector('#journal-stages').insertAdjacentHTML('beforeend',`<article class="journal-stage"><div class="journal-text"><span class="stage-number">0${i+1}</span><h3>${s[0]}.</h3><p>${s[2]}</p></div><figure><img loading="lazy" src="${picture(s)}" alt="${s[3]}"></figure></article>`);
  document.querySelector('#photo-panels').insertAdjacentHTML('beforeend',`<article class="photo-panel"><img loading="lazy" src="${picture(s)}" alt="${s[3]}"><span class="panel-number">0${i+1}</span><div><h3>${s[0]}</h3><p>${s[2]}</p></div></article>`);
});
const panel=document.querySelector('.cinema-copy');panel.id='cinema-panel';panel.role='tabpanel';
function selectChapter(i){const s=stages[i];document.querySelector('#cinema-image').src=picture(s);document.querySelector('#cinema-image').alt=s[3];document.querySelector('#cinema-title').textContent=`${s[0]}.`;document.querySelector('#cinema-number').textContent=`0${i+1} / 05`;document.querySelector('#cinema-description').textContent=s[2];panel.setAttribute('aria-labelledby',`chapter-${i}`);[...tabs.children].forEach((b,j)=>{b.setAttribute('aria-selected',String(i===j));b.tabIndex=i===j?0:-1;});}
tabs.addEventListener('keydown',e=>{let i=[...tabs.children].indexOf(document.activeElement);if(i<0)return;if(e.key==='ArrowRight')i=(i+1)%5;else if(e.key==='ArrowLeft')i=(i+4)%5;else if(e.key==='Home')i=0;else if(e.key==='End')i=4;else return;e.preventDefault();selectChapter(i);tabs.children[i].focus();});
selectChapter(0);
