// Import du composant Link de React Router qui permet de créer des liens internes sans recharger la page
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Balise de navigation principale
    <nav className="navbar">
      {/* Logo ou nom affiché dans la navbar */}
      <Link to="/">
        <div className="logo">
          <img src="/logo.webp" />
          <h1>Florian Vidal - Développeur Web Fullstack</h1>
        </div>
      </Link>

      {/* Liste des liens de navigation */}
      <ul>
        {/* Chaque <li> contient un lien interne avec Link */}
        <li>
          <Link to="/projects">Projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// Export du composant pour l’utiliser dans App.jsx
export default Navbar;
