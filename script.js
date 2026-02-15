const toDolist = [];
const toDolist2 = [{name: 'make dinner', dueDate: '2022-12-22'}];

renderTodolist();
function renderTodolist() {
  let todohtml = "";
  for (let i= 0; i< toDolist2.length; i++) {
    const todo = toDolist2[i];
    const name2 = todo.name;
    const date2 = todo.dueDate;
    const html = `<p> ${name2}  ${date2}  <button onclick="toDolist2.splice(${i},1);renderTodolist()"> delete</button>  </p>`;
    todohtml += html;
  
    
}
 document.getElementById("the-list").innerHTML= todohtml;}

function addList() {
  let input = document.getElementById("todoElement");
  const the_things = input.value;
  toDolist.push(the_things);
  console.log(toDolist);
  input.value = "";
}
function addList2() {
const inputElement = document.getElementById('todoElement2');
  const name = inputElement.value;

  const dateInputElement = document.getElementById('date');
  const dueDate = dateInputElement.value;

  
  toDolist2.push({
    name,
    dueDate,
  });
 
 inputElement.value = "";
 
  renderTodolist();
}
