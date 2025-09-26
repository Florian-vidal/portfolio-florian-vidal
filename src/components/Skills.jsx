// Import de la librairie Framer Motion pour gérer les animations
import { motion } from "framer-motion";

// Import d’icônes depuis react-icons (logos des technos)
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

function Skills() {
  // Tableau d’objets représentant les compétences
  // Chaque objet contient un nom + une icône
  const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" size={40} /> },
    { name: "React Native", icon: <FaReact color="#61DBFB" size={40} /> },
    {
      name: "Expo",
      icon: <img src="/expo.svg" alt="Expo" width={40} height={40} />,
    },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={40} /> },
    { name: "Express", icon: <SiExpress color="#444" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={40} /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7E018" size={40} /> },
    { name: "HTML5", icon: <FaHtml5 color="#E44D26" size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt color="#264DE4" size={40} /> },
    { name: "GitHub", icon: <FaGithub color="#000" size={40} /> },
  ];

  return (
    // Section contenant toute la partie "Compétences"
    <section className="skills">
      <h2>Compétences</h2>

      {/* Grille qui affiche les compétences */}
      <div className="skills-grid">
        {/* On parcourt le tableau skills avec .map() */}
        {skills.map((skill, index) => (
          // Chaque compétence est affichée dans un bloc animé
          <motion.div
            key={index} // clé unique
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }} // état initial : petit + transparent
            whileInView={{ opacity: 1, scale: 1 }} // état quand visible : normal + opaque
            transition={{ duration: 0.3, delay: index * 0.1 }}
            // transition fluide + délai en fonction de la position (effet cascade)
            viewport={{ once: true }} // l’animation se joue une seule fois
          >
            {/* Icône de la techno */}
            {skill.icon}
            {/* Nom de la techno */}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
