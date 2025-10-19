// modif class sur la navbar au scroll

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('mainNav');

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
