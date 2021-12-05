const newDiv = `<div class='newDiv'></div>`;

const refs = {
  inputCount: document.querySelector('#controls > input'),
  buttonCreate:document.querySelector('button[data-create]'), 
  buttonDestroy:document.querySelector('button[data-destroy]'),
  divBox: document.querySelector('#boxes'),
}


console.log(refs.inputCount.value);


refs.inputCount.addEventListener('input', onInputCount);
refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

function onInputCount (event) {
  if (refs.inputCount.value > 100) {refs.inputCount.value = 100};
  if (refs.inputCount.value <= 0)  {refs.inputCount.value = 1}
}


function createBoxes (event) {
  let prevSize = 30;
  
    for (let i = 0; i < refs.inputCount.value; i += 1){
   
        refs.divBox.insertAdjacentHTML('beforeend', newDiv);
        refs.divBox.lastElementChild.style.backgroundColor = getRandomHexColor();
        
        if (refs.divBox.children.length === 1)
        {
            refs.divBox.lastElementChild.style.width = `${prevSize}px`;
            refs.divBox.lastElementChild.style.height = `${prevSize}px`;
        } 
        else {
            refs.divBox.lastElementChild.style.width = `${prevSize + 10}px`;
            refs.divBox.lastElementChild.style.height = `${prevSize + 10}px`;
            prevSize += 10
        }
    }
}


function destroyBoxes (event) {
    refs.divBox.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
