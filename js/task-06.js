const inputWindow = document.querySelector('#validation-input');

// inputWindow.addEventListener('blur', onInputBlur);

// function onInputBlur () {
//     console.log('!');
// }
// console.log(inputWindow.setAttribute('data-length', 4), parseInt(inputWindow.getAttribute('data-length')));


inputWindow.addEventListener("blur", function( event ) {
    if (inputWindow.value.length != 6) 
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

