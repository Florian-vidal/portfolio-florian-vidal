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
    titre: "To-Do List",
    description: "Une application simple en JavaScript pour gérer ses tâches.",
    lien: "https://sage-souffle-58b78a.netlify.app/",
  },
  {
    titre: "Mini CV interactif",
    description: "Une page personnelle responsive avec génération dynamique.",
    lien: "#",
  },
  {
    titre: "Clone de Vinted",
    description: "Projet React avec authentification et paiements (fictifs).",
    lien: "#",
  },
  {
    titre: "Application pour s'entraîner : Agence immobilière",
    description: "Une application ludo-éducative pour enfants",
    lien: "www.agence-immo-site.com",
  },
  {
    titre: "Jeu intéractif : Les Zaniméo",
    description: "Une application ludo-éducative pour enfants, créé ",
    lien: "https://leszanimeo.com/",
  },
  {
    titre: "Site pour collectionneurs : DBZ Museum Collection",
    description:
      "Projet qui a pour but de rendre hommage à une licence culte des années 90, j'ai nommé le manga Dragon Ball. Ce site a été pensé et élaboré selon une l'idée d'un musée qui référence les objets que l'on trouvait sur cette licence en France.",
    date: "Janvier 2019",
    lien: "https://dbzmuseumcollection.wixsite.com/website-1",
  },
  {
    titre: "Librairie : Le Cercle Des Poètes",
    description: "Une application ludo-éducative pour enfants, créé ",
    lien: "www.le-cercle-des-poetes.com",
  },
  {
    titre: "Commande client : Cabinet Kiné-Massage-Ostéo",
    description: "Une application ludo-éducative pour enfants, créé ",
    lien: "www.cabinetcazaux.fr",
  },
  {
    titre: "Commande client : Réalisateur, producteur, médias",
    description: "Une application ludo-éducative pour enfants, créé ",
    lien: "www.mathieupichoff.com",
  },
  {
    titre:
      "Création site pour mon ancienne société : Boutique spécialisée dans le CBD",
    description: "Une application ludo-éducative pour enfants, créé ",
    lien: "www.evasioncbd.com",
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

  const link = document.createElement("a");
  link.href = projet.lien;
  link.textContent = "Voir le projet";
  link.target = "_blank";

  // On assemble tous les éléments dans la carte
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(date);
  card.appendChild(link);

  // On ajoute la carte au conteneur
  projectsContainer.appendChild(card);
});
