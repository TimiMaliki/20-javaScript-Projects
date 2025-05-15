const videoContainer = document.querySelector('.video-container')
const btn = document.querySelector('.switch-btn')
const preloader = document.querySelector('.preloader')



btn.addEventListener('click' , ()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        videoContainer.pause()
        console.log('pause')
    }else{
        btn.classList.remove('slide')
        videoContainer.play()
        console.log('play')
    }
})

// window.addEventListener('load' , ()=>{
//     preloader.classList.add('hide-preloader')
// })


setTimeout(() => {
    preloader.classList.add('hide-preloader')
}, 3000)