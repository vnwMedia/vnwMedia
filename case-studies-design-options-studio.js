/* Case Studies concepts 21–30. Uses shared, verified project data. */
const caseStudioDirections = [
  ['The Work Wall', 'An art-directed portfolio wall: staggered photographs, oversized editorial type, and concise strategic captions.'],
  ['Client Editions', 'A selectable client edition with a blue spine, a photographic cover, and an open editorial brief.'],
  ['The Exhibition', 'A dark gallery with wide photographic project rows, exhibition labels, and expandable business context.'],
  ['The Working Collage', 'A warm studio composition pairing business photography and website imagery with practical field notes.'],
  ['The Decision Board', 'A white and blue strategy board that lets visitors explore each project through a customer question, direction, or scope.'],
  ['Business / Experience', 'A panoramic photo-and-screen diptych connecting the real business to the experience customers see.'],
  ['Open Project Briefs', 'An architectural editorial layout: crisp rules, photographic briefs, and useful details revealed on demand.'],
  ['Customer Moments', 'Three customer moments become the visual structure: explore, feel confident, and ask for help.'],
  ['The Studio Archive', 'A cinematic, manually controlled portfolio carousel with a complete index and a compact strategy ledger.'],
  ['The Agency Broadsheet', 'A contemporary newspaper-inspired page with an oversized masthead, a cover story, and two supporting stories.']
];
const csNum = i => String(i + 1).padStart(2, '0');
const csLabel = (a, b) => `<div class="cs-meta"><span>${a}</span><span>${b}</span></div>`;
const csSectionTitle = (label, title, copy = '') => `<header class="cs-section-title"><p class="eyebrow">${label}</p><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</header>`;
const csScope = p => `<div class="cs-scope"><span class="eyebrow">SERVICES PROVIDED</span>${tags(p)}</div>`;
const csAllLinks = (prefix = '') => `<nav class="cs-project-index" aria-label="All client case studies">${projects.map((p, i) => `<a href="${url(p)}"><span>${prefix}${csNum(i)}</span><strong>${p.name}</strong><span aria-hidden="true">↗</span></a>`).join('')}</nav>`;
const csNote = (title, copy) => `<section class="cs-perspective"><div class="wrap"><p class="eyebrow">THE VNW MEDIA PERSPECTIVE</p><h2>${title}</h2><p>${copy}</p><a class="text-link" href="contact.html">Talk through your business priorities ↗</a></div></section>`;

/* 21 — The Work Wall */
function csWorkWall() {
  return `<section class="cs-wall-intro wrap">${csLabel('VNW MEDIA / SELECTED CASE STUDIES', 'BUSINESS FIRST. ALWAYS.')}
    <div class="cs-wall-title"><h2>Work, with<br><em>reason.</em></h2><div><p>Different businesses.<br>Distinct customer decisions.<br>One considered direction.</p><a href="#cs-wall" class="text-link">Step inside the work ↗</a></div></div>
  </section><section class="cs-wall wrap" id="cs-wall">
    ${projects.map((p, i) => `<article class="cs-wall-item cs-wall-item-${i}"><div class="cs-wall-marker"><span>${csNum(i)}</span><p>${p.industry}<br>SELECTED CLIENT</p></div><a class="cs-wall-photo" href="${url(p)}">${image(p)}<span>Open case study ↗</span></a><div class="cs-wall-caption"><h3>${p.name}</h3><p>${p.business}</p><span class="eyebrow">THE FOCUS</span><p>${p.focus}</p>${csScope(p)}${read(p)}</div></article>`).join('')}
    <aside class="cs-wall-aside"><span class="eyebrow">BEYOND THE SURFACE</span><h3>A better answer.<br>A clearer next step.</h3><p>We connect what a business offers with what a customer needs to understand.</p><a href="services.html" class="text-link">Explore our services ↗</a></aside>
  </section>${csNote('The right work starts<br>with the right question.', 'What does your customer need to know before calling, comparing, or requesting a quote? That question gives a project its direction.')}`;
}

