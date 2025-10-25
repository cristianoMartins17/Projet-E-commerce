
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



