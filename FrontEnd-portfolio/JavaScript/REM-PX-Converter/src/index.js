const remValue = document.querySelector(".rem");
const pxValue = document.querySelector(".px");
const remValueInput = document.querySelector(".remNum");
const pxValueInput = document.querySelector(".pxNum");
const rightArrow = document.querySelector(".btn");
const leftArrow = document.querySelector('.btn-Two')
const resetBtn = document.querySelector(".reset-btn");








rightArrow.addEventListener('click' , ()=>{
    remFunc()
    remValue.innerHTML = ""
})

leftArrow.addEventListener('click' , ()=>{
    pxFunc()
    pxValue.innerHTML = ""
})


const remFunc = ()=>{
    if(!remValueInput.value){
        alert("empty")
 }else{
     const result = remValueInput.value * 16
     pxValue.innerHTML = `${result}px`
     remValueInput.value = ''
 }
}


const pxFunc = () => {
    if(!pxValueInput.value){
        alert("empty")
    }else{
        const result = pxValueInput.value / 16
        remValue.innerHTML = `${result}rem`
        pxValueInput.value = ""
    }
}


resetBtn.addEventListener("click", (e) => {
    pxValue.innerHTML = ""
    remValue.innerHTML = ""
    remValueInput.value = ""
    pxValueInput.value  = ""
})

