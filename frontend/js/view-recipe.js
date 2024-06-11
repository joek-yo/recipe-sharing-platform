document.addEventListener('DOMContentLoaded', function () {
    // Mock data for recipes
    const recipes = {
        1: {
            title: "Roast Beef Horseradish Roll-Ups",
            description: "A delicious appetizer perfect for any occasion.",
            image: "image1.jpg",
            prepTime: "15 mins",
            totalTime: "15 mins",
            servings: 4,
            rating: 4.0,
            ingredients: [
                "8 slices of roast beef",
                "1/2 cup horseradish sauce",
                "4 tortillas",
                "1 cup arugula",
                "1/2 cup shredded cheese"
            ],
            directions: [
                "Spread horseradish sauce on each tortilla.",
                "Layer roast beef, arugula, and shredded cheese on top.",
                "Roll up tortillas tightly and cut into 1-inch pieces.",
                "Secure with toothpicks if necessary and serve."
            ],
            comments: [
                { name: "Jane Doe", text: "This recipe was amazing! My family loved it." },
                { name: "John Smith", text: "Easy to make and delicious!" },
                { name: "Emily Clark", text: "Will definitely make this again." }
            ],
            relatedRecipes: [
                { id: 2, title: "Recipe 1", link: "#" },
                { id: 3, title: "Recipe 2", link: "#" },
                { id: 4, title: "Recipe 3", link: "#" },
                { id: 5, title: "Recipe 4", link: "#" }
            ]
        },
        // Other recipes...
    };

    // Get the recipe ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    const recipe = recipes[recipeId];

    if (recipe) {
        // Load recipe data into HTML
        document.getElementById('recipe-title').textContent = recipe.title;
        document.getElementById('recipe-description').textContent = recipe.description;
        document.getElementById('recipe-image').src = recipe.image;
        document.getElementById('recipe-info').textContent = Prep Time: ${recipe.prepTime} | Total Time: ${recipe.totalTime} | Servings: ${recipe.servings};
        document.getElementById('rating-value').textContent = ${recipe.rating} out of 5 stars;

        // Load rating stars
        const starsContainer = document.getElementById('recipe-rating');
        starsContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.innerHTML = (i < Math.floor(recipe.rating)) ? '&#9733;' : '&#9734;';
            starsContainer.appendChild(star);
        }

        // Load ingredients
        const ingredientsContainer = document.getElementById('recipe-ingredients');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsContainer.appendChild(li);
        });

        // Load directions
        const directionsContainer = document.getElementById('recipe-directions');
        recipe.directions.forEach(direction => {
            const li = document.createElement('li');
            li.textContent = direction;
            directionsContainer.appendChild(li);
        });

        // Load comments
        const commentsContainer = document.getElementById('comments-container');
        recipe.comments.forEach(comment => {
            const div = document.createElement('div');
            div.classList.add('comment');
            div.innerHTML = <p><strong>${comment.name}:</strong> ${comment.text}</p>;
            commentsContainer.appendChild(div);
        });

        // Load related recipes
        const relatedRecipesContainer = document.getElementById('related-recipes');
        recipe.relatedRecipes.forEach(related => {
            const li = document.createElement('li');
            li.innerHTML = <a href="view-recipe.html?id=${related.id}">${related.title}</a>;
            relatedRecipesContainer.appendChild(li);
        });

        // Handle comment form submission
        document.getElementById('comment-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const commentText = document.getElementById('comment-text').value;
            if (commentText) {
                const newComment = { name: "You", text: commentText };
                recipe.comments.push(newComment);

                const div = document.createElement('div');
                div.classList.add('comment');
                div.innerHTML = <p><strong>${newComment.name}:</strong> ${newComment.text}</p>;
                commentsContainer.appendChild(div);

                document.getElementById('comment-text').value = '';
            }
        });
    } else {
        document.getElementById('recipe-title').textContent = "Recipe not found";
    }
});