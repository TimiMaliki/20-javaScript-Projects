// const minusIcon = document.querySelectorAll('.minus-icon')
const questionText = document.querySelector('.question-text')
const questions = document.querySelectorAll('.question')

questions.forEach((question)=>{
    const plusIcon = question.querySelector('.question-btn')
    plusIcon.addEventListener('click' , ()=> {
        questions.forEach((item) => {
             if(item !== plusIcon){
               questionText.classList.remove('show-text')
             }
        })
        
        question.classList.toggle('show-text')
    })

})