// Dice game assignment
// Without changing Html css
// Only using js

// Page refresh
// 1 dice for player 1 and 1 dice for player 2 aye randomly
// Jis ke pass ziada number ha Woh win

function roll() {
  let r1 = Math.floor(Math.random() * 6) + 1;
  let r2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector("img.img1")
    .setAttribute("src", "./images/dice" + r1 + ".png");
  document
    .querySelector("img.img2")
    .setAttribute("src", "./images/dice" + r2 + ".png");

  if (r1 > r2) {
    document.querySelector("h1").textContent = "Player 1 Wins!🎈 ";
  } else if (r1 < r2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🎈 "; // win + .
  } else {
    document.querySelector("h1").textContent = "Draw!😠 ";
  }
}

document.querySelector("h3").style.cursor = "pointer";
document.querySelector("h3").addEventListener("click", roll);

// document.addEventListener("DOMContentLoaded", function () {
//   var refreshMe = document.querySelector("h3");
//   refreshMe.style.cursor = "pointer";
//   refreshMe.addEventListener("click", function () {
//     roll();
//   });
// });
