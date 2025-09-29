// Import du composant Link de React Router qui permet de créer des liens internes sans recharger la page
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Initialisation d'un state pour gérer le menu burger

  return (
    // Balise de navigation principale
    <nav className="navbar">
      {/* Logo ou nom affiché dans la navbar */}
      <NavLink to="/">
        <div className="logo">
          <img src="/logo.webp" />
          <h1>Florian Vidal - Développeur Web Fullstack</h1>
        </div>
      </NavLink>

      {/* Bouton menu burger (visible seulement en mobile via le CSS) */}
      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu navigation */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsOpen(false)}>
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/CV" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsOpen(false)}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Export du composant pour l’utiliser dans App.jsx
export default Navbar;
