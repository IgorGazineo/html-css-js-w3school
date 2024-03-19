const menuBtn = document.querySelector(".menu-hamburger");
const closeMenuBtn = document.querySelector(".close-btn button");
const navElements = document.querySelector("header nav ul");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
  navElements.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  navElements.classList.remove("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navElements.classList.value === "active") {
      navElements.classList.remove("active");
    }
  });
});
