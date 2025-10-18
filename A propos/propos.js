window.addEventListener("scroll", () => {
  const hauteurActuelle = window.scrollY;
  const hauteurFenetre = window.innerHeight;
  const hauteurTotale = document.documentElement.scrollHeight;
  const p = document.getElementById("reponse");

  if (hauteurActuelle + hauteurFenetre >= hauteurTotale) {
    p.textContent = "ouiii";
  } else {
    p.textContent = "";
  }

});


