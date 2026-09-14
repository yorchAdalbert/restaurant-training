const dish = menu[0];

const ingredientList = document.querySelector("#ingredients-list");
const ingredientDetails = document.querySelector("#ingredient-details");
const allergensList = document.querySelector("#allergens-list");
const preparationList = document.querySelector("#preparation-list");
const sellingPointsList = document.querySelector("#selling-points-list");

dish.ingredients.forEach((ingredient) => {
  const card = document.createElement("button");

  card.className = "ingredient-card";

  card.innerHTML = `
    <img src="${ingredient.icon}" alt="${ingredient.name}" />
    <p>${ingredient.name}</p>
  `;

  card.addEventListener("click", () => {
    ingredientDetails.innerHTML = `
      <h4>${ingredient.name}</h4>
      <p>${ingredient.description}</p>
    `;
  });

  ingredientList.appendChild(card);
});

dish.allergens.forEach((allergen) => {
  const badge = document.createElement("span");

  badge.className = "allergen-badge";
  badge.textContent = allergen;

  allergensList.appendChild(badge);
});

dish.preparation.forEach((step) => {
  const item = document.createElement("li");

  item.textContent = step;

  preparationList.append(item);
});

dish.sellingPoints.forEach((point) => {
  const item = document.createElement("li");

  item.textContent = point;

  sellingPointsList.appendChild(item);
});

// Quiz Section
//const quizQuestion = dish.quiz[0];

const quizContainer = document.querySelector("#quiz-container");
const quizFeedback = document.querySelector("#quiz-feedback");
const nextQuestionButton = document.querySelector("#next-question");

let answeredCorrectly = false;
let currentQuestionIndex = 0;
let score = 0;

/*const questionTitle = document.createElement("h4");
questionTitle.textContent = quizQuestion.question;
quizContainer.appendChild(questionTitle);*/

function showQuestion() {
  const quizQuestion = dish.quiz[currentQuestionIndex];

  quizContainer.innerHTML = "";
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  nextQuestionButton.hidden = true;

  const questionTitle = document.createElement("h4");

  questionTitle.textContent = quizQuestion.question;
  quizContainer.appendChild(questionTitle);

  let answeredCorrectly = false;

  quizQuestion.options.forEach((option) => {
    const button = document.createElement("button");

    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (answeredCorrectly) {
        return;
      }

      const buttons = document.querySelectorAll(".quiz-option");

      buttons.forEach((quizButton) => {
        quizButton.classList.remove("incorrect");
      });

      if (option === quizQuestion.correctAnswer) {
        answeredCorrectly = true;
        score++;

        button.classList.add("correct");

        quizFeedback.textContent = "Correct! Great job.";
        quizFeedback.className = "quiz-feedback correct";

        nextQuestionButton.hidden = false;
      } else {
        button.classList.add("incorrect");

        quizFeedback.textContent = "Incorrect. Try again.";
        quizFeedback.className = "quiz-feedback incorrect";
      }
    });

    quizContainer.appendChild(button);
  });
}

function showResults() {
  quizContainer.innerHTML = `
    <h4>Quiz Complete</h4>
    <p>
      You scored ${score} out of ${dish.quiz.length}.
    </p>
  `;

  quizFeedback.textContent = "";
  nextQuestionButton.hidden = true;
}

nextQuestionButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < dish.quiz.length) {
    showQuestion();
  } else {
    showResults();
  }
});

showQuestion();

/*quizQuestion.options.forEach((option) => {
  const button = document.createElement("button");

  button.className = "quiz-option";
  button.textContent = option;

  button.addEventListener("click", () => {
    if (answeredCorrectly) {
      return;
    }

    const buttons = document.querySelectorAll(".quiz-option");

    buttons.forEach((quizButton) => {
      quizButton.classList.remove("incorrect");
    });

    if (option === quizQuestion.correctAnswer) {
      answeredCorrectly = true;
      button.classList.add("correct");

      quizFeedback.textContent = "Correct! Great job.";
      quizFeedback.className = "quiz-feedback correct";
    } else {
      button.classList.add("incorrect");

      quizFeedback.textContent = "Incorrect. Try again.";
      quizFeedback.className = "quiz-feedback incorrect";
    }
  });

  quizContainer.appendChild(button);
});*/
