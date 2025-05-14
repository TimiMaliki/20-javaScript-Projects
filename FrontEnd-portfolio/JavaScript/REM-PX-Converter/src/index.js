const remValue = document.querySelector(".rem");
const pxValue = document.querySelector(".px");
const remValueInput = document.querySelector(".remNum");
const pxValueInput = document.querySelector(".pxNum");
const rightArrow = document.querySelector(".btn");
const leftArrow = document.querySelector('.btn-Two')
const resetBtn = document.querySelector(".reset-btn");




// rightArrow.addEventListener("click", (e) => {
//     remValueField()
//     remValue.innerHTML = `${remValueInput.value}rem`
//     pxValue.innerHTML = ""
//     remValue.innerHTML = ""
//     remValueInput.value = ""
//     pxValueInput.value  = ""
// })

// leftArrow.addEventListener("click", (e) => {
//     pxValueField()
//     pxValue.innerHTML =  `${pxValueInput.value}px`
// })


resetBtn.addEventListener("click", (e) => {
    pxValue.innerHTML = ""
    remValue.innerHTML = ""
    remValueInput.value = ""
    pxValueInput.value  = ""
})

// function remValueField(){

//     pxValue.innerHTML = `${remValueInput.value * 16 } px` 
 
// }


// function pxValueField(){
//         remValue.innerHTML = `${pxValueInput.value / 16} rem`
//         pxValue.innerHTML = ""
//         // remValueInput.value = ""
//         // pxValueInput.value  = ""
// }



rightArrow.addEventListener('click' , ()=>{
    if(!remValueInput.value){
           alert("empty")
    }else{
       
        const result = remValueInput.value * 16
        pxValue.innerHTML = `${result}px`
        remValueInput.value = ''
        remValue.innerHTML = ""
    }
})

leftArrow.addEventListener('click' , ()=>{
    if(!pxValueInput.value){
        alert("empty")
    }else{
        pxValue.innerHTML = ""
        const result = pxValueInput.value / 16
        remValue.innerHTML = `${result}rem`
        pxValueInput.value = ""
    }
})


