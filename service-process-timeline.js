(() => {
 const section=document.querySelector('#how-the-project-moves');
 if(!section||document.body.dataset.processOption)return;
 const slug=document.body.dataset.page.replace('service-','');
 const focus={"web-design":"sitemap approval, responsive template reviews, staging tests, and launch handoff","ecommerce":"catalog mapping, storefront approval, test orders, and store cutover","website-maintenance":"support access, remediation approval, update verification, and recurring priorities","app-design-development":"release requirements, prototype testing, acceptance criteria, and deployment ownership","landing-pages":"offer approval, page proofs, inquiry tracking, and post-launch evaluation","brand-strategy":"research priorities, positioning evidence, brand voice approval, and rollout ownership","graphic-design":"creative briefs, concept selection, final proofs, and production-ready file delivery","seo":"search priorities, page mapping, implementation validation, and performance review","local-seo":"location accuracy, local page planning, listing updates, and local search evaluation","technical-seo":"crawl findings, technical priorities, implementation testing, and validation","content-seo":"search intent, topic mapping, content approval, and query performance review","yelp-seo":"business details, profile updates, customer response standards, and activity review","google-business-profile":"ownership verification, business-information approval, update scheduling, and profile reconciliation","aeo":"customer questions, answer structure, evidence review, and search presentation","geo":"entity information, source coverage, content validation, and generative-search observations","aio":"visibility priorities, content relationships, technical checks, and measurement","content-writing":"editorial briefs, content outlines, draft reviews, and publication handoff","lead-generation":"qualification criteria, lead routing, campaign readiness, and sales feedback","google-ppc":"campaign briefs, advertising approval, conversion testing, and evidence-based budget decisions","paid-social":"audience priorities, creative approval, tracking checks, and campaign evaluation","crm-automation":"record requirements, workflow mapping, routing tests, and operational handoff","video-editing":"source footage, rough-cut review, fine-cut approval, and final exports","social-media":"monthly briefs, content approval, publishing checks, and audience-response review","social-media-consultation":"channel assessment, strategic recommendations, team guidance, and follow-up decisions","community-management":"response responsibilities, escalation rules, coverage approval, and conversation review","reputation-management":"review sources, response standards, monitoring responsibilities, and reputation reporting","email-marketing":"permission records, campaign approval, automation tests, and delivery review","text-marketing":"consent verification, message approval, trigger testing, and opt-out monitoring"};
 section.classList.add('service-process-timeline');
 const name=section.querySelector('h2').textContent.split(':')[0];
 const intro=section.querySelector('.csp-section-head>div>p');
 intro.textContent='Our '+name+' process connects '+focus[slug]+'. Each checkpoint confirms the work, records feedback, and establishes who approves the next phase, so the team can move forward with clear responsibilities and an agreed scope.';
 const cta=document.createElement('a');cta.className='pill pill-blue spt-contact';cta.href='../contact.html';cta.textContent='Plan Your Project';cta.setAttribute('aria-label','Plan your '+name+' project');
 const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';cta.append(arrow);intro.after(cta);
 section.querySelectorAll('.csp-process-studio-card').forEach(card=>{
  const art=card.querySelector('.scp-art'), frame=document.createElement('div');
  frame.className='spt-art-frame';art.before(frame);frame.append(art);
  const p=card.querySelector('.csp-process-step p'),words=p.textContent.trim().split(/\s+/);
  let best,score=Infinity;
  for(let i=1;i<words.length-1;i++)for(let j=i+1;j<words.length;j++){
   const lines=[words.slice(0,i).join(' '),words.slice(i,j).join(' '),words.slice(j).join(' ')];
   const lens=lines.map(l=>l.length),delta=Math.max(...lens)-Math.min(...lens);
   if(delta<score){score=delta;best=lines;}
  }
  p.replaceChildren(...best.map((line,i)=>{const span=document.createElement('span');span.className='spt-line';span.textContent=line+(i<2?' ':'');return span;}));
 });
 const fit=()=>{const desktop=innerWidth>1100;section.style.removeProperty('--spt-copy-size');if(!desktop)return;
  let ratio=1;section.querySelectorAll('.spt-line').forEach(line=>{ratio=Math.min(ratio,line.clientWidth/line.scrollWidth);});
  section.style.setProperty('--spt-copy-size',(13*ratio).toFixed(2)+'px');
 };
 requestAnimationFrame(fit);document.fonts.ready.then(fit);window.addEventListener('resize',fit);
})();
