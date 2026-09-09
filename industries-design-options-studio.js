/* Industries concepts 21–30. Each composition uses the existing industry catalogue. */
const industryStudioConcepts = [
  ['The Market Studio', 'An architectural dark cover, photographic side notes, and an interactive industry briefing.'],
  ['The Contact Edition', 'A crisp photographic contact sheet with oversized editorial typography and concise industry priorities.'],
  ['The Decision Brief', 'A calm, premium industry brief that changes around the business the visitor selects.'],
  ['Three Perspectives', 'A cinematic triptych followed by industry groups built around customer intent.'],
  ['Industry Architecture', 'A dark, deliberately composed wall of photography, typography, and practical industry signals.'],
  ['The Customer Sequence', 'A clean studio layout with an interactive three-stage customer journey and a compact industry directory.'],
  ['Decisions in the Real World', 'Three immersive editorial chapters connecting everyday business settings to customer decisions.'],
  ['The Portfolio Edit', 'A confident, offset photographic portfolio with generous white space and a sharp typographic hierarchy.'],
  ['The Photographic Index', 'A precise, interactive industry index with a changing photographic cover and a clear strategic summary.'],
  ['Sector Signals', 'An understated split composition and expandable industry briefs organized around trust, action, and service fit.']
];

const isNumber = i => String(i + 1).padStart(2, '0');
const isEyebrow = text => `<p class="eyebrow">${text}</p>`;
const isMore = (d, text = 'Explore industry') => `<a class="text-link" href="${link(d)}">${text} <span aria-hidden="true">↗</span></a>`;
const isIndustryLinks = (title = 'Find your industry.') => `
  <section class="is-directory section wrap">
    <div class="is-directory-heading">${isEyebrow('EIGHT INDUSTRIES / DISTINCT PRIORITIES')}<h2>${title}</h2></div>
    <div class="is-link-grid">${industries.map((d, i) => `
      <a href="${link(d)}"><span>${isNumber(i)}</span><div><h3>${d.name}</h3><p>${d.action}</p></div><span aria-hidden="true">↗</span></a>
    `).join('')}</div>
  </section>`;
const isSmallNote = (title, copy) => `<aside class="is-note"><h3>${title}</h3><p>${copy}</p></aside>`;
const isGroupData = [
  ['local', 'When the need is close to home.', 'LOCAL DEMAND', 'Be present for the search. Be clear about the service. Make the next conversation easy.'],
  ['trust', 'When confidence comes first.', 'CONSIDERED DECISIONS', 'Give expertise, expectations, and important questions room to do their work.'],
  ['commerce', 'When interest becomes a visit.', 'VISITS & PURCHASES', 'Connect the experience people imagine with the practical details they need to act.']
];

function isStudioBrief(i) {
  const d = industries[i];
  return `<div class="is-studio-brief-image">${photo(d)}<span>${isNumber(i)} / ${d.short}</span></div>
    <div class="is-studio-brief-copy">${isEyebrow('THE CUSTOMER OPPORTUNITY')}<h3>${d.need}</h3><p>${d.copy}</p>
    <div class="is-studio-trust">${isEyebrow('GIVE THEM CONFIDENCE')}<p>${d.trust}</p></div>${isMore(d)}</div>`;
}
function industryMarketStudio() {
  return `<section class="is-market-cover">
    <div class="wrap is-market-grid">
      <div class="is-market-heading">${isEyebrow('VNW MEDIA / INDUSTRIES')}<h2>Know the world.<br><em>Shape the choice.</em></h2>
        <p>Digital experiences with the context your customers need—and the direction your business deserves.</p>
        ${btn('Explore your industry', '#is-studio-sectors')}
        <div class="is-market-caption"><span>STRATEGY / DESIGN / VISIBILITY</span><span>BUILT AROUND YOUR BUSINESS</span></div>
      </div>
      <div class="is-market-photos"><figure>${photo(industries[3])}<figcaption>Make a place worth discovering.</figcaption></figure><figure>${photo(industries[0])}<figcaption>Make a service easier to choose.</figcaption></figure></div>
    </div>
  </section>
  <section id="is-studio-sectors" class="section wrap is-studio-sectors">
    <div class="is-section-intro">${isEyebrow('CHOOSE YOUR CONTEXT')}<h2>It starts with<br>your customer.</h2><p>Explore the details that matter before adding more channels, content, or campaigns.</p></div>
    <div class="is-studio-explorer"><div class="is-studio-tabs" role="group" aria-label="Choose an industry">${industries.map((d, i) => `<button data-is-studio="${i}" aria-pressed="${i === 0}"><span>${isNumber(i)}</span>${d.short}</button>`).join('')}</div><div id="is-studio-brief" class="is-studio-brief" aria-live="polite">${isStudioBrief(0)}</div></div>
    <div class="is-studio-links">${industries.map(d => `<a href="${link(d)}">${d.name} ↗</a>`).join('')}</div>
  </section>`;
}

