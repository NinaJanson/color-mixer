const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const header = document.querySelector("header");
const body = document.querySelector("body");
const colorRgb = document.querySelector(".colorRgb");
const colorHex = document.querySelector(".colorHex");

function valueToHex(c) {
  let hex = Number(c).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function changeBackgroundColor() {
  let color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
  body.style.backgroundColor = color;
  colorRgb.innerText = color;

  colorHex.innerText =
    "#" +
    valueToHex(red.value) +
    valueToHex(green.value) +
    valueToHex(blue.value);
}

changeBackgroundColor();

body.addEventListener("input", changeBackgroundColor);
