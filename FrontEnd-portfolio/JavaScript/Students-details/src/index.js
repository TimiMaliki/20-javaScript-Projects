const form = document.getElementById("studentForm");
const age = document.getElementById("age");
const nameOfStudent = document.getElementById("name");
const roll = document.getElementById("roll");
const studentDom = document.querySelector(".students");

const students = [];

const displayRegisteredStudents = (nameOfStudent, age, roll) => {
  const displayInnerHtml = `
    <ul class="list-items">
    <li class="items">${nameOfStudent}</li>
    <li class="items">${age}</li>
    <li class="items">${roll}</li>
  </ul>
    `;
  studentDom.innerHTML = displayInnerHtml;
};

const addStudents = (nameOfStudent, age, roll ) => {
  students.push({ nameOfStudent, age, roll });
  return (nameOfStudent, age, roll);
};

students.forEach(displayRegisteredStudents);

console.log(students);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const addNewStudents = addStudents(
    nameOfStudent.value,
    age.value,
    roll.value
  );

  displayRegisteredStudents(addNewStudents);
});