function industryContactEdition() {
  return `<section class="is-contact-cover wrap">
    <div class="is-contact-line">${isEyebrow('VNW MEDIA / INDUSTRY EDITION')}<span>STRATEGY THAT BELONGS IN YOUR WORLD</span></div>
    <div class="is-contact-title"><h2>Your world.<br>In focus.</h2><div><p>From the first search to the next decision, we help businesses present the details that make people choose.</p>${btn('Talk about your business')}</div></div>
    <div class="is-contact-grid">${industries.map((d, i) => `<article><a href="${link(d)}"><div class="is-contact-photo">${photo(d)}<span>${isNumber(i)}</span></div><div class="is-contact-card-heading"><h3>${d.short}</h3><span aria-hidden="true">↗</span></div></a><p>${d.need}</p></article>`).join('')}</div>
  </section>
  <section class="is-contact-notes"><div class="wrap"><div>${isEyebrow('THE COMMON THREAD')}<h2>The category changes.<br>The details matter.</h2></div><div class="is-contact-note-grid">${[
    ['Relevance', 'Use the language, questions, and local context your audience recognizes.'],
    ['Confidence', 'Make the proof, people, and practical information easy to find.'],
    ['Momentum', 'Build a clear path to the right inquiry, appointment, visit, or purchase.']
  ].map((x, i) => `<article><span>${isNumber(i)}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section>`;
}

function isDecisionBrief(i) {
  const d = industries[i];
  return `<div class="is-decision-photo">${photo(d)}<span>INDUSTRY BRIEF / ${isNumber(i)}</span></div><div class="is-decision-info">${isEyebrow(d.name)}<h3>${d.need}</h3><p>${d.copy}</p><dl><div><dt>What they need to know</dt><dd>${d.trust}</dd></div><div><dt>The next useful action</dt><dd>${d.action}</dd></div></dl>${tags(d)}${isMore(d, 'Read the industry brief')}</div>`;
}
function industryDecisionBrief() {
  return `<section class="is-decision-cover wrap"><div class="is-decision-title">${isEyebrow('INDUSTRY INTELLIGENCE / VNW MEDIA')}<h2>They’re not<br>just browsing.<br><em>They’re deciding.</em></h2></div><div class="is-decision-intro"><p>A better website begins with a better understanding of the choice your customer is trying to make.</p><p>Explore a starting point for your industry. We’ll shape the actual plan around your business.</p><label for="is-decision-select">START WITH YOUR INDUSTRY</label><select id="is-decision-select">${industries.map((d, i) => `<option value="${i}">${d.name}</option>`).join('')}</select></div></section>
    <section class="wrap is-decision-panel" id="is-decision-panel" aria-live="polite">${isDecisionBrief(0)}</section>
    <section class="is-decision-note wrap">${isSmallNote('Better context. Better conversations.', 'Your services, geography, customer questions, and current experience help determine which improvements deserve attention first.')}<a class="text-link" href="contact.html">Discuss your starting point ↗</a></section>
    ${isIndustryLinks('Every industry has its own first question.')}`;
}

function industryThreePerspectives() {
  return `<section class="is-perspective-title wrap"><div>${isEyebrow('INDUSTRIES / DIFFERENT WORLDS, CONNECTED THINKING')}<h2>Where your business meets<br><em>their next decision.</em></h2></div><p>Be relevant. Build confidence. Invite action.<br>A simple direction, shaped by the world you work in.</p></section>
    <section class="is-triptych">${[
      [0, 'Be needed.', 'LOCAL SERVICES'], [5, 'Be trusted.', 'PROFESSIONAL EXPERTISE'], [3, 'Be chosen.', 'CUSTOMER EXPERIENCES']
    ].map(([i, title, label]) => `<article>${photo(industries[i])}<div>${isEyebrow(label)}<h3>${title}</h3><a href="${link(industries[i])}">Explore ${industries[i].short} ↗</a></div></article>`).join('')}</section>
    <section class="is-perspective-groups section wrap">${isGroupData.map((g, i) => `<article><div class="is-perspective-group-head"><span>${isNumber(i)}</span><div>${isEyebrow(g[2])}<h2>${g[1]}</h2><p>${g[3]}</p></div></div><div class="is-perspective-links">${industries.filter(d => d.group === g[0]).map(d => `<a href="${link(d)}"><h3>${d.name}</h3><p>${d.action}</p><span aria-hidden="true">↗</span></a>`).join('')}</div></article>`).join('')}</section>`;
}

function industryArchitecture() {
  return `<section class="is-architecture-cover wrap"><div class="is-architecture-top">${isEyebrow('VNW MEDIA / THE INDUSTRY ARCHITECTURE')}<span>CONTEXT BEFORE CHANNELS</span></div><div class="is-architecture-title"><h2>Specific businesses.<br><em>Considered work.</em></h2><p>Not every customer needs the same evidence. Not every business needs the same starting point.</p></div></section>
    <section class="wrap is-architecture-wall">${industries.map((d, i) => `<article class="is-wall-cell is-wall-${i}">${i % 3 !== 1 ? `<a href="${link(d)}" class="is-wall-photo">${photo(d)}</a>` : ''}<div class="is-wall-content"><span class="eyebrow">${isNumber(i)} / INDUSTRY</span><h3><a href="${link(d)}">${d.short}</a></h3><p>${d.need}</p><a class="is-wall-link" href="${link(d)}">View industry <span aria-hidden="true">↗</span></a></div></article>`).join('')}</section>
    <section class="is-architecture-method section wrap"><div>${isEyebrow('THE WORK BEHIND THE WORK')}<h2>Make every layer<br>earn its place.</h2></div><div><article><h3>Understand the decision.</h3><p>Start with customer intent, business priorities, and the evidence needed to move forward.</p></article><article><h3>Connect the experience.</h3><p>Shape the relationship between your messaging, website, visibility, and inquiry path.</p></article><article><h3>Agree on what matters.</h3><p>Set the scope and measurement around meaningful customer actions, not activity alone.</p></article></div></section>`;
}

const isSequenceData = [
  ['Discovery', 'Meet the need before the click.', 'How does your customer describe the problem? Search intent, business information, and campaign context should lead to a relevant first impression.', 'Find the language they use.', 'Make locations and services clear.', 'Connect the promise to the page.', 0],
  ['Evaluation', 'Give good questions good answers.', 'Before someone contacts you, they need to understand your offer and feel confident about the next step. Useful proof and practical details reduce uncertainty.', 'Make expertise visible.', 'Show work and customer context.', 'Explain the process and expectations.', 5],
  ['Action', 'Make the next step feel natural.', 'The right action depends on the industry. A booking, a quote, a consultation, or a purchase should be easy to understand and complete.', 'Choose a clear primary action.', 'Remove unnecessary form friction.', 'Plan what happens after the inquiry.', 7]
];
function isSequencePanel(i) {
  const s = isSequenceData[i];
  return `<div class="is-sequence-photo">${photo(industries[s[6]])}<span>${isNumber(i)} / ${s[0]}</span></div><article>${isEyebrow('THE CUSTOMER SEQUENCE')}<h3>${s[1]}</h3><p>${s[2]}</p><ul>${s.slice(3, 6).map(t => `<li>${t}</li>`).join('')}</ul></article>`;
}
function industryCustomerSequence() {
  return `<section class="is-sequence-cover wrap"><div>${isEyebrow('INDUSTRIES WE SERVE')}<h2>Different choices.<br><em>A clearer journey.</em></h2><p>Build the experience around what your customer needs to discover, understand, and do.</p></div><div class="is-sequence-cover-photos">${photo(industries[4])}${photo(industries[7])}</div></section>
    <section class="is-sequence-section"><div class="wrap"><div class="is-sequence-tabs" role="group" aria-label="Explore the customer journey">${isSequenceData.map((s, i) => `<button data-is-sequence="${i}" aria-pressed="${i === 0}"><span>${isNumber(i)}</span><strong>${s[0]}</strong><span aria-hidden="true">↗</span></button>`).join('')}</div><div id="is-sequence-panel" class="is-sequence-panel" aria-live="polite">${isSequencePanel(0)}</div></div></section>
    ${isIndustryLinks('Your industry changes the details.')}`;
}

function industryRealWorld() {
  return `<section class="is-real-title wrap">${isEyebrow('VNW MEDIA / INDUSTRIES')}<h2>Digital decisions.<br><em>Real-world businesses.</em></h2><div><p>Behind every search is someone trying to get something done. We build for that person—and the business that can help.</p><a class="text-link" href="#is-real-chapters">Explore the worlds we work in ↗</a></div></section>
    <section id="is-real-chapters" class="is-real-chapters">${[
      ['local', 2, 'Close to home.', 'WHEN THE NEED IS PRACTICAL', 'A repair. A property. A project. Make your service, location, and next step unmistakable.'],
      ['trust', 1, 'Worth their confidence.', 'WHEN THE CHOICE IS PERSONAL', 'Give people useful context about your expertise, approach, and what happens when they reach out.'],
      ['commerce', 3, 'Part of their day.', 'WHEN EXPERIENCE MAKES THE DIFFERENCE', 'Bring your products, atmosphere, and customer experience into focus before the visit or purchase.']
    ].map((g, i) => `<article class="is-real-chapter"><div class="wrap is-real-chapter-grid"><div class="is-real-chapter-title"><span class="is-display-number">${isNumber(i)}</span>${isEyebrow(g[3])}<h2>${g[2]}</h2><p>${g[4]}</p></div><figure>${photo(industries[g[1]])}<figcaption>CONTEXT THAT SHAPES THE CUSTOMER EXPERIENCE</figcaption></figure><div class="is-real-chapter-links">${industries.filter(d => d.group === g[0]).map(d => `<a href="${link(d)}"><h3>${d.name}</h3><p>${d.action}</p><span aria-hidden="true">↗</span></a>`).join('')}</div></div></article>`).join('')}</section>`;
}

function industryPortfolioEdit() {
  return `<section class="is-edit-cover wrap"><div>${isEyebrow('THE INDUSTRY EDIT / VNW MEDIA')}<h2>The right details.<br><em>A different perspective.</em></h2></div><div class="is-edit-intro"><p>Thoughtful strategy for businesses with different audiences, different expectations, and different ways to grow.</p>${btn('Find your perspective', '#is-edit-gallery')}</div></section>
    <section class="is-edit-gallery wrap" id="is-edit-gallery">${industries.map((d, i) => `<article class="is-edit-card is-edit-card-${i}"><a class="is-edit-photo" href="${link(d)}">${photo(d)}<span>${isNumber(i)}</span></a><div class="is-edit-caption"><div>${isEyebrow(d.action)}<h3><a href="${link(d)}">${d.name}</a></h3></div><a href="${link(d)}" aria-label="Explore ${d.name}">↗</a></div><p>${d.need}</p></article>`).join('')}</section>
    <section class="is-edit-statement"><div class="wrap"><span class="eyebrow">OUR POINT OF VIEW</span><h2>Good design gets attention.<br>Relevant information<br><em>helps people choose.</em></h2><p>The strongest experience gives both a job to do.</p></div></section>`;
}

function isPhotoIndex(i) {
  const d = industries[i];
  return `${photo(d)}<div class="is-index-photo-caption"><span>${isNumber(i)} / ${d.short}</span><h3>${d.need}</h3>${isMore(d)}</div>`;
}
function industryPhotographicIndex() {
  return `<section class="is-index-cover"><div class="wrap is-index-heading"><div>${isEyebrow('INDUSTRIES / VNW MEDIA')}<h2>The context<br><em>comes first.</em></h2></div><p>Choose a world.<br>See what matters within it.</p></div>
    <div class="wrap is-index-body"><div class="is-index-list" role="group" aria-label="Preview an industry">${industries.map((d, i) => `<div><button data-is-index="${i}" aria-pressed="${i === 0}"><span>${isNumber(i)}</span><strong>${d.name}</strong></button><a href="${link(d)}" aria-label="Explore ${d.name}">↗</a></div>`).join('')}</div><div id="is-index-photo" class="is-index-photo" aria-live="polite">${isPhotoIndex(0)}</div></div>
  </section><section class="is-index-notes section wrap"><div>${isEyebrow('PAST THE FIRST IMPRESSION')}<h2>Make the details<br>work together.</h2></div><div class="is-index-note-grid">${[
    ['What you do', 'Give the offer a clear structure. Help people understand services, products, and who they are for.'],
    ['Why it matters', 'Bring forward the credentials, proof, experience, and practical context behind the choice.'],
    ['What comes next', 'Guide the customer to a useful next step with an inquiry, booking, or purchase path that makes sense.']
  ].map(([t, p]) => `<article><h3>${t}</h3><p>${p}</p></article>`).join('')}</div></section>`;
}

function industrySectorSignals() {
  return `<section class="is-signals-cover"><div class="wrap is-signals-grid"><div>${isEyebrow('INDUSTRIES / THE SIGNALS THAT MATTER')}<h2>Make yourself<br><em>easier to choose.</em></h2><p>Useful information. Relevant proof.<br>A clear next step.</p>${btn('Explore the industry briefs', '#is-signals-briefs')}</div><div class="is-signals-images"><figure>${photo(industries[5])}<figcaption>EXPERTISE</figcaption></figure><figure>${photo(industries[0])}<figcaption>EXPERIENCE</figcaption></figure></div></div></section>
    <section class="is-signals-briefs section wrap" id="is-signals-briefs"><div class="is-signals-intro">${isEyebrow('EIGHT BRIEFS. SPECIFIC STARTING POINTS.')}<h2>The right signals<br>for your world.</h2><p>Open an industry to explore the trust priorities, customer action, and services worth discussing.</p></div><div class="is-signals-list">${industries.map((d, i) => `<details name="is-signals" ${i === 0 ? 'open' : ''}><summary><span>${isNumber(i)}</span><h3>${d.name}</h3><b aria-hidden="true">+</b></summary><div class="is-signals-content"><div><h4>${d.need}</h4><p>${d.copy}</p>${isMore(d)}</div><dl><div><dt>Confidence</dt><dd>${d.trust}</dd></div><div><dt>Next action</dt><dd>${d.action}</dd></div><div><dt>Services to consider</dt><dd>${tags(d)}</dd></div></dl></div></details>`).join('')}</div></section>
    <section class="is-signals-promise"><div class="wrap"><p class="eyebrow">THE NEXT CONVERSATION</p><h2>Start with a useful question.<br>Not a list of channels.</h2><p>What do your best customers need to know before they choose you?</p>${btn('Let’s talk about that')}</div></section>`;
}

const industryStudioRenderers = [industryMarketStudio, industryContactEdition, industryDecisionBrief, industryThreePerspectives, industryArchitecture, industryCustomerSequence, industryRealWorld, industryPortfolioEdit, industryPhotographicIndex, industrySectorSignals];

function bindIndustryStudio() {
  const preview = document.querySelector('#preview');
  if (!preview || preview.dataset.industryStudioBound) return;
  preview.dataset.industryStudioBound = 'true';
  preview.addEventListener('click', event => {
    const studio = event.target.closest('[data-is-studio]');
    if (studio) {
      preview.querySelectorAll('[data-is-studio]').forEach(button => button.setAttribute('aria-pressed', button === studio));
      preview.querySelector('#is-studio-brief').innerHTML = isStudioBrief(Number(studio.dataset.isStudio));
    }
    const sequence = event.target.closest('[data-is-sequence]');
    if (sequence) {
      preview.querySelectorAll('[data-is-sequence]').forEach(button => button.setAttribute('aria-pressed', button === sequence));
      preview.querySelector('#is-sequence-panel').innerHTML = isSequencePanel(Number(sequence.dataset.isSequence));
    }
    const index = event.target.closest('[data-is-index]');
    if (index) {
      preview.querySelectorAll('[data-is-index]').forEach(button => button.setAttribute('aria-pressed', button === index));
      preview.querySelector('#is-index-photo').innerHTML = isPhotoIndex(Number(index.dataset.isIndex));
    }
  });
  preview.addEventListener('change', event => {
    if (event.target.id === 'is-decision-select') preview.querySelector('#is-decision-panel').innerHTML = isDecisionBrief(Number(event.target.value));
  });
}
