// Import de Framer Motion pour ajouter des animations
import { motion } from "framer-motion";

// Déclaration du composant ProjectCard qui reçoit 6 props : title, description, date, type, stack et link (destructuring)
function ProjectCard({ title, description, date, type, stack, link }) {
  return (
    // Bloc principal animé avec Framer Motion
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.01 }} // Quand on survole la card avec la souris → zoom léger (scale 101%)
    >
      {/* Titre du projet */}
      <h3>{title}</h3>

      {/* Description courte du projet */}
      <p>{description}</p>

      {/* Date de création du projet */}
      <p>{date}</p>

      {/* Type de projet */}
      <p>{type}</p>

      {/* Stacks utilisés lors du projet */}
      <p>{stack}</p>

      {/* Lien vers le projet */}
      <a href={link} target="_blank">
        Voir le projet
      </a>
    </motion.div>
  );
}

// Export du composant pour l’utiliser ailleurs dans ProjectCard.jsx
export default ProjectCard;
