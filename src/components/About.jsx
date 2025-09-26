// Import de Framer Motion pour gérer les animations
import { motion } from "framer-motion";

function About() {
  return (
    // Section contenant le bloc "À propos de moi"
    <section className="about">
      {/* Bloc animé avec Framer Motion */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }} 
        // état initial : transparent (opacity 0) et décalé de -50px vers la gauche
        whileInView={{ opacity: 1, x: 0 }} 
        // état quand le bloc devient visible à l’écran : 100% opaque et revenu à sa position normale
        transition={{ duration: 0.8 }} 
        // animation fluide qui dure 0.8 seconde
        viewport={{ once: true }} 
        // l’animation se joue une seule fois quand la section entre dans le viewport
      >
        {/* Titre de la section */}
        <h2>À propos de moi</h2>

        {/* Paragraphe 1 : mon parcours */}
        <p>
          Après 5 ans d’expérience en tant que gérant de société, j’ai choisi de me
          reconvertir dans le développement web pour suivre ma passion pour la tech
          et la création numérique.
        </p>

        {/* Paragraphe 2 : ma spécialisation */}
        <p>
          Aujourd’hui, je me spécialise en <strong>développement full-stack</strong>
          , avec une appétence pour les technologies modernes comme{" "}
          <strong>React, React Native, Node.js et MongoDB</strong>.
        </p>

        {/* Paragraphe 3 : mes objectifs */}
        <p>
          Je recherche une <strong>alternance</strong> pour mettre mes compétences en
          pratique, progresser dans un environnement stimulant et contribuer à des
          projets concrets.
        </p>
      </motion.div>
    </section>
  );
}

// Export du composant pour pouvoir l'utiliser dans Home.jsx
export default About;
