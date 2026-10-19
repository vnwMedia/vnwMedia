/* Use WordPress delivery for original page forms and the new mobile contact sheet. */
(() => {
  function prepare(form) {
    if (!form.matches('form[data-vnw-form],#vnw-mobile-email-form,.hero-form,.plan-form,[data-vnw-lead-form]')) return;
    // Match server-rendered forms, including contact sheets inserted later.
    for (const input of form.querySelectorAll('input[name="website"]')) {
      input.type = 'text';
      input.inputMode = 'url';
      input.autocomplete = 'url';
      input.autocapitalize = 'none';
      input.spellcheck = false;
    }
    form.method = 'post';
    form.setAttribute('action', window.vnwSite.formAction);
    form.setAttribute('data-vnw-form', '');
    if(!form.querySelector('[name=vnw_company_url]')){const trap=document.createElement('input');trap.name='vnw_company_url';trap.tabIndex=-1;trap.autocomplete='off';trap.setAttribute('aria-hidden','true');trap.style.cssText='position:absolute;left:-10000px';form.append(trap);}
    const values = {action:'vnw_contact',vnw_nonce:window.vnwSite.nonce,return_to:location.href.split('#')[0],source_page:location.origin+location.pathname,source_title:document.title,form_name:form.id==='vnw-mobile-email-form'?'Mobile contact sheet':'Page contact form'};
    if(window.VNWLeadEmail)values.lead_context=window.VNWLeadEmail.buildDraft(form).body;
    for (const [name,value] of Object.entries(values)) {
      let input=form.querySelector(`input[name="${name}"]`);
      if (!input) {input=document.createElement('input');input.type='hidden';input.name=name;form.append(input);}
      input.value=value;
    }
  }
  document.querySelectorAll('form').forEach(prepare);
  new MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes){if(!(node instanceof Element))continue;if(node.matches('form'))prepare(node);node.querySelectorAll('form').forEach(prepare);}}).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('submit',e=>{if(e.target instanceof HTMLFormElement)prepare(e.target);},true);
})();
