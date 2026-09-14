(() => {
  const section = document.querySelector('.browse-section');
  if (!section) return;
  const buttons = [...section.querySelectorAll('[data-filter]')];
  const articles = [...section.querySelectorAll('.story')];
  buttons.forEach(button => button.addEventListener('click', () => {
    const active = button.dataset.filter;
    let count = 0;
    articles.forEach(article => {
      article.hidden = active !== 'All' && article.dataset.category !== active;
      if (!article.hidden) count++;
    });
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    section.querySelector('.empty').hidden = count > 0;
    section.querySelector('.result-count').textContent = `${count} ${count === 1 ? 'article' : 'articles'}`;
  }));
})();
