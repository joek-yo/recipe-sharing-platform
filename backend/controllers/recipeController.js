// Import the Recipe model
const Recipe = require('../models/Recipe');

// Create a new recipe
const createRecipe = async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    try {
        const recipe = new recipe({ title, ingredients, instructions, createdBy: req.user.id});
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipes.find().populate('createdBy', 'username');
        res.json(recipes);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get a single recipe by ID
const getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id).populate('createdBy', 'username');
        if (!recipe) throw new Error('Recipe not found');
        res.json(recipe);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Update a recipe by ID
const updateRecipe = async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) throw new Error('Recipe not found');

        recipe.title = title || recipe.title;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.instructions = instructions || recipe.instructions;

        await recipe.save();
        res.json(recipe);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Delete a recipe by ID
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) throw new Error('Recipe not found');
        await recipe.remove();
        res.json({ message: 'Recipe deleted successfully'});
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Export the controller functions
module.exports = { createRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe };