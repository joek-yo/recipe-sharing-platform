document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedRecipes();
    loadRecentRecipes();
});

function createRecipeCard(imageSrc, title, description, link) {
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    const a = document.createElement('a');
    a.href = link;
    a.className = 'view-recipe';
    a.textContent = 'View Recipe';

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(a);

    return div;
}

function loadFeaturedRecipes() {
    const featuredRecipesContainer = document.querySelector('#featured-recipes .recipes-container');
    featuredRecipesContainer.innerHTML = '';

    const featuredRecipes = [
        {
            image: 'images/recipe1.jpg',
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish featuring spaghetti tossed with a creamy sauce made from eggs and Parmesan cheese, mixed with crispy pancetta and seasoned with black pepper.',
            link: 'view-recipe.js'
        },
        {
            image: 'images/recipe2.jpg',
            title: 'Chicken Alfredo',
            description: 'Fettuccine pasta served with a rich and creamy Alfredo sauce made from heavy cream, garlic, and Parmesan cheese, topped with tender chicken breast.',
            link: 'recipe2.html'
        },
        {
            image: 'images/recipe3.jpg',
            title: 'Beef Tacos',
            description: 'Crunchy taco shells filled with seasoned ground beef, lettuce, tomato, cheese, and taco seasoning for a delicious and satisfying meal.',
            link: 'recipe3.html'
        }
    ];

    featuredRecipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe.image, recipe.title, recipe.description, recipe.link);
        featuredRecipesContainer.appendChild(recipeCard);
    });
}

function loadRecentRecipes() {
    const recentRecipesContainer = document.querySelector('#recent-recipes .recipes-container');
    recentRecipesContainer.innerHTML = '';

    const recentRecipes = [
        {
            image: 'images/recipe4.jpg',
            title: 'Vegetable Stir Fry',
            description: 'Colorful bell peppers, broccoli, and carrots stir-fried with garlic and ginger, then tossed in a savory soy sauce, perfect for a quick and healthy dinner.',
            link: 'recipe4.html'
        },
        {
            image: 'images/recipe5.jpg',
            title: 'Margherita Pizza',
            description: 'A classic Italian pizza topped with tangy tomato sauce, fresh mozzarella cheese, and aromatic basil leaves, drizzled with olive oil and baked to perfection.',
            link: 'recipe5.html'
        },
        {
            image: 'images/recipe6.jpg',
            title: 'Caesar Salad',
            description: 'A refreshing salad made with crisp romaine lettuce, homemade croutons, Parmesan cheese, and a creamy Caesar dressing.',
            link: 'recipe6.html'
        },
        {
            image: 'images/recipe7.jpg',
            title: 'French Toast',
            description: 'Slices of bread dipped in an egg mixture with milk and cinnamon, cooked on a griddle until golden brown, and served with maple syrup.',
            link: 'recipe7.html'
        },
        {
            image: 'images/recipe8.jpg',
            title: 'Chicken Curry',
            description: 'Tender chicken cooked with onions, garlic, and ginger, seasoned with curry powder and simmered in coconut milk for a flavorful and comforting dish.',
            link: 'recipe8.html'
        },
        {
            image: 'images/recipe9.jpg',
            title: 'Blueberry Muffins',
            description: 'Moist and fluffy muffins packed with juicy blueberries, perfect for a quick and delicious breakfast or snack.',
            link: 'recipe9.html'
        },
        {
            image: 'images/recipe10.jpg',
            title: 'Grilled Salmon',
            description: 'Salmon fillets seasoned with olive oil, lemon, dill, salt, and pepper, grilled to perfection for a healthy and flavorful meal.',
            link: 'recipe10.html'
        },
        {
            image: 'images/recipe11.jpg',
            title: 'Avocado Toast',
            description: 'Toasted bread topped with mashed avocado, lemon juice, salt, and pepper, finished with a sprinkle of red pepper flakes for a simple yet satisfying dish.',
            link: 'recipe11.html'
        },
        {
            image: 'images/recipe12.jpg',
            title: 'Chocolate Chip Cookies',
            description: 'Classic cookies made with a buttery dough, loaded with chocolate chips, and baked until golden brown and chewy.',
            link: 'recipe12.html'
        },
        {
            image: 'images/recipe13.jpg',
            title: 'Stuffed Peppers',
            description: 'Bell peppers stuffed with a savory mixture of ground beef, rice, tomato sauce, and cheese, baked until tender and delicious.',
            link: 'recipe13.html'
        },
        {
            image: 'images/recipe14.jpg',
            title: 'Greek Salad',
            description: 'A refreshing salad made with cucumbers, tomatoes, red onion, feta cheese, and olives, tossed in olive oil and lemon juice.',
            link: 'recipe14.html'
        },
        {
            image: 'images/recipe15.jpg',
            title: 'Pancakes',
            description: 'Fluffy pancakes made with a batter of flour, milk, eggs, baking powder, and sugar, cooked until golden brown and served with butter and syrup.',
            link: 'recipe15.html'
        },
        {
            image: 'images/recipe16.jpg',
            title: 'Lasagna',
            description: 'Layers of lasagna noodles, meat sauce, ricotta cheese, mozzarella cheese, and Parmesan cheese, baked until bubbly and golden brown.',
            link: 'recipe16.html'
        },
        {
            image: 'images/recipe17.jpg',
            title: 'Quiche Lorraine',
            description: 'A savory pie made with a buttery crust, filled with a mixture of eggs, heavy cream, bacon, Gruyère cheese, and nutmeg, baked until set and golden brown.',
            link: 'recipe17.html'
        },
        {
            image: 'images/recipe18.jpg',
            title: 'Chocolate Cake',
            description: 'A rich and moist chocolate cake made with cocoa powder, flour, sugar, eggs, butter, and baking powder, frosted as desired.',
            link: 'recipe18.html'
        },
        {
            image: 'images/recipe19.jpg',
            title: 'Beef Stew',
            description: 'Tender beef chunks cooked with potatoes, carrots, onions, beef broth, and tomato paste, simmered until the flavors meld together into a hearty stew.',
            link: 'recipe19.html'
        },
        {
            image: 'images/recipe20.jpg',
            title: 'Fish Tacos',
            description: 'Soft tortillas filled with cooked fish, cabbage, lime juice, cilantro, and sour cream, creating a delicious and satisfying meal with a refreshing twist.',
            link: 'recipe20.html'
        }
    ];

    recentRecipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe.image, recipe.title, recipe.description, recipe.link);
        recentRecipesContainer.appendChild(recipeCard);
    });
}