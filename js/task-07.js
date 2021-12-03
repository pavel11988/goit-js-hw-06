const refs = {
  inputRange: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text')
}
refs.inputRange.addEventListener('input', onInputRange);

function onInputRange (event) {
  const rangeValue = refs.inputRange.value;
  refs.spanText.style.fontSize = `${rangeValue}px`;
}



