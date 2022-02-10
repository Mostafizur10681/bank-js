document.getElementById('submit-login').addEventListener('click', function (e) {
    // to get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // to get password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    console.log(userEmail);
    console.log(userPassword);

    // check user email & password
    if (userEmail == 'abc@gmail.com' && userPassword == 'sourav') {
        window.location.href = 'bank.html'
    }
    else {
        console.log('invalid password');
    }
})