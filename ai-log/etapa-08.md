# Stage 8: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/app/0c0f7ed291b87384 (Multi-page routing with React Router, CSS Modules split, product detail page, stock toggle symmetry, and header trace spacing)

## Key requests

### 1. Multi-page routing and layout setup for Stage 8
Asked: How to structure Stage 8 for TechStock with React Router, shared layout, and pages while keeping the theme and required test attributes.
- Got: A full SPA setup with `<BrowserRouter>` in `main.jsx`, `<Routes>` and `<Layout />` (`<Outlet />`) in `App.jsx`, `<NavLink end to="/">` and `<NavLink to="/despre">` in `Layout.jsx`, and `ProdusePage`, `ProdusDetaliuPage`, `DesprePage`, and `NotFoundPage` (`data-testid="not-found"`), plus `fetchProdus(id)` in `api.js` and shared constants in `constants.js`.
Changed or rejected: Kept the green, brown, and cream light/dark theme, the animated PCB circuit trace in the header, and the required `data-testid` attributes (`nav`, `item-link`, `detail`, `detail-title`, `not-found`, `loading`, `error`, `empty`, `form*`).

### 2. Splitting styles into index.css and CSS Modules
Asked: How to break styles out of a single stylesheet into `index.css` and `*.module.css` files per component and page.
- Got: Kept theme variables (`:root`, `[data-theme="dark"]`), base rules, and shared classes (`.panel`, `.badge`, `.badge-*`, `.btn-danger`, `.info`, `.empty`, `.error`) in `index.css`, and moved component/page-specific rules into `*.module.css` using `className={styles.name}` and `<Link data-testid="item-link">` on card titles.
Changed or rejected: Kept global utility/panel/badge classes as plain string class names while scoping component and page styles through CSS Modules.

### 3. Fixing runtime errors, stock toggle logic, and header spacing
Asked: Why the app showed a blank screen or hook errors, how to make unchecking stock reset quantity to 0, and how to add space above the moving header trace.
- Got: Replaced stale `./App.css` imports and added missing exports (`fetchProdus` in `api.js` and `CONDITII`, `ETICHETE_CONDITIE`, `CATEGORII` in `constants.js`), updated `handleToggle` so unchecking `in_stock` sets `quantity` to `0` while checking sets `quantity` to at least `1`, and increased bottom padding in `Layout.module.css` to separate the controls from the animated circuit trace.
Changed or rejected: Kept product seeding light during the JSON Server phase rather than manually adding large datasets before connecting the real database later.

## What I learned / what did not work
I learned why `<NavLink end to="/">` is needed so the home link does not stay active on `/despre` or `/produse/:id`, why `useParams()` returns a string and `useEffect` in `ProdusDetaliuPage` should depend on `[id]` without calling `setLoading(true)` synchronously at the top of the effect, and how CSS Modules scope class names (`styles.*`) separately from global classes in `index.css`.