const inputWindow = document.querySelector('#validation-input');
const dataValue = document.querySelector('input[data-length]');

inputWindow.addEventListener("blur", function( event ) {
    inputWindow.value.length != dataValue.dataset.length ?
    inputWindow.className = 'invalid' :
    inputWindow.className = 'valid';
})

