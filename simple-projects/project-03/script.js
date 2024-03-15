const sumButton = document.querySelector("button");

function showResult() {
  const paragraph = document.createElement("p");
  const numberOne = +document.getElementById("number-one").value;
  const numberTwo = +document.getElementById("number-two").value;
  paragraph.innerHTML = `The result of the sum is: ${numberOne + numberTwo}`;
  paragraph.style.textAlign = "center";
  paragraph.style.fontWeight = "bold";
  paragraph.style.fontSize = "30px";
  document.body.append(paragraph);
}

sumButton.addEventListener("click", showResult);
