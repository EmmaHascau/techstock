import { useEffect, useState } from "react";
import ProdusList from "./components/ProdusList.jsx";
import ProdusForm from "./components/ProdusForm.jsx";
import { fetchProduse, createProdus, updateProdus, deleteProdus } from "./api.js";
import "./App.css";

const TRACE_FAINT = "M0 36 " + "h200 l24 -10 h120 l24 10 h32 ".repeat(6);
const TRACE_LINE = "M0 30 " + "h110 l24 -12 h140 l24 12 h102 ".repeat(6);

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [produse, setProduse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchProduse();
        if (!ignore) {
          setProduse(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(produsNou) {
    const creat = await createProdus(produsNou);
    setProduse((prev) => [...prev, creat]);
    setError(null);
  }

  async function handleToggle(id) {
    const produs = produse.find((p) => p.id === id);
    try {
      const actualizat = await updateProdus(id, { in_stock: !produs.in_stock });
      setProduse((prev) => prev.map((p) => (p.id === id ? actualizat : p)));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProdus(id);
      setProduse((prev) => prev.filter((p) => p.id !== id));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  function handleTema() {
    setTema((curenta) => (curenta === "dark" ? "light" : "dark"));
  }

  const inStoc = produse.filter((p) => p.in_stock).length;
  const arataLista = !loading && !(error && produse.length === 0);

  return (
    <>
      <header className="app-header">
        <button
          type="button"
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          <span className="theme-icon-wrap">
            {tema === "dark" ? (
              <svg className="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <svg className="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </span>
          <span className="theme-text">{tema === "dark" ? "Mod luminos" : "Mod întunecat"}</span>
        </button>

        <svg className="brand-icon" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
          <rect x="16" y="16" width="32" height="32" rx="4" />
          <rect x="26" y="26" width="12" height="12" rx="2" />
          <path d="M24 6v10M32 6v10M40 6v10M24 48v10M32 48v10M40 48v10M6 24h10M6 32h10M6 40h10M48 24h10M48 32h10M48 40h10" />
        </svg>
        <h1>
          Tech<span className="outline">Stock</span>
        </h1>
        <p className="tagline">Stocul magazinului de telefoane: ce e pe raft, ce a plecat și ce trebuie comandat.</p>
        <p className="app-count">
          {produse.length} produse, dintre care {inStoc} în stoc
        </p>

        <svg className="header-trace" width="2400" height="40" viewBox="0 0 2400 40" aria-hidden="true">
          <path className="trace-faint" d={TRACE_FAINT} />
          <path className="trace-line" d={TRACE_LINE} />
          <path className="trace-pulse" pathLength="1000" d={TRACE_LINE} />
        </svg>
      </header>

      <main className="container">
        <section className="panel panel-form" aria-labelledby="titlu-formular">
          <h2 id="titlu-formular">Adaugă produs</h2>
          <p className="panel-hint">Completează fișa și produsul intră în inventar.</p>
          <ProdusForm onAdd={handleAdd} />
        </section>

        <section className="panel panel-list" aria-labelledby="titlu-lista">
          <h2 id="titlu-lista">Inventar curent</h2>
          <p className="panel-hint">
            Fiecare produs are eticheta lui, cu prețul și nivelul de stoc ca barele de semnal ale unui telefon.
          </p>

          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă...
            </p>
          )}

          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}

          {arataLista && (
            <ProdusList
              produse={produse}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </>
  );
}