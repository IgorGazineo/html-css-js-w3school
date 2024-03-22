const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelectorAll(".nav-links a");
const navLinksListElement = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  //   console.log("clicou");
  navLinksListElement.classList.toggle("active");
  menuHamburger.classList.toggle("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinksListElement.classList.toggle("active");
    menuHamburger.classList.remove("active");
  });
});
