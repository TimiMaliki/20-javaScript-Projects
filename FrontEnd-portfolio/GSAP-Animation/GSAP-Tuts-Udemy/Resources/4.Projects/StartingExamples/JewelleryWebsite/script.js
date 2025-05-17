document.addEventListener('DOMContentLoaded', function() {
    
gsap.registerPlugin(ScrollTrigger);

/* Progress bar animations */
const progress = document.querySelector('.progress');


/* Header section animations */
const heroImg = document.querySelector('.hero');
const headerTitle = document.querySelector('.hero h1');
const headerSubTitle = document.querySelector('.hero h3');
const headerButton = document.querySelector('.hero a');
const dividerTop = document.querySelector('.hero .divider-top');
const dividerBottom = document.querySelector('.hero .divider-bottom');
const logo = document.querySelector('.header .logo');
const navLinks = document.querySelectorAll('.header li');


/* About section animations */
const aboutSection = document.querySelector('.about');
const aboutTitle = document.querySelector('.about h2');
const aboutSubTitle = document.querySelector('.about p');
const aboutButton = document.querySelector('.about a');
const aboutImage = document.querySelector('.about .img-responsive');

const tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger: aboutSection,
        start: 'top center'
    }
});
tlAbout
    .from(aboutTitle, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power1.out'
    })
    .from(aboutSubTitle, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power1.out'
    }, '-=0.5')
    .from(aboutButton, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power1.out'
    }, '-=0.5')
    .from(aboutImage, {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: 'back.out(1.7)'
    }, '-=1');


/* Shop section animations */
const shopSection = document.querySelector('.shop');
const shopImages = document.querySelectorAll('.shop .img-responsive');


/* Cta section animations */
const ctaSection = document.querySelector('.cta');
const ctaTitle = document.querySelector('.cta h1');
const ctaSubTitle = document.querySelector('.cta h3');
const ctaButton = document.querySelector('.cta a');

const tlCta = gsap.timeline({
    scrollTrigger: {
      trigger: ctaSection,
      start: "top center",
    }
});
  
tlCta
    .from([ctaTitle, ctaSubTitle, ctaButton], {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.5
})

/* New Products section animations */
// #5D5458
const newSection = document.querySelector('.new');
const newImages = document.querySelectorAll('.new .img-responsive');
const newDescription = document.querySelectorAll('.new p');
const newButton = document.querySelector('.new .button');

const tlNew = gsap.timeline({
    scrollTrigger: {
      trigger: newSection,
      start: 'top center',
    }
});

tlNew
  .from(newImages, {
    opacity: 0,
    y: 100,
    duration: 1
  })
  .from(newDescription, {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1
  }, '-=1')
  .from(newButton, {
    opacity: 0,
    y: 100,
    duration: 1
  }, '-=0.5');


})