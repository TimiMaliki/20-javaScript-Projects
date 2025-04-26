const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const img = document.querySelector('.img')
const text = document.querySelector('.lorem')

const testimonials = [
{
    id : '1',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur maxime pariatur possimus accusantium eius modi? Adipisci." ,
    image : "./image/pexels-almustapha-adam-1663967297-30159714.jpg"
},
{
    id : '2',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur maxime pariatur possimus accusantium eius modi? Adipisci." ,
    image : "./image/pexels-goodcitizen-2058659.jpg"
},
{
    id : '3',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur maxime pariatur possimus accusantium eius modi? Adipisci." ,
    image : "./image/pexels-megwara-favour-222329541-30369690.jpg"
},
]

let currentArray = 0


const e = (items) => {
    img.src  = items.image
    text.innerText = items.text
}

window.addEventListener('DOMContentLoaded' , ()=>{
 const items = testimonials[currentArray]
 el(items)
})


// prev.addEventListener('click' , ()=>{
//     const randomTestimonial = Math.floor(Math.random() * testimonials.length)
//     const picked = testimonials[randomTestimonial]
//      const image = document.querySelector('.image ')
//        image.src = picked.image
//      const text = document.querySelector('.lorem') 
//      text.innerText = picked.text


//     console.log(picked)
// })