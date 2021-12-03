const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output')
}

refs.inputName.addEventListener('input', onChangeName);

function onChangeName(event) {
    event.currentTarget.value === '' ? 
    refs.outputName.textContent = 'Anonymous' :
    refs.outputName.textContent = event.currentTarget.value; 
}
