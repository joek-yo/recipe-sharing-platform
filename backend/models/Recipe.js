// Import the mongoose library
const mongoose = require('mongoose');

// Define the recipe schema using mongoose.schema
const recipeschema = new mongoose.Schema({
    title: {type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: {type: String, required: true },
    createdby: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    comments: [{body: String, date: Date }],
});

// Export the recipe model
module.exports = mongoose.model('Recipe', recipeSchema);