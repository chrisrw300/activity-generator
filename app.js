// DATA Objects
const movie1 = {
    "movie": "Luca",
    "dinner": "Pesto Pasta with Green Beans and Potatoes",
    "dessert": "Gelato and Swedish Fish",
    "drink": "Sprite Vodka with Blue Food Coloring",
    "game": "Ticket to Ride"
}
const movie2 = {
    "movie": "Moana",
    "dinner": "Pulled Pork or Roast Chicken with Corn",
    "dessert": "Almond Joy or Coconut Ice Cream",
    "drink": "Fruit Punch Vodka",
    "game": "Settlers of Catan"
}
const movie3 = {
    "movie": "Monsters Inc",
    "dinner": "Sushi",
    "dessert": "Coffee Ice Cream",
    "drink": "Lemonade Vodka Slushie",
    "game": "Sushi Go and Ramen Fury"
}
const movie4 = {
    "movie": "Emperors New Groove",
    "dinner": "Spinach Puffs",
    "dessert": "White Cake",
    "drink": "Cran-Raspberry Vodka",
    "game": "Risk"
}
const movie5 = {
    "movie": "Coco",
    "dinner": "Tamales or Quesadillas",
    "dessert": "Orange Cake",
    "drink": "Watermelon Juice with Vodka",
    "game": "Clue"
}
const movie6 = {
    "id": "6",
    "movie": "Mulan",
    "dinner": "Pork Dumplings",
    "dessert": "Green Tea Ice Cream",
    "drink": "Pink Lemonade 'Cherry Blossom' Vodka",
    "game": "Yahtzee"
}
const movie7 = {
    "movie": "Aladdin",
    "dinner": "Chicken Caesar Salad with Stolen Baguette",
    "dessert": "Cheesecake",
    "drink": "Pineapple Juice, Sprite, Vodka, Blue Food Coloring",
    "game": "Disney Villainous"
}
const movie8 = {
    "movie": "Lilo and Stitch",
    "dinner": "Pulled Pork Fries",
    "dessert": "Black Forest Cake",
    "drink": "Pineapple Juice, Sprite, Vodka, Blue Food Coloring",
    "game": "Scattergories"
}
const movie9 = {
    "movie": "Hercules",
    "dinner": "Steak Pita",
    "dessert": "Frozen Koolaid Grapes",
    "drink": "Mimosa",
    "game": "Monopoly"
}
const movie10 = {
    "movie": "Tarzan",
    "dinner": "Curry (No Monkey Added)",
    "dessert": "Baked Banana Sunday",
    "drink": "Malibu Cocktail",
    "game": "Poo and Uno"
}
const movie11 = {
    "movie": "The Incredibles",
    "dinner": "Steak and Potatoes",
    "dessert": "Chocolate Chips Cookies",
    "drink": "Mango Watermelon Vodka Smoothie, AKA 'Lava Falls'",
    "game": "Munchkin"
}
const movie12 = {
    "movie": "Princess and the Frog",
    "dinner": "Breakfast for Dinner",
    "dessert": "Red Velvet Cake",
    "drink": "Orange Mimosa",
    "game": "Scrabble"
}
const movie13 = {
    "movie": "Soul",
    "dinner": "Pepperoni Pizza",
    "dessert": "Peach Cobbler",
    "drink": "Blackberry Moscow Mule",
    "game": "Life"
}
const movie14 = {
    "movie": "Finding Nemo",
    "dinner": "Fish and Chips",
    "dessert": "Turtle Chocolates",
    "drink": "Malibu, Lime, Pineapple Juice, Swedish Fish",
    "game": "Go Fish"
}
const movie15 = {
    "movie": "Aristocats",
    "dinner": "French Onion Soup",
    "dessert": "Vanilla Cream Based Dessert",
    "drink": "Rumchata",
    "game": "Exploding Kittens"
}

// Variables
const btn = document.querySelector('#btn');

