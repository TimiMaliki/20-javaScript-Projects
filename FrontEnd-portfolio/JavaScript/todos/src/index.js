// const btn = document.querySelector(".Add-task");
// const  alertInfo = document.querySelector('.alert-text h3')

// const handleInput = () => {
//   const taskInput = document.getElementById("input-task-value").value;

//   DomContent(taskInput);
// };

// btn.addEventListener("click", handleInput);



// const DomContent = (taskInput) => {
//   const taskEl = document.querySelector(".task-el");
 
//   if (!taskInput) {
//     alertInfo.classList.add('danger')
//     alertInfo.classList.remove('success')
//     alertInfo.textContent = "Input cannot be empty , please provide an input, Thanks!"
//     dangerAlert(alertInfo)
//   } else {
//     const task__content = document.createElement("div");

//     task__content.classList.add("task-content");

//     const content__h2 = document.createElement("div");
//     content__h2.classList.add("content-h2");

//     const h2 = document.createElement("input");
//     h2.classList.add("input-edit");
//     h2.innerHTML = taskInput;

   
//     h2.type = "text";
//     h2.value = taskInput;
//     h2.setAttribute("readonly", "readonly");

//     content__h2.appendChild(h2);

//     const actions = document.createElement("div");
//     actions.classList.add("actions");

//     const edit = document.createElement("div");
//     edit.classList.add("edit");

//     const editBtn = document.createElement("button");
//     editBtn.innerText = "Edit";
//     editBtn.classList.add("edit-task");

//     edit.appendChild(editBtn);

//     const del = document.createElement("div");
//     del.classList.add("delete");

//     const delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     delBtn.classList.add("del-task");

//     del.appendChild(delBtn);

//     actions.appendChild(edit);
//     actions.appendChild(del);

//     task__content.appendChild(content__h2);
//     task__content.appendChild(actions);

//     taskEl.appendChild(task__content);
//     console.log(task__content)
     
//     actionBtn(delBtn, editBtn, h2, task__content);

//     alertInfo.classList.remove('danger')
//     alertInfo.classList.add('success')
//     alertInfo.textContent = "Success!"

//     successAlert(alertInfo)


//     document.getElementById("input-task-value").value = "";
//   }
// };



// const actionBtn = (delBtn, editBtn, h2, task__content) => {
//   delBtn.addEventListener("click", () => {
//     task__content.remove();
//   });

//   editBtn.addEventListener("click", () => {
//     if (editBtn.innerText === "Edit") {
//       console.log(true);
//       h2.removeAttribute("readonly");
//       h2.focus();
//       editBtn.innerText = "Save";
//     } else {
//       h2.setAttribute("readonly", "readonly");
//       editBtn.innerText = "Edit";
//     }
//   });
// };

// const dangerAlert = (alertInfo) => {
//     setTimeout(() => {
//         alertInfo.textContent = ""
//         alertInfo.classList.remove('danger')
//        }, 1000);
// }

// const successAlert = (alertInfo) => {
//     setTimeout(() => {
//         alertInfo.textContent = ""
//         alertInfo.classList.remove('success')
//        }, 1000)
// }


const btn = document.querySelector(".Add-task");
const alertInfo = document.querySelector('.alert-text h3');
const taskEl = document.querySelector(".task-el");

const handleInput = () => {
  const taskInput = document.getElementById("input-task-value").value;
  DomContent(taskInput);
};

btn.addEventListener("click", handleInput);

const DomContent = (taskInput, fromStorage = false) => {
  if (!taskInput) {
    alertInfo.classList.add('danger');
    alertInfo.classList.remove('success');
    alertInfo.textContent = "Input cannot be empty, please provide an input, Thanks!";
    dangerAlert(alertInfo);
    return;
  }

  const task__content = document.createElement("div");
  task__content.classList.add("task-content");

  const content__h2 = document.createElement("div");
  content__h2.classList.add("content-h2");

  const h2 = document.createElement("input");
  h2.classList.add("input-edit");
  h2.type = "text";
  h2.value = taskInput;
  h2.setAttribute("readonly", "readonly");

  content__h2.appendChild(h2);

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const edit = document.createElement("div");
  edit.classList.add("edit");

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-task");

  edit.appendChild(editBtn);

  const del = document.createElement("div");
  del.classList.add("delete");

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("del-task");

  del.appendChild(delBtn);

  actions.appendChild(edit);
  actions.appendChild(del);

  task__content.appendChild(content__h2);
  task__content.appendChild(actions);

  taskEl.appendChild(task__content);

  actionBtn(delBtn, editBtn, h2, task__content);

  if (!fromStorage) {
    saveToLocalStorage(h2.value);
  }

  alertInfo.classList.remove('danger');
  alertInfo.classList.add('success');
  alertInfo.textContent = "Success!";
  successAlert(alertInfo);

  document.getElementById("input-task-value").value = "";
};

const actionBtn = (delBtn, editBtn, h2, task__content) => {
  delBtn.addEventListener("click", () => {
    removeFromLocalStorage(h2.value);
    task__content.remove();
  });

  editBtn.addEventListener("click", () => {
    if (editBtn.innerText === "Edit") {
      h2.removeAttribute("readonly");
      h2.focus();
      editBtn.innerText = "Save";
    } else {
      const oldValue = h2.getAttribute("data-old-value") || h2.value;
      updateLocalStorage(oldValue, h2.value);
      h2.setAttribute("readonly", "readonly");
      editBtn.innerText = "Edit";
    }
  });

  h2.setAttribute("data-old-value", h2.value);
};

const dangerAlert = (alertInfo) => {
  setTimeout(() => {
    alertInfo.textContent = "";
    alertInfo.classList.remove('danger');
  }, 1000);
};

const successAlert = (alertInfo) => {
  setTimeout(() => {
    alertInfo.textContent = "";
    alertInfo.classList.remove('success');
  }, 1000);
};

// =============================
// LocalStorage Functions
// =============================

const saveToLocalStorage = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => DomContent(task, true));
};

const removeFromLocalStorage = (taskToRemove) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const updateLocalStorage = (oldValue, newValue) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = tasks.indexOf(oldValue);
  if (index !== -1) {
    tasks[index] = newValue;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

// Load existing tasks on page load
window.addEventListener("DOMContentLoaded", loadFromLocalStorage);
