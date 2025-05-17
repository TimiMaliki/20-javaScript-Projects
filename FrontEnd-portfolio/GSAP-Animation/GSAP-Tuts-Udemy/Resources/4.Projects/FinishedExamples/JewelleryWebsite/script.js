document.addEventListener('DOMContentLoaded', function() {
    
gsap.registerPlugin(ScrollTrigger);

/* Progress bar animations */
const progress = document.querySelector('.progress');

gsap.to(progress, {
    width: '100%',
    duration: 1,
    ease: 'power1.inOut',
    scrollTrigger: {
        trigger: 'body',
        start: 'top 0%',
        end: 'bottom 100%',
        scrub: true
    }
});

/* Header section animations */
const heroImg = document.querySelector('.hero');
const headerTitle = document.querySelector('.hero h1');
const headerSubTitle = document.querySelector('.hero h3');
const headerButton = document.querySelector('.hero a');
const dividerTop = document.querySelector('.hero .divider-top');
const dividerBottom = document.querySelector('.hero .divider-bottom');
const logo = document.querySelector('.header .logo');
const navLinks = document.querySelectorAll('.header li');

const tlHeader = gsap.timeline();
tlHeader
    .from([headerTitle, headerSubTitle, headerButton], {
        opacity: 0, 
        y: 100, 
        duration: 0.8,
        stagger: 0.2
    })
    .from(dividerTop, {
        scaleX: 0,
        duration: 1,
        ease: 'power1.inOut',
        transformOrigin:'left'
    })
    .from(dividerBottom, {
        scaleX: 0,
        duration: 1,
        ease: 'power1.inOut',
        transformOrigin:'right'
    }, '-=1')
    .from([logo, navLinks], { 
        y: 10, 
        opacity: 0,
        stagger: 0.2
    })
    .to(heroImg, {
        duration: 4,
        backgroundPosition: '50% 70%',
        ease: 'slow(0.7, 0.7, false)'
    }, 1)

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

const tlShop = gsap.timeline({
    scrollTrigger: {
      trigger: shopSection,
      start: 'top center',
      scrub: true,
    },
});

tlShop
    .from(shopImages, {
        duration: 1,
        opacity: 0,
        y: 150,
        stagger: 0.2,
        ease: 'power1.out',
    });

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
  .to(newSection, {
    backgroundColor: '#5D5458',
    duration: 1
  })
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