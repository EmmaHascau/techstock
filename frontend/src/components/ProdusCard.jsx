const ETICHETE_CONDITIE = {
  nou: "nou",
  refurbished: "refurbished",
  service: "service"
};

export default function ProdusCard({ produs, onToggle, onDelete }) {
  return (
    <li className={produs.in_stock ? "item-card" : "item-card done"}>
      <div className="card-head">
        <label className="task-main" style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={produs.in_stock}
            onChange={() => onToggle(produs.id)}
            style={{ width: "18px", height: "18px", cursor: "pointer" }}
          />
          <div>
            <h3>{produs.denumire}</h3>
            <div className="card-meta">
              <span className={`badge badge-${produs.conditie}`}>
                {ETICHETE_CONDITIE[produs.conditie] || produs.conditie}
              </span>
              <span className="meta-text">Categorie: {produs.categorie}</span>
              <span className="meta-text">Preț: {produs.pret} RON</span>
            </div>
          </div>
        </label>

        <button
          className="btn-danger"
          onClick={() => onDelete(produs.id)}
          aria-label={`Șterge ${produs.denumire}`}
          style={{
            border: "1px solid var(--accent)",
            background: "transparent",
            color: "var(--accent)",
            borderRadius: "8px",
            padding: "6px 12px",
            font: "inherit",
            cursor: "pointer"
          }}
        >
          Șterge
        </button>
      </div>

      <div className="card-foot" style={{ marginTop: "14px" }}>
        <div className="card-stock">
          <span className="qty">Cantitate: {produs.cantitate} buc.</span>
        </div>
        <span className={produs.in_stock ? "status status-ok" : "status status-out"}>
          {produs.in_stock ? "În stoc" : "Stoc epuizat"}
        </span>
      </div>
    </li>
  );
}