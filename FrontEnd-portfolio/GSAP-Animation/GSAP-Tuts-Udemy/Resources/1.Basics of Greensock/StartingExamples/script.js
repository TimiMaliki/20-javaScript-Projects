document.addEventListener('DOMContentLoaded', function() {

// GSAP Object
const greenSquare = document.querySelector('.greenSquare');
gsap.to(greenSquare,{
    duration: 2,
    x: 200,
    y: 200,
    rotation: 360,
    opacity:0.6,
    background: "blue",
    ease:'power1.out'
})

// gsap.from()
const orangeSquare = document.querySelector('.orangeSquare');


// gsap.to()
const purpleSquare = document.querySelector('.purpleSquare');


// gsap.fromTo()
const blueSquare = document.querySelector('.blueSquare');


// Delay & Repeat
const circleYellow = document.querySelector('.circleYellow');
const circleRed = document.querySelector('.circleRed');
const circleGreen  = document.querySelector('.circleGreen');


// Ease
const circleBlue = document.querySelector('.circleBlue');

// Stagger


});
