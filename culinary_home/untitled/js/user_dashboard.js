const recipes = {
    1: { name: "Spaghetti Carbonara", date: "September 5, 2024" },
    2: { name: "Chocolate Chip Cookies", date: "September 3, 2024" }
};

const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
let colorIndex = 0;

function changeBackgroundColor() {
    for (let i = 0; i < colors.length; i++) {
        if (i === colorIndex) {
            document.body.style.backgroundColor = colors[i];
            break;
        }
    }
    colorIndex = (colorIndex + 1) % colors.length;
}

function populateRecipes() {
    const recipeTableBody = document.getElementById('recipeTableBody');
    recipeTableBody.innerHTML = ''; // Clear existing rows

    // Loop through the recipes object and create table rows
    for (const id in recipes) {
        const recipe = recipes[id]; // Get recipe by id
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${recipe.name}</td>
                <td>${recipe.date}</td>
                <td>
                    <a href="edit-recipe.html?id=${id}">Edit</a>
                    <a href="delete-recipe.html?id=${id}">Delete</a>
                </td>
            `;
        recipeTableBody.appendChild(row); // Add the row to the table body
    }
}

window.onload = populateRecipes;