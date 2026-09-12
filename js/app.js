const dish = menu[0];

const ingredientList = document.querySelector("#ingredients-list");
const ingredientDetails = document.querySelector("#ingredient-details");

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
