const btns = document.querySelectorAll('.tab-btn')


btns.forEach((btn) => {
  btn.addEventListener("click" , (e)=> {
          const id = e.target.dataSet
          console.log(id)
  })
})