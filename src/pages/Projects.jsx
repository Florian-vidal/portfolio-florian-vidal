// Import du composant ProjectCard où chaque projet sera affiché sous forme de card
import ProjectCard from "../components/ProjectCard";

// Tableau contenant la liste de mes projets
// Chaque objet a un titre, une description, une date, un type, une stack et un lien
const projects = [
  {
    title: "Appli mobile Giftsquad",
    description:
      "Gestion de cadeaux en groupe avec authentification, gestion des états, navigation",
    date: "septembre 2025",
    type: "Workshop bootcamp Le Reacteur",
    stack: "React Native, Node.js, Express, MongoDB, Cloudinary, Northflank",
    link: "https://github.com/Giftsquad",
  },
  {
    title: "Réplique du site Marvel",
    description:
      "Test technique portant sur l'intégration d'une API externe avec gestion des favoris",
    date: "septembre 2025",
    type: "bootcamp Le Reacteur",
    stack: "React, Node.js, Express, API Marvel, Northflank, Netlify",
    link: "https://velmar-florian-vidal.netlify.app/",
  },
  {
    title: "Trousse à outils pour développeur junior en ligne",
    description:
      "Une boîte à outils qui permet aux développeurx juniors de retrouver plusieurs infos, raccourcis, tips, aide-mémoires en un seul lieu",
    date: "août 2025",
    type: "projet personnel",
    stack: "React, Tailwind, Netlify",
    link: "https://toolkitwebdev.netlify.app/category/react",
  },
  {
    title: "Réplique du site Vinted",
    description:
      "Plateforme e-commerce avec gestion d'annonces et paiement Stripe, authentification, hébergement des images",
    date: "août 2025",
    type: "bootcamp Le Reacteur",
    stack: "React, Node.js, Express, MongoDB, Cloudinary, Northflank, Netlify, Stripe",
    link: "https://tedvin-florian-vidal.netlify.app/",
  },
  {
    title: "Création site pour mon ancienne société : Boutique spécialisée dans le CBD",
    description:
      "Il s'agit d'une boutique en ligne qui gère les clients, les commandes, mes produits, codes promos, points de fidélité, inventaire, modes de livraison, modes de paiement.",
    date: "janvier 2021",
    type: "projet freelance",
    stack: "Wordpress, PHP",
    link: "https://www.evasioncbd.com/",
  },
  {
    title: "Site blog pour un réalisateur, producteur, médias",
    description:
      "M.Pichoff fait des courts métrages et participe à des évènements liés au monde du cinéma. Il souhaitait un site web qui puisse à la fois mettre en valeur son activité, son profil de réalisateur-producteur et de pouvoir centrer sa visibilité sur internet. Le site a été développé sous Wordpress.",
    date: "juin 2020",
    type: "projet freelance",
    stack: "Wordpress",
    link: "https://www.mathieupichoff.com/",
  },
  {
    title: "Site vitrine d'un cabinet paramédical",
    description:
      "Ce projet web est un site vitrine qui présente les différents services ainsi que l'équipe en charge d'un cabinet paramédical situé à La Teste-de-Buch. Une visite virtuelle, un bon référencement et un design épuré ont été les priorités voulues par le client.",
    date: "mai 2020",
    type: "projet freelance",
    stack: "PHP, Bootstrap",
    link: "https://www.cabinetcazaux.fr/",
  },
  {
    title: "Plateforme d'apprentissage pour enfants : Les Zaniméo",
    description:
      "Ce projet est né d'une envie de proposer une application à mi-chemin entre un support d'apprentissage et un jeu interactif et sonore dans le domaine des animaux pour enfants. Après avoir parcouru le site, l'enfant peut participer au Quiz pour y tester ce qu'il a appris. Son score avec un diplôme numérique lui est envoyé par mail.",
    date: "août 2019",
    type: "projet de fin de bootcamp pour obtenir le titre RNCP dre niveau 5",
    stack: "PHP, Symfony, JavaScript",
    link: "https://www.evasioncbd.com/",
  },
  {
    title: "Création site pour mon ancienne société : Boutique spécialisée dans le CBD",
    description:
      "Il s'agit d'une boutique en ligne qui gère les clients, les commandes, mes produits, codes promos, points de fidélité, inventaire, modes de livraison, modes de paiement.",
    date: "Janvier 2021",
    type: "projet freelance",
    stack: "Wordpress, PHP",
    link: "https://leszanimeo.com/",
  },
  {
    title: "Site de partage pour collectionneurs : DBZ Museum Collection",
    description:
      "Projet qui a pour but de rendre hommage à une licence culte des années 90, j'ai nommé le manga Dragon Ball. Ce site a été pensé et élaboré selon une l'idée d'un musée qui référence les objets que l'on trouvait sur cette licence en France.",
    date: "janvier 2019",
    type: "projet personnel",
    stack: "WIX - No code",
    link: "https://dbzmuseumcollection.wixsite.com/website-1",
  },
];

function Projects() {
  return (
    // Conteneur principal avec une classe CSS "projects"
    <div className="projects">
      {/* Titre de la section */}
      <h2>Mes Projets</h2>

      {/* Grille qui contiendra toutes les cartes projets */}
      <div className="projects-grid">
        {/* On parcourt le tableau projects avec .map() */}
        {projects.map((p, i) => (
          // On passe les props de chaque projet à ProjectCard
          // {...p} = équivalent à title={p.title} description={p.description} link={p.link}
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

// Export du composant pour l’utiliser dans App.jsx (ou comme page /projects)
export default Projects;
