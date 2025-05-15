const sliderContainer = document.querySelector('.slider-container')
const slides = sliderContainer.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')


let incrementCounter = 0


slides.forEach((slide,index) => {
 slide.style.left = `${index * 100}%`

})

nextBtn.addEventListener('click' , ()=>{
    incrementCounter++
    slider()
 })

 prevBtn.addEventListener('click',()=>{
    incrementCounter--
    slider()
 })


 const slider = () => {

    if(incrementCounter === slides.length){
        incrementCounter =  0
    }
    slides.forEach((slide)=>{
        slide.style.transform  = `translateX(-${incrementCounter * 100}%)`
      
     })
}

