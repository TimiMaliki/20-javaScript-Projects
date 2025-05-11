const form = document.getElementById("studentForm");
const age = document.getElementById("age");
const nameOfStudent = document.getElementById("name");
const roll = document.getElementById("roll");
const studentDom = document.querySelector(".students");

const students = [];

const displayRegisteredStudents = ({person, age, roll}) => {


// const displayInnerHtml  = `
//      <ul class ="list-items">

//      <li class= "items">
//        ${person}
//      </li>
//      <li class= "items">
//        ${age}
//      </li>
//      <li class= "items">
//         ${roll}
//      </li>

//      </ul>
// `

// studentDom.innerHTML = displayInnerHtml

  const container = document.createElement("ul")
  container.classList.add('list-items')
  const studentName= document.createElement("li")
  const studentAge= document.createElement("li")
  const studentRoll= document.createElement("li")
  container.classList.add('list-items')
  studentName.classList.add('items')
  studentAge.classList.add('items')
  studentRoll.classList.add('items')

   studentName.innerText = person
   studentAge.innerText = age
   studentRoll.innerText = roll

   container.append(studentName,studentAge,studentRoll)
  studentDom.appendChild(container)
};

const addStudents = (person, age, roll ) => {
  students.push({ person, age, roll });
  return {person, age, roll};
};

students.forEach(displayRegisteredStudents);

console.log(students);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const addNewStudents = addStudents(
    nameOfStudent.value ,
    age.value,
    roll.value
  );

  displayRegisteredStudents(addNewStudents);


  nameOfStudent.value = ''
    age.value = ''
    roll.value = ''
});
