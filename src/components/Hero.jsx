// Import de Framer Motion pour gérer les animations
import { motion } from "framer-motion";

// Import de Link de React Router pour la navigation interne
import { Link } from "react-router-dom";

function Hero() {
  return (
    // Section principale du Hero
    <section className="hero">
      {/* Bloc animé avec Framer Motion */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }} 
        // état de départ : invisible (opacity 0) + décalé vers le bas (y: 50)
        animate={{ opacity: 1, y: 0 }} 
        // état final : visible + position normale
        transition={{ duration: 1 }} 
        // durée de l’animation : 1 seconde
      >
        {/* Photo de profil */}
        <img
          src="/profil.jpg"  // l’image est placée dans le dossier public
          alt="Florian Vidal"
          className="hero-img"
        />

        {/* Texte d’accroche */}
        <h2>Bienvenue sur mon portfolio</h2>
        <p>
          Je suis <strong>Florian Vidal</strong>, développeur web junior en
          reconversion, passionné par le développement{" "}
          <em>full-stack</em>.
        </p>

        {/* Bouton d’appel à l’action */}
        <Link to="/projects" className="btn-primary">
          Voir mes projets
        </Link>
      </motion.div>
    </section>
  );
}

// Export du composant pour pouvoir l’utiliser dans Home.jsx
export default Hero;
