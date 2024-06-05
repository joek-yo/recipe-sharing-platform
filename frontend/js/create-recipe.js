document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-recipe-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const recipe = {
            title: formData.get('title'),
            description: formData.get('description'),
            ingredients: formData.get(ingredients).split(','),
            steps: formData.get('steps').split(','),
            image: formData.get('image')
        };

        console.log(JSON.stringify(recipe));

        // Reset the form after submission
        form.reset
    });
});