import styles from "./AboutPage.module.css";

const STACK = ["React", "Vite", "React Router", "Node.js", "Express", "MariaDB", "Docker"];

export default function AboutPage() {
  return (
    <section className="panel">
      <h2>About TechStock</h2>
      <p className={styles.text}>
        TechStock is a stock-control app for a phone accessories and parts shop. It was built
        step by step during the semester, as the project of the Web Technologies course.
      </p>
      <p className={styles.text}>
        Every product has a condition, a category, a price and a quantity, and it can be marked
        as in stock, searched, opened on its own page or removed from the inventory.
      </p>
      <ul className={styles.stack} aria-label="Technology stack">
        {STACK.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
