const btn = document.querySelector(".Add-task");
const  alertInfo = document.querySelector('.alert-text h3')

const handleInput = () => {
  const taskInput = document.getElementById("input-task-value").value;
  DomContent(taskInput);
};

btn.addEventListener("click", handleInput);



const DomContent = (taskInput) => {
  const taskEl = document.querySelector(".task-el");
 
  if (!taskInput) {
    alertInfo.classList.add('danger')
    alertInfo.classList.remove('success')
    alertInfo.textContent = "Input cannot be empty , please provide an input, Thanks!"
    dangerAlert(alertInfo)
  } else {
    const task__content = document.createElement("div");

    task__content.classList.add("task-content");

    const content__h2 = document.createElement("div");
    content__h2.classList.add("content-h2");

    const h2 = document.createElement("input");
    h2.classList.add("input-edit");
    h2.innerHTML = taskInput;

   
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
    console.log(task__content)
     
    actionBtn(delBtn, editBtn, h2, task__content);

    alertInfo.classList.remove('danger')
    alertInfo.classList.add('success')
    alertInfo.textContent = "Success!"

    successAlert(alertInfo)

  

    document.getElementById("input-task-value").value = "";
  }
};

const actionBtn = (delBtn, editBtn, h2, task__content) => {
  delBtn.addEventListener("click", () => {
    task__content.remove();
  });

  editBtn.addEventListener("click", () => {
    if (editBtn.innerText === "Edit") {
      console.log(true);
      h2.removeAttribute("readonly");
      h2.focus();
      editBtn.innerText = "Save";
    } else {
      h2.setAttribute("readonly", "readonly");
      editBtn.innerText = "Edit";
    }
  });
};

const dangerAlert = (alertInfo) => {
    setTimeout(() => {
        alertInfo.textContent = ""
        alertInfo.classList.remove('danger')
       }, 1000);
}

const successAlert = (alertInfo) => {
    setTimeout(() => {
        alertInfo.textContent = ""
        alertInfo.classList.remove('success')
       }, 1000)
}


