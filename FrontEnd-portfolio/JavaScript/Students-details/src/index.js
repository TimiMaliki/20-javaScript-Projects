const form = document.getElementById('studentForm')
const  age = document.getElementById('age')
const nameOfStudent = document.getElementById('name')
const roll = document.getElementById('roll')
const studentDom = document.querySelector('.students')

const students = [{
   nameOfStudent : "yusuf",
    age : 23 ,
    roll : 4
}]
 
const displayRegisteredStudents = ({nameOfStudent , age , roll}) =>{
    const displayInnerHtml = `
    <ul class="list-items">
    <li class="items">${nameOfStudent.value}</li>
    <li class="items">${age.value}</li>
    <li class="items">${roll.value}</li>
  </ul>
    `
    studentDom.innerHTML = displayInnerHtml
}

const addStudents = ({nameOfStudent , age ,roll})=>{

    const addUp = {
        nameOfStudent,age,roll
    }

    students.push(addUp)
}


students.forEach(displayRegisteredStudents)

console.log(students)

form.addEventListener('submit' , (e)=>{
  e.preventDefault()
 

})