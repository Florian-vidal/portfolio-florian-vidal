// Import des composants qui composent ta page d’accueil
import Hero from "../components/Hero";     // section de présentation avec photo + bouton call to action
import About from "../components/About";   // section "À propos de moi"
import Skills from "../components/Skills"; // section "Compétences / Tech stack"

function Home() {
  return (
    <>
      {/* Section d’accueil avec texte + photo + bouton "Voir mes projets" */}
      <Hero />

      {/* Section compétences avec icônes animées (React, Node, MongoDB, etc.) */}
      <Skills />

      {/* Section à propos : parcours, spécialisation, objectif */}
      <About />
    </>
  );
}

// Export du composant pour pouvoir l’utiliser dans App.jsx
export default Home;
