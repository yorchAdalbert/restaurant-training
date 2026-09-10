const dish = menu[0];

const ingredientList = document.querySelector("#ingredient-list");

dish.ingredients.forEach((ingredient) => {
  console.log(ingredient.name);
});