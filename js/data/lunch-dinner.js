export const lunchDinnerMenu = [
      {
    id: "french-toast",
    name: "French Toast",
    menu: "Lunch & dinner",
    category: "Desserts",
    image: "images/dishes/french-toast.webp",
    description: "A temporary training module used to test multiple dishes.",

    ingredients: [
      {
        name: "Bread",
        icon: "icons/ingredients/sourdough-batard.png",
        description: "Temporary ingredient used for testing.",
      },
    ],

    allergens: ["Gluten", "Egg", "Dairy"],

    preparation: [
      "Prepare the bread.",
      "Cook the French toast.",
      "Plate and finish the dish.",
    ],

    sellingPoints: [
      "Sweet breakfast option.",
      "Soft interior with a toasted exterior.",
    ],

    quiz: [
      {
        question: "Which category does this dish belong to?",
        options: ["Breakfast", "Beverage", "Salad", "Dinner"],
        correctAnswer: "Breakfast",
      },
    ],
  },
];