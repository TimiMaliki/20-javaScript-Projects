document.addEventListener('DOMContentLoaded', function() {

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger Intro
const navySquare = document.querySelector('.navySquare');
const sectionTitle = document.querySelector('h1');

gsap.to(navySquare ,{
    duration : 10,
    x : 300, 
    y: 500,
    rotation: 90,
    borderRadius : "50%",
    ease:"bounce",
    scale : 4.9,
    scrollTrigger :  sectionTitle
})

// ScrollTrigger Basic Implementation
// #f3a712
const redSquare = document.querySelector('.redSquare');
gsap.to(redSquare,{
    duration : 10,
    x : 700, 
    rotation: 360,
    background : "#f3a712",
    scrollTrigger : {
        trigger : redSquare,
        markers : true,
        start: "top 75%",
        end : "bottom 25%",
        toggleActions : "restart pause reverse reset"
    }
})

// ScrollTrigger Scrub & Pin
const tanSection = document.querySelector('.tanSection');
const redBar = document.querySelector('.redBar');

const tl = gsap.timeline()

tl.to(redBar,{
    width: "100%",
    duration : 3,
    scrollTrigger : {
        trigger : tanSection ,
        scrub : true,
        pin: true
    }
})


});