// const newDiv = `<div>DIVVV</div>`;

// const refs = {
//   inputCount: document.querySelector('#controls > input'),
//   buttonCreate:document.querySelector('button[data-create]'), 
//   buttonDestroy:document.querySelector('button[data-destroy]'),
//   divBox: document.querySelector('#boxes'),
//   counter: 0,
// }


// console.log(refs.inputCount.value);


// refs.inputCount.addEventListener('input', onInputCount);
// refs.inputCount.addEventListener('blur', onDivToCreate);
// refs.buttonCreate.addEventListener('click', onCreateDivs);

// function onInputCount (event) {
//   if (refs.inputCount.value > 100) {refs.inputCount.value = 100};
//   if (refs.inputCount.value <= 0)  {refs.inputCount.value = 1}
//   // console.log(refs.inputCount.value);
// }

// function onDivToCreate (event) {
//   newDiv =
// }

// function onCreateDivs (event) {
//   const prevSize = 30;
//   const arr = Array(Number(refs.inputCount.value)).fill(newDiv);
//   refs.divBox.innerHTML = '';
//   refs.divBox.insertAdjacentHTML('beforeend', arr.join(''));
// }


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
