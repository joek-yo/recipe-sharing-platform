document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedRecipes();
    loadRecentRecipes();
});

function loadFeaturedRecipes() {
    const featuredRecipesContainer = document.querySelector('#featured-recipes .recipes-container');
    // Placeholder content for now
    featuredRecipesContainer.innerHTML = `
        <div>
            <h3>Featured Recipe 1</h3>
            <p>Ingredients: Ingredient 1, Ingredient 2, Ingredient 3</p>
            <p>Instructions: Step 1, Step 2, Step 3</p>
        </div>
        <div>
            <h3>Featured Recipe 2</h3>
            <p>Ingredients: Ingredient 1, Ingredient 2, Ingredient 3</p>
            <p>Instructions: Step 1, Step 2, Step 3</p>
        </div>
        <div>
            <h3>Featured Recipe 3</h3>
            <p>Ingredients: Ingredient 1, Ingredient 2, Ingredient 3</p>
            <p>Instructions: Step 1, Step 2, Step 3</p>
        </div>
    `;
}

function loadRecentRecipes() {
    const recentRecipesContainer = document.querySelector('#recent-recipes .recipes-container');
    // Placeholder content for now
    recentRecipesContainer.innerHTML = `
        <div>
            <h3>Recent Recipe 1</h3>
            <p>Ingredients: Ingredient 1, Ingredient 2, Ingredient 3</p>
            <p>Instructions: Step 1, Step 2, Step 3</p>
        </div>
        <div>
            <h3>Recent Recipe 2</h3>
            <p>Ingredients: Ingredient 1, Ingredient 2, Ingredient 3</p>
            <p>Instructions: Step 1, Step 2, Step 3</p>
        </div>
        <div>
            <h3>Recent Recipe 3</h3>
            <p>Ingredients: Ingredient 1, Ingredient 2, Ingredient 3</p>
            <p>Instructions: Step 1, Step 2, Step 3</p>
        </div>
    `;
}