/* 22 — Client Editions */
function csEditionPanel(i) {
  const p = projects[i];
  return `<div class="cs-edition-cover"><div class="cs-edition-spine"><span>EDITION ${csNum(i)}</span><span>${p.industry}</span></div><a class="cs-edition-photo" href="${url(p)}">${image(p)}<div><p class="eyebrow">THE BUSINESS IN VIEW</p><h2>${p.name}</h2></div></a></div>
    <div class="cs-edition-brief wrap"><div><p class="eyebrow">THE BUSINESS</p><h3>${p.headline}</h3><p>${p.business}</p>${read(p)}</div><div><p class="eyebrow">THE CUSTOMER’S QUESTION</p><p>${p.challenge}</p><p class="eyebrow">THE STRATEGIC DIRECTION</p><p>${p.approach}</p>${csScope(p)}</div></div>`;
}
function csClientEditions() {
  return `<section class="cs-editions-intro wrap"><div><p class="eyebrow">CASE STUDIES / THE CLIENT EDITIONS</p><h2>Every business.<br><em>A different brief.</em></h2></div><p>Choose an edition. See the business, the customer’s situation, and the services behind the work.</p></section>
    <nav class="cs-edition-tabs wrap" aria-label="Choose a client edition">${projects.map((p, i) => `<button type="button" data-cs-edition="${i}" aria-pressed="${i === 0}"><span>${csNum(i)}</span>${p.name}</button>`).join('')}</nav>
    <section id="cs-edition-panel" class="cs-edition-panel" aria-live="polite">${csEditionPanel(0)}</section><section class="cs-edition-index wrap">${csAllLinks('CASE ')}</section>`;
}

/* 23 — The Exhibition */
function csExhibition() {
  return `<section class="cs-exhibition-head wrap">${csLabel('VNW MEDIA / THE EXHIBITION', 'SELECTED CLIENT WORK')}<div><h2>Look closer.</h2><p>There’s a business behind it. Explore the audience, the priorities, and the services that shape each project.</p></div></section>
    <section class="cs-exhibition wrap">${projects.map((p, i) => `<article><div class="cs-exhibit-number">${csNum(i)}</div><div class="cs-exhibit-main"><a class="cs-exhibit-photo" href="${url(p)}">${image(p)}<span>${p.industry}</span></a><header><h3>${p.name}</h3>${read(p)}</header><details><summary><span>Inside the brief</span><span class="cs-open-label" aria-hidden="true">+</span></summary><div class="cs-exhibit-details"><div><span class="eyebrow">BUSINESS CONTEXT</span><p>${p.business}</p><span class="eyebrow">CUSTOMER PRIORITY</span><p>${p.focus}</p></div><div><span class="eyebrow">THE DIRECTION</span><p>${p.approach}</p>${csScope(p)}</div></div></details></div></article>`).join('')}</section>
    <section class="cs-exhibition-quote"><div class="wrap"><p class="eyebrow">A USEFUL WAY TO READ A CASE STUDY</p><h2>Find the challenge<br>you <em>recognize.</em></h2><p>The most relevant project may share your customer’s question, even if it comes from a different industry.</p>${button('Discuss your challenge')}</div></section>`;
}

/* 24 — The Working Collage */
function csWorkingCollage() {
  const p = projects[0];
  return `<section class="cs-collage-head wrap"><p class="eyebrow">CASE STUDIES / FROM THE STUDIO</p><div><h2>Business in focus.<br><em>Thinking in motion.</em></h2><p>Explore the context behind the work, from first impressions to practical customer decisions.</p></div></section>
    <section class="cs-collage wrap"><div class="cs-collage-main">${image(p)}<span class="cs-photo-caption">01 / SOUTH CAROLINA MOTORS</span></div><div class="cs-collage-screen">${image(p, true)}<p>Existing website presentation</p></div><div class="cs-collage-note"><p class="eyebrow">STUDIO NOTE 01</p><h3>Give interest<br>a direction.</h3><p>${p.approach}</p></div><div class="cs-collage-story"><p class="eyebrow">${p.industry}</p><h2>${p.name}</h2><p>${p.business}</p>${csScope(p)}${read(p)}</div></section>
    <section class="cs-collage-pair wrap">${projects.slice(1).map((p, i) => `<article><div class="cs-collage-pair-image">${image(p)}<span>${csNum(i + 1)}</span></div><div><p class="eyebrow">${p.industry}</p><h3>${p.name}</h3><p>${p.business}</p><h4>${p.focus}</h4><p>${p.approach}</p>${csScope(p)}${read(p)}</div></article>`).join('')}</section>
    ${csNote('Clarity is part of the craft.', 'A strong visual impression needs useful service information, recognizable business details, and a straightforward way to continue the conversation.')}`;
}

