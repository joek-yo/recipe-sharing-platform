document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (validateForm(username, email, password, confirmPassword)) {
            
            console.log('Form submitted');
            registerForm.submit();
        }
    });

    function validateForm(username, email, password, confirmPassword) {
        if (!validateUsername(username)) {
            alert('Username must be at least 3 characters long.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return false;
        }
        if (!validatePassword(password)) {
            alert('Password must be at least 6 characters long.');
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }
        return true;
    }

    function validateUsername(username) {
        return username.length >= 3;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});
