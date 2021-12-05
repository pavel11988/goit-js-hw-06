const inputWindow = document.querySelector('#validation-input');
const dataValue = document.querySelector('input[data-length]');

inputWindow.addEventListener("blur", function( event ) {
    if (inputWindow.value.length != dataValue.dataset.length) 
    {
        inputWindow.classList.remove('valid');
        inputWindow.classList.add('invalid')
    }

    else 
    {
        inputWindow.classList.remove('invalid');
        inputWindow.classList.add('valid')
    }
  })

