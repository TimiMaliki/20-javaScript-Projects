document.addEventListener('DOMContentLoaded', function() {
   
gsap.registerPlugin(ScrollTrigger);

// Preloader Animations
const preloader = document.querySelector('.preloader');
const counter = document.querySelector('.counter');
const loader = document.querySelector('.loader');

const duration = 3000;

gsap.to(loader, {
  rotation: 360,
  duration: 1,
  repeat: -1,
  ease: 'linear'
});

const tl = gsap.timeline({
  onComplete: function() {
    preloader.style.display = 'none';
  }
});

tl.to(counter, {
  textContent: '100%',
  duration: duration / 1000,
  onUpdate: function() {
    const progress = Math.round(tl.progress() * 100);
    counter.textContent = `${progress}%`;
  }
});

// Cursor Animations
const cursorFollower = document.querySelector('.cursor-follower');
const links =  document.querySelectorAll('a');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursorFollower, {
        duration: 0.4,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
    });
});

links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      cursorFollower.classList.add('active');
    });
  
    link.addEventListener('mouseleave', () => {
      cursorFollower.classList.remove('active');
    });
});

// Marquee Animations
const marquee = document.querySelector('.marquee');
const marqueeContent = marquee.querySelector('div');
    
const clonedContent = marqueeContent.innerHTML.repeat(20);
marquee.innerHTML = clonedContent;
    
gsap.to(marquee, {
  xPercent: 50,
  duration: 3,
  ease: 'linear',
  repeat: -1,
  yoyo: true,
  scrollTrigger: {
    trigger: 'body',
    start: 'top center',
    end: 'bottom center',
    scrub: true
  },
});

/* Header section animations */
const headerImg = document.querySelector('.hero .img-responsive');
const headerTitle = document.querySelector('.hero h1');
const headerParagraph = document.querySelector('.hero p');
const headerButton = document.querySelector('.hero a');
const navLinks = document.querySelectorAll('.header li');

const tlHeader = gsap.timeline({delay: 4});
tlHeader
    .from([headerTitle, headerParagraph, headerButton], {
        opacity: 0, 
        y: 100, 
        duration: 1,
        stagger: 0.2
    })
    .from(headerImg, { 
      y: 10,
      x: -50,
      opacity: 0,
    }, 0.5)
    .from(navLinks, { 
      y: 10, 
      opacity: 0,
      stagger: 0.2
   })

/* About section animations */
const aboutSection = document.querySelector('.about');
const aboutSubTitle = document.querySelector('.about h3');
const aboutTitle = document.querySelector('.about h2');
const aboutParagraph = document.querySelector('.about p');
const aboutNumber = document.querySelector('.about .col-right h2');
const aboutText = document.querySelector('.about .col-right h4');

const tlAbout = gsap.timeline({
  scrollTrigger: {
      trigger: aboutSection,
      start: 'top center'
  }
});
tlAbout
  .from([aboutSubTitle, aboutTitle, aboutParagraph], {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power1.out'
  })
  .from([aboutNumber, aboutText], {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power1.out'
  }, 0.5)

/* Skills section animations */
const skillsSection = document.querySelector('.skills');
const skillsTitle = document.querySelector('.skills h2');
const skillsList = document.querySelectorAll('.skills li');

const tlSkills = gsap.timeline({
  scrollTrigger: {
      trigger: skillsSection,
      start: 'top center'
  }
});
tlSkills
  .from(skillsTitle, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power1.out'
  })
  .from(skillsList, {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    y: 50,
    ease: 'power1.out'
  })

/* Contact section animations */
const contactSection = document.querySelector('.contact');
const contactSubTitle = document.querySelector('.contact h3');
const contactTitle = document.querySelector('.contact h2');
const contactParagraph = document.querySelector('.contact p');
const contactLinks = document.querySelectorAll('.contact li');

const tlContact = gsap.timeline({
  scrollTrigger: {
      trigger: contactSection,
      start: 'top center'
  }
});
tlContact
  .from([contactSubTitle, contactTitle, contactParagraph], {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power1.out'
  })
  .from(contactLinks, {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    y: 50,
    ease: 'power1.out'
  })

});

