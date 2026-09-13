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
})

dish.sellingPoints.forEach((point) => {
  const item = document.createElement("li");

  item.textContent = point;

  sellingPointsList.appendChild(item);
})