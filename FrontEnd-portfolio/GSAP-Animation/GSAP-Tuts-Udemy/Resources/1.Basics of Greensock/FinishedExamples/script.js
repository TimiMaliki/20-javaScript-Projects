document.addEventListener('DOMContentLoaded', function() {

// GSAP Object
const greenSquare = document.querySelector('.greenSquare');

gsap.to(greenSquare, {
    duration: 2,
    x: 300,
    rotation: 360,
    opacity: 0.5,
    backgroundColor: 'red',
    ease: "power1.out"
});

// gsap.from()
const orangeSquare = document.querySelector('.orangeSquare');

gsap.from(orangeSquare, {
    duration: 2,
    x: 500,
    opacity: 0,
    scale: 0.5,
    rotation: -90,
    ease: "bounce.out"
  });

// gsap.to()
const purpleSquare = document.querySelector('.purpleSquare');

gsap.to(purpleSquare, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: "50%",
  backgroundColor: "green",
  ease: "bounce.out"
});

// gsap.fromTo()
const blueSquare = document.querySelector('.blueSquare');

gsap.fromTo(blueSquare, {
  x: -500,
  opacity: 0
}, {
  duration: 2,
  x: 500,
  opacity: 1,
  ease: "power2.out"
});

// Delay & Repeat
const circleYellow = document.querySelector('.circleYellow');
const circleRed = document.querySelector('.circleRed');
const circleGreen  = document.querySelector('.circleGreen');

gsap.to(circleYellow, {duration: 1, x: 500});
gsap.to(circleRed, {duration: 1, x: 500, delay: 1, repeat: -1, yoyo: true});
gsap.to(circleGreen, {duration: 1, x: 500, delay: 2});

// Ease
const circleBlue = document.querySelector('.circleBlue');
gsap.to(circleBlue,{
  x: 500,
  duration: 2,
  ease: "back.out(1.5)"
})

// Stagger
gsap.from('.box', {
  y: -50,
  stagger: {
    each: 0.1,
    from: 'edges'
  }
})

});
