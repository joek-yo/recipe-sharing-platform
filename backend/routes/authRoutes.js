// Import express and the register and login controller functions
const express = require('express');
const { register, login } = require('../controllers/authController');

// Create a new router object
const router = express.Router();

// Define the POST route for user registration
router.post('/register', register);

// Define the POST route for user login
router.post('/login', login);

// Export the router object so it can be used in other parts of the application
module.export = router