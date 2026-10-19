import ProdusCard from "./ProdusCard.jsx";

export default function ProdusList({ produse }) {
  if (!produse || produse.length === 0) {
    return <p className="empty">Nu există niciun produs în inventar.</p>;
  }

  return (
    <ul className="item-list">
      {produse.map((produs) => (
        <ProdusCard key={produs.id} produs={produs} />
      ))}
    </ul>
  );
}