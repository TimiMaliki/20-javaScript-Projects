// const increment = document.querySelector('.increase-btn')
// const decrement = document.querySelector('.decrease-btn')
// const reset = document.querySelector('.reset-btn')
// const number = document.querySelector('.number')

// let value = 0

// increment.addEventListener('click' , ()=>{
//     number.style.color = "gold"
//     const result = value++
//    number.innerText = result
//   console.log(value)
// })

// decrement.addEventListener('click' , ()=>{
//     number.style.color = "pink"
//     const result = value--
//    number.innerText = result
//   console.log(value)
// })

// reset.addEventListener('click' , ()=>{
//     value = 0
//     number.style.color = "black"
//    number.innerText = value
//   console.log(value)
// })

// OR

let value = 0;

const number = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const className = e.target.classList;
    // console.log(className);
    if (className.contains("increase-btn")) {
      number.style.color = "gold";
      const result = value++;
      number.innerText = result;
    } else if (className.contains("decrease-btn")) {
      number.style.color = "#E178C5";
      const result = value--;
      number.innerText = result;
    } else{
      value = 0;
      number.style.color = "black";
      number.innerText = value;
    }
  });
});