/* 25 — The Decision Board */
const csDecisionModes = [['challenge', 'The customer question'], ['approach', 'The strategic direction'], ['serviceCopy', 'The services provided']];
function csDecisionCards(mode) {
  return projects.map((p, i) => `<article><div class="cs-decision-image">${image(p)}<span>${csNum(i)}</span></div><p class="eyebrow">${p.industry}</p><h3>${p.name}</h3><p class="cs-decision-business">${p.business}</p><div class="cs-decision-answer"><span class="eyebrow">${csDecisionModes.find(m => m[0] === mode)[1]}</span><h4>${p[mode]}</h4></div>${read(p)}</article>`).join('');
}
function csDecisionBoard() {
  return `<section class="cs-board-hero"><div class="wrap">${csLabel('VNW MEDIA / CASE STUDIES', 'A LITTLE LESS GUESSWORK')}<div><h2>What makes<br>the work <em>work?</em></h2><p>The business problem, the customer’s decision, and a service mix with a reason to be there.</p></div></div></section>
    <section class="cs-decision-board wrap"><header><div><p class="eyebrow">THREE PROJECTS. THREE PERSPECTIVES.</p><h2>Change the lens.</h2></div><div class="cs-decision-controls" role="group" aria-label="Choose the information to compare">${csDecisionModes.map((m, i) => `<button type="button" data-cs-decision="${m[0]}" aria-pressed="${i === 0}">${csNum(i)} / ${m[1]}</button>`).join('')}</div></header><div id="cs-decision-cards" class="cs-decision-cards" aria-live="polite">${csDecisionCards('challenge')}</div></section>
    <section class="cs-board-takeaway wrap"><p class="eyebrow">THE TAKEAWAY</p><h2>Choose a relevant approach.<br>Not a one-size-fits-all package.</h2><p>Your audience, market, and current setup should guide your scope.</p>${button('Find your starting point')}</section>`;
}

/* 26 — Business / Experience */
function csDiptychPanel(i) {
  const p = projects[i];
  return `<div class="cs-diptych-visuals"><figure><div>${image(p)}</div><figcaption><span>01 / THE BUSINESS</span><strong>${p.name}</strong></figcaption></figure><figure><div>${image(p, true)}</div><figcaption><span>02 / THE EXPERIENCE</span><strong>Website presentation</strong></figcaption></figure></div>
    <div class="cs-diptych-context wrap"><h3>${p.headline}</h3><div><p>${p.business}</p><p>${p.approach}</p>${csScope(p)}${read(p)}</div></div>`;
}
function csBusinessExperience() {
  return `<section class="cs-diptych-hero wrap"><p class="eyebrow">SELECTED CASE STUDIES</p><h2>The business.<span>The experience.</span></h2><div><p>Two views. One customer journey.</p><p>See the real-world context and the digital presentation, together.</p></div></section>
    <nav class="cs-diptych-selector wrap" aria-label="Choose a project to explore">${projects.map((p, i) => `<button type="button" data-cs-diptych="${i}" aria-pressed="${i === 0}">${csNum(i)}<span>${p.name}</span></button>`).join('')}</nav><section id="cs-diptych-panel" aria-live="polite">${csDiptychPanel(0)}</section>
    <section class="cs-diptych-ledger"><div class="wrap">${csSectionTitle('THE VERIFIED SERVICE MIX', 'The scope behind the picture.', 'Website presentations provide context. The service lists below describe the work included in these portfolio summaries.')}<div>${projects.map(p => `<article><h3>${p.name}</h3><p>${p.serviceCopy}</p>${read(p)}</article>`).join('')}</div></div></section>`;
}

