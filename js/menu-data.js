const menu = [
  {
    id: "tuna-spicy-toast",
    name: "Tuna Spicy Toast",
    category: "Appetizer",
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
];
