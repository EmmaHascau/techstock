import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styles from "./Layout.module.css";

const TRACE_FAINT = "M0 32 " + "h200 l24 -10 h120 l24 10 h32 ".repeat(6);
const TRACE_LINE = "M0 26 " + "h110 l24 -12 h140 l24 12 h102 ".repeat(6);

function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [theme, setTheme] = useState(initialTheme);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const query = searchParams.get("q") ?? "";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function handleSearch(e) {
    const value = e.target.value;
    const target = value === "" ? "/" : `/?q=${encodeURIComponent(value)}`;
    navigate(target, { replace: location.pathname === "/" });
  }

  function handleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link to="/" className={styles.brand}>
            <svg
              className={styles.brandIcon}
              viewBox="0 0 64 64"
              width="34"
              height="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <rect x="16" y="16" width="32" height="32" rx="4" />
              <rect x="26" y="26" width="12" height="12" rx="2" />
              <path d="M24 6v10M32 6v10M40 6v10M24 48v10M32 48v10M40 48v10M6 24h10M6 32h10M6 40h10M48 24h10M48 32h10M48 40h10" />
            </svg>
            <span className={styles.logo}>
              Tech<span className={styles.outline}>Stock</span>
            </span>
          </Link>

          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Products
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
          </nav>

          <form
            className={styles.search}
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <svg
              className={styles.searchIcon}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              className={styles.searchInput}
              value={query}
              onChange={handleSearch}
              placeholder="Search..."
              aria-label="Search products"
              autoComplete="off"
              data-testid="search"
            />
          </form>

          <button
            type="button"
            className={styles.themeToggle}
            onClick={handleTheme}
            aria-pressed={theme === "dark"}
          >
            <span className={styles.themeIconWrap}>
              {theme === "dark" ? (
                <svg className={styles.themeIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className={styles.themeIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </span>
            <span className={styles.themeText}>
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </span>
          </button>
        </div>

        <svg
          className={styles.trace}
          viewBox="0 0 2400 40"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <path className={styles.traceFaint} d={TRACE_FAINT} />
          <path className={styles.traceLine} d={TRACE_LINE} />
          <path className={styles.tracePulse} pathLength="1000" d={TRACE_LINE} />
        </svg>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>Web Technologies course project</footer>
    </>
  );
}
