const hamburger = document.querySelector(".mobile__nav");
const navBar = document.querySelector(".navbar");
const closeButton = document.querySelector(".mobile__nav-close");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  closeButton.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
});

sr.reveal(".home__text", {
  origin: "top",
});
sr.reveal(".home__img", {
  origin: "bottom",
});

sr.reveal(".grid__container img", {
  origin: "left",
});
sr.reveal(".text", {
  origin: "right",
});
sr.reveal(".central__container", {
  origin: "top",
});
