// Déclaration du composant Footer
function Footer() {
  return (
    // Balise <footer> qui contient le contenu du pied de page
    <footer className="footer">
      {/* Paragraphe qui affiche l’année actuelle automatiquement
          grâce à l’objet Date de JavaScript */}
      <p>© {new Date().getFullYear()} - Florian Vidal</p>
    </footer>
  );
}

// Export du composant pour pouvoir l’utiliser dans App.jsx
export default Footer;
