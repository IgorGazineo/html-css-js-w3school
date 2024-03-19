const menuBtn = document.querySelector(".menu-hamburger");
const closeMenuBtn = document.querySelector(".close-btn button");
const navElements = document.querySelector("header nav ul");

menuBtn.addEventListener("click", () => {
  navElements.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  navElements.classList.remove("active");
});
