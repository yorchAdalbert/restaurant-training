const menu = [
  {
    id: "tuna-spicy-toast",
    name: "Tuna Spicy Toast",
    menu: "Brunch",
    category: "Toasts",
    image: "images/dishes/tuna-spicy-toast.webp",
    description:
      "Crispy toast topped with fresh tuna, chipotle mayo, avocado and house ingredients.",

    ingredients: [
      {
        name: "Sourdough Batard Bread",
        icon: "icons/ingredients/sourdough-batard.png",
        description: "A slice of sourdough batard bread.",
      },
      {
        name: "Fresh Tuna",
        icon: "icons/ingredients/fresh-tuna.png",
        description: "Fresh tuna used as the main ingredient of the dish.",
      },
      {
        name: "Chipotle Mayo",
        icon: "icons/ingredients/chipotle-mayo.png",
        description: "Creamy mayonnaise flavored with chipotle.",
      },
      {
        name: "Sriracha Sauce",
        icon: "icons/ingredients/sriracha.png",
        description: "Chili sauce that adds heat to the dish.",
      },
      {
        name: "Diced Avocado",
        icon: "icons/ingredients/avocado.png",
        description: "Fresh avocado cut into cubes.",
      },
      {
        name: "Persian Cucumber",
        icon: "icons/ingredients/persian-cucumber.png",
        description: "Persian cucumber that adds freshness and crunch.",
      },
      {
        name: "Green Onion",
        icon: "icons/ingredients/green-onion.png",
        description: "Fresh green onion used to add a mild onion flavor.",
      },
      {
        name: "Cilantro",
        icon: "icons/ingredients/cilantro.png",
        description: "Fresh cilantro used as an aromatic herb.",
      },
    ],

    allergens: ["Fish", "Egg", "Gluten"],

    preparation: [
      "Toast the slice of sourdough batard bread.",
      "Prepare the fresh tuna mixture.",
      "Spread chipotle mayo over the toasted bread.",
      "Add the tuna mixture on top.",
      "Finish with diced avocado, Persian cucumber, green onion, cilantro and sriracha sauce.",
    ],

    sellingPoints: [
      "Made with fresh tuna.",
      "Balanced combination of creamy, spicy and fresh flavors.",
      "Crunchy sourdough toast adds texture.",
      "Fresh avocado and cucumber help balance the heat.",
    ],

    quiz: [
      {
        question:
          "Which ingredient gives the Tuna Spicy Toast its smoky flavor?",
        options: ["Sriracha Sauce", "Chipotle Mayo", "Cilantro", "Avocado"],
        correctAnswer: "Chipotle Mayo",
      },
      {
        question: "Which ingredient adds freshness and crunch?",
        options: [
          "Persian Cucumber",
          "Fresh Tuna",
          "Chipotle Mayo",
          "Sourdough Batard Bread",
        ],
        correctAnswer: "Persian Cucumber",
      },
      {
        question: "What is the main protein in the dish?",
        options: ["Avocado", "Fresh Tuna", "Cilantro", "Green Onion"],
        correctAnswer: "Fresh Tuna",
      },
    ],
  },

  {
    id: "toast-de-burrata",
    name: "Toast de Burrata",
    menu: "Brunch",
    category: "Toasts",

    image: "images/dishes/toast-de-burrata.webp",

    description:
      "Sourdough toast with burrata, ricotta, " +
      "grilled peaches, guava and Serrano ham.",

    ingredients: [
      {
        name: "Sourdough Bread",
        description: "House-made sourdough batard.",
      },
      {
        name: "Ricotta Cheese",
        description: "Soft, fresh cheese.",
      },
      {
        name: "Burrata",
        description: "Fresh cheese with a creamy center.",
      },
      {
        name: "Guava Paste",
        description: "",
      },
      {
        name: "Grilled Peaches",
        description: "Served in syrup.",
      },
      {
        name: "Candied Orange",
        description: "",
      },
      {
        name: "Serrano Ham",
        description: "30 grams.",
      },
      {
        name: "Basil",
        description: "",
      },
    ],

    allergens: [],
    preparation: [],
    sellingPoints: [],
    quiz: [],
  },

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

function validateDish(dish) {
  const requiredProperties = [
    "id",
    "name",
    "menu",
    "category"
  ];

  const arrayProperties = [
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