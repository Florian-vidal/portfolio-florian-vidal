// Import des composants de React Router pour gérer la navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des composants de mon portfolio
import Navbar from "./components/Navbar";   // Barre de navigation
import Home from "./pages/Home";            // Page d’accueil
import Projects from "./pages/Projects";    // Page Projets
import Contact from "./pages/Contact";      // Page Contact
import Footer from "./components/Footer";   // Pied de page

// Import du fichier CSS global
import "./index.css";

function App() {
  return (
    // Router qui englobe toute mon application pour activer la navigation côté client
    <Router>
      {/* Navbar affichée en haut de toutes les pages */}
      <Navbar />

      {/* Contenu principal de la page */}
      <main>
        <Routes>
          {/* Définition des routes :
              - "/" → page d’accueil
              - "/projects" → page de mes projets
              - "/contact" → page contact */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer affiché en bas de toutes les pages */}
      <Footer />
    </Router>
  );
}

// Export du composant principal pour démarrer l’application
export default App;
