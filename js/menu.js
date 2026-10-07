const menuCategories = document.querySelector("#menu-categories");
const categoryNavigation = document.querySelector("#category-navigation");

const menus = menu.map((dish) => {
  return dish.menu;
});

const uniqueMenus = [...new Set(menus)];

uniqueMenus.forEach((menuName) => {
  const dishesInMenu = menu.filter((dish) => { return dish.menu === menuName });

  const categoriesInMenu = dishesInMenu.map((dish) => { return dish.category });
  const uniqueCategoriesInMenu = [...new Set(categoriesInMenu)];

  const menuSection = document.createElement("section");
  menuSection.className = "menu-section";

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = menuName;
  console.log(menuName);

  menuSection.appendChild(menuTitle);

  uniqueCategoriesInMenu.forEach((category) => {
    const categorySection = document.createElement("section");
    categorySection.className = "menu-category";

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category;

    const dishesInCategory = dishesInMenu.filter((dish) => { return dish.category === category });

    const categoryGrid = document.createElement("div");
    categoryGrid.className = "menu-grid";

    dishesInCategory.forEach((dish) => {
      const dishCard = createDishCard(dish);
      
      categoryGrid.appendChild(dishCard);
    });

    categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryGrid);

    menuSection.appendChild(categorySection);
  })

  menuCategories.appendChild(menuSection);

  //console.log(menuName);
  //console.log(dishesInMenu);
});

const categories = menu.map((dish) => {
  return dish.category;
});

const uniqueCategories = [...new Set(categories)];

uniqueCategories.forEach((category) => {
  const link = document.createElement("a");

  link.className = "category-link";
  link.textContent = category;
  link.href = `#${createSlug(category)}`;

  categoryNavigation.appendChild(link);
});

uniqueCategories.forEach((category) => {
  const dishesInCategory = menu.filter((dish) => {
    return dish.category === category;
  });

  const categorySection = document.createElement("section");
  const categoryTitle = document.createElement("h2");
  const categoryGrid = document.createElement("div");

  categorySection.className = "menu-category";
  categorySection.id = createSlug(category);
  categoryGrid.className = "menu-grid";

  categoryTitle.textContent = category;

  /*dishesInCategory.forEach((dish) => {
    const card = createDishCard(dish);

    categoryGrid.appendChild(card);
  });*/

 // categorySection.appendChild(categoryTitle);
  categorySection.appendChild(categoryGrid);

  menuCategories.appendChild(categorySection);
});

// CUSTOM FUNCTIONS

function createDishCard(dish) {
  const card = document.createElement("a");

  card.className = "menu-card";
  card.href = `dish.html?dish=${dish.id}`;

  card.innerHTML = `
    <img
      src="${dish.image}"
      alt="${dish.name}"
    />

    <div class="menu-card-info">
      <p class="eyebrow">
        ${dish.category}
      </p>

      <h2>${dish.name}</h2>

      <p>${dish.description}</p>
    </div>
  `;

  return card;
}

function createSlug(text) {
  return text.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-");
}
