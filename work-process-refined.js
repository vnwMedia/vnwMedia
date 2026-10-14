(() => {
  const section=document.querySelector('#work-process');
  if(!section)return;
  let drawings=[
    '<rect x="24" y="14" width="48" height="66" rx="6"/><path d="M38 30h20M38 44h20M38 58h13"/><circle cx="68" cy="65" r="13"/><path d="m77 75 10 10"/>',
    '<rect x="10" y="34" width="25" height="25" rx="5"/><rect x="65" y="34" width="25" height="25" rx="5"/><path d="M35 46h29m-8-7 8 7-8 7"/><path d="M22 34V20h55v14"/>',
    '<rect x="12" y="20" width="76" height="58" rx="6"/><path d="M12 33h76M25 27h1m7 0h1m7 0h1"/><path d="m40 45-11 10 11 10m20-20 11 10-11 10m-8-22-5 24"/>',
    '<path d="M20 20v60h63"/><path d="m29 64 16-17 14 9 22-27m-14 0h14v14"/><path d="M31 79V70m17 9V62m17 17V55" opacity=".45"/>'
  ];
  if(document.body.classList.contains('refined-a')) drawings=[
    '<rect x="18" y="19" width="51" height="66" rx="7" fill="#fff" stroke="#8cbfd0"/><rect x="32" y="13" width="24" height="12" rx="4" fill="#173c49" stroke="#173c49"/><path d="M29 37h25M29 48h18M29 59h14" stroke="#b9d6e0" stroke-width="3"/><circle cx="66" cy="61" r="18" fill="#dff4fb" stroke="#173c49" stroke-width="2.5"/><path d="m79 75 10 11" stroke="#173c49" stroke-width="5"/><path d="m58 61 5 5 10-11" stroke="#00aeef" stroke-width="3"/>',
    '<path d="M22 35v29h24M74 35v29H50" stroke="#8cbfd0" stroke-width="2"/><rect x="32" y="12" width="36" height="23" rx="5" fill="#173c49" stroke="#173c49"/><path d="M41 23h18" stroke="#fff" stroke-width="3"/><rect x="9" y="51" width="27" height="24" rx="5" fill="#fff" stroke="#8cbfd0"/><rect x="64" y="51" width="27" height="24" rx="5" fill="#fff" stroke="#8cbfd0"/><path d="M17 60h11m45 0h10" stroke="#b9d6e0" stroke-width="3"/><path d="M50 35v46" stroke="#00aeef" stroke-width="3"/><path d="m43 75 7 7 7-7" stroke="#00aeef" stroke-width="3"/><circle cx="50" cy="87" r="5" fill="#00aeef" stroke="#00aeef"/>',
    '<rect x="11" y="17" width="78" height="66" rx="7" fill="#fff" stroke="#8cbfd0"/><path d="M12 31h76" stroke="#8cbfd0"/><circle cx="21" cy="24" r="2" fill="#00aeef" stroke="none"/><circle cx="29" cy="24" r="2" fill="#b9d6e0" stroke="none"/><rect x="20" y="40" width="24" height="33" rx="3" fill="#173c49" stroke="none"/><rect x="50" y="40" width="30" height="9" rx="2" fill="#dff4fb" stroke="none"/><path d="M51 57h27M51 64h20" stroke="#b9d6e0" stroke-width="3"/><rect x="50" y="69" width="23" height="5" rx="2.5" fill="#00aeef" stroke="none"/><circle cx="83" cy="79" r="12" fill="#00aeef" stroke="#fff" stroke-width="3"/><path d="m78 79 4 4 7-8" stroke="#fff" stroke-width="2.5"/>',
    '<path d="M21 31a34 34 0 0 1 56-7M79 69a34 34 0 0 1-56 7" stroke="#8cbfd0" stroke-width="2.5"/><path d="m68 23 10 1-1-10m-44 63-11-1 1 10" stroke="#00aeef" stroke-width="3"/><rect x="27" y="57" width="10" height="17" rx="2" fill="#b9d6e0" stroke="none"/><rect x="44" y="46" width="10" height="28" rx="2" fill="#173c49" stroke="none"/><rect x="61" y="33" width="10" height="41" rx="2" fill="#00aeef" stroke="none"/><path d="m28 47 18-12 13 4 14-15" stroke="#00aeef" stroke-width="2.5"/>'
  ];
  section.querySelectorAll('.wp-art').forEach((art,i)=>{
    art.className='wp-art refined-art';
    art.innerHTML='<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+drawings[i]+'</svg>';
  });
})();
