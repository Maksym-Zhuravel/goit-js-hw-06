const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulItem = document.querySelector("#ingredients");
console.log(ulItem);

ingredients.forEach((ingredient) => {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.textContent = `${ingredient}`;
  ulItem.append(liItem);
});
