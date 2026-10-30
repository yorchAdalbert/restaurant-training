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
}

menu.forEach((dish) => {
  validateDish(dish);
});