const ETICHETE_CONDITIE = {
  nou: "nou",
  refurbished: "refurbished",
  service: "service"
};

export default function ProdusCard({ produs }) {
  return (
    <li className={produs.in_stock ? "item-card" : "item-card done"}>
      <div className="card-head">
        <h3>{produs.denumire}</h3>
        <span className={`badge badge-${produs.conditie}`}>
          {ETICHETE_CONDITIE[produs.conditie] || produs.conditie}
        </span>
      </div>
      
      <div className="card-meta">
        <span className="meta-text">Categorie: {produs.categorie}</span>
        <span className="meta-text">Preț: {produs.pret} RON</span>
      </div>

      <div className="card-foot">
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