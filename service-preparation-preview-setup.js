(() => {
  const slug=new URLSearchParams(location.search).get('service')||'social-media';
  const service=SERVICE_CATALOG.find(item=>item.slug===slug)||SERVICE_CATALOG.find(item=>item.slug==='social-media');
  document.body.dataset.page='service-'+service.slug;
  document.title=service.name+' — Preparation Design Preview | VNW Media';
})();
