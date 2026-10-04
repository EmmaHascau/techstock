# AI Log - TechStock

Jurnal privind asistența AI pentru Etapa 1 (HTML5 & CSS3).

# 1. Structură și Semantică HTML5
Am verificat dacă împărțirea pe două coloane (formular în stânga, listă în dreapta) este corectă semantic în HTML5 și am cerut exemple de bună practică pentru legarea etichetelor `<label>` la controalele din formular.

AI-ul mi-a confirmat structurarea cu `<section>` și `<h2>`, oferind exemple pentru etichete și sugerând câteva subtitluri explicative în antet. 

Am scris structura paginii conform ideii mele, însă am renunțat la subtitlurile propuse pentru că aglomerau vizual interfața. Am păstrat în antet doar titlul curat și elementul `.app-count` cerut de laborator.

---

# 2. Paletă Cromatică și Stilizare CSS
Am cerut câteva sugestii de coduri hexazecimale pentru o temă dark marină (Abyss), pe care să le folosesc ca variabile CSS în `:root` și pentru badge-urile de stare ale produselor.

Am primit o listă de nuanțe pentru fundal, carduri și etichete (nou, refurbished, service). 

Din opțiunile primite am ales culorile care se potriveau cu stilul minimalist, le-am integrat în `:root` și am reglat direct în browser contrastul, spațierile și rotunjirea colțurilor (`border-radius`) până când layout-ul a arătat curat.

---

# 3. Poziționarea Footer-ului (Sticky Footer)
Am întrebat care este abordarea recomandată în CSS pentru a ține footer-ul lipit de marginea de jos a ferestrei atunci când lista de produse este scurtă, fără să folosesc `position: fixed`.

Soluția oferită a fost folosirea unui container Flexbox pe `body` (`min-height: 100vh; display: flex; flex-direction: column;`) combinat cu `margin-top: auto;` pe footer. 

Am aplicat regulile în `style.css` și am verificat în browser că pagina se comportă corect atât pe desktop, cât și pe rezoluții mici de mobil.

---

# 4. Structurarea acestui jurnal
Am discutat cu AI-ul despre cum să organizez cât mai clar cerințele de documentare (ce am întrebat, ce soluție am primit și ce am implementat efectiv). 

Propunerea inițială era foarte lungă și tehnică, așa că am simplificat textul și am renunțat la formatul rigid de tip listă, lăsând notițe concise care descriu exact ce am lucrat.