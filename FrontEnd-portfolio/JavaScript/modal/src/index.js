const openModal = document.querySelector('.modal-btn')
const closeModal = document.querySelector('.close-btn')
const modalOverLay = document.querySelector('.modal-overlay')


openModal.addEventListener('click' , ()=>{
  modalOverLay.classList.add('open-modal')
})