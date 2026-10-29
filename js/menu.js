const menuCategories = document.querySelector("#menu-categories");
const categoryNavigation = document.querySelector("#category-navigation");

const menus = menu.map((dish) => {
  return dish.menu;
});

const uniqueMenus = [...new Set(menus)];

uniqueMenus.forEach((menuName) => {
  const link = document.createElement("a");

  link.className = "category-link";
  link.textContent = menuName;
  link.href = `#${createSlug(menuName)}`;

  const dishesInMenu = menu.filter((dish) => { return dish.menu === menuName });

  const categoriesInMenu = dishesInMenu.map((dish) => { return dish.category });
  const uniqueCategoriesInMenu = [...new Set(categoriesInMenu)];

  const menuSection = document.createElement("section");
  menuSection.className = "menu-section";
  menuSection.id = createSlug(menuName);

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = menuName;

  menuSection.appendChild(menuTitle);

  const subcategoryNavigation = document.createElement("nav");
  subcategoryNavigation.className = "subcategory-navigation";

  menuSection.appendChild(subcategoryNavigation);

  uniqueCategoriesInMenu.forEach((category) => {
    const categorySection = document.createElement("section");
    categorySection.className = "menu-category";

    const categoryId = `${createSlug(menuName)}-${createSlug(category)}`;
    categorySection.id = categoryId;

    const categoryLink = document.createElement("a");
    categoryLink.className = "subcategory-link";
    categoryLink.textContent = category;
    categoryLink.href = `#${categoryId}`;

    subcategoryNavigation.appendChild(categoryLink);

    //const categoryTitle = document.createElement("h3");
    //categoryTitle.textContent = category;

    const dishesInCategory = dishesInMenu.filter((dish) => { return dish.category === category });

    const categoryGrid = document.createElement("div");
    categoryGrid.className = "menu-grid";

    dishesInCategory.forEach((dish) => {
      const dishCard = createDishCard(dish);
      
      categoryGrid.appendChild(dishCard);
    });

    //categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryGrid);

    menuSection.appendChild(categorySection);
  })

  menuCategories.appendChild(menuSection);
  categoryNavigation.appendChild(link);

  link.addEventListener("click", () => {
    const links = categoryNavigation.querySelectorAll(".category-link");

    links.forEach((menuLink) => {
      menuLink.classList.remove("active");
    })

    link.classList.add("active");
  })
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
