
const toDolist2 = [{ name: "", cate: "" }];

renderTodolist();
function renderTodolist() {
  let todohtml = "";
  toDolist2.forEach((todo, index) => {
    const name2 = todo.name;
    const element = todo.cate;
    const html = ` <div><button>h</button></div><div>${name2}</div>  <div>${element} </div>  <button class="red-button"> delete</button> `;
    todohtml += html;
  });

  document.querySelector(".task").innerHTML = todohtml;
  document.querySelectorAll(".red-button").forEach((deletebutton, index) => {
    deletebutton.addEventListener("click", () => {
      toDolist2.splice(index, 1);
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

function showAll() {

}
function showPending() {

}
function showCompleted() {

}

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
