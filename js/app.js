const dish = menu[0];

const ingredientList = document.querySelector("#ingredients-list");
const ingredientDetails = document.querySelector("#ingredient-details");
const allergensList = document.querySelector("#allergens-list");
const preparationList = document.querySelector("#preparation-list");
const sellingPointsList = document.querySelector("#selling-points-list");

const quizContainer = document.querySelector("#quiz-container");
const quizFeedback = document.querySelector("#quiz-feedback");
const nextQuestionButton = document.querySelector("#next-question");

let answeredCorrectly = false;
let currentQuestionIndex = 0;
let score = 0;

renderIngredients();
renderAllergens();
renderPreparation();
renderSellingPoints();
showQuestion();

nextQuestionButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < dish.quiz.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// Functions

function renderIngredients() {
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
}

function renderAllergens() {
  dish.allergens.forEach((allergen) => {
    const badge = document.createElement("span");

    badge.className = "allergen-badge";
    badge.textContent = allergen;

    allergensList.appendChild(badge);
  });
}

function renderPreparation() {
  dish.preparation.forEach((step) => {
    const item = document.createElement("li");

    item.textContent = step;

    preparationList.append(item);
  });
}

function renderSellingPoints() {
  dish.sellingPoints.forEach((point) => {
    const item = document.createElement("li");

    item.textContent = point;

    sellingPointsList.appendChild(item);
  });
}

function showQuestion() {
  const quizQuestion = dish.quiz[currentQuestionIndex];

  quizContainer.innerHTML = "";
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  nextQuestionButton.hidden = true;

  const questionTitle = document.createElement("h4");

  questionTitle.textContent = quizQuestion.question;
  quizContainer.appendChild(questionTitle);

  let answered = false;

  quizQuestion.options.forEach((option) => {
    const button = document.createElement("button");

    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (answered) {
        return;
      }

      answered = true;

      const buttons = quizContainer.querySelectorAll(".quiz-option");

      buttons.forEach((quizButton) => {
        quizButton.disabled = true;
      });

      if (option === quizQuestion.correctAnswer) {
        score++;

        button.classList.add("correct");

        quizFeedback.textContent = "Correct! Great job.";
        quizFeedback.className = "quiz-feedback correct";

        nextQuestionButton.hidden = false;
      } else {
        button.classList.add("incorrect");

        buttons.forEach((quizButton) => {
          if (quizButton.textContent === quizQuestion.correctAnswer) {
            quizButton.classList.add("correct");
          }
        });

        quizFeedback.textContent = `Incorrect. The correct answer is ${quizQuestion.correctAnswer}`;
        quizFeedback.className = "quiz-feedback incorrect";
      }
    });

    quizContainer.appendChild(button);
    nextQuestionButton.hidden = false;
  });
}

function showResults() {
  const percentage = Math.round((score / dish.quiz.length) * 100);

  const passingScore = 80;

  const passed = percentage >= passingScore;

  const resultMessage = passed
    ? "Assessment passed!"
    : "Assessment not passed. Review the dish and try again.";

  //quizProgress.textContent = "Quiz complete";

  quizContainer.innerHTML = `
    <h4>Your Results</h4>

    <p>
      You scored ${score} out of ${dish.quiz.length}.
    </p>

    <p class="quiz-percentage">
      ${percentage}%
    </p>

    <p class="quiz-result-message">
      ${resultMessage}
    </p>
  `;

  quizFeedback.textContent = "";

  nextQuestionButton.hidden = true;
  //restartQuizButton.hidden = false;
}
