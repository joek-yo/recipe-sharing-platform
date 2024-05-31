// Import the express libraries
const express = require('express');

// Import controller functions from the recipeController file
const { createRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

// Import the isAuthenticated middleware from the authMiddleware file
const { isAuthenticated } = require('../middlware/authMiddleware');

// Create a router object
const router = express.Router();

// Define the route for creating a new recipe with authentication
router.post('/create', isAuthenticated, createRecipe);

// Define a route for getting all recipes
router.get('/', getRecipes);

// Define the route for getting a single recipe ID
router.get('/:id', getRecipe);

// Define the route for updating a recipe by ID with authentication
router.put('/:id', isAuthenticated, updateRecipe);

// Define the route for deleting a recipe by ID with authentication
router.delete('/:id', isAuthenticated, deleteRecipe);

// Export the router object
module.exports = router;