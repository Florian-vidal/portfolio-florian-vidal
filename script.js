// Liste de compétences (chaînes de texte)
const skills = [
  "HTML5",
  "CSS3 (Flexbox, Responsive)",
  "JavaScript (ES6+)",
  "React.js",
  "Node.js",
  "MongoDB",
  "Git & GitHub",
  "Méthodes agiles",
];

// On sélectionne l'élément UL vide dans le HTML
const list = document.getElementById("skillsList");

// Pour chaque compétence, on crée un <li> et on l'ajoute à la liste
skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  list.appendChild(li);
});

// Liste de projets à afficher
const projets = [
  {
    titre:
      "Création site pour mon ancienne société : Boutique spécialisée dans le CBD",
    description:
      "Il s'agit d'une boutique en ligne qui gère les clients, les commandes, mes produits, codes promos, points de fidélité, inventaire, modes de livraison, modes de paiement.",
    date: "Date de création : Janvier 2021",
    type: "Type de projet : projet professionnel",
    techno: "Technos utilisées : Wordpress, PHP",
    lien: "https://www.evasioncbd.com/",
  },
  {
    titre: "Site blog pour un réalisateur, producteur, médias",
    description:
      "M.Pichoff fait des courts métrages et participe à des évènements liés au monde du cinéma. Il souhaitait un site web qui puisse à la fois mettre en valeur son activité, son profil de réalisateur-producteur et de pouvoir centrer sa visibilité sur internet. Le site a été développé sous Wordpress.",
    date: "Date de création : Juin 2020",
    type: "Type de projet : commande pour un client",
    techno: "Technos utilisées : Wordpress",
    lien: "https://www.mathieupichoff.com/",
  },
  {
    titre: "Site vitrine d'un cabinet paramédical",
    description:
      "Ce projet web est un site vitrine qui présente les différents services ainsi que l'équipe en charge d'un cabinet paramédical situé à La Teste-de-Buch. Une visite virtuelle, un bon référencement et un design épuré ont été les priorités voulues par le client.",
    date: "Date de création : Mai 2020",
    type: "Type de projet : commande pour un client",
    techno: "Technos utilisées : PHP, Bootstrap",
    lien: "https://www.cabinetcazaux.fr/",
  },

  {
    titre: "Plateforme d'apprentissage pour enfants : Les Zaniméo",
    description:
      "Ce projet est né d'une envie de proposer une application à mi-chemin entre un support d'apprentissage et un jeu interactif et sonore dans le domaine des animaux pour enfants. Après avoir parcouru le site, l'enfant peut participer au Quiz pour y tester ce qu'il a appris. Son score avec un diplôme numérique lui est envoyé par mail.",
    date: "Date de création : Août 2019",
    type: "Type de projet : projet de fin de bootcamp pour obtenir le titre RNCP dre niveau 5",
    techno: "Technos utilisées : PHP, Symfony, JavaScript",
    lien: "https://leszanimeo.com/",
  },
  {
    titre: "Site de partage pour collectionneurs : DBZ Museum Collection",
    description:
      "Projet qui a pour but de rendre hommage à une licence culte des années 90, j'ai nommé le manga Dragon Ball. Ce site a été pensé et élaboré selon une l'idée d'un musée qui référence les objets que l'on trouvait sur cette licence en France.",
    date: "Date de création : Janvier 2019",
    type: "Type de projet : Projet personnel",
    techno: "Technos utilisées : WIX - No code",
    lien: "https://dbzmuseumcollection.wixsite.com/website-1",
  },
];

// On sélectionne la <div> vide où afficher les projets
const projectsContainer = document.getElementById("projectsList");

// Pour chaque projet, on crée une "carte" HTML avec son contenu
projets.forEach((projet) => {
  const card = document.createElement("div");
  card.className = "project-card"; // Classe CSS pour le style

  const title = document.createElement("h4");
  title.textContent = projet.titre;

  const desc = document.createElement("p");
  desc.textContent = projet.description;

  const date = document.createElement("p");
  date.textContent = projet.date;

  const type = document.createElement("p");
  type.textContent = projet.type;

  const techno = document.createElement("p");
  techno.textContent = projet.techno;

  const link = document.createElement("a");
  link.href = projet.lien;
  link.textContent = "Voir le projet";
  link.target = "_blank";

  // On assemble tous les éléments dans la carte
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(date);
  card.appendChild(type);
  card.appendChild(techno);
  card.appendChild(link);

  // On ajoute la carte au conteneur
  projectsContainer.appendChild(card);
});
