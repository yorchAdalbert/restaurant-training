const menuGrid = document.querySelector("#menu-grid");

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

  menuGrid.appendChild(card);
});
