const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault(); //no-reload

    if(event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '')
    {
        alert('Все поля должны быть заполнены!');
    }

    else {
        let userObject = new Object();
        userObject.email = event.currentTarget.elements.email.value;
        userObject.password = event.currentTarget.elements.password.value;
        console.log(userObject);
        form.reset();
    }
    
}