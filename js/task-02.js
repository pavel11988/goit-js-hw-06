const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

ingredients.map(element => {
  const item = document.createElement("li");
  item.textContent = element;
  list.append(item);
})

