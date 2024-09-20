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

// social share

// Set href for all Facebook share links
document.querySelectorAll(".facebook-share").forEach((el) => {
  el.href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
});

// Set href for all Twitter share links
document.querySelectorAll(".twitter-share").forEach((el) => {
  el.href = `https://twitter.com/share?url=${window.location.href}&text=Check%20out%20this%20Thai%20Food%20blog!`;
});

// Set href for all Instagram share links
document.querySelectorAll(".instagram-share").forEach((el) => {
  el.href = `https://www.instagram.com/?url=${encodeURIComponent(
    window.location.href
  )}`;
});

// Set href for all LinkedIn share links
document.querySelectorAll(".linkedin-share").forEach((el) => {
  el.href = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
});
