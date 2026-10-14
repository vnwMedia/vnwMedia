(() => {
  const section=document.querySelector('#work-process');
  if(!section)return;
  const drawings=[
    '<rect x="24" y="14" width="48" height="66" rx="6"/><path d="M38 30h20M38 44h20M38 58h13"/><circle cx="68" cy="65" r="13"/><path d="m77 75 10 10"/>',
    '<rect x="10" y="34" width="25" height="25" rx="5"/><rect x="65" y="34" width="25" height="25" rx="5"/><path d="M35 46h29m-8-7 8 7-8 7"/><path d="M22 34V20h55v14"/>',
    '<rect x="12" y="20" width="76" height="58" rx="6"/><path d="M12 33h76M25 27h1m7 0h1m7 0h1"/><path d="m40 45-11 10 11 10m20-20 11 10-11 10m-8-22-5 24"/>',
    '<path d="M20 20v60h63"/><path d="m29 64 16-17 14 9 22-27m-14 0h14v14"/><path d="M31 79V70m17 9V62m17 17V55" opacity=".45"/>'
  ];
  section.querySelectorAll('.wp-art').forEach((art,i)=>{
    art.className='wp-art refined-art';
    art.innerHTML='<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+drawings[i]+'</svg>';
  });
})();
