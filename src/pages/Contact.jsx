// Import d’icônes depuis react-icons (logos des social-links)
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Déclaration du composant Contact
function Contact() {
  return (
    // Section principale avec une classe CSS "contact"
    <section className="contact">
      {/* Titre de la section */}
      <h2>Contact</h2>

      <p>
        N’hésitez pas à me contacter pour échanger autour d’une opportunité, un
        projet web, ou tout simplement pour discuter tech.
      </p>
      <br />

      <p>📧 florianvidal.webdev@gmail.com</p>

      <p>📱 06 66 28 00 26</p>
      <br />

      {/* Liens externes vers tes profils professionnels */}
      <div className="social-links">
        {/* Lien vers ton profil LinkedIn */}
        <FaLinkedin color="#0A66C2" size={30} />
        <a
          href="https://www.linkedin.com/in/vidal-florian/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>

        {" | "}

        {/* Lien vers ton profil GitHub */}
        <FaGithub color="#000" size={30} />
        <a
          href="https://github.com/Florian-vidal"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </section>
  );
}

// Export du composant pour l'utiliser dans App.jsx ou ailleurs
export default Contact;
