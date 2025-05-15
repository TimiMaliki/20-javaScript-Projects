const remValue = document.querySelector(".rem");
const pxValue = document.querySelector(".px");
const remValueInput = document.querySelector(".remNum");
const pxValueInput = document.querySelector(".pxNum");
const rightArrow = document.querySelector(".btn");
const leftArrow = document.querySelector('.btn-Two')
const resetBtn = document.querySelector(".reset-btn");
const statusHtml = document.querySelector(".statusUpdate")
const update = document.querySelector(".update")








rightArrow.addEventListener('click' , ()=>{
    remFunc()
    remValue.innerHTML = ""
})

leftArrow.addEventListener('click' , ()=>{
    pxFunc()
    pxValue.innerHTML = ""
})


const remFunc = ()=>{
    if(!remValueInput.value || remValueInput.value  <= 0){
        emptyValue()
 }else{
     const result = remValueInput.value * 16
     pxValue.innerHTML = `${result}px`
     SuccessStatus()
     remValueInput.value = ''
 }
}


const pxFunc = () => {
    if(!pxValueInput.value || pxValueInput.value == 0){
        emptyValue()
    }else{
        const result = pxValueInput.value / 16
        remValue.innerHTML = `${result}rem`
        SuccessStatus()
        pxValueInput.value = ""
    }
}


resetBtn.addEventListener("click", (e) => {
    pxValue.innerHTML = ""
    remValue.innerHTML = ""
    remValueInput.value = ""
    pxValueInput.value  = ""
    reset()
})



const emptyValue = ()=>{
    setTimeout(() =>{
        statusHtml.classList.remove("visibility")
        update.innerHTML = "please provide a value"
    }, 1000)

    return
}


const SuccessStatus = ()=>{
    setTimeout(() =>{
        statusHtml.classList.remove("visibility")
        update.textContent = "Success"
    }, 1000)

    return
}


const reset = ()=>{
    setTimeout(() =>{
        statusHtml.classList.remove("visibility")
        update.textContent = "Start Converting"
    }, 1000)
}