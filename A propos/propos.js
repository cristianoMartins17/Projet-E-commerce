window.addEventListener("scroll", () => {
  const hauteurActuelle = window.scrollY;
  const p = document.getElementById("reponse");
  p.textContent = hauteurActuelle;
});


