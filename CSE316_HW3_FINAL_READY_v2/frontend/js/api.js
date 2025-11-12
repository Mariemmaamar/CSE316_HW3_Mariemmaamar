(function(){
  const API_BASE = '/api';
  async function http(method, path, body) {
    const res = await fetch(`${API_BASE}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) throw new Error(await res.text() || `HTTP ${res.status}`);
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }
  window.API = {
    products: {
      list: () => http('GET','/products'),
      search: (q) => http('GET', `/products/search?q=${encodeURIComponent(q||'')}`)
    },
    cart: {
      list: () => http('GET','/cart'),
      add: (productId, quantity=1) => http('POST','/cart', { productId, quantity }),
      setQty: (productId, quantity) => http('PATCH', `/cart/${productId}`, { quantity }),
      remove: (productId) => http('DELETE', `/cart/${productId}`)
    },
    wishlist: {
      list: () => http('GET','/wishlist'),
      add: (productId) => http('POST','/wishlist', { productId }),
      remove: (productId) => http('DELETE', `/wishlist/${productId}`)
    }
  };
})();
