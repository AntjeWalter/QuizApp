const answer = document.querySelector('[data-js="quizcard-answer"]');
const answerButton = document.querySelector(
  '[data-js="quizcard-answer-button"]'
);

answerButton.addEventListener("click", () => {
  answer.classList.toggle("revealAnswer");
});
