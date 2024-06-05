document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipe-list');

    // Sample data - in a real application, this would be fetched from a database
    const recipes = [
        {
            title: 'Recipe Title 1',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe1.jpg',
            link: 'recipe1.html'
        },
        {
            title: 'Recipe Title 2',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe2.jpg',
            link: 'recipe2.html'
        },
        {
            title: 'Recipe Title 3',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe3.jpg',
            link: 'recipe3.html'   
        },
        {
            title: 'Recipe Title 4',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe4.jpg',
            link: 'recipe4.html'
        },
        {
            title: 'Recipe Title 5',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe5.jpg',
            link: 'recipe5.html'
        },
        {
            title: 'Recipe Title 6',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe6.jpg',
            link: 'recipe6.html'   
        },
        {
            title: 'Recipe Title 7',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe7.jpg',
            link: 'recipe7.html'
        },
        {
            title: 'Recipe Title 8',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe8.jpg',
            link: 'recipe.html'
        },
        {
            title: 'Recipe Title 9',
            description: 'Brief description of the recipe. This can be a short summary or a few key ingredients.',
            image: 'images/recipe9.jpg',
            link: 'recipe.html'   
        }

        // Add more recipes as needed
    ];

    // Function to create a recipe item
    function createRecipeItem(recipe) {
        const div = document.createElement('div');
        div.className = 'recipe-item';
        
        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.title;
        
        const h3 = document.createElement('h3');
        h3.textContent = recipe.title;
        
        const p = document.createElement('p');
        p.textContent = recipe.description;
        
        const a = document.createElement('a');
        a.href = recipe.link;
        a.className = 'view-recipe';
        a.textContent = 'View Recipe';

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(a);
        
        return div;
    }

    // Populate the recipe list with sample data
    recipes.forEach(recipe => {
        const recipeItem = createRecipeItem(recipe);
        recipeList.appendChild(recipeItem);
    });
});
