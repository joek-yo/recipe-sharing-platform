document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeName = urlParams.get('name');

    if (recipeName) {
        loadRecipeDetails(recipeName);
        loadRelatedRecipes();
        loadComments(recipeName);
    }
});

function loadRecipeDetails(recipeName) {
    const recipeDetailsSection = document.querySelector('#recipe-details');
    // Replace the following with actual recipe data fetching logic
    const recipeData = {
        title: recipeName,
        description: 'A delicious and popular recipe.',
        rating: 4.5,
        image: 'images/recipe.jpg',
        prepTime: '15 mins',
        cookTime: '30 mins',
        additionalTime: '10 mins',
        totalTime: '55 mins',
        servings: '4 servings',
        ingredients: [
            'Ingredient 1',
            'Ingredient 2',
            'Ingredient 3'
        ],
        directions: [
            'Step 1: Do something.',
            'Step 2: Do something else.',
            'Step 3: Finish up.'
        ]
    };

    recipeDetailsSection.innerHTML = `
        <h2>${recipeData.title}</h2>
        <img src="${recipeData.image}" alt="${recipeData.title}">
        <p>${recipeData.description}</p>
        <p>Rating: ${recipeData.rating} stars</p>
        <p><strong>Prep Time:</strong> ${recipeData.prepTime}</p>
        <p><strong>Cook Time:</strong> ${recipeData.cookTime}</p>
        <p><strong>Additional Time:</strong> ${recipeData.additionalTime}</p>
        <p><strong>Total Time:</strong> ${recipeData.totalTime}</p>
        <p><strong>Servings:</strong> ${recipeData.servings}</p>
        <h3>Ingredients</h3>
        <ul>${recipeData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Directions</h3>
        <ol>${recipeData.directions.map(step => `<li>${step}</li>`).join('')}</ol>
        <button onclick="editRecipe('${recipeName}')">Edit Recipe</button>
        <button onclick="addRecipe()">Add Recipe</button>
    `;
}

function loadRelatedRecipes() {
    const relatedRecipesContainer = document.querySelector('#related-recipes .recipes-container');
    relatedRecipesContainer.innerHTML = `
        <div>
            <img src="images/recipe1.jpg" alt="Related Recipe 1">
            <h3>Spaghetti Carbonara</h3>
            <button onclick="viewRecipe('Spaghetti Carbonara')">View Recipe</button>
        </div>
        <div>
            <img src="images/recipe2.jpg" alt="Related Recipe 2">
            <h3>Chicken Alfredo</h3>
            <button onclick="viewRecipe('Chicken Alfredo')">View Recipe</button>
        </div>
        <div>
            <img src="images/recipe3.jpg" alt="Related Recipe 3">
            <h3>Beef Tacos</h3>
            <button onclick="viewRecipe('Beef Tacos')">View Recipe</button>
        </div>
        <div>
            <img src="images/recipe4.jpg" alt="Related Recipe 4">
            <h3>Vegetable Stir Fry</h3>
            <button onclick="viewRecipe('Vegetable Stir Fry')">View Recipe</button>
        </div>
        <div>
            <img src="images/recipe5.jpg" alt="Related Recipe 5">
            <h3>Margherita Pizza</h3>
            <button onclick="viewRecipe('Margherita Pizza')">View Recipe</button>
        </div>
        <div>
            <img src="images/recipe6.jpg" alt="Related Recipe 6">
            <h3>Caesar Salad</h3>
            <button onclick="viewRecipe('Caesar Salad')">View Recipe</button>
        </div>
        <div>
            <img src="images/recipe7.jpg" alt="Related Recipe 7">
            <h3>French Toast</h3>
            <button onclick="viewRecipe('French Toast')">View Recipe</button>
        </div>
        <div>
            <img src="images/recipe8.jpg" alt="Related Recipe 8">
            <h3>Chicken Curry</h3>
            <button onclick="viewRecipe('Chicken Curry')">View Recipe</button>
        </div>
    `;
}

function loadComments(recipeName) {
    const commentsContainer = document.querySelector('#comments-container');
    commentsContainer.innerHTML = `
        <div>
            <p><strong>User1:</strong> Great recipe! I tried it and my family loved it.</p>
        </div>
        <div>
            <p><strong>User2:</strong> This recipe is easy to follow and tastes amazing.</p>
        </div>
    `;

    const commentForm = document.querySelector('#comment-form');
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = document.querySelector('#comment').value;
        commentsContainer.innerHTML += `<div><p><strong>You:</strong> ${comment}</p></div>`;
        document.querySelector('#comment').value = '';
    });
}

function editRecipe(recipeName) {
    window.location.href = `edit-recipe.html?name=${encodeURIComponent(recipeName)}`;
}

function addRecipe() {
    window.location.href = 'add-recipe.html';
}
