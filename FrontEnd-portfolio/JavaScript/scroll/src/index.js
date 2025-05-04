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

// console.log(linksHeight)

if(linkContainerHeight === 0){
    container.style.height = `${linksHeight}px`
}else{
    container.style.height = 0
}
});


const nav = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll' , ()=> {

    const navHeight = nav.getBoundingClientRect().height
    const windowsHeight = window.pageYOffset
   if(windowsHeight > navHeight ){
        nav.classList.add('fixed-nav')
    
   }else{
    nav.classList.remove('fixed-nav')
   }


   if(windowsHeight > 500){
    topLink.classList.toggle('show-link')
   }
})