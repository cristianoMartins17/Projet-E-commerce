// === BACKGROUND ANIMÉ ===
const bg = document.getElementById("animatedBg");
const glow = document.getElementById("cursorGlow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let glowX = mouseX;
let glowY = mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY + window.scrollY;
  const xPercent = (e.clientX / window.innerWidth) * 100;
  const yPercent = ((e.clientY + window.scrollY) / document.body.scrollHeight) * 100;
  bg.style.setProperty("--x", `${xPercent}%`);
  bg.style.setProperty("--y", `${yPercent}%`);
});

function animateGlow() {
  glowX += (mouseX - glowX) * 0.1;
  glowY += (mouseY - glowY) * 0.1;
  glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateGlow);
}
animateGlow();

// === NAVBAR : effet de scroll ===
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) navbar.classList.add("navbar--scrolled");
  else navbar.classList.remove("navbar--scrolled");
});

// === MENU BURGER ===
const burgerBtn = document.getElementById("burger-btn");
const menu = document.getElementById("menu");
if (burgerBtn && menu) {
  burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    document.body.classList.toggle("no-scroll", menu.classList.contains("open"));
  });
}

// === LOGIQUE PANIER ===
const qtyButtons = document.querySelectorAll('.btn-qty');
const removeButtons = document.querySelectorAll('.remove-btn');
const totalPrice = document.getElementById('total-price');

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const price = parseFloat(item.querySelector('.price').textContent.replace(/[^\d]/g, ''));
    const qty = parseInt(item.querySelector('.quantity span').textContent);
    total += price * qty;
  });
  totalPrice.textContent = total.toLocaleString('fr-FR') + ' €';
}

qtyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const span = btn.parentElement.querySelector('span');
    let qty = parseInt(span.textContent);
    if (btn.textContent === '+' && qty < 99) qty++;
    if (btn.textContent === '−' && qty > 1) qty--;
    span.textContent = qty;
    updateTotal();
  });
});

removeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.remove();
    updateTotal();
  });
});

updateTotal();