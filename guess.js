"use strict";

const message = document.querySelector(".message");
const scoreEl = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector(".guess").value);

  //No input
  if (!guess) {
    message.textContent = "⛔ No number";
  }
  //Correct
  else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      if (guess > secretNumber) {
        message.textContent = "📈 Too high!";
      } else if (guess < secretNumber) {
        message.textContent = "📉 Too low!";
      }
    } else {
      message.textContent = "😔 You lost the game";
      scoreEl.textContent = 0;
    }
  }
  if (score <= 0) {
    message.textContent = "😔 You lost the game";
    scoreEl.textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  scoreEl.textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
