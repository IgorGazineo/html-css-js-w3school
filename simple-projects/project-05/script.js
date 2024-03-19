const menuBtn = document.querySelector(".menu-hamburger");
console.log(menuBtn);
menuBtn.addEventListener("click", () => {
  console.log("clicou");
  document.querySelector("header nav ul").classList.add("active");
});
