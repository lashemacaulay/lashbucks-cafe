let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function () {
    hamburgerMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
})
