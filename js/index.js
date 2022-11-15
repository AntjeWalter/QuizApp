const answers = document.querySelectorAll('[data-js="quizcard-answer"]');
const answerButtons = document.querySelectorAll(
  '[data-js="quizcard-answer-button"]'
);
const quizcard = document.querySelector('[data-js="quizcard"]');
const button = document.querySelector('[data-js="buttonDarkMode"]');
const darkmode = document.querySelector('[data-js="bodyDarkMode"]');
const bookmark = quizcard.querySelector('[data-js="bookmark-button"]');
const bookmarkicon = quizcard.querySelector('[data-js="bookmark-icon"]');
const bookmarkiconFilled = quizcard.querySelector(
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

bookmark.addEventListener("click", () => {
  bookmarkicon.classList.toggle("hidden");
  bookmarkiconFilled.classList.toggle("hidden");
});
