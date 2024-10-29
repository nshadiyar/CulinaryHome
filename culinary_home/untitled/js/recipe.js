const recipes = [
    {
        name: 'Spaghetti Carbonara',
        type: 'Pasta',
        rating: 5,
        imageUrl: 'https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg',
        description: 'Classic Italian pasta with a creamy sauce and pancetta.'
    },
    {
        name: 'Chocolate Cake',
        type: 'Cake',
        rating: 4,
        imageUrl: 'https://assets.epicurious.com/photos/61f4370abf67bb5e52649829/1:1/w_2240,c_limit/DoubleDhocolateLayerCake_RECIPE_012622_26397.jpg',
        description: 'Rich and moist chocolate cake with creamy frosting.'
    },
    {
        name: 'Linguine with Shrimp',
        type: 'Pasta',
        rating: 3,
        imageUrl: 'https://assets.bonappetit.com/photos/5cddd90b634f1e65e14578f9/1:1/w_2240,c_limit/Basically-Shrimp-Scampi-Recipe.jpg',
        description: 'Linguine pasta tossed with garlic butter shrimp and lemon.'
    },
    {
        name: 'Cheesecake',
        type: 'Dessert',
        rating: 4,
        imageUrl: 'https://scontent.fnqz1-1.fna.fbcdn.net/v/t1.6435-9/120288478_3837096606321090_8211343839328456910_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=yzctb5eemh0Q7kNvgGNLQNF&_nc_zt=23&_nc_ht=scontent.fnqz1-1.fna&_nc_gid=AMd4PunfIefdu5TmbOqgkNf&oh=00_AYAj2CrLDL4zB-K_pS6irmcipfBbx1mSdxsVU21MwaDOYA&oe=67481433',
        description: 'Creamy, smooth cheesecake with a graham cracker crust.'
    },
    {
        name: 'Apple Pie',
        type: 'Dessert',
        rating: 5,
        imageUrl: 'https://fraicheliving.com/wp-content/uploads/2022/11/frai%CC%82che-living-apple-pie-28-2048x2048.jpg',
        description: 'Classic apple pie with a flaky crust and spiced filling.'
    },
    {
        name: 'Chicken Alfredo',
        type: 'Main',
        rating: 4,
        imageUrl: 'https://fitmealsprep.com/wp-content/uploads/2022/11/thumbnail-Copycat-Olive-Garden-Chicken-Alfredo.jpg',
        description: 'Creamy fettuccine alfredo with tender chicken pieces.'
    },
    {
        name: 'Caesar Salad',
        type: 'Main',
        rating: 3,
        imageUrl: 'https://www.putzelkitchen.com/wp-content/uploads/2019/12/CAESARSALAD.jpg',
        description: 'Classic Caesar salad with crisp romaine and parmesan.'
    },
    {
        name: 'Brownies',
        type: 'Dessert',
        rating: 5,
        imageUrl: 'https://catering.linastores.co.uk/cdn/shop/files/Baci_Brownie_Catering-1_1000x.jpg?v=1689344833',
        description: 'Fudgy brownies with a rich chocolate flavor.'
    },
    {
        name: 'Minestrone Soup',
        type: 'Main',
        rating: 2,
        imageUrl: 'https://smallerdishes.com/wp-content/uploads/2021/11/Minestrone-soup-21-002-1024x1024.jpg',
        description: 'Vegetable-packed soup with pasta and beans.'
    }
];

function renderRecipes(filteredRecipes) {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';
    filteredRecipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'col-lg-4';
        recipeElement.innerHTML = `
            <figure class="card">
                <img class="card-img-top" src="${recipe.imageUrl}" alt="${recipe.name}">
                <figcaption class="card-body">
                    <h3 class="card-title">${recipe.name}</h3>
                    <p class="card-text">${recipe.description}</p>
                    <p class="rating text-warning">Rating: ${'★'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}</p>
                </figcaption>
            </figure>`;
        recipeContainer.appendChild(recipeElement);
    });
}

function applyFilters() {
    const type = document.getElementById('recipeType').value;
    const rating = parseInt(document.getElementById('ratingFilter').value);
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe => {
        const matchesType = !type || recipe.type === type;
        const matchesRating = recipe.rating >= rating;
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery);
        return matchesType && matchesRating && matchesSearch;
    });

    renderRecipes(filteredRecipes);
    saveFilterSettings(type, rating, searchQuery);
}

function saveFilterSettings(type, rating, searchQuery) {
    localStorage.setItem('filterType', type);
    localStorage.setItem('filterRating', rating);
    localStorage.setItem('searchQuery', searchQuery);
}

function loadFilterSettings() {
    const savedType = localStorage.getItem('filterType') || '';
    const savedRating = localStorage.getItem('filterRating') || 1;
    const savedSearchQuery = localStorage.getItem('searchQuery') || '';

    document.getElementById('recipeType').value = savedType;
    document.getElementById('ratingFilter').value = savedRating;
    document.getElementById('searchInput').value = savedSearchQuery;

    applyFilters();
}

document.getElementById('applyFilter').addEventListener('click', applyFilters);
window.addEventListener('DOMContentLoaded', loadFilterSettings);

renderRecipes(recipes);