// Function
function startApp() {
    randomNum = Math.floor(Math.random(10) * 15) + 1; 
    let movieTitle = document.querySelector('#movie-title');
    let movieDinner = document.querySelector('#dinner-title');
    let movieDessert = document.querySelector('#dessert-title');
    let movieDrink = document.querySelector('#drink-title');
    let movieGame = document.querySelector('#game-title');
    console.log(randomNum);

    if (randomNum === 1) {
        movieTitle.innerHTML = movie1.movie;
        movieDinner.innerHTML = movie1.dinner;
        movieDessert.innerHTML = movie1.dessert;
        movieDrink.innerHTML = movie1.drink;
        movieGame.innerHTML = movie1.game;
    } if (randomNum === 2) {
        movieTitle.innerHTML = movie2.movie;
        movieDinner.innerHTML = movie2.dinner;
        movieDessert.innerHTML = movie2.dessert;
        movieDrink.innerHTML = movie2.drink;
        movieGame.innerHTML = movie2.game;
    } if (randomNum === 3) {
        movieTitle.innerHTML = movie3.movie;
        movieDinner.innerHTML = movie3.dinner;
        movieDessert.innerHTML = movie3.dessert;
        movieDrink.innerHTML = movie3.drink;
        movieGame.innerHTML = movie3.game;
    } if (randomNum === 4) {
        movieTitle.innerHTML = movie4.movie;
        movieDinner.innerHTML = movie4.dinner;
        movieDessert.innerHTML = movie4.dessert;
        movieDrink.innerHTML = movie4.drink;
        movieGame.innerHTML = movie4.game;
    } if (randomNum === 5) {
        movieTitle.innerHTML = movie5.movie;
        movieDinner.innerHTML = movie5.dinner;
        movieDessert.innerHTML = movie5.dessert;
        movieDrink.innerHTML = movie5.drink;
        movieGame.innerHTML = movie5.game;
    } if (randomNum === 6) {
        movieTitle.innerHTML = movie6.movie;
        movieDinner.innerHTML = movie6.dinner;
        movieDessert.innerHTML = movie6.dessert;
        movieDrink.innerHTML = movie6.drink;
        movieGame.innerHTML = movie6.game;
    } if (randomNum === 7) {
        movieTitle.innerHTML = movie7.movie;
        movieDinner.innerHTML = movie7.dinner;
        movieDessert.innerHTML = movie7.dessert;
        movieDrink.innerHTML = movie7.drink;
        movieGame.innerHTML = movie7.game;
    } if (randomNum === 8) {
        movieTitle.innerHTML = movie8.movie;
        movieDinner.innerHTML = movie8.dinner;
        movieDessert.innerHTML = movie8.dessert;
        movieDrink.innerHTML = movie8.drink;
        movieGame.innerHTML = movie8.game;
    } if (randomNum === 9) {
        movieTitle.innerHTML = movie9.movie;
        movieDinner.innerHTML = movie9.dinner;
        movieDessert.innerHTML = movie9.dessert;
        movieDrink.innerHTML = movie9.drink;
        movieGame.innerHTML = movie9.game;
    } if (randomNum === 10) {
        movieTitle.innerHTML = movie10.movie;
        movieDinner.innerHTML = movie10.dinner;
        movieDessert.innerHTML = movie10.dessert;
        movieDrink.innerHTML = movie10.drink;
        movieGame.innerHTML = movie10.game;
    } if (randomNum === 11) {
        movieTitle.innerHTML = movie11.movie;
        movieDinner.innerHTML = movie11.dinner;
        movieDessert.innerHTML = movie11.dessert;
        movieDrink.innerHTML = movie11.drink;
        movieGame.innerHTML = movie11.game;
    } if (randomNum === 12) {
        movieTitle.innerHTML = movie12.movie;
        movieDinner.innerHTML = movie12.dinner;
        movieDessert.innerHTML = movie12.dessert;
        movieDrink.innerHTML = movie12.drink;
        movieGame.innerHTML = movie12.game;
    } if (randomNum === 13) {
        movieTitle.innerHTML = movie13.movie;
        movieDinner.innerHTML = movie13.dinner;
        movieDessert.innerHTML = movie13.dessert;
        movieDrink.innerHTML = movie13.drink;
        movieGame.innerHTML = movie13.game;
    } if (randomNum === 14) {
        movieTitle.innerHTML = movie14.movie;
        movieDinner.innerHTML = movie14.dinner;
        movieDessert.innerHTML = movie14.dessert;
        movieDrink.innerHTML = movie14.drink;
        movieGame.innerHTML = movie14.game;
    } if (randomNum === 15) {
        movieTitle.innerHTML = movie15.movie;
        movieDinner.innerHTML = movie15.dinner;
        movieDessert.innerHTML = movie15.dessert;
        movieDrink.innerHTML = movie15.drink;
        movieGame.innerHTML = movie15.game;
    }
}

btn.addEventListener('click', startApp);