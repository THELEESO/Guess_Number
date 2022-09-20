"use strict";

let msg = document.querySelector(".message");
let guess = document.querySelector(".guess");
let score = document.querySelector(".score");
let numShow = document.querySelector(".number");
let highScore = document.querySelector(".highscore");
let background = document.querySelector("body");

let answer = Math.floor(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", () => {
  if (score.textContent === "0") {
    msg.textContent = "Sorry you lose!";
  } else {
    score.textContent = Number(score.textContent) - 1;
    if (Number(guess.value) > answer) {
      msg.textContent = "Too High!";
    } else if (Number(guess.value) < answer) {
      msg.textContent = "Too Low!";
    } else {
      msg.textContent = "BINGOOOOOOO!!!";
      numShow.textContent = answer;
      highScore.textContent =
        score.textContent > highScore.textContent
          ? score.textContent
          : highScore.textContent;
      background.classList.add("win");
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score.textContent = 20;
  background.classList.remove("win");
  msg.textContent = "Start guessing...";
  numShow.textContent = "?";
  guess.value = null;
  answer = Math.floor(Math.random() * 20 + 1);
  console.log(answer);
});