/* 27 — Open Project Briefs */
function csOpenBriefs() {
  return `<section class="cs-open-head wrap"><p class="eyebrow">CASE STUDIES / AN OPEN BOOK</p><h2>Good work.<br><em>Nothing to guess.</em></h2><div><span>CONTEXT / SERVICES / DIRECTION</span><p>A useful portfolio lets you see what the business needed and what belonged in the scope.</p></div></section>
    <section class="cs-open-briefs wrap">${projects.map((p, i) => `<article><header><span>${csNum(i)}</span><div><p class="eyebrow">${p.industry}</p><h2>${p.name}</h2></div>${read(p)}</header><div class="cs-open-core"><a href="${url(p)}">${image(p)}</a><div><h3>${p.headline}</h3><p>${p.business}</p><details open><summary>Customer priorities</summary><p>${p.challenge}</p></details><details><summary>Strategic direction</summary><p>${p.approach}</p></details><details><summary>Services provided</summary>${tags(p)}</details></div></div></article>`).join('')}</section>
    ${csNote('You should understand<br>the proposal, too.', 'Before a project begins, agree on the business goal, the deliverables, and the responsibilities. Clear decisions make better working relationships.')}`;
}

/* 28 — Customer Moments */
const csMoments = [
  ['Explore.', '“Is this the right place for me?”', 'Help a shopper understand the business, the offer, and the route to a conversation.'],
  ['Find your restaurant.', '“Which location is near me?”', 'Connect local searches with relevant restaurant information.'],
  ['Ask for help.', '“Can someone help with my project?”', 'Separate urgent service needs from planned work, then make the contact path clear.']
];
function csCustomerMoments() {
  return `<section class="cs-moment-head wrap"><p class="eyebrow">CASE STUDIES / THE HUMAN SIDE</p><h2>Behind every click,<br><em>a moment that matters.</em></h2><p>See the work through the person making the decision.</p></section>
    <section class="cs-moments">${projects.map((p, i) => `<article class="cs-moment cs-moment-${i}"><div class="wrap"><header><span class="eyebrow">MOMENT ${csNum(i)}</span><h2>${csMoments[i][0]}</h2></header><div class="cs-moment-main"><a class="cs-moment-image" href="${url(p)}">${image(p)}<span>${p.industry}</span></a><div><p class="cs-moment-question">${csMoments[i][1]}</p><p>${csMoments[i][2]}</p><div class="cs-moment-case"><p class="eyebrow">THE CLIENT CONTEXT</p><h3>${p.name}</h3><p>${p.business}</p>${csScope(p)}${read(p)}</div></div></div></div></article>`).join('')}</section>
    <section class="cs-moment-close wrap"><h2>What is the moment<br>your business needs to improve?</h2>${button('Let’s work through it')}</section>`;
}

/* 29 — The Studio Archive */
function csArchiveSlide(i) {
  const p = projects[i];
  return `<a class="cs-archive-photo" href="${url(p)}">${image(p)}<span>VIEW THE FULL CASE ↗</span></a><div class="cs-archive-title"><span class="eyebrow">${csNum(i)} / ${p.industry}</span><h2>${p.name}</h2><p>${p.headline}</p></div><div class="cs-archive-brief"><p>${p.business}</p><div><span class="eyebrow">SERVICES PROVIDED</span><p>${p.serviceCopy}</p></div>${read(p)}</div>`;
}
function csStudioArchive() {
  return `<section class="cs-archive-head wrap"><div><p class="eyebrow">VNW MEDIA / THE STUDIO ARCHIVE</p><h2>A closer look<br>at <em>the work.</em></h2></div><p>A curated view of real business priorities and the services behind them.</p></section>
    <section class="cs-archive wrap"><div class="cs-archive-controls"><p class="eyebrow" id="cs-archive-count">PROJECT 01 OF 03</p><div><button type="button" data-cs-archive-step="-1" aria-label="Previous project">Previous</button><button type="button" data-cs-archive-step="1" aria-label="Next project">Next</button></div></div><div class="cs-archive-slide" id="cs-archive-slide" data-current="0" aria-live="polite">${csArchiveSlide(0)}</div></section>
    <section class="cs-archive-index wrap">${csSectionTitle('THE COMPLETE INDEX', 'Three client perspectives.')}${csAllLinks()}</section><section class="cs-archive-notes"><div class="wrap">${projects.map((p, i) => `<article><span class="eyebrow">${csNum(i)} / ${p.name}</span><h3>${p.focus}</h3><p>${p.approach}</p></article>`).join('')}</div></section>`;
}

