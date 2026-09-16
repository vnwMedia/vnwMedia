document.getElementById('vnw-convert-all')?.addEventListener('click', async function () {
  this.disabled = true;
  const log = document.getElementById('vnw-convert-status');
  log.textContent = 'Converting one page at a time. Keep this tab open.\n';
  for (const option of document.querySelectorAll('select[name="vnw_page"] option')) {
    try {
      const body = new URLSearchParams({ action: 'vnw_visual_convert', _ajax_nonce: this.dataset.nonce, page_id: option.value });
      const response = await fetch(ajaxurl, { method: 'POST', body, credentials: 'same-origin' });
      const result = await response.json();
      log.textContent += option.textContent + ': ' + result.data + '\n';
      if (!response.ok && response.status !== 400) throw new Error('Request rejected. Reload and try again.');
    } catch (error) {
      log.textContent += 'Stopped: ' + error.message + '. Already converted pages will be skipped on retry.\n';
      this.disabled = false;
      return;
    }
  }
  log.textContent += 'Finished. Review any skipped pages above. Open a converted page with Edit with Elementor.';
  this.disabled = false;
});
