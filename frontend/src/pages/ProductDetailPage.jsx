import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../api.js";
import { CONDITION_LABELS, stockLevel } from "../constants.js";
import styles from "./ProductDetailPage.module.css";

function formatDate(iso) {
  if (!iso) return "Unknown";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Unknown";
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchProduct(id)
      .then((data) => {
        if (!ignore) {
          setProduct(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          The product could not be loaded: {error}
        </p>
        <Link to="/">Back to products</Link>
      </section>
    );
  }

  const stockValue = (product.price * product.quantity).toLocaleString("en-US");

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        &larr; Back to products
      </Link>

      <h2
        className={product.in_stock ? styles.title : `${styles.title} ${styles.done}`}
        data-testid="detail-title"
      >
        {product.name}
      </h2>

      <dl className={styles.fields}>
        <dt>Status</dt>
        <dd>
          <span className={product.in_stock ? "status status-ok" : "status status-out"}>
            {product.in_stock ? "In stock" : "Unavailable"}
          </span>
        </dd>

        <dt>Condition</dt>
        <dd>
          <span className={`badge badge-${product.condition}`}>
            {CONDITION_LABELS[product.condition] ?? product.condition}
          </span>
        </dd>

        <dt>Category</dt>
        <dd>{product.category}</dd>

        <dt>Price</dt>
        <dd>
          <span className={styles.bigPrice}>{product.price} RON</span>
        </dd>

        <dt>Quantity</dt>
        <dd className={styles.stockRow}>
          <span className={`signal signal-${stockLevel(product.quantity)}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          {product.quantity} {product.quantity === 1 ? "pc" : "pcs"}
        </dd>

        <dt>Stock value</dt>
        <dd>{stockValue} RON</dd>

        <dt>Added on</dt>
        <dd>{formatDate(product.added_at)}</dd>

        <dt>ID</dt>
        <dd>{product.id}</dd>

        <dt>Description</dt>
        <dd>
          {product.description ? (
            <p className={styles.description}>{product.description}</p>
          ) : (
            <span className={styles.noDescription}>No description provided.</span>
          )}
        </dd>
      </dl>
    </section>
  );
}
