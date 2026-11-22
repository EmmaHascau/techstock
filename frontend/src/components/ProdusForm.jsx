import { useState } from "react";

const CONDITII = [
  { value: "nou", label: "Nou" },
  { value: "refurbished", label: "Refurbished" },
  { value: "service", label: "Service/Piese" },
];

const CATEGORII = [
  { value: "Accesorii", label: "Accesorii" },
  { value: "Piese GSM", label: "Piese GSM" },
];

const DENUMIRE_MAX = 100;

export default function ProdusForm({ onAdd }) {
  const [denumire, setDenumire] = useState("");
  const [conditie, setConditie] = useState("nou");
  const [pret, setPret] = useState("");
  const [cantitate, setCantitate] = useState("");
  const [categorie, setCategorie] = useState("Accesorii");
  const [eroare, setEroare] = useState(null);
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = denumire.trim();
    if (t === "") {
      return { camp: "denumire", mesaj: "Denumirea este obligatorie." };
    }
    if (t.length > DENUMIRE_MAX) {
      return { camp: "denumire", mesaj: `Denumirea are maximum ${DENUMIRE_MAX} de caractere.` };
    }
    const p = Number(pret);
    if (pret === "" || !Number.isFinite(p) || p <= 0) {
      return { camp: "pret", mesaj: "Prețul trebuie să fie un număr pozitiv." };
    }
    const c = Number(cantitate);
    if (cantitate === "" || !Number.isInteger(c) || c < 0) {
      return { camp: "cantitate", mesaj: "Cantitatea trebuie să fie un număr întreg, cel puțin 0." };
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const problema = valideaza();
    if (problema) {
      setEroare(problema);
      return;
    }

    setEroare(null);
    setTrimite(true);

    try {
      await onAdd({
        denumire: denumire.trim(),
        conditie,
        pret: Number(pret),
        cantitate: Number(cantitate),
        categorie,
        in_stock: false,
      });
      setDenumire("");
      setConditie("nou");
      setPret("");
      setCantitate("");
      setCategorie("Accesorii");
    } catch (err) {
      setEroare({ camp: "", mesaj: err.message });
    } finally {
      setTrimite(false);
    }
  }

  function invalid(camp) {
    return eroare !== null && eroare.camp === camp;
  }

  return (
    <form className="item-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Denumire produs
        <input
          type="text"
          value={denumire}
          onChange={(e) => setDenumire(e.target.value)}
          placeholder="Ex: Încărcător Fast Charge 25W"
          maxLength={DENUMIRE_MAX}
          aria-invalid={invalid("denumire")}
          aria-describedby={invalid("denumire") ? "form-error" : undefined}
          data-testid="form-title"
        />
      </label>

      <label>
        Condiție produs
        <select
          value={conditie}
          onChange={(e) => setConditie(e.target.value)}
          data-testid="form-conditie"
        >
          {CONDITII.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <div className="form-row">
        <label>
          Preț (lei)
          <input
            type="number"
            min="0"
            value={pret}
            onChange={(e) => setPret(e.target.value)}
            placeholder="89"
            aria-invalid={invalid("pret")}
            aria-describedby={invalid("pret") ? "form-error" : undefined}
            data-testid="form-pret"
          />
        </label>
        <label>
          Bucăți
          <input
            type="number"
            min="0"
            value={cantitate}
            onChange={(e) => setCantitate(e.target.value)}
            placeholder="12"
            aria-invalid={invalid("cantitate")}
            aria-describedby={invalid("cantitate") ? "form-error" : undefined}
            data-testid="form-cantitate"
          />
        </label>
      </div>

      <label>
        Categorie
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          data-testid="form-categorie"
        >
          {CATEGORII.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" id="form-error" role="alert" data-testid="form-error">
          {eroare.mesaj}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă în inventar"}
      </button>
    </form>
  );
}