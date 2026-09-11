const dish = menu[0];

const ingredientList = document.querySelector("#ingredients-list");

dish.ingredients.forEach((ingredient) => {
  const card = document.createElement("div");

  card.className = "ingredient-card";

  card.innerHTML = `
    <img src="${ingredient.icon}" alt="${ingredient.name}" />
    <p>${ingredient.name}</p>
  `;

  ingredientList.appendChild(card);
});
