const form = document.getElementById("studentForm");
const age = document.getElementById("age");
const nameOfStudent = document.getElementById("name");
const roll = document.getElementById("roll");
const studentDom = document.querySelector(".students");

const students = JSON.parse(localStorage.getItem("items")) || [];

const displayRegisteredStudents = ({ person, age, roll }) => {
  const container = document.createElement("ul");
  container.classList.add("list-items");
  const studentName = document.createElement("li");
  const studentAge = document.createElement("li");
  const studentRoll = document.createElement("li");
  container.classList.add("list-items");
  studentName.classList.add("items");
  studentAge.classList.add("items");
  studentRoll.classList.add("items");

  studentName.innerText = person;
  studentAge.innerText = age >= 1 ? age : "error(age is below One)";
  studentRoll.innerText = roll;

  container.append(studentName, studentAge, studentRoll);
  studentDom.appendChild(container);
};

const addStudents = (person, age, roll) => {
  students.push({ person, age, roll });
   localStorage.setItem("items" , JSON.stringify(students))
  return { person, age, roll };
};

// console.log(students);

students.forEach(displayRegisteredStudents)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const addNewStudents =

  displayRegisteredStudents(
    addStudents(nameOfStudent.value, age.value, roll.value)
  );

  nameOfStudent.value = "";
  age.value = "";
  roll.value = "";
});
