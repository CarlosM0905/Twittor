async function actualizarCacheDinamico(dynamicCache, req, res) {
  if(res.ok) {
    const cache = await caches.open(dynamicCache);
    cache.put(req, res.clone());
    return res.clone();
  }
  else {
    res;
  }
}