(() => {
  const buttons = [...document.querySelectorAll('.study-option')];
  const hero = document.getElementById('previewHero');
  const number = document.getElementById('previewNumber');
  const name = document.getElementById('previewName');
  if (!buttons.length || !hero || !number || !name) return;

  const select = (button, updateUrl = true) => {
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    hero.style.setProperty('--preview-image', `url("${button.dataset.image}")`);
    number.textContent = `Option ${button.id.slice(-2)}`;
    name.textContent = button.dataset.name;
    if (matchMedia('(max-width: 800px)').matches) {
      const strip = button.parentElement;
      const left = button.offsetLeft - strip.offsetLeft - (strip.clientWidth - button.clientWidth) / 2;
      strip.scrollTo({left, behavior: updateUrl ? 'smooth' : 'auto'});
    }
    if (updateUrl) history.replaceState(null, '', `#${button.id}`);
  };

  buttons.forEach((button) => button.addEventListener('click', () => select(button)));
  const initial = buttons.find((button) => `#${button.id}` === location.hash);
  if (initial) select(initial, false);
})();
