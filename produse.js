const CONDITII = ["nou", "refurbished", "service"];

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

function listeazaDenumiri(lista) {
  return lista.map((p) => p.denumire);
}

function numaraInStoc(lista) {
  return lista.filter((p) => p.in_stock).length;
}

function cautaProduse(lista, text) {
  const interogare = text.trim().toLowerCase();
  return lista.filter(
    (p) =>
      p.denumire.toLowerCase().includes(interogare) ||
      p.categorie.toLowerCase().includes(interogare)
  );
}

function nextId(lista) {
  return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

function adaugaProdus(lista, denumire, conditie, pret = 0, cantitate = 1, categorie = "accesorii") {
  const denumireCurata = denumire ? denumire.trim() : "";

  if (!denumireCurata) {
    console.warn("Validare eșuată: Denumirea produsului nu poate fi goală.");
    return lista;
  }

  if (!CONDITII.includes(conditie)) {
    console.warn(`Validare eșuată: Condiția '${conditie}' este invalidă. Valori permise: ${CONDITII.join(", ")}`);
    return lista;
  }

  if (pret < 0 || cantitate < 0) {
    console.warn("Validare eșuată: Prețul și cantitatea nu pot fi valori negative.");
    return lista;
  }

  const produsNou = {
    id: nextId(lista),
    denumire: denumireCurata,
    conditie,
    pret: Number(pret),
    cantitate: Number(cantitate),
    categorie,
    in_stock: Number(cantitate) > 0
  };

  return [...lista, produsNou];
}

function comutaStoc(lista, id) {
  return lista.map((p) => {
    if (p.id !== id) return p;
    const stareNoua = !p.in_stock;
    return {
      ...p,
      in_stock: stareNoua,
      cantitate: stareNoua && p.cantitate === 0 ? 1 : p.cantitate
    };
  });
}

function stergeProdus(lista, id) {
  return lista.filter((p) => p.id !== id);
}

console.log("--- Citire ---");
console.log("Denumiri:", listeazaDenumiri(produse).join(", "));
console.log("Produse în stoc:", numaraInStoc(produse));
console.log("Căutare 'charge':", listeazaDenumiri(cautaProduse(produse, "charge")).join(", "));

console.log("--- Adăugare ---");
let listaActualizata = adaugaProdus(
  produse,
  "Acumulator Original iPhone 13",
  "nou",
  180,
  10,
  "piese"
);
console.log("Lista nouă are:", listaActualizata.length, "produse");
console.log("Originalul a rămas cu:", produse.length, "produse");

console.log("--- Modificare și ștergere ---");
listaActualizata = comutaStoc(listaActualizata, 2);
console.log("După comutare stoc ID 2, produse în stoc:", numaraInStoc(listaActualizata));

listaActualizata = stergeProdus(listaActualizata, 1);
console.log("După ștergere ID 1, rămase:", listeazaDenumiri(listaActualizata).join(", "));

console.log("--- Validare ---");
adaugaProdus(listaActualizata, "");
adaugaProdus(listaActualizata, "Cabluri bulk", "second-hand");
adaugaProdus(listaActualizata, "Adaptor defect", "nou", -50, -2);
