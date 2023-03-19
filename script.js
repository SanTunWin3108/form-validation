const form = document.querySelector('.form');
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Check inputs
    checkInputs();
});

const checkInputs = () => {
    //Input values
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    //Username
    if(usernameValue === '') {
        setError(username, 'Username cannot be blank');
    } else {
        setSuccess(username);
    }

    //Email
    if(emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }

    //Password
    if(passwordValue === '') {
        setError(password, 'Password cannot be blank');
    } else {
        setSuccess(password);
    }

    //Password2
    if(password2Value === '') {
        setError(password2, 'Password cannot be blank');
    } else if(passwordValue !== password2Value) {
        setError(password2, 'Passwords do not match');
    } else {
        setSuccess(password2);
    }
}

//Error
const setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

//Success
const setSuccess = (input) => {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}


//Validate Email
const isValidEmail = (emailValue) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
}