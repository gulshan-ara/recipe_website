// An array of objects. Each object contains data for a recipe. recipe name, 
// youtube video link, short description and some other properties are added in Each
// object
const recipeData = [
    {
        name: "Chicken Pizza",
        video: "https://www.youtube.com/embed/Ar2TdluZxV8",
        semiDescription: "All-purpose flour(maida) - 3 Cups, instant yeast - 1tbsp, Salt ",
        id: "#chicken_pizza",
        tags: ["snacks", "chicken", "pizza", "chicken pizza"]
    },
    {
        name: "Chicken Shawrma",
        video: "https://www.youtube.com/embed/lx-ZAmC3j4M",
        semiDescription: "Chicken - 1kg, Yougurt - 2tbsp, Garlic paste - 2tbsp, Olive Oil - 3tbsp",
        id: "#chicken_shawrma",
        tags: ["snacks", "chicken", "shawrma", "chicken shawrma"]
    },
    {
        name: "Fried Rice",
        video: "https://www.youtube.com/embed/ASA7yTRC9NY",
        semiDescription: `- Boneless Chicken cut into 1" thin strips - 250gms, Cooked Rice (day old)`,
        id: "#fried_rice",
        tags: ["meal", "chicken", "rice", "fried rice"]
    },
    {
        name: "Chocolate Cake",
        video: "https://www.youtube.com/embed/d1zH-jSCgE0",
        semiDescription: `250 grams dark chocolate, 125 grams heated fresh cream, 1 and 1/2 cup all`,
        id: "#chocolate_cake",
        tags: ["snacks", "dessert", "cake", "chocolate cake"]
    },
    {
        name: "Pizza",
        video: "https://www.youtube.com/embed/z6CmFx32k34",
        semiDescription: `Boneless Chicken - 250gms, Garlic paste - 1tsp, Red Chilli Powder - 1.5tsp`,
        id: "#pizza",
        tags: ["snacks", "chicken", "pizza", "chicken pizza"]
    },
    {
        name: "Beef Curry",
        video: "https://www.youtube.com/embed/YW48gEX8rg4",
        semiDescription: `1kg beef (cut into curry pieces), 3 tbsp of cooking oil, 1 tsp of cumin seeds`,
        id: "#beef_curry",
        tags: ["curry", "beef", "beef curry"]
    },
    {
        name: "lentil Curry",
        video: "https://www.youtube.com/embed/0LrXnxhH5I0",
        semiDescription: `2 tablespoons Oil, 1 Onion, chopped, 4-5 garlic cloves, crushed, 2 tablespoons Grated`,
        id: "#lentil_curry",
        tags: ["curry", "lentil", "dal", "lentil curry"]
    },
    {
        name: "Custard",
        video: "https://www.youtube.com/embed/aZ_RRVla4X0",
        semiDescription: `Custard powder : 5 table spoons, Milk : 1 litre, Sugar : 100 grams or as per your`,
        id: "#custard",
        tags: ["snacks", "dessert", "custard"]
    },
    {
        name: "Chicken Biriyani",
        video: "https://www.youtube.com/embed/0WBbv2-L7s4",
        semiDescription: `chicken - 1200gms, onion - 2 medium size + 1 for layering, garlic chopped - 2tbsp`,
        id: "#chicken_biriyani",
        tags: ["meal", "rice", "chicken", "biriyani", "chicken biriyani"]
    }
];


