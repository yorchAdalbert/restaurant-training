const dishList = document.querySelector("#dish-list");

menu.forEach((dish) => {
  const card = document.createElement("button");

  card.className = "dish-card";

  card.innerHTML = `
    <h3>${dish.name}</h3>
    <p>${dish.category}</p>
  `;

  card.addEventListener("click", () => {
    console.log(`Opening training for: ${dish.name}`);
  });

  dishList.appendChild(card);
});