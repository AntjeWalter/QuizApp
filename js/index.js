const answers = document.querySelectorAll('[data-js="quizcard-answer"]');
const answerButtons = document.querySelectorAll(
  '[data-js="quizcard-answer-button"]'
);
const quizcard = document.querySelector('[data-js="quizcard"]');
const button = document.querySelector('[data-js="buttonDarkMode"]');
const darkmode = document.querySelector('[data-js="bodyDarkMode"]');
const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);
const bookmarkicon = document.querySelectorAll('[data-js="bookmark-icon"]');
const bookmarkiconFilled = document.querySelectorAll(
  '[data-js="bookmark-icon-filled"]'
);

answerButtons.forEach((answerButton, index) => {
  answerButton.addEventListener("click", () => {
    answers[index].classList.toggle("revealAnswer");
  });
});

button.addEventListener("click", () => {
  darkmode.classList.toggle("dark-mode");
});

bookmarkButtons.forEach((bookmarkButton, index) => {
  bookmarkButton.addEventListener("click", () => {
    bookmarkicon[index].classList.toggle("hidden");
    bookmarkiconFilled[index].classList.toggle("hidden");
  });
});