/* 30 — The Agency Broadsheet */
function csAgencyBroadsheet() {
  const p = projects[1];
  return `<section class="cs-broadsheet wrap"><header class="cs-broadsheet-masthead">${csLabel('VNW MEDIA / CASE STUDIES', 'BUSINESS · SEARCH · EXPERIENCE')}<h2>The Work Review.</h2><div><span>SELECTED CLIENT STORIES</span><p>A clearer perspective on what makes a project relevant.</p></div></header>
    <div class="cs-broadsheet-cover"><div class="cs-broadsheet-cover-copy"><p class="eyebrow">THE COVER STORY / ${p.industry}</p><h2>Confidence begins<br>with <em>clarity.</em></h2><p>${p.business}</p><p>${p.approach}</p>${read(p)}</div><a href="${url(p)}">${image(p)}<span>LA ROSA CHICKEN AND GRILL / 11 LOCATIONS</span></a><aside><p class="eyebrow">IN THIS EDITION</p>${csAllLinks()}<div><p class="eyebrow">THE COVER’S SERVICE MIX</p><p>${p.serviceCopy}</p></div></aside></div>
    <section class="cs-broadsheet-stories">${[projects[0], projects[2]].map((p, i) => `<article><header><span class="eyebrow">STORY ${csNum(i + 1)}</span><span>${p.industry}</span></header><a href="${url(p)}">${image(p)}</a><h3>${p.headline}</h3><p class="cs-broadsheet-byline">THE BUSINESS / ${p.name}</p><p>${p.business}</p><p>${p.challenge}</p>${csScope(p)}${read(p)}</article>`).join('')}<aside><p class="eyebrow">THE EDITORIAL NOTE</p><h3>A case study is an invitation to ask better questions.</h3><p>What was the business problem? Which services were provided? How might your own customers be different?</p><p>Those answers tell you more than a familiar industry label alone.</p><a href="#new-faq" class="text-link">Questions before you start ↗</a></aside></section>
    <section class="cs-broadsheet-statement"><p class="eyebrow">THE NEXT STORY</p><h2>Let’s make your next<br>business decision <em>a clear one.</em></h2>${button('Discuss your project')}</section></section>`;
}

const caseStudioRenderers = [csWorkWall, csClientEditions, csExhibition, csWorkingCollage, csDecisionBoard, csBusinessExperience, csOpenBriefs, csCustomerMoments, csStudioArchive, csAgencyBroadsheet];

function bindCaseStudio() {
  const preview = document.querySelector('#preview');
  if (!preview || preview.dataset.csStudioBound) return;
  preview.dataset.csStudioBound = 'true';
  preview.addEventListener('click', event => {
    const el = event.target.closest('button');
    if (!el || !preview.contains(el)) return;
    if (el.matches('[data-cs-edition]')) {
      preview.querySelectorAll('[data-cs-edition]').forEach(b => b.setAttribute('aria-pressed', b === el));
      preview.querySelector('#cs-edition-panel').innerHTML = csEditionPanel(Number(el.dataset.csEdition));
    }
    if (el.matches('[data-cs-decision]')) {
      preview.querySelectorAll('[data-cs-decision]').forEach(b => b.setAttribute('aria-pressed', b === el));
      preview.querySelector('#cs-decision-cards').innerHTML = csDecisionCards(el.dataset.csDecision);
    }
    if (el.matches('[data-cs-diptych]')) {
      preview.querySelectorAll('[data-cs-diptych]').forEach(b => b.setAttribute('aria-pressed', b === el));
      preview.querySelector('#cs-diptych-panel').innerHTML = csDiptychPanel(Number(el.dataset.csDiptych));
    }
    if (el.matches('[data-cs-archive-step]')) {
      const panel = preview.querySelector('#cs-archive-slide');
      const i = (Number(panel.dataset.current) + Number(el.dataset.csArchiveStep) + projects.length) % projects.length;
      panel.dataset.current = String(i);
      panel.innerHTML = csArchiveSlide(i);
      preview.querySelector('#cs-archive-count').textContent = `PROJECT ${csNum(i)} OF 03`;
    }
  });
}
