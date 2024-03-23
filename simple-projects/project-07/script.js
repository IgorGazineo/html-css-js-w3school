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
    if (document.documentElement.clientWidth < "1100") {
      navLinksListElement.classList.toggle("active");
      menuHamburger.classList.remove("active");
    }
  });
});
