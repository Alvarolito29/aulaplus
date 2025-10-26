import { Link } from "react-router-dom";

const baseFont = "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>AulaPlus</h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/products" style={styles.link}>Cursos</Link></li>
        <li><Link to="/contact" style={styles.link}>Contacto</Link></li>
        <li><Link to="/contact" style={styles.link}>Direccion</Link></li>
        <li><Link to="/contact" style={styles.link}>Aula Virtual</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",   // 👈 todo centrado horizontalmente
    alignItems: "center",
    gap: 932,                     // espacio entre logo y menú
    padding: "25px 30px",
    background: "#004aad",
    fontFamily: baseFont,        // 👈 cambia la “letra” de todo el nav
  },
  logo: {
    color: "#fff",
    margin: 0,
    fontWeight: 800,
    letterSpacing: ".5px",
    fontSize: 28,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: 24,
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  },
};
