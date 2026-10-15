(()=>{const slug=new URLSearchParams(location.search).get('service')||'text-marketing';if(SERVICE_CATALOG.some(s=>s.slug===slug))document.body.dataset.page='service-'+slug;})();
