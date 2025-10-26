
// function placeFooter() {
//   const main=document.querySelector("main");
//   const footer=document.querySelector("footer");
//   const body=document.querySelector("body");
//   const tailleFooter=footer.offsetHeight;
//   const tailleMain=main.offsetHeight;
//   footer.style.marginTop=`${-tailleFooter*2/3}px`;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   placeFooter();
// });


// window.addEventListener("scroll", () => {
//   const hauteurScroll = window.scrollY;
//   const hauteurFenetre = window.innerHeight;
//   const hauteurTotale = document.documentElement.scrollHeight;
//   const main = document.querySelector("main");
//   const hauteurActuelle=hauteurFenetre+hauteurScroll;
//   const footer=document.querySelector("footer");
//   let hauteurEffet=0.9;
//   if (hauteurActuelle>= hauteurTotale*hauteurEffet) {
//     let coeff=(hauteurActuelle-hauteurTotale*hauteurEffet)/(hauteurTotale*(1-hauteurEffet));
//     coeff=Math.min(coeff,1);
//     main.style.transform=`rotate(${-coeff*15}deg) translateX(${coeff*50}%)` ;
//   }
//   else {
//     main.style.transform="rotate(0deg)";
//   }
// });

// modif class sur la navbar au scroll



// De Base, je comptait mettre une animation de changement de page entre le main et le footer mais
// cela aurait compliqué la mise en place du responsive




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