// An array of objects. Each object contains data for a recipe. recipe name, 
// youtube video link, details description and some other properties are added in Each
// object
let modalData = [
    {
        id: "#chicken_pizza",
        name: "Chicken Pizza",
        video: "https://www.youtube.com/embed/Ar2TdluZxV8",
        ingredients: `<strong> Pizza Dough:<strong> <br>
        All-purpose flour ( maida) 3 Cups,
        instant yeast 1tbsp,
        Salt 1 tsp or to taste,
        sugar 1 tsp ,
        Egg 1,
        milk 1 cup,
        Oil 1-2 tbsp,
        Water as required <br>
        <br>
        Chicken boneless 150gm,
        Yogurt 1/4 cup,
        garlic and ginger paste 1tbsp,
        salt 1/2 tsp or to taste,
        red Chilli powder 1 tsp,
        turmeric powder 1/4 tsp,
        dry Coriander powder 1 tsp,
        Cumin powder 1/2 tsp,
        Lemon juice 1 tbsp <br>
        <br>
        mozzarella cheese grated or slices,
        pizza sauce,
        capsicum,
        boiled corn,
        green and black olives,
        Oregano,
        red chilli flakes.`
    },
    {
        id: "#chicken_shawrma",
        name: "Chicken Shawrma",
        video: "https://www.youtube.com/embed/lx-ZAmC3j4M",
        ingredients: `
        Chicken - 1kg,
        Yogurt - 2tbsp,
        Garlic paste - 2tbsp, 
        Olive Oil - 3 tbsp (you can use cooking oil instead),
        Salt - to taste,
        Sumak - 1 tbsp, 
        Cumin powder - 1 tsp,
        Coriander powder - 1 tsp,
        Cinnamon powder - 1 tsp,
        Shawarma masala - 2tsp (If Shawarma masala isn't available, you can use tikka masala or tandoori masala instead),
        Turmeric - 1 tsp,
        Paprika - 2 tsp,
        Lemon juice - 2 tbsp. <br>
        <br>
        <strong>For Pita Bread : </strong> 
        Flour - 415g,
        ActiveDry Yeast - 7g (or you can use 25g fresh yeast instead),
        salt - 1 tsp,
        sugar - 1 tsp,
        Olive oil - 2 tsp,(you can use cooking oil instead),
        Warm Water - 315ml <br>
        <br>

        <strong> For Sauces: </strong>
        Tzatziki:
        Greek yogurt or hung curd - 1 cup,
        Tahini Sauce (optional) - 1 tbsp,
        Finely Chopped Cucumber - 1/2 cup,
        Crushed Garlic - one clove,
        Chopped mint leaves - 1/2 tbsp,
        Salt - to taste,
        Crushed black Pepper - 1/4 tsp,
        Lemon Juice - 1/4 tsp<br>
        <br>

        <strong>Spicy Mayo:</strong>
        Mayonnaise - 1 cup,
        Sriracha or hot Sauce /chili Sauce - 2 tbsp
        `
    },
    {
        id: "#fried_rice",
        name: "Fried rice",
        video: "https://www.youtube.com/embed/ASA7yTRC9NY",
        ingredients: `
        Boneless Chicken cut into 1” thin strips- 250 gms,
        Cooked Rice (day old)- 6 cups (made from 2 cups or 350 gms of raw rice),
        Eggs- 3,
        Garlic, fine sliced- 6 cloves,
        Salt- 1/4 tsp and a pinch for seasoning,
        Pepper powder- 1/2 tsp,
        Dark Soy sauce - 3 tsp,
        White Vinegar- 1 tsp,
        Shredded cabbage- 1 cup,
        Carrots, julienned- 1 cup,
        Green peppers (capsicum) julienned- 1 cup,
        Spring onion, greens- 3 tbsp,
        Refined oil- 3 tbsp
        `
    },
    {
        id: "#chocolate_cake",
        name: "Chocolate Cake",
        video: "https://www.youtube.com/embed/d1zH-jSCgE0",
        ingredients: `
        250 grams dark chocolate,
        125 grams heated fresh cream,
        1 and 1/2 cup all purpose flour,
        2 tbsp cocoa powder,
        1 cup milk, 
        2 tbsp milk for adjust consistency,
        1 cup powder sugar,
        1/2 cup oil,
        1 tbsp vinegar,
        1 tsp baking powder,
        1/2 tsp baking soda,
        1/2 tsp vanilla essence or chocolate essence,
        some silver sprinkles for decoration
        `
    },
    {
        id: "#pizza",
        name: "Pizza",
        video: "https://www.youtube.com/embed/z6CmFx32k34",
        ingredients: `
        <strong>Pizza Dough:<strong>
        All purpose flour 3 cups,
        Sugar 1 tsp,
        Salt 1/2 tsp,
        instant Yeast 1 tsp,
        Dry Milk Powder 3 tbsp,
        Cooking Oil 2 tbsp,
        Water (lukewarm) 1cup or as required<br>
        <br>

        <strong>Chicken Topping:<strong>
        Boneless Chicken 250 g,
        garlic paste 1 tsp,
        Red Chilli Powder 1&1/2 tsp,
        Oregano 1 tsp,
        Mustard Paste 1/2 tsp,
        Cumin Powder 1tsp,
        Yogurt 1 tbsp,
        Lemon juice 1 tbsp,
        Cooking Oil 2-3 tbsp,
        Salt to taste,
        Pizza sauce
        `
    },
    {
        id: "#beef_curry",
        name: "Beef Curry",
        video: "https://www.youtube.com/embed/YW48gEX8rg4",
        ingredients: `
        1kg beef (cut into curry pieces),
        3 tbsp of cooking oil,
        1 tsp of cumin seeds,
        1 black cardamom,
        1 inch cinnamon stick,
        6 cloves,
        1 star anise,
        7 green cardamom pods,
        1 large onion, sliced,
        1 tbsp of ginger & garlic paste,
        1 tbsp of tomato paste,
        1 tsp of ground coriander,
        1 tsp of crushed black pepper,
        1 tsp of ground turmeric,
        1 and 1/2 tsp of ground kashmiri red chilli,
        1 and 1/2 tsp of chilli flakes,
        1 large habanero chilli,
        2 tbsp of yoghurt,
        some chopped coriander leaves
       `
    },
    {
        id: "#lentil_curry",
        name: "lentil Curry",
        video: "https://www.youtube.com/embed/0LrXnxhH5I0",
        ingredients: `
        2 tablespoons Oil, 
        1 Onion, chopped, 
        4-5 garlic cloves, crushed,
        2 tablespoons Grated ginger,
        2 teaspoons Curry powder,
        1/2 teaspoon Cumin,
        1/2 teaspoon Turmeric, 
        Salt to taste,
        Pepper to taste, 
        1 can (14oz/400g) Tomato sauce/crushed tomatoes,
        3 cups (720ml) Water,
        1 can (14oz/400g) Coconut milk,
        1 cup (190g) Dried lentils,
        1 teaspoon Garam masala (optional),
        1-2 tablespoons Coriander leaves, chopped *optional 
        `
    },
    {
        id: "#custard",
        name: "Custard",
        video: "https://www.youtube.com/embed/aZ_RRVla4X0",
        ingredients: `
        Custard powder : 5 table spoons, 
        Milk : 1 litre, 
        Sugar : 100 grams or as per your taste,
        Mango : 1, 
        Pomegranate : 1 or 2,
        Apple : 1,
        Bananas : 1 (large),
        Sultanas for garnishing (optional),
        You can add fruits any of your choice and quantity of fruits are up to you.`
    },
    {
        id: "#chicken_biriyani",
        name: "Chicken Biriyani",
        video: "https://www.youtube.com/embed/0WBbv2-L7s4",
        ingredients: `
        chicken - 1200gms, 
        onion - 2 medium size + 1 for layering,
        garlic chopped - 2tbsp,
        ginger chopped - 2 tbsp,
        yogurt - 2 cup, 
        cardamom powder - 1 & 1/2 tsp,
        biryani masala - 3 tbsp heaped,
        lemon juice - 2 tbsp,
        green chili - 3,
        cilantro - chopped 1/2 cup,
        mint leaves - chopped  1/2 cup,
        Basmati rice - 2 & 1/2 cup,
        salt - to taste,
        star anise - 2 pods,
        cloves - 5-6,
        milk - 1/2 cup,
        zaffran - 1g,
        boiled egg (optional) - 4<br>
        <br>
        
        <strong> Biryani masala recipe: </strong>
        3 large  red chilli, dried,
        7 bay leaf, 
        2 tbsp coriander seeds,
        1 tbsp cumin, 
        1 tbsp caraway seeds.
        3 mace,
        2 inch cinnamon stick,
        1 tbsp salt,
        1 nutmeg,
        1 tsp cloves,
        3 black cardamom, ,
        3 star anise,
        10 cardamom,
        1 tbsp pepper,
        1 tsp fennel,
        ½ tsp turmeric,
        10 prunes
        `
    }

];

