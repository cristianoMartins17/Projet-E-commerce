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
