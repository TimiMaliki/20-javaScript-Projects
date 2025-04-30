const toggle = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const links = document.querySelector('.sidebar')


toggle.addEventListener('click' , ()=>{
 links.classList.toggle('show-sidebar')
})