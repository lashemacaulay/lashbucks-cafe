let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburger = document.querySelector(".hamburger");
const searchBar = document.getElementById("searchBar");
const clearSearch = document.getElementById("clearSearch");
const menuArea = document.querySelector(".menu-area");
const drinksContainer = document.querySelector(".drinks-container");
const foodContainer = document.querySelector(".food-container");
const drinkItems = drinksContainer.querySelectorAll(".drink-item");
const foodItems = foodContainer.querySelectorAll(".food-item");
const noFoodMessage = document.getElementById("noFoodMessage");
const noDrinksMessage = document.getElementById("noDrinksMessage");

hamburger.addEventListener('click', function () {
    hamburgerMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
})

searchBar.addEventListener("input", function() {
    if (searchBar.value == "") {
        clearSearch.style.display = "none";
        menuArea.style.display = "flex";

        drinkItems.forEach(item => item.style.display = "flex");
        foodItems.forEach(item => item.style.display = "flex");
    } else {
        clearSearch.style.display = "block";

        drinkItems.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(searchBar.value.toLowerCase()) ? "block" : "none";
        });

        foodItems.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(searchBar.value.toLowerCase()) ? "block" : "none";
        });
    }  
    
    if (!foodContainer.innerText) {
        noFoodMessage.style.display = "block";
    } else {
        noFoodMessage.style.display = "none";
        foodContainer.style.display = "flex";
    }

    if (!drinksContainer.innerText) {
        noDrinksMessage.style.display = "block";
    } else {
        noDrinksMessage.style.display = "none";
        drinksContainer.style.display = "flex";
    }
})

clearSearch.addEventListener("click", function() {
    searchBar.value = "";
    clearSearch.style.display = "none";
    menuArea.style.display = "flex";
    drinkItems.forEach(item => item.style.display = "flex");
    foodItems.forEach(item => item.style.display = "flex");
    noFoodMessage.style.display = "none";
    noDrinksMessage.style.display = "none";
})