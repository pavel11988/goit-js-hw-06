const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
let arrIngredients = [];

ingredients.map(element => {
  const item = document.createElement("li");
  item.textContent = element;
  arrIngredients.push(item);
})

list.append(...arrIngredients);

