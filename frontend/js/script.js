document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedRecipes();
    loadRecentRecipes();
});

function loadFeaturedRecipes() {
    const featuredRecipesContainer = document.querySelector('#featured-recipes .recipes-container');
    featuredRecipesContainer.innerHTML = `
        <div>
            <img src="images/recipe1.jpg" alt="Featured Recipe 1">
            <h3>Spaghetti Carbonara</h3>
            <p>A classic Italian pasta dish featuring spaghetti tossed with a creamy sauce made from eggs and Parmesan cheese, mixed with crispy pancetta and seasoned with black pepper.</p>
        </div>
        <div>
            <img src="images/recipe2.jpg" alt="Featured Recipe 2">
            <h3>Chicken Alfredo</h3>
            <p>Fettuccine pasta served with a rich and creamy Alfredo sauce made from heavy cream, garlic, and Parmesan cheese, topped with tender chicken breast.</p>
        </div>
        <div>
            <img src="images/recipe3.jpg" alt="Featured Recipe 3">
            <h3>Beef Tacos</h3>
            <p>Crunchy taco shells filled with seasoned ground beef, lettuce, tomato, cheese, and taco seasoning for a delicious and satisfying meal.</p>
        </div>
    `;
}

function loadRecentRecipes() {
    const recentRecipesContainer = document.querySelector('#recent-recipes .recipes-container');
    recentRecipesContainer.innerHTML = `
        <div>
            <img src="images/recipe4.jpg" alt="Recent Recipe 1">
            <h3>Vegetable Stir Fry</h3>
            <p>Colorful bell peppers, broccoli, and carrots stir-fried with garlic and ginger, then tossed in a savory soy sauce, perfect for a quick and healthy dinner.</p>
        </div>
        <div>
            <img src="images/recipe5.jpg" alt="Recent Recipe 2">
            <h3>Margherita Pizza</h3>
            <p>A classic Italian pizza topped with tangy tomato sauce, fresh mozzarella cheese, and aromatic basil leaves, drizzled with olive oil and baked to perfection.</p>
        </div>
        <div>
            <img src="images/recipe6.jpg" alt="Recent Recipe 3">
            <h3>Caesar Salad</h3>
            <p>A refreshing salad made with crisp romaine lettuce, homemade croutons, Parmesan cheese, and a creamy Caesar dressing.</p>
        </div>
        <div>
            <img src="images/recipe7.jpg" alt="Recent Recipe 4">
            <h3>French Toast</h3>
            <p>Slices of bread dipped in an egg mixture with milk and cinnamon, cooked on a griddle until golden brown, and served with maple syrup.</p>
        </div>
        <div>
            <img src="images/recipe8.jpg" alt="Recent Recipe 5">
            <h3>Chicken Curry</h3>
            <p>Tender chicken cooked with onions, garlic, and ginger, seasoned with curry powder and simmered in coconut milk for a flavorful and comforting dish.</p>
        </div>
        <div>
            <img src="images/recipe9.jpg" alt="Recent Recipe 6">
            <h3>Blueberry Muffins</h3>
            <p>Moist and fluffy muffins packed with juicy blueberries, perfect for a quick and delicious breakfast or snack.</p>
        </div>
        <div>
            <img src="images/recipe10.jpg" alt="Recent Recipe 7">
            <h3>Grilled Salmon</h3>
            <p>Salmon fillets seasoned with olive oil, lemon, dill, salt, and pepper, grilled to perfection for a healthy and flavorful meal.</p>
        </div>
        <div>
            <img src="images/recipe11.jpg" alt="Recent Recipe 8">
            <h3>Avocado Toast</h3>
            <p>Toasted bread topped with mashed avocado, lemon juice, salt, and pepper, finished with a sprinkle of red pepper flakes for a simple yet satisfying dish.</p>
        </div>
        <div>
            <img src="images/recipe12.jpg" alt="Recent Recipe 9">
            <h3>Chocolate Chip Cookies</h3>
            <p>Classic cookies made with a buttery dough, loaded with chocolate chips, and baked until golden brown and chewy.</p>
        </div>
        <div>
            <img src="images/recipe13.jpg" alt="Recent Recipe 10">
            <h3>Stuffed Peppers</h3>
            <p> Bell peppers stuffed with a savory mixture of ground beef, rice, tomato sauce, and cheese, baked until tender and delicious.</p>
        </div>
        <div>
            <img src="images/recipe14.jpg" alt="Recent Recipe 11">
            <h3>Greek Salad</h3>
            <p>A refreshing salad made with cucumbers, tomatoes, red onion, feta cheese, and olives, tossed in olive oil and lemon juice.</p>
        </div>
        <div>
            <img src="images/recipe15.jpg" alt="Recent Recipe 12">
            <h3>Pancakes</h3>
            <p> Fluffy pancakes made with a batter of flour, milk, eggs, baking powder, and sugar, cooked until golden brown and served with butter and syrup.</p>
        </div>
        <div>
            <img src="images/recipe16.jpg" alt="Recent Recipe 13">
            <h3>Lasagna</h3>
            <p>Layers of lasagna noodles, meat sauce, ricotta cheese, mozzarella cheese, and Parmesan cheese, baked until bubbly and golden brown.</p>
        </div>
        <div>
            <img src="images/recipe17.jpg" alt="Recent Recipe 14">
            <h3>Quiche Lorraine</h3>
            <p>A savory pie made with a buttery crust, filled with a mixture of eggs, heavy cream, bacon, Gruyère cheese, and nutmeg, baked until set and golden brown.</p>
        </div>
        <div>
            <img src="images/recipe18.jpg" alt="Recent Recipe 15">
            <h3>Chocolate Cake</h3>
            <p>A rich and moist chocolate cake made with cocoa powder, flour, sugar, eggs, butter, and baking powder, frosted as desired.</p>
        </div>
        <div>
            <img src="images/recipe19.jpg" alt="Recent Recipe 16">
            <h3>Beef Stew</h3>
            <p>Tender beef chunks cooked with potatoes, carrots, onions, beef broth, and tomato paste, simmered until the flavors meld together into a hearty stew.</p>
        </div>
        <div>
            <img src="images/recipe20.jpg" alt="Recent Recipe 17">
            <h3>Fish Tacos</h3>
            <p>Soft tortillas filled with cooked fish, cabbage, lime juice, cilantro, and sour cream, creating a delicious and satisfying meal with a refreshing twist.</p>
        </div>
        <div>
    `;
}

