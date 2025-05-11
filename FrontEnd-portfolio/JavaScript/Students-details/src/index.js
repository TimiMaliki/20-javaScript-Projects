const form = document.getElementById('studentForm')
const  age = document.getElementById('age')
const nameOfStudent = document.getElementById('name')
const roll = document.getElementById('roll')

form.addEventListener('submit' , (e) =>{
    e.preventDefault()
    //  console.log('One million two million')

     const ageValue = age.value
     const nameValue = nameOfStudent.value
     const rollValue = roll.value
     document.querySelector('.students').innerHTML = `${nameOfStudent} , ${nameValue} , ${rollValue}`
     console.log(ageValue,nameValue,rollValue)

})