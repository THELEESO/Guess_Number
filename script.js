"use strict";

const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const secretNumber = document.querySelector(".number");
const highScore = document.querySelector(".highscore");
const background = document.querySelector("body");

let answer = Math.floor(Math.random() * 20 + 1);

const hints = function (message) {
  document.querySelector(".message").textContent = message;
};

const resetGame = function () {
  score.textContent = 20;
  background.classList.remove("win");
  hints("Start guessing...");
  secretNumber.textContent = "?";
  guess.value = null;
  answer = Math.floor(Math.random() * 20 + 1);
};

document.querySelector(".check").addEventListener("click", () => {
  if (
    guess.value === "" ||
    isNaN(Number(guess.value)) ||
    Number(guess.value) > 20 ||
    Number(guess.value) < 1
  ) {
    hints("INVALID!!! 🤬");
  } else {
    if (score.textContent === "0") {
      hints("Sorry! loser! 🤣");
    } else {
      score.textContent = Number(score.textContent) - 1;
      if (Number(guess.value) > answer) {
        hints("Too High 👍🏻");
      } else if (Number(guess.value) < answer) {
        hints("Too Low! 👎🏻");
      } else {
        hints("BINGOOOO!!! 🥳");
        secretNumber.textContent = answer;
        highScore.textContent =
          score.textContent > highScore.textContent
            ? score.textContent
            : highScore.textContent;
        background.classList.add("win");
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  resetGame();
});
