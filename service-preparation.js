(() => {
  const heading=document.querySelector('.service-preparation .csp-section-head h2');
  if(!heading)return;
  function fit(){
    heading.style.removeProperty('font-size');
    if(innerWidth<1001)return;
    let size=parseFloat(getComputedStyle(heading).fontSize);
    while(heading.scrollWidth>heading.clientWidth&&size>24){
      size-=.5;heading.style.setProperty('font-size',size+'px','important');
    }
  }
  fit();document.fonts.ready.then(fit);
  window.addEventListener('resize',fit);
})();
