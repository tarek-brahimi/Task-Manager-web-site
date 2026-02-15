const toDolist = [];
const toDolist2 = ["hi"];

renderTodolist();
function renderTodolist() {
  let todohtml = "";
  for (let i= 0; i< toDolist2.length; i++) {
    const todo = toDolist2[i];
    const html = `<p> ${todo}</p>`;
    todohtml += html;
  }
  document.getElementById("the-list").innerHTML= todohtml;
}

function addList() {
  let input = document.getElementById("todoElement");
  const the_things = input.value;
  toDolist.push(the_things);
  console.log(toDolist);
  input.value = "";
}
function addList2() {
  let input2 = document.getElementById("todoElement2");
  const the_things2 = input2.value;
  toDolist2.push(the_things2);
  console.log(toDolist2);
  input2.value = "";
  renderTodolist();
}
