export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export function fetchProducts() {
  return request("/products");
}

export function fetchProduct(id) {
  return request(`/products/${id}`);
}

export function createProduct(product) {
  return request("/products", { method: "POST", body: JSON.stringify(product) });
}

export function updateProduct(id, changes) {
  return request(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteProduct(id) {
  return request(`/products/${id}`, { method: "DELETE" });
}
