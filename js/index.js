const answer = document.querySelector('[data-js="quizcard-answer"]');
const answerButton = document.querySelector(
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

answerButton.addEventListener("click", () => {
  answer.classList.toggle("quizcard__answer-hide");
});

button.addEventListener("click", () => {
  darkmode.classList.toggle("dark-mode");
});

bookmark.addEventListener("click", () => {
  bookmarkicon.classList.toggle("hidden");
  bookmarkiconFilled.classList.toggle("hidden");
});
