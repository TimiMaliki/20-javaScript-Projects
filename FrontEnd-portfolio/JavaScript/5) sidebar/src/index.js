const toggle = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const links = document.querySelector('.sidebar')


// toggle.addEventListener('click' , ()=>{
//     if(links.classList.contains('show-sidebar')){
//         links.classList.remove('show-sidebar')
//     }else{
//         links.classList.add('show-sidebar')
//     }
//    })


toggle.addEventListener('click' , ()=>{
 links.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click' , ()=>{
    links.classList.remove('show-sidebar')
})