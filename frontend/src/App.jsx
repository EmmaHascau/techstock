const produse = [
  {
    id: 1,
    denumire: "Încărcător Fast Charge 25W",
    conditie: "nou",
    pret: 89,
    cantitate: 24,
    categorie: "accesorii",
    in_stock: true
  },
  {
    id: 2,
    denumire: "Display OLED Galaxy S21",
    conditie: "service",
    pret: 649,
    cantitate: 0,
    categorie: "piese",
    in_stock: false
  },
  {
    id: 3,
    denumire: "Husă Silicon iPhone 15 Pro",
    conditie: "refurbished",
    pret: 39,
    cantitate: 3,
    categorie: "accesorii",
    in_stock: true
  }
];

export default function App() {
  // Calculăm câte produse sunt în stoc
  const inStoc = produse.filter((p) => p.in_stock).length;

  return (
    <>
      <header className="app-header">
        <h1>TechStock</h1>
        <p>Gestionarea inventarului pentru piese și accesorii GSM.</p>
        <p className="app-count">
          {produse.length} produse înregistrate, dintre care {inStoc} în stoc
        </p>
      </header>
      
      <main className="container">
        <section className="panel">
          <h2>Inventar Curent</h2>
          {/* Temporar: date brute; componentele vizuale apar in Etapa 4 */}
          <pre>{JSON.stringify(produse, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}