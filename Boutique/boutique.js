function openModal(imgSrc, name, desc, price) {
  const popup = document.getElementById("popup");
  document.getElementById("popupImg").src = imgSrc;
  document.getElementById("popupTitle").textContent = name;
  document.getElementById("popupDesc").textContent = desc;
  document.getElementById("popupPrice").textContent = price;
  popup.style.display = "flex";
}

function closeModal() {
  document.getElementById("popup").style.display = "none";
}

window.onclick = function(e) {
  if (e.target.id === "popup") {
    closeModal();
  }
};

//========================================

window.addEventListener('scroll', () => {
  const produits = document.querySelectorAll('.produit');
  const triggerBottom = window.innerHeight * 0.85;

  produits.forEach(produit => {
    const top = produit.getBoundingClientRect().top;
    if(top < triggerBottom){
      produit.classList.add('visible');
    }
  });
});

// modif class sur la navbar au scroll

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('mainNav');

  // Changer le style de la navbar quand on scrolle
  // si scrollY > 60 => on ajoute navbar--scrolled
  window.addEventListener('scroll', function () {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
});

// menu burger

    const btn = document.getElementById('burger-btn');
    const menu = document.getElementById('menu');

    // Quand on clique sur le bouton, on ajoute/enlève la classe "open"
    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

// ============================
