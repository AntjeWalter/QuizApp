const button = document.querySelector('[data-js="submit-button"]');
const question = document.querySelector('[data-js="newCard"]');
const answer = document.querySelector('[data-js="newAnswer"]');
const tags = document.querySelector('[data-js="tags"]');

button.addEventListener("click", (event) => {
  event.preventDefault();
  const newQuestion = question.value;
  const newAnswer = answer.value;
  const newTags = tags.value;

  console.log(newQuestion, newAnswer, newTags);

  const card = document.createElement("section");
  card.classList.add("quizcard");
  document.body.append(card);

  const question2 = document.createElement("p");
  question2.textContent = newQuestion;
  question2.classList.add("quizcard__question");
  card.append(question2);

  const revealButton = document.createElement("button");
  revealButton.textContent = `Show Answer`;
  revealButton.classList.add("quizcard__answerButton");
  card.append(revealButton);

  const answer2 = document.createElement("p");
  answer2.textContent = newAnswer;
  answer2.classList.add("quizcard__answer-open");
  card.append(answer2);

  const tags2 = document.createElement("li");
  tags2.textContent = newTags;
  tags2.classList.add("quizcard__tag-item");
  tags2.classList.add("quizcard__tags");
  card.append(tags2);
});

//Characters left:

const counter_question = document.querySelector('[data-js="counter_question"]');
const textArea = document.querySelector('[data-js="newCard"]');
const maxOfNumChars = textArea.getAttribute("maxlength");
const counter_answer = document.querySelector('[data-js="counter_answer"]');
const textAreaAnswer = document.querySelector('[data-js="newAnswer"]');

const updateAmountLeft = (value) => {
  counter_question.innerText = value;
};

const updateAmountLeftAnswer = (value) => {
  counter_answer.innerText = value;
};

updateAmountLeft(maxOfNumChars);
updateAmountLeftAnswer(maxOfNumChars);

textArea.addEventListener("input", () => {
  updateAmountLeft(maxOfNumChars - textArea.value.length);
  console.log(updateAmountLeft);
});

textAreaAnswer.addEventListener("inout", () => {
  updateAmountLeftAnswer(maxOfNumChars - textAreaAnswer.value.length);
  console.log(updateAmountLeftAnswer);
});

/*const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  textAreaAnswer.innerText = numOfEnteredChars;
  let counter_answer = Number(maxOfNumChars) - Number(numOfEnteredChars);
  counter_answer.textContent = counter_question;
};*/
