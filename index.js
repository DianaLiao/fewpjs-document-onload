// Your code goes here

document.addEventListener("DOMContentLoaded", coolness());

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

function coolness() {
  let textToChange = document.getElementById("text")
  textToChange.textContent = "This is really cool!"
  console.log("The DOM has loaded")
}