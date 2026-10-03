const menuCategories = document.querySelector("#menu-categories");

menu.forEach((dish) => {
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

  //menuGrid.appendChild(card);
});

const categories =
  menu.map((dish) => {
    return dish.category;
  });

  const uniqueCategories = [...new Set(categories)];

uniqueCategories.forEach((category) => {
  const dishesInCategory = menu.filter((dish) => {
    return dish.category === category;
  });

  const categorySection = document.createElement("section");
  const categoryTitle = document.createElement("h2");
  const categoryGrid = document.createElement("div");

  categorySection.className = "menu-category";
  categoryGrid.className = "menu-grid";

  categoryTitle.textContent = category;

  categorySection.appendChild(categoryTitle);
  categorySection.appendChild(categoryGrid);

  menuCategories.appendChild(categorySection);
});