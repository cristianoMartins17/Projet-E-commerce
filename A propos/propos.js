window.addEventListener("scroll", () => {
  const hauteurScroll = window.scrollY;
  const hauteurFenetre = window.innerHeight;
  const hauteurTotale = document.documentElement.scrollHeight;
  const main = document.querySelector("main");
  const hauteurActuelle=hauteurFenetre+hauteurScroll;
  const footer=document.querySelector("footer")
  if (hauteurActuelle>= hauteurTotale*9/10) { 
    const coeff=hauteurActuelle/hauteurTotale;
    main.style.transform=`rotate(${coeff*-15}deg)`;
  }
  else {
    main.style.transform="rotate(0deg)";
  }
});