// Function for writing the html elements for showing the recipies in the webpage
function recipeTemplate(recipe) {
    // this function returns template literals for writing the html elements dynamically
    // the onclick attribute of the button element calls a function which helps in opening a modal containing detailed recipes
    return `
    <div class="recipe-content">
        <h3 class="recipe-name">${recipe.name}</h3>
        <iframe src="${recipe.video}" frameborder = "0" allow=""accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><strong> Ingredients :</strong> <br>
        ${recipe.semiDescription}</p>
        <button class="see-more" id="${recipe.id}" onclick="openModal(this.id)"> See More </button>  
    </div>
    `;
}

// the modal template. It writes the modals dynamically in the webpage
function modalTemplate(modal) {
    return `
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-close" onclick="hideModal()">X</span>
                <h2> ${modal.name} </h2>
            </div>
            <div class="modal-body">
                <iframe src="${modal.video}" class="modal-video" frameborder = "0" allow=""accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>Ingredients</h3><br>
                <p>${modal.ingredients}</p>
            </div>
        </div>
     <div>
    `;
}


// DOM manipulation for different items. pulls out different element's by id
let searchContainer = document.getElementById('search-container');
let searchBar = document.getElementById('search-bar');
let recipe = document.getElementById('recipe');
let modal = document.getElementById('modal');

