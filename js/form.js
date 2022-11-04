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
