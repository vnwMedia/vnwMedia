/* Select existing VNW sections by clicking their visible text or images. */
(function () {
  if (window.parent === window || !window.parent.elementor) return;
  document.addEventListener('click', function (event) {
    const widget = event.target.closest('[data-widget_type^="vnw-section-"]');
    if (!widget || event.target.closest('.elementor-element-overlay')) return;
    const editor = window.parent.elementor;
    const view = editor.getPreviewView().children.find(v => v.model.id === widget.dataset.id || v.model.get('id') === widget.dataset.id);
    if (!view) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.parent.$e.run('panel/editor/open', { model: view.model, view });
  }, true);
  document.addEventListener('submit', event => event.preventDefault(), true);
})();
