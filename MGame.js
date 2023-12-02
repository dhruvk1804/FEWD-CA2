import Ball from "./MBall.js";
import Paddle from "./Paddle.js";

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const playerPaddle2 = new Paddle(document.getElementById("player-paddle-2")); 
const playerScoreElem = document.getElementById("player-score");
const playerScoreElem2 = document.getElementById("player-score-2");

window.onload = function () {
  document.getElementById("song").play();
};

let lastTime;

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta, [playerPaddle.rect(), playerPaddle2.rect()]); 

    playerPaddle.update(delta, null);
    playerPaddle2.update(delta, null);

    if (isLose()) handleLose();
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

function isLose() {
  const rect = ball.rect();
  return rect.right >= window.innerWidth || rect.left <= 0;
}

function handleLose() {
  const rect = ball.rect();
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1;
  } else {
    playerScoreElem2.textContent = parseInt(playerScoreElem2.textContent) + 1; 
  }

  ball.reset();
  playerPaddle.reset();
  playerPaddle2.reset();
}

document.addEventListener("mousemove", (e) => {
  playerPaddle.position = (e.y / window.innerHeight) * 100;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    playerPaddle2.position = Math.max(playerPaddle2.position - 5, 0);
  } else if (e.key === "ArrowDown") {
    playerPaddle2.position = Math.min(playerPaddle2.position + 5, 100);
  }
});

window.requestAnimationFrame(update);