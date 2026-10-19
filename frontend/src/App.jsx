import ProdusList from "./components/ProdusList.jsx";
import "./App.css";

const produse = [
  {
    id: 1,
    denumire: "Încărcător Fast Charge 25W",
    conditie: "nou",
    pret: 89,
    cantitate: 24,
    categorie: "Accesorii",
    in_stock: true
  },
  {
    id: 2,
    denumire: "Display OLED Galaxy S21",
    conditie: "service",
    pret: 649,
    cantitate: 0,
    categorie: "Piese GSM",
    in_stock: false
  },
  {
    id: 3,
    denumire: "Husă Silicon iPhone 15 Pro",
    conditie: "refurbished",
    pret: 39,
    cantitate: 3,
    categorie: "Accesorii",
    in_stock: true
  }
];

export default function App() {
  const inStoc = produse.filter((p) => p.in_stock).length;

  return (
    <>
      <header className="app-header">
        <div className="brand-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1v9h3M1v15h3M20 9h3M20 15h3" />
          </svg>
        </div>
        <h1>
          Tech<span className="outline">Stock</span>
        </h1>
        <p className="tagline">Stocul magazinului de telefoane: ce e pe raft, ce a plecat și ce trebuie comandat.</p>
        <p className="app-count">
          {produse.length} produse, dintre care {inStoc} în stoc
        </p>
        <svg className="header-trace" width="1000" height="40" viewBox="0 0 1000 40">
          <path className="trace-faint" d="M0 20h350l30-15h270l30 15h320" />
          <path className="trace-line" d="M100 20h300l20-10h280l20 10h280" />
          <path className="trace-pulse" d="M100 20h300l20-10h280l20 10h280" />
        </svg>
      </header>

      <main className="container">
        <section className="panel panel-form">
          <h2>Adaugă produs</h2>
          <p className="panel-hint">Completează fișa și produsul intră în inventar.</p>
          
          <div className="item-form">
            <label>
              Denumire produs
              <input type="text" placeholder="Ex: Încărcător Fast Charge 25W" defaultValue="" />
            </label>

            <label>
              Condiție produs
              <select defaultValue="Nou">
                <option value="Nou">Nou</option>
                <option value="Refurbished">Refurbished</option>
                <option value="Service/Piese">Service/Piese</option>
              </select>
            </label>

            <div className="form-row">
              <label>
                Preț (lei)
                <input type="number" defaultValue="89" />
              </label>
              <label>
                Bucăți
                <input type="number" defaultValue="12" />
              </label>
            </div>

            <button type="button">Adaugă în inventar</button>
          </div>
        </section>

        <section className="panel panel-list">
          <h2>Inventar curent</h2>
          <p className="panel-hint">Fiecare produs are eticheta lui, cu prețul și nivelul de stoc ca barele de semnal ale unui telefon.</p>
          <ProdusList produse={produse} />
        </section>
      </main>

      <footer className="app-footer">
        <p>TechStock - Gestionare inventar GSM</p>
      </footer>
    </>
  );
}