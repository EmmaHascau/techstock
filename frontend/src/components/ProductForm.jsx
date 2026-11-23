import { useState } from "react";
import { CATEGORIES, CONDITIONS, DESCRIPTION_MAX, NAME_MAX } from "../constants.js";
import styles from "./ProductForm.module.css";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("new");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("Accessories");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const n = name.trim();
    if (n === "") {
      return { field: "name", message: "The product name is required." };
    }
    if (n.length > NAME_MAX) {
      return { field: "name", message: `The name can have at most ${NAME_MAX} characters.` };
    }
    const p = Number(price);
    if (price === "" || !Number.isFinite(p) || p <= 0) {
      return { field: "price", message: "The price must be a positive number." };
    }
    const q = Number(quantity);
    if (quantity === "" || !Number.isInteger(q) || q < 0) {
      return { field: "quantity", message: "The quantity must be a whole number, 0 or more." };
    }
    if (description.trim().length > DESCRIPTION_MAX) {
      return {
        field: "description",
        message: `The description can have at most ${DESCRIPTION_MAX} characters.`,
      };
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      await onAdd({
        name: name.trim(),
        condition,
        price: Number(price),
        quantity: Number(quantity),
        category,
        description: description.trim(),
        in_stock: false,
        added_at: new Date().toISOString(),
      });
      setName("");
      setCondition("new");
      setPrice("");
      setQuantity("");
      setCategory("Accessories");
      setDescription("");
    } catch (err) {
      setError({ field: "", message: err.message });
    } finally {
      setSubmitting(false);
    }
  }

  function invalid(field) {
    return error !== null && error.field === field;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Product name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Fast Charge 25W Charger"
          maxLength={NAME_MAX}
          aria-invalid={invalid("name")}
          aria-describedby={invalid("name") ? "form-error" : undefined}
          data-testid="form-title"
        />
      </label>

      <label>
        Condition
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          data-testid="form-condition"
        >
          {CONDITIONS.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <div className={styles.row}>
        <label>
          Price (RON)
          <input
            type="number"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="89"
            aria-invalid={invalid("price")}
            aria-describedby={invalid("price") ? "form-error" : undefined}
            data-testid="form-price"
          />
        </label>
        <label>
          Quantity
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="12"
            aria-invalid={invalid("quantity")}
            aria-describedby={invalid("quantity") ? "form-error" : undefined}
            data-testid="form-quantity"
          />
        </label>
      </div>

      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          data-testid="form-category"
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Description (optional)
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="A few words about the product"
          maxLength={DESCRIPTION_MAX}
          aria-invalid={invalid("description")}
          aria-describedby={invalid("description") ? "form-error" : undefined}
          data-testid="form-description"
        />
      </label>

      {error && (
        <p className="error" id="form-error" role="alert" data-testid="form-error">
          {error.message}
        </p>
      )}

      <button
        type="submit"
        className={`btn ${styles.submit}`}
        disabled={submitting}
        data-testid="form-submit"
      >
        {submitting ? "Saving..." : "Add to inventory"}
      </button>
    </form>
  );
}
