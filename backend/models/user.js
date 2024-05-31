// Importing Mongoose and bcrypt libraries
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for the user model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Pre-save hook to hash the password before saving a user
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }

    next();
});

// Export the user model based on the schema
module.exports = mongoose.model('User', userSchema);