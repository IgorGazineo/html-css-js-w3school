const displayButtonElement = document.body.children[0].children[1];

function displayDateAndTIme() {
  const paragraphElement = document.body.children[0].children[2];
  const dateAndTime = Date();
  paragraphElement.textContent = dateAndTime;
}

function changeHTMLContent() {
  const paragraph = document.getElementById("demo");
  paragraph.textContent = "Hello JavaScript!";
}

displayButtonElement.addEventListener("click", displayDateAndTIme);

document.getElementById("demo").style.fontSize = "35px";

document.querySelector("#output .paragraph").innerHTML = 5 + 6;
