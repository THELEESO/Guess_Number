"use strict";

const score = document.querySelector(".score");
const scoreHigh = document.querySelector(".highscore");
const secretBlock = document.querySelector(".number");
const background = document.querySelector("body");

let answer = Math.floor(Math.random() * 20 + 1);

const hints = function (message) {
  document.querySelector(".message").textContent = message;
};

const resetGame = function () {
  score.textContent = 20;
  background.classList.remove("win");
  hints("Start guessing...");
  secretBlock.textContent = "?";
  document.querySelector(".guess").value = null;
  answer = Math.floor(Math.random() * 20 + 1);
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === 0 || guess > 20 || guess < 1) {
    hints("INVALID!!! 🤬");
  } else {
    if (guess === answer) {
      hints("BINGOOOO!!! 🥳");
      secretBlock.textContent = answer;
      scoreHigh.textContent =
        score.textContent > scoreHigh.textContent
          ? score.textContent
          : scoreHigh.textContent;
      background.classList.add("win");
    } else if (score.textContent > "1" && guess != answer) {
      score.textContent = score.textContent - 1;
      hints(guess > answer ? "Too High 👍🏻" : "Too Low! 👎🏻");
    } else {
      score.textContent = 0;
      hints("Sorry! loser! 🤣");
    }
  }
});

document.querySelector(".again").addEventListener("click", resetGame);
