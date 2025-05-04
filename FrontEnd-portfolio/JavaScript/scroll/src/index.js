// Footer getFullDate

const date = document.querySelector("#date");
date.innerText = new Date().getFullYear();

// toggle navbar

const navbar = document.querySelector(".nav-toggle");
const container = document.querySelector(".links-container");
const links = document.querySelector(".links");

navbar.addEventListener("click", () => {

const linkContainerHeight = container.getBoundingClientRect().height
const linksHeight = links.getBoundingClientRect().height

console.log(linksHeight)

if(linkContainerHeight === 0){
 container.style.height = `${linksHeight}px`
}else{
    container.style.height = 0
}


});
