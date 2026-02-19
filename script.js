const toDolist2 = [{ name: "", cate: "" }];
let editingIndex = null;
renderTodolist();
function renderTodolist() {
  let todohtml = "";

  toDolist2.forEach((todo, index) => {
    const name2 = todo.name;
    const element = todo.cate;
    if (editingIndex === index) {
      todohtml += `
      <div class="edit-panel">
        <div><button>h</button></div>
        <div><input class="edit-name" value="${todo.name}"></div>

        
          <div>
      <select class="edit-cate">
        <option value="no-category" ${todo.cate === "no-category" ? "selected" : ""}>no category</option>
        <option value="Personal" ${todo.cate === "Personal" ? "selected" : ""}>Personal</option>
        <option value="Work" ${todo.cate === "Work" ? "selected" : ""}>Work</option>
        <option value="Study" ${todo.cate === "Study" ? "selected" : ""}>Study</option>
        <option value="Tech" ${todo.cate === "Tech" ? "selected" : ""}>Tech</option>
        <option value="Shopping" ${todo.cate === "Shopping" ? "selected" : ""}>Shopping</option>
      </select>
    </div>
    <div>
        <button class="save-button">save</button>
         </div>
         <div>
        <button class="red-button">delete</button>
         </div>
        </div>
      `;
    } else {
      todohtml += `
        <div><button>h</button></div>
        <div>${todo.name}</div>
        <div>${todo.cate}</div>
        <button class="edit-button">edit</button>
        <button class="red-button">delete</button>
      `;
    }
  });

  document.querySelector(".task").innerHTML = todohtml;
  document.querySelectorAll(".red-button").forEach((deletebutton, index) => {
    deletebutton.addEventListener("click", () => {
      toDolist2.splice(index, 1);
      renderTodolist();
    });
  });
  document.querySelectorAll(".edit-button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      editingIndex = index;
      console.log("clicked edit", index);
      renderTodolist();
    });
  });
  document.querySelectorAll(".save-button").forEach((save) => {
    save.addEventListener("click", () => {
      const newName = document.querySelector(".edit-name").value;
      const newCate = document.querySelector(".edit-cate").value;

      toDolist2[editingIndex].name = newName;
      toDolist2[editingIndex].cate = newCate;

      editingIndex = null;
      renderTodolist();
    });
  });
}

document.querySelector(".add-button").addEventListener("click", () => {
  addList2();
});

function addList2() {
  const inputElement = document.getElementById("todoElement2");
  const name = inputElement.value;

  const categoryInputElement = document.getElementById("category");
  const cate = categoryInputElement.value;

  toDolist2.push({
    name,
    cate,
  });

  inputElement.value = "";

  renderTodolist();
}
let change = document.querySelector(".add-button");

function showAll() {}
function showPending() {}
function showCompleted() {}

/*
change.onclick = function () {
  if (change.classList.contains("add-button")) {
    change.classList.remove("add-button");
    change.classList.add("ohl");
    change.innerText = "loading";
  } else {
    change.classList.remove("ohl");
    change.classList.add("add-button");
    change.innerText = "ADD";
  }
};
*/
