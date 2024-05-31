// Import the user model and the jsonwebtoken library
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register function to handle user registration
const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Create a new user instance
        const user = new User({ username, email, password });
        // Save the user to the database
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Login function to handle user login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Finder the user by email
        const user = await User.findOne({ email });

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'secret', { expresIn: '1h' });
        res.json({ token });
    } catch(error) {
        res.status(400).send(error.message);
    }
};

// Export the controller functions
module.exports = { register, login };