// writing the html elements by using .innerHTML and by calling the recipeTemplate() function
// The map() method creates a new array with the results of calling a function for every array element
// The join() method returns the array as a string. The elements will be separated by a specified separator. The default separator is comma (,).
recipe.innerHTML = recipeData.map(recipeTemplate).join("");


// This function searches items from the array of objects
function search() {
    // stored the input value from the search bar in searchVal variable
    let searchVal = searchBar.value;

    // filtering the objects which contains the searchVal in it's tags array and storing filtered objects in a new array
    let recipes = recipeData.filter(function (recipe) {
        return recipe.tags.includes(searchVal);
    });
    
    // If the searched value is not matched with any object then print a sorry message
    if (recipes.length === 0) {
        recipe.innerHTML = `<h1 class="sorry-msg"> Sorry!! No matching results found! </h1>`
    } else {
        // else write the html elements by using the new array
        recipe.innerHTML = recipes.map(recipeTemplate).join("");
    }
}



// This function is called when a button is clicked
// we pass the button id as an argument and checks whether the button id is 
// same as any modal id. if it's same then display that modal and hide other elements
// like search bar and recipe gallery.
function openModal(id) {
    for (let i = 0; i < modalData.length; i++) {
        if (id === modalData[i].id) {
            recipe.style.display = "none";
            searchContainer.style.display = "none";
            // opens the modal by writing html elements dynamically
            document.getElementById('modal').innerHTML = modalTemplate(modalData[i]);
        }
    }
}

// This function hides the modal and displays again the recipe articles.
// this is called when the close button of the modal is shown
function hideModal() {
    recipe.style.display = "flex";
    searchContainer.style.display = "block";
}


