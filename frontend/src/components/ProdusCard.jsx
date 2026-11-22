const CONDITII = {
  nou: "Nou",
  refurbished: "Refurbished",
  service: "Service/Piese",
};

function nivelStoc(cantitate) {
  if (cantitate <= 0) return 0;
  if (cantitate <= 5) return 1;
  if (cantitate <= 10) return 2;
  if (cantitate <= 20) return 3;
  return 4;
}

export default function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li
      className={produs.in_stock ? "item-card" : "item-card done"}
      data-testid="item"
      data-id={produs.id}
    >
      <div className="card-head">
        <h3 data-testid="item-title">{produs.denumire}</h3>
        <span className={produs.in_stock ? "status status-ok" : "status status-out"}>
          {produs.in_stock ? "În stoc" : "Fără stoc"}
        </span>
      </div>

      <div className="card-meta">
        <span className={`badge badge-${produs.conditie}`}>
          {CONDITII[produs.conditie] ?? produs.conditie}
        </span>
        <span className="meta-text">{produs.categorie}</span>
      </div>

      <div className="card-foot">
        <div className="card-actions">
          <label className="stock-toggle">
            <input
              type="checkbox"
              checked={produs.in_stock}
              onChange={() => onToggle(produs.id)}
              data-testid="item-toggle"
            />
            În stoc
          </label>
          <button
            type="button"
            className="btn-danger"
            onClick={() => onDelete(produs.id)}
            aria-label={`Șterge ${produs.denumire}`}
            data-testid="item-delete"
          >
            Șterge
          </button>
        </div>

        <div className="card-stock">
          <span className={`signal signal-${nivelStoc(produs.cantitate)}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="qty">{produs.cantitate} buc.</span>
          <span className="price">{produs.pret} lei</span>
        </div>
      </div>
    </li>
  );
}