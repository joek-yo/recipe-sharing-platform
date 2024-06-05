document.addEventListener('DOMCoontentLoaded', () => {
    const recipe = {
        title: 'Recipe Title',
        description: 'Detailed description of the recipe. This can include information about the dish, its origin, and what makes if special',
        image: 'images/recipe1.jpg',
        ingredients: [
            'Ingredient 1',
            'Ingredient 1',
            'Ingredient 1'
        ],
        steps: [
            'step 1: Detailed explanation of the first step.',
            'step 1: Detailed explanation of the first step.',
            'step 1: Detailed explanation of the first step.'
        ]
    };

    // Populate the page with recipe data
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-description').textContent = recipe.description;
    document.getElementById('recipe-image').textContent = recipe.image;

    const ingredientsList = document.getElementById('recipe-ingredients');
    recipe.ingredients.forEach(ingredient => {
        const li = document.getElementById('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    const stepsList = document.getElementById('recipe-steps');
    recipe.steps.forEach(steps => {
        const li = document.getElementById('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
});