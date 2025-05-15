const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const random = document.querySelector('.random')
const img = document.querySelector('.img')
const text = document.querySelector('.lorem')

const testimonials = [
{
    id : '1',
    text : "I had a vision for my online store but didn’t know how to bring it to life. Alabi not only created a stunning site but also optimized it for performance and SEO. My traffic and sales have both gone up since launching. Couldn’t be happier! — Jason M., Founder of UrbanThreads" ,
    image : "./image/pexels-almustapha-adam-1663967297-30159714.jpg"
},
{
    id : '2',
    text : "Working with Alabi was a game-changer for our business. They built us a beautiful, fast, and responsive website that truly reflects our brand. Communication was seamless, deadlines were met, and the final product exceeded our expectations. Highly recommended! — James ., Marketing Director at BloomCo",
    image : "./image/pexels-goodcitizen-2058659.jpg"
},
{
    id : '3',
    text : "From start to finish, Alabi made the whole process stress-free. They listened carefully to what I needed, offered expert suggestions, and delivered a website that's both functional and elegant. I get compliments on it all the time! — Emily R., Photographer ",
    image : "./image/pexels-megwara-favour-222329541-30369690.jpg"
},
]

let currentArray = 0


const showPeron = (person) => {
    const items = testimonials[person]
    img.src  = items.image
    text.innerText = items.text
}

window.addEventListener('DOMContentLoaded' , ()=>{
 showPeron(currentArray)
})




prev.addEventListener('click' , ()=>{
    currentArray--
    if(currentArray < 0){
        currentArray = testimonials.length - 1
    }
   
    showPeron(currentArray) 
})

next.addEventListener('click' , ()=>{
    currentArray++
    if(currentArray > testimonials.length - 1){
        currentArray = 0
    }
  
    showPeron(currentArray) 
})

random.addEventListener('click' , ()=>{

    const randomImage = Math.floor(Math.random() *testimonials.length)
    const select = testimonials[randomImage]
    img.src  = select.image
    text.innerText = select.text 
})