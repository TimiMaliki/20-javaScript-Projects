const plusIcon = document.querySelectorAll('.question-btn')
const minusIcon = document.querySelectorAll('.minus-icon')
const questionText = document.querySelector('.question-text')
const p = questionText.querySelectorAll('p')

plusIcon.forEach((icon) => {
        icon.addEventListener('click' , ()=>{
               p.forEach((text) =>{
                 console.log(text)
                 text.classList.remove('question-text')
               })
        })
})
    