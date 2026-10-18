(() => {
  const frames = [...document.querySelectorAll('.comparison-grid iframe')];
  addEventListener('message',event => {
    if(event.origin !== location.origin || event.data?.kind !== 'vnw-mobile-simplified-height') return;
    const frame = frames.find(candidate => candidate.contentWindow === event.source);
    const height = Number(event.data.height);
    if(frame && Number.isFinite(height) && height >= 300 && height <= 2400) frame.height = String(height);
  });
})();
