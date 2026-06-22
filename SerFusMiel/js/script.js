const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Gracias por contactar con Miel Dorada. Te responderemos pronto.");

    form.reset();
});