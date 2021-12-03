const refs = {
    buttonDecrement: document.querySelector('button[data-action="decrement"]'),
    buttonIncrement: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
}

refs.buttonDecrement.addEventListener('click', onClickDecrement);
refs.buttonIncrement.addEventListener('click', onClickIncrement);

function onClickDecrement () {
    refs.counterValue.textContent = parseInt(refs.counterValue.textContent) - 1
}

function onClickIncrement () {
    refs.counterValue.textContent = parseInt(refs.counterValue.textContent) + 1
}
