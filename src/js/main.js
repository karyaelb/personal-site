import confetti from "canvas-confetti";
import Typed from "typed.js";

// confetti
const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;
document.body.append(myCanvas);
const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {
  console.log("Confetti");
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 200,
  });
});

// typedjs
const typed = new Typed("#typedJs", {
  strings: [
    "I'm a student",
    "at Bootcamp Devscale Indonesia",
    "as a Fullstack Web JavaScript Developer.",
  ],
  typeSpeed: 35,
  loop: true,
  backDelay: 1000,
  cursorChar: "_",
});
