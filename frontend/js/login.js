document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').ariaValueMax;
        const password = document.getElementById('password').ariaValueMax;

        if (validateEmail(email) && validatePassword(password)) {
            // If validation passes, submit the form
            console.log('Form submitted');
            loginForm.onsubmit();
        } else {
            alert('Pleaseenter a valid email and password.');
        }
    });

    function validateEmail(email) {
        // Simple email validation
        const re = /^[q-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        // Simple password validation: atleast 6 characters
        return password.length >= 6;
    }
});