import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../components/ProductList.jsx";
import ProductForm from "../components/ProductForm.jsx";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../api.js";
import { CONDITION_LABELS } from "../constants.js";
import styles from "./ProductsPage.module.css";

function matches(product, query) {
  const needle = query.toLowerCase();
  return [
    product.name,
    product.category,
    CONDITION_LABELS[product.condition] ?? product.condition,
    product.description ?? "",
  ].some((value) => String(value).toLowerCase().includes(needle));
}

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchProducts();
        if (!ignore) setProducts(data);
      } catch (err) {
        if (!ignore) {
          setError(
            `Could not load the products: ${err.message}. Is the API running? Start it with "npm run api".`
          );
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(newProduct) {
    const created = await createProduct(newProduct);
    setProducts((prev) => [...prev, created]);
    setError(null);
  }

  async function saveChanges(id, changes) {
    try {
      const updated = await updateProduct(id, changes);
      setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
      setError(null);
    } catch (err) {
      setError(`Could not save the change: ${err.message}`);
    }
  }

  async function handleToggle(id) {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    const changes = product.in_stock
      ? { in_stock: false, quantity: 0 }
      : { in_stock: true, quantity: Math.max(1, product.quantity) };
    await saveChanges(id, changes);
  }

  async function handleQuantityChange(id, delta) {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    const quantity = Math.max(0, product.quantity + delta);
    await saveChanges(id, {
      quantity,
      in_stock: quantity > 0,
    });
  }

  async function handleDelete(id) {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setError(null);
    } catch (err) {
      setError(`Could not delete the product: ${err.message}`);
    }
  }

  const inStock = products.filter((p) => p.in_stock).length;
  const visible = query === "" ? products : products.filter((p) => matches(p, query));
  const noMatches = products.length > 0 && visible.length === 0;
  const showList = !loading && !noMatches && !(error && products.length === 0);

  return (
    <div className={styles.grid}>
      <section className={`panel ${styles.formPanel}`} aria-labelledby="add-title">
        <h2 id="add-title">Add a product</h2>
        <p className="panel-hint">Fill in the details and the product enters the inventory.</p>
        <ProductForm onAdd={handleAdd} />
      </section>

      <section className={`panel ${styles.listPanel}`} aria-labelledby="list-title">
        <h2 id="list-title">Current inventory</h2>
        <p className="panel-hint">
          Every product has its own tag, with the price and the stock level shown as signal bars,
          like on a phone.
        </p>
        <p className={styles.summary} data-testid="summary">
          {products.length} {products.length === 1 ? "product" : "products"}, {inStock} in stock
          {query !== "" && ` · ${visible.length} matching “${query}”`}
        </p>

        {loading && (
          <p className="info" data-testid="loading">
            Loading...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            {error}
          </p>
        )}

        {noMatches && !loading && (
          <p className="empty" data-testid="no-results">
            No products match “{query}”.
          </p>
        )}

        {showList && (
          <ProductList
            products={visible}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onQuantityChange={handleQuantityChange}
          />
        )}
      </section>
    </div>
  );
}