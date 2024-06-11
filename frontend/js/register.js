document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (validateForm(name, email, password, confirmPassword)) {
            console.log('Form submitted');
            // Perform form submission here
            registerForm.submit();
        }
    });

    function validateForm(name, email, password, confirmPassword) {
        if (!validateName(name)) {
            alert('Name must not be empty.');
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

    function validateName(name) {
        return name.trim() !== '';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});
