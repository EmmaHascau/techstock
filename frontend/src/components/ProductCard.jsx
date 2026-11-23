import { Link } from "react-router-dom";
import { CONDITION_LABELS, stockLevel } from "../constants.js";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onToggle, onDelete, onQuantityChange }) {
  return (
    <li
      className={product.in_stock ? styles.card : `${styles.card} ${styles.done}`}
      data-testid="item"
      data-id={product.id}
    >
      <div className={styles.head}>
        <h3>
          <Link
            to={`/products/${product.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            <span data-testid="item-title">{product.name}</span>
          </Link>
        </h3>
        <span className={product.in_stock ? "status status-ok" : "status status-out"}>
          {product.in_stock ? "In stock" : "Unavailable"}
        </span>
      </div>

      <div className={styles.meta}>
        <span className={`badge badge-${product.condition}`}>
          {CONDITION_LABELS[product.condition] ?? product.condition}
        </span>
        <span className={styles.metaText}>{product.category}</span>
      </div>

      <div className={styles.foot}>
        <div className={styles.actions}>
          <label className={styles.toggle}>
            <input
              type="checkbox"
              checked={product.in_stock}
              onChange={() => onToggle(product.id)}
              aria-label={`Mark ${product.name} as in stock`}
              data-testid="item-toggle"
            />
            In stock
          </label>
          <button
            type="button"
            className="btn-danger"
            onClick={() => onDelete(product.id)}
            aria-label={`Delete ${product.name}`}
            data-testid="item-delete"
          >
            Delete
          </button>
        </div>

        <div className={styles.stock}>
          <span className={`signal signal-${stockLevel(product.quantity)}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className={styles.stepper}>
            <button
              type="button"
              className={styles.stepBtn}
              onClick={() => onQuantityChange(product.id, -1)}
              disabled={product.quantity <= 0}
              aria-label={`Decrease quantity of ${product.name}`}
              data-testid="item-qty-dec"
            >
              &minus;
            </button>
            <span className={styles.qty} data-testid="item-qty">
              {product.quantity} {product.quantity === 1 ? "pc" : "pcs"}
            </span>
            <button
              type="button"
              className={styles.stepBtn}
              onClick={() => onQuantityChange(product.id, 1)}
              aria-label={`Increase quantity of ${product.name}`}
              data-testid="item-qty-inc"
            >
              +
            </button>
          </div>
          <span className={styles.price}>{product.price} RON</span>
        </div>
      </div>
    </li>
  );
}
