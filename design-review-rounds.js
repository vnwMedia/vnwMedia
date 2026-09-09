// Keep the options easy to compare without a wall of controls.
function setupReviewRounds() {
  const options = document.querySelector('#options');
  const buttons = [...options.querySelectorAll('[data-option]')];
  const rounds = document.createElement('nav');
  rounds.className = 'review-rounds';
  rounds.setAttribute('aria-label', 'Choose a set of design concepts');
  rounds.innerHTML = [
    ...(buttons.length > 30 ? [[3, '31–35', 'Dark case studies']] : []),
    [2, '21–30', 'New studio directions'],
    [1, '11–20', 'Second collection'],
    [0, '01–10', 'Original collection']
  ].map(([n, range, name]) => `<button data-round="${n}" aria-pressed="false"><strong>${range}</strong><span>${name}</span></button>`).join('');
  options.before(rounds);
  function sync() {
    const selected = buttons.find(b => b.getAttribute('aria-pressed') === 'true');
    const round = Math.floor(Number(selected?.dataset.option ?? 20) / 10);
    buttons.forEach(b => { b.hidden = Math.floor(Number(b.dataset.option) / 10) !== round; });
    rounds.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', Number(b.dataset.round) === round));
  }
  rounds.addEventListener('click', event => {
    const button = event.target.closest('[data-round]');
    if (!button) return;
    const round = Number(button.dataset.round);
    const selected = buttons.find(b => b.getAttribute('aria-pressed') === 'true');
    if (Math.floor(Number(selected?.dataset.option) / 10) !== round) {
      location.hash = `option-${round * 10 + 1}`;
    }
  });
  window.addEventListener('hashchange', sync);
  document.querySelector('.review-actions a[href="#preview"]')?.addEventListener('click', event => {
    event.preventDefault();
    const preview = document.querySelector('#preview');
    preview.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    preview.focus({ preventScroll: true });
  });
  document.querySelector('#option-name').setAttribute('aria-live', 'polite');
  sync();
}
