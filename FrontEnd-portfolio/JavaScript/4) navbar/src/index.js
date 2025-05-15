const menuToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

// FIRST METHOD

// menuToggle.addEventListener('click' , (e)=>{
//    const showMenu = e.target.classList
//    if(showMenu.contains('fa-bars')){
//      links.classList.toggle("show-links")
//    }

// //    console.log(links.classList.contains('links'))
// })


// SECOND METHOD

menuToggle.addEventListener('click' , ()=>{
    if(links.classList.contains('links')){
        links.classList.toggle("show-links")
    }
})
