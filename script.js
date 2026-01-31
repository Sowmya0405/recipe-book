
const recipes = [
   
    {
        title: "Biryani",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/veg-biryani-1.jpg",
        description: "A fragrant, spiced rice dish layered with marinated meat or vegetables, slow-cooked for rich flavors, a staple in Indian cuisine.",
        ingredients: ["2 cups basmati rice", "500g chicken or mixed vegetables", "2 onions", "2 tomatoes", "Green chilies", "Ginger-garlic paste", "Biryani masala", "Yogurt", "Oil", "Saffron", "Fried onions"],
        instructions: "1. Marinate meat/veggies with yogurt, spices, and ginger-garlic paste for 1 hour. 2. Cook rice until 70% done. 3. Layer rice and marinated mix in a pot, add saffron and fried onions. 4. Dum cook on low heat for 30-40 minutes. 5. Serve hot with raita."
    },
    {
        title: "Masala Dosa",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.webp",
        description: "Crispy fermented rice crepe filled with spiced potato masala, a South Indian breakfast staple.",
        ingredients: ["1 cup urad dal", "2 cups rice", "4 potatoes", "1 onion", "1 tsp mustard seeds", "Curry leaves", "Oil for frying"],
        instructions: "1. Soak and ferment rice and dal batter overnight. 2. Cook spiced potato filling. 3. Spread batter on a hot griddle, add filling, fold, and serve with chutney."
    },
    {
        title: "Idli",
        image: "https://media.istockphoto.com/id/821399028/photo/tamilnadu-idli-sambar.jpg?s=612x612&w=0&k=20&c=pKFZEDydXZZpF1N7pMz9snwIK4HP9qghgNrNFMGCZv4=",
        description: "Steamed rice cakes made from fermented batter, light and fluffy, served with sambar and chutney.",
        ingredients: ["1 cup urad dal", "2 cups idli rice", "Salt", "Water"],
        instructions: "1. Soak rice and dal, grind to batter, and ferment overnight. 2. Pour into idli molds and steam for 10-15 minutes. 3. Serve hot with chutney."
    },
    {
        title: "Sambar",
        image: "https://media.istockphoto.com/id/1280557965/photo/sambar-traditional-southe-indian-and-sri-lankan-stew-with-lentils-and-mixed-vegetables-spices.jpg?s=612x612&w=0&k=20&c=tGay1Pw9-C4Vk7apIbwJyEJrBLmgO1vAimKg11VuJNo=",
        description: "Tangy lentil stew with vegetables and tamarind, a flavorful South Indian side dish.",
        ingredients: ["1 cup toor dal", "2 tomatoes", "1 onion", "1 carrot", "Tamarind paste", "Sambar powder", "Curry leaves"],
        instructions: "1. Cook dal and vegetables. 2. Add tamarind, spices, and simmer. 3. Garnish with coriander and serve with rice or idli."
    },
    {
        title: "Ven Pongal",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/ven-pongal-recipe.webp",
        description: "Creamy rice and lentil dish with ghee, cumin, and pepper, a comforting South Indian meal.",
        ingredients: ["1 cup rice", "1/2 cup moong dal", "1 tsp cumin seeds", "1 tsp black pepper", "Ghee", "Cashews"],
        instructions: "1. Cook rice and dal with water. 2. Temper with ghee, cumin, pepper, and cashews. 3. Serve hot with sambar or chutney."
    },
    {
        title: "Uttapam",
        image: "https://rakskitchen.net/wp-content/uploads/2013/03/8527219504_0ddb2cde6f_z-500x500.jpg",
        description: "Thick rice pancake topped with vegetables, a savory South Indian breakfast option.",
        ingredients: ["1 cup urad dal", "2 cups rice", "1 onion", "1 tomato", "Green chilies", "Oil"],
        instructions: "1. Prepare fermented batter. 2. Spread on griddle, add chopped veggies, and cook until golden. 3. Serve with chutney."
    },
    {
        title: "Hyderabadi Biryani",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg",
        description: "Aromatic layered rice dish with marinated meat or veggies, saffron, and nuts, a South Indian favorite.",
        ingredients: ["2 cups basmati rice", "500g chicken or veggies", "Yogurt", "Biryani masala", "Saffron", "Fried onions"],
        instructions: "1. Marinate meat/veggies and cook rice. 2. Layer in a pot with spices and saffron milk. 3. Dum cook and serve with raita."
    },
    {
        title: "Appam",
        image: "https://www.yellowthyme.com/wp-content/uploads/2023/04/Appam-Hoppers-08808-819x1024.jpg",
        description: "Lacy, fermented rice pancakes with a crispy edge, often paired with stew in Kerala cuisine.",
        ingredients: ["1 cup rice", "1/2 cup coconut milk", "1 tsp yeast", "Sugar"],
        instructions: "1. Ferment batter with yeast. 2. Cook in appam pan for lacy texture. 3. Serve with vegetable stew."
    },
    {
        title: "Puliogare",
        image: "https://smithakalluraya.com/wp-content/uploads/2020/03/puliyogare.jpg",
        description: "Tamarind rice with peanuts and spices, a tangy South Indian rice dish for festivals.",
        ingredients: ["2 cups cooked rice", "Tamarind paste", "Peanuts", "Mustard seeds", "Curry leaves", "Puliogare spice mix"],
        instructions: "1. Prepare tamarind sauce with spices. 2. Mix with rice and temper with peanuts. 3. Serve at room temperature."
    },
    {
        title: "Medu Vada",
        image: "https://www.shutterstock.com/image-photo/sambar-vada-indian-dish-260nw-305592884.jpg",
        description: "Crispy lentil donuts, deep-fried and served with chutney, a classic South Indian snack.",
        ingredients: ["1 cup urad dal", "1 onion", "Green chilies", "Curry leaves", "Oil for frying"],
        instructions: "1. Grind soaked dal, mix with spices. 2. Shape into donuts and deep-fry until golden. 3. Serve with sambar."
    },
  
    {
        title: "Sushi",
        category: "Global",
        image: "https://media.istockphoto.com/id/1354366250/photo/set-of-rainbow-uramaki-sushi-rolls-with-avocado.jpg?s=612x612&w=0&k=20&c=wgFUfdRVdtW976mlii4zK_Ziy7rqEcXWPHjGZ8dO5A0=",
        description: "Fresh raw fish and rice rolls, a minimalist Japanese delicacy served with soy sauce.",
        ingredients: ["Sushi rice", "Nori sheets", "Fresh salmon/tuna", "Wasabi", "Soy sauce", "Pickled ginger"],
        instructions: "1. Cook and season rice. 2. Slice fish thinly. 3. Roll with nori and fillings. 4. Slice and serve."
    },
    {
        title: "Hamburger",
        category: "Global",
        image: "https://media.istockphoto.com/id/617364554/photo/hamburger-with-fries.jpg?s=612x612&w=0&k=20&c=t8fMIRewNFRU7YSMNWIx2axoyZNjsh0cxHM4vYMALf8=",
        description: "Juicy beef patty in a bun with toppings, the iconic American fast-food staple.",
        ingredients: ["500g ground beef", "Burger buns", "Lettuce", "Tomato", "Cheese", "Ketchup"],
        instructions: "1. Form patties and grill. 2. Toast buns. 3. Assemble with toppings. 4. Serve hot."
    },
    {
        title: "Spaghetti Bolognese",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg",
        description: "Hearty Italian meat sauce with tomatoes and herbs, tossed with spaghetti.",
        ingredients: ["400g ground beef", "1 onion", "2 garlic cloves", "400g canned tomatoes", "Spaghetti", "Basil"],
        instructions: "1. Sauté meat and veggies. 2. Add tomatoes and simmer. 3. Cook pasta and combine. 4. Top with Parmesan."
    },
    {
        title: "Tacos",
        category: "Global",
        image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
        description: "Soft tortillas filled with seasoned meat, salsa, and cheese, a vibrant Mexican street food.",
        ingredients: ["Corn tortillas", "Ground beef", "Onion", "Cilantro", "Lime", "Salsa"],
        instructions: "1. Cook seasoned meat. 2. Warm tortillas. 3. Fill with meat and toppings. 4. Squeeze lime and enjoy."
    },
    {
        title: "Fried Rice",
        image: "https://www.sharmispassions.com/wp-content/uploads/2013/04/EggFriedRice4-500x500.jpg",
        description: "A quick stir-fry of rice with vegetables, eggs, and seasonings, offering a savory, versatile meal popular in Asian cuisine.",
        ingredients: ["2 cups cooked rice", "1 cup mixed vegetables (carrots, peas, beans)", "2 eggs", "1 onion", "Soy sauce", "Garlic", "Oil", "Spring onions"],
        instructions: "1. Heat oil in a wok, scramble eggs and set aside. 2. Stir-fry garlic and onion until fragrant. 3. Add vegetables and cook until tender. 4. Add rice, soy sauce, and scrambled eggs. 5. Toss well and garnish with spring onions. 6. Serve hot."
    },
    
    {
        title: "Noodles",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2020/02/Mee-Goreng-Tall2.jpg",
        description: "Stir-fried noodles with vegetables and protein, seasoned with soy and spices, a comforting and customizable dish from Chinese cuisine.",
        ingredients: ["200g noodles", "1 cup cabbage", "1 carrot", "1 bell pepper", "100g tofu or chicken", "Soy sauce", "Garlic", "Oil", "Sesame oil", "Green onions"],
        instructions: "1. Cook noodles according to package, drain and set aside. 2. Heat oil, stir-fry garlic and protein until cooked. 3. Add vegetables and cook until crisp-tender. 4. Add noodles, soy sauce, and sesame oil. 5. Toss everything together. 6. Garnish with green onions and serve."
    },
    {
        title: "Mac and Cheese",
        category: "Global",
        image: "https://www.allrecipes.com/thmb/d7Yp1VpXxHGujhXd-PWTgvUmi4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/217193-Cheddar-BaconMacCheese-ddmfs-gw-beauty-4x3-0155-6fc7b38b7c12412a95d5e9aeee96e438.jpg",
        description: "Creamy pasta baked with a rich cheese sauce, the ultimate American comfort food.",
        ingredients: ["2 cups macaroni", "2 cups cheddar cheese", "2 cups milk", "2 tbsp butter", "2 tbsp flour", "Salt"],
        instructions: "1. Cook pasta. 2. Make roux with butter and flour, add milk and cheese. 3. Mix with pasta. 4. Bake at 375°F for 20 minutes."
    },
    {
        title: "Milk Pudding",
        category: "Sweets",
        image: "https://www.lathiskitchen.org/wp-content/uploads/2024/12/Milk-pudding-8-500x500.jpg",
        description: "Smooth, creamy pudding made with milk, sugar, and cardamom, a simple and refreshing dessert.",
        ingredients: ["1 liter milk", "1/2 cup sugar", "2 tbsp cornstarch", "1 tsp cardamom powder", "Nuts for garnish"],
        instructions: "1. Heat milk and sugar until dissolved. 2. Mix cornstarch with water and add to milk. 3. Stir until thickened. 4. Add cardamom, cool, and garnish with nuts."
    },
    {
        title: "Kimchi",
        category: "Global",
        image: "https://mykoreankitchen.com/wp-content/uploads/2022/01/5.-Homemade-Kimchi.jpg",
        description: "Fermented cabbage with chili and garlic, Korea's spicy, probiotic side dish.",
        ingredients: ["Napa cabbage", "Chili powder", "Garlic", "Ginger", "Fish sauce"],
        instructions: "1. Salt cabbage. 2. Mix with paste. 3. Ferment for days. 4. Serve with rice."
    },
    {
        title: "Tiramisu",
        image: "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
        description: "Layered Italian dessert with coffee-soaked ladyfingers, mascarpone, and cocoa.",
        ingredients: ["Ladyfingers", "Mascarpone cheese", "Eggs", "Coffee", "Cocoa powder", "Sugar"],
        instructions: "1. Whip mascarpone with eggs and sugar. 2. Dip ladyfingers in coffee and layer. 3. Chill for 4 hours. 4. Dust with cocoa."
    },
    {
        title: "Gulab Jamun",
        category: "Sweets",
        image: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800",
        description: "Soft milk dumplings soaked in rose-flavored syrup, a beloved Indian sweet.",
        ingredients: ["1 cup milk powder", "1/4 cup flour", "1/4 cup ghee", "1 cup sugar", "Rose water", "Cardamom"],
        instructions: "1. Make dough with milk powder and ghee. 2. Shape into balls and fry. 3. Soak in warm syrup. 4. Serve warm or chilled."
    },
    {
        title: "Apple Pie",
        category: "Sweets",
        image: "https://media.istockphoto.com/id/184350005/photo/slice-of-apple-pie-on-a-plate-isolalted-on-a-white-background.jpg?s=612x612&w=0&k=20&c=X140KNLW8dnMP8XztKyk3dNSioqY6aZ2VGn3BhRu68s=",
        description: "Flaky crust filled with cinnamon-spiced apples, a comforting American classic.",
        ingredients: ["Pie crust", "6 apples", "1 cup sugar", "Cinnamon", "Butter", "Lemon juice"],
        instructions: "1. Prepare crust. 2. Toss apples with sugar and spices. 3. Fill crust, top with lattice, and bake at 425°F for 45 minutes. 4. Cool and serve."
    },
    {
        title: "Chocolate Cake",
        category: "Sweets",
        image: "https://preview.redd.it/jtzvhtzvlu271.jpg?width=1080&crop=smart&auto=webp&s=6d4aded5bc243237e05e09d67e6355ac4bd178c4",
        description: "Rich, moist chocolate cake layered with frosting, a classic American dessert.",
        ingredients: ["2 cups flour", "1 cup cocoa powder", "2 cups sugar", "1 cup butter", "4 eggs", "1 cup milk", "Vanilla extract"],
        instructions: "1. Mix dry ingredients. 2. Cream butter and sugar, add eggs. 3. Combine and bake at 350°F for 30-35 minutes. 4. Frost and serve."
    }
];


function displayRecipes(filteredRecipes = recipes) {
    const list = document.getElementById('recipe-list');
    list.innerHTML = '';
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;
        card.addEventListener('click', () => showRecipe(recipe));
        list.appendChild(card);
    });
}


function showRecipe(recipe) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>Ingredients:</h3>
            <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}


document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = recipes.filter(r => r.title.toLowerCase().includes(query) || r.ingredients.some(i => i.toLowerCase().includes(query)));
    displayRecipes(filtered);
});


displayRecipes();



