// ========================================
// 1. CHANGEMENT DE STYLE DE LA NAVBAR AU SCROLL
// ========================================

// Attend que la page soit complètement chargée avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('mainNav');

  // Écoute l'événement de scroll (défilement) de la page
  window.addEventListener('scroll', function () {
    // Si la navbar n'existe pas, on arrête
    if (!navbar) return;
    
    // Si on a scrollé de plus de 60 pixels vers le bas
    if (window.scrollY > 60) {
      // On ajoute la classe qui change l'apparence (dégradé coloré)
      navbar.classList.add('navbar--scrolled');
    } else {
      // Sinon on retire cette classe (retour à l'apparence normale)
      navbar.classList.remove('navbar--scrolled');
    }
  });
});


// ========================================
// 2. MENU BURGER (HAMBURGER)
// ========================================

// Récupération du bouton burger et du menu
const btn = document.getElementById('burger-btn');
const menu = document.getElementById('menu');

// Quand on clique sur le bouton burger
btn.addEventListener('click', () => {
  // On ajoute ou retire la classe "open" qui fait apparaître/disparaître le menu
  // toggle = si la classe existe on la retire, sinon on l'ajoute
  menu.classList.toggle('open');
});


// ========================================
// 3. CARROUSEL D'IMAGES
// ========================================

// Sélection de tous les éléments nécessaires au carrousel
const items = document.querySelectorAll('.carrousel .image'); // Toutes les images
const btnApres = document.getElementById('apres'); // Bouton suivant (>)
const btnAvant = document.getElementById('avant'); // Bouton précédent (<)
const imageZoom = document.getElementById('imageZoom'); // Overlay pour agrandir l'image
const imageZoomImg = document.getElementById('zoom'); // Image agrandie dans l'overlay
const indicateursContainer = document.getElementById('indicateurs'); // Conteneur des points indicateurs

let active = 2; // Index de l'image centrale au départ (on commence à l'image 3)


// ---- Création des indicateurs (petits points en bas) ----
// Pour chaque image, on crée un point cliquable
items.forEach((_, index) => {
  const dot = document.createElement('div'); // Crée un élément div
  dot.className = 'indicateur'; // Lui donne la classe CSS
  
  // Quand on clique sur un point, on change l'image active
  dot.addEventListener('click', () => {
    active = index; // L'image active devient celle du point cliqué
    loadShow(); // On met à jour l'affichage
  });
  
  // Ajoute le point au conteneur
  indicateursContainer.appendChild(dot);
});


// ---- Fonction principale qui affiche les images selon leur position ----
function loadShow() {
  // Pour chaque image, on calcule sa position par rapport à l'image centrale
  items.forEach((item, index) => {
    const distance = index - active; // Distance de l'image par rapport au centre
    
    if (distance === 0) {
      // === IMAGE CENTRALE (celle qu'on regarde) ===
      // Positionnée au centre, taille normale, pas de flou
      item.style.transform = 'translateX(0) scale(1) translateZ(0)';
      item.style.zIndex = 10; // Au-dessus des autres
      item.style.filter = 'none'; // Pas de flou
      item.style.opacity = 1; // Complètement visible
      
    } else if (Math.abs(distance) <= 2) {
      // === IMAGES VISIBLES SUR LES CÔTÉS (2 à gauche, 2 à droite) ===
      // Calculs pour créer l'effet de perspective 3D
      const offset = distance * 160; // Décalage horizontal (positif = droite, négatif = gauche)
      const scale = 1 - Math.abs(distance) * 0.15; // Plus c'est loin, plus c'est petit
      const rotateY = distance > 0 ? -8 : 8; // Légère rotation (effet 3D)
      const blur = Math.abs(distance) * 2; // Plus c'est loin, plus c'est flou
      
      // Application des transformations
      item.style.transform = `translateX(${offset}px) scale(${scale}) perspective(800px) rotateY(${rotateY}deg)`;
      item.style.zIndex = 10 - Math.abs(distance); // Plus c'est loin, plus c'est derrière
      item.style.filter = `blur(${blur}px)`; // Application du flou
      item.style.opacity = 0.6; // Semi-transparent
      
    } else {
      // === IMAGES TROP LOIN (complètement cachées) ===
      item.style.transform = `translateX(${distance * 160}px) scale(0.7)`;
      item.style.zIndex = -Math.abs(distance); // Derrière tout
      item.style.filter = 'blur(5px)';
      item.style.opacity = 0; // Invisible
    }
  });

  // ---- Mise à jour des indicateurs (points) ----
  // On marque le point correspondant à l'image active
  document.querySelectorAll('.indicateur').forEach((dot, index) => {
    // Si c'est le point de l'image active, on ajoute la classe "actif"
    dot.classList.toggle('actif', index === active);
  });
}


// ---- Navigation avec les boutons < et > ----

// Bouton "suivant" (>)
btnApres.addEventListener('click', () => {
  // On passe à l'image suivante, et on revient au début si on est à la fin
  active = (active + 1) % items.length;
  loadShow(); // Met à jour l'affichage
});

// Bouton "précédent" (<)
btnAvant.addEventListener('click', () => {
  // On passe à l'image précédente, et on va à la fin si on est au début
  active = (active - 1 + items.length) % items.length;
  loadShow(); // Met à jour l'affichage
});


// ---- Zoom sur une image quand on clique dessus ----
items.forEach(item => {
  item.addEventListener('click', () => {
    // Récupère l'URL de l'image cliquée
    const imgSrc = item.querySelector('img').src;
    // Met cette URL dans l'image de l'overlay
    imageZoomImg.src = imgSrc;
    // Affiche l'overlay en ajoutant la classe "active"
    imageZoom.classList.add('active');
  });
});


// ---- Fermer le zoom en cliquant sur le fond noir ----
imageZoom.addEventListener('click', (e) => {
  // Si on clique sur le fond noir ou sur l'image elle-même
  if (e.target === imageZoom || e.target === imageZoomImg) {
    // On ferme l'overlay en retirant la classe "active"
    imageZoom.classList.remove('active');
  }
});


// ========================================
// 4. NAVIGATION AU CLAVIER
// ========================================

// Écoute les touches du clavier
document.addEventListener('keydown', (e) => {
  // Si l'overlay de zoom est ouvert
  if (imageZoom.classList.contains('active')) {
    // Touche "Échap" : ferme le zoom
    if (e.key === 'Escape') {
      imageZoom.classList.remove('active');
    }
  } else {
    // Si le zoom n'est pas ouvert, les flèches contrôlent le carrousel
    // Flèche droite : image suivante
    if (e.key === 'ArrowRight') btnApres.click();
    // Flèche gauche : image précédente
    if (e.key === 'ArrowLeft') btnAvant.click();
  }
});


// ---- Affiche le carrousel au chargement ----
loadShow();
