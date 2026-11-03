import { menu } from "./menu-data.js";

function validateDish(dish) {
  const requiredProperties = [
    "id",
    "name",
    "menu",
    "category",
    "ingredients",
    "allergens",
    "preparation",
    "sellingPoints",
    "quiz"
  ];

  requiredProperties.forEach((property) => {
    if (!(property in dish)) {
      console.warn(
        `Missing property "${property}" in ${dish.name || dish.id || "unknown dish"}`
      );
    }
  });

  const arrayProperties = [
    "ingredients",
    "allergens",
    "preparation",
    "sellingPoints",
    "quiz"
  ];

  arrayProperties.forEach((property) => {
    if (property in dish && !Array.isArray(dish[property])) {
      console.warn(
        `Invalid data type for "${property}" in ${dish.name || dish.id || "unknown dish"}. Expected an array.`
      );
    }
  });

  const stringProperties = [
    "id", 
    "name", 
    "menu", 
    "category"
  ];

  stringProperties.forEach((property) => {
    if (property in dish && !isValidString(dish[property])) {
      console.warn(
        `Invalid string for "${property}" in ${dish.id || "unknown dish"}`
      );
    }
  })

  if (Array.isArray(dish.ingredients)) {
    dish.ingredients.forEach((ingredients) => {
      validateIngredient(ingredients, dish.name);
    });
  }
}

function isValidString(value) {
  return (
    typeof value === "string" &&
    value.trim().length > 0
  );
}

function validateUniqueIds(menu) {
  const ids = new Set();

  menu.forEach((dish) => {
    if (ids.has(dish.id)) {
      console.warn(
        `Duplicate dish ID detected: ${dish.id}`
      );
    } else {
      ids.add(dish.id);
    }
  });
}

function validateIngredient(ingredient, dishName) {
  if (
    typeof ingredient !== "object" ||
    ingredient === null ||
    Array.isArray(ingredient)
  ) {
    console.warn(
      `Invalid ingredient object in ${dishName}`
    );
    return;
  }

  if (!isValidString(ingredient.name)) {
    console.warn(
      `Invalid ingredient name in ${dishName}`
    );
  }
}

menu.forEach((dish) => {
  validateDish(dish);
});

validateUniqueIds(menu);