// Liste de compétences (chaînes de texte)
const skills = [
    "HTML5", 
    "CSS3 (Flexbox, Responsive)", 
    "JavaScript (ES6+)", 
    "React.js", 
    "Node.js", 
    "MongoDB", 
    "Git & GitHub", 
    "Méthodes agiles"
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
        lien: "https://sage-souffle-58b78a.netlify.app/"
     },
    {
        titre: "Mini CV interactif",
        description: "Une page personnelle responsive avec génération dynamique.",
        lien: "#"
    },
    {
        titre: "Clone de Vinted",
        description: "Projet React avec authentification et paiements (fictifs).",
        lien: "#"
    }
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

    const link = document.createElement("a");
    link.href = projet.lien;
    link.textContent = "Voir le projet";
    link.target = "_blank";

    // On assemble tous les éléments dans la carte
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    // On ajoute la carte au conteneur
    projectsContainer.appendChild(card);
});
