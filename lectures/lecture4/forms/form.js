const createAccountForm = document.forms.create_account;
const loginForm = document.forms.login;

Array.from(createAccountForm).forEach((element) => {
    element.addEventListener('change', () => {
        localStorage.setItem(element.name, element.value);
    });

    element.value = localStorage.getItem(element.name);
});

const validatePassword = (username, password) => {
    return true;
}
 
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
 
    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    if (username === '' || password === '') {
        alert('Please enter a username and password');
    } else if (!validatePassword(username, password)) {
        alert('Incorrect username or password');
    } else {
        alert('Login successful');
    }
});

createAccountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (createAccountForm.username.value === ''
        || createAccountForm.password1.value === ''
        || createAccountForm.password2.value === ''
        || createAccountForm.dob.value === '') {
        alert('Please fill all fields');
    } else if (createAccountForm.password1.value !== createAccountForm.password2.value) {
        alert('Passwords dont match');
    } else {
        alert('Success!');
    }
});
