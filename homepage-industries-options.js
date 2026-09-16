(() => {
  const template = document.getElementById('industry-options-template');
  const main = document.querySelector('#app main');
  if (!template || !main) return;
  main.replaceChildren(template.content.cloneNode(true));
  document.title = 'Homepage Industries — Five Photo-Led Options | VNW Media';
})();
