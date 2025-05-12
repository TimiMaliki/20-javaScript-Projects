// Add contact modal

const modalBtn = document.querySelector('.modalBtn')
const contactContainer = document.querySelector('.modal-overlay')
const closeContactBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click' , ()=> {
contactContainer.classList.toggle('open-modal')
})

closeContactBtn.addEventListener('click' , ()=>{
    contactContainer.classList.remove('open-modal')
})
