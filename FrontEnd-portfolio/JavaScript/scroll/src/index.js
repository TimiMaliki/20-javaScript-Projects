// Footer getFullDate

const date = document.querySelector("#date");
date.innerText = new Date().getFullYear();

// toggle navbar

const navbar = document.querySelector(".nav-toggle");
const container = document.querySelector(".links-container");
const links = document.querySelector(".links");

navbar.addEventListener("click", () => {
 container.classList.toggle('show-links')
    console.log('hello')
});
