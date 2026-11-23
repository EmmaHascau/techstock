import ProductCard from "./ProductCard.jsx";
import styles from "./ProductList.module.css";

export default function ProductList({ products, onToggle, onDelete, onQuantityChange }) {
  if (products.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        There are no products in the inventory yet.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggle={onToggle}
          onDelete={onDelete}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </ul>
  );
}
