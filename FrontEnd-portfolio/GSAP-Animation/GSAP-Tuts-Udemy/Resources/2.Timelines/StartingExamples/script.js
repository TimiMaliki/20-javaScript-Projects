document.addEventListener('DOMContentLoaded', function() {

// GSAP Timeline
const blueBox = document.querySelector('.blueBox');
const greenBox = document.querySelector('.greenBox');
const orangeBox  = document.querySelector('.orangeBox');
const redBox = document.querySelector('.redBox');
const purpleBox = document.querySelector('.purpleBox');

const tl = gsap.timeline()
 tl.to(blueBox , {
    duration : 1 ,
    y : 100
 })

 tl.to(greenBox , {
    duration : 1 ,
    y: -100,
 })
 tl.to(orangeBox, {
    duration : 1 ,
    scale : 1.5
 })
 tl.to(redBox, {
    duration : 1 ,
    rotate: 100
 })
 tl.to(purpleBox, {
    duration : 1 ,
    opacity: 0.4
 })

// The Position Parameter
const yellowCircle = document.querySelector('.yellowCircle ');
const blueCircle = document.querySelector('.blueCircle');
const greenCircle  = document.querySelector('.greenCircle');

const animate = gsap.timeline()

animate
.to(yellowCircle ,{
    duration : 2,
    x : 300
})
.to(blueCircle,{
    duration : 1,
    x : 300
}, 2)
.to(greenCircle,{
    duration : 1,
    x : 300
}, 3)

// Timeline Control and Labels
// #6B8E23
// #FF5733
// #C70039
const yellowSquare = document.querySelector('.yellowSquare');
const timeline = gsap.timeline();

timeline
.to(yellowSquare,{
    duration : 2,
    x : 300,
    rotation:90,
    backgroundcolor:  "#6B8E23",
    // borderRadius : "50%"
})
.addLabel("smaller")
.to(yellowSquare,{
    duration : 1,
    scaleX: 0.5,
    scaleY: 0.5,
    backgroundcolor:  "#FF5733",
    borderRadius : "50%"
})
.to(yellowSquare,{
    duration : 1,
    x: 100,
    y:100,
    backgroundcolor:  "##C70039",
    // borderRadius : "50%"
})

// Add control buttons
document.querySelector('#pause').addEventListener('click', function() {
    timeline.pause()
});
  
document.querySelector('#restart').addEventListener('click', function() {
    timeline.restart()
});
  
document.querySelector('#reverse').addEventListener('click', function() {
    timeline.reverse()
});
  
document.querySelector('#play').addEventListener('click', function() {
    timeline.play()
});

// Add play button with a delay
document.querySelector('#play-delay').addEventListener('click', function() {
    timeline.play("smaller")
});

});