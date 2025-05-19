document.addEventListener('DOMContentLoaded', function() {
    
    var tl = gsap.timeline({repeat: -1, yoyo: true});

    tl.to('h1', { 
        backgroundPosition: '-960px 0',
        duration: 10,
        ease: 'power1.inOut'
    });

})
