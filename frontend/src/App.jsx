import { useState } from "react";
import ProdusList from "./components/ProdusList.jsx";
import "./App.css";

const PRODUSE_INITIALE = [
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

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [produse, setProduse] = useState(PRODUSE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setProduse((prev) =>
      prev.map((p) => (p.id === id ? { ...p, in_stock: !p.in_stock } : p))
    );
  }

  function handleDelete(id) {
    setProduse((prev) => prev.filter((p) => p.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inStoc = produse.filter((p) => p.in_stock).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          <span className="theme-icon-wrap">
            {tema === "dark" ? (
              <svg className="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg className="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </span>
          <span className="theme-text">{tema === "dark" ? "Mod luminos" : "Mod întunecat"}</span>
        </button>

        <div className="brand-icon">
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <rect x="16" y="16" width="32" height="32" rx="4" />
            <rect x="26" y="26" width="12" height="12" rx="2" />
            <path d="M24 6v10M32 6v10M40 6v10M24 48v10M32 48v10M40 48v10M6 24h10M6 32h10M6 40h10M48 24h10M48 32h10M48 40h10" />
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
          <ProdusList 
            produse={produse} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>TechStock - Gestionare inventar GSM</p>
      </footer>
    </>
  );
}