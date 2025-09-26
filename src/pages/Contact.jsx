// Déclaration du composant fonctionnel Contact
function Contact() {
  return (
    // Section principale avec une classe CSS "contact"
    <section className="contact">
      
      {/* Titre de la section */}
      <h2>Contact</h2>
      
      {/* Adresse e-mail */}
      <p>📧 florianvidal.webdev@gmail.com</p>
      
      {/* Numéro de téléphone */}
      <p>📱 06 66 28 00 26</p>
      
      {/* Liens externes vers tes profils professionnels */}
      <p>
        {/* Lien vers ton profil LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/vidal-florian/" 
          target="_blank" 
          rel="noreferrer"
        >
          Linkedin
        </a>

        {" | "}

        {/* Lien vers ton profil GitHub */}
        <a 
          href="https://github.com/Florian-vidal" 
          target="_blank" 
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </section>
  );
}

// Export du composant pour l'utiliser dans App.jsx ou ailleurs
export default Contact;
