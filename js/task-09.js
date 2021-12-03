const widgetElement = document.querySelector('.widget');
const spanColor = document.querySelector('.color');

widgetElement.addEventListener('click', changeColor);

function changeColor ()
{
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  spanColor.textContent = getRandomHexColor();
  document.body.style.background = getRandomHexColor();
}

