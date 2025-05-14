const remValue = document.querySelector(".rem");
const pxValue = document.querySelector(".px");
const remValueInput = document.querySelector(".remNum");
const pxValueInput = document.querySelector(".pxNum");
const button = document.querySelector(".btn");
const btn = document.querySelector('.btn-Two')
const resetBtn = document.querySelector(".reset-btn");




button.addEventListener("click", (e) => {
    remValueField()
    remValue.innerHTML = `${remValueInput.value}rem`
})

btn.addEventListener("click", (e) => {
    pxValueField()
    pxValue.innerHTML =  `${pxValueInput.value}px`
})


resetBtn.addEventListener("click", (e) => {
    pxValue.innerHTML = ""
    remValue.innerHTML = ""
    remValueInput.value = ""
    pxValueInput.value  = ""
})

function remValueField(){

    pxValue.innerHTML = `${remValueInput.value * 16 } px` 
 
}


function pxValueField(){
        remValue.innerHTML = `${pxValueInput.value / 16} rem`
        
}