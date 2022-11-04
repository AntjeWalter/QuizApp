const answer = document.querySelector('[data-js="quizcard-answer"]');
const answerButton = document.querySelector(
  '[data-js="quizcard-answer-button"]'
);
const button = document.querySelector('[data-js="buttonDarkMode"');
const darkmode = document.querySelector('[data-js="bodyDarkMode"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("revealAnswer");
});

button.addEventListener("click", () => {
  darkmode.classList.toggle("dark-mode");
});
