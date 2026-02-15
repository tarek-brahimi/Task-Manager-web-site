const toDolist = [];
const toDolist2 = [];
const toDate =[];
renderTodolist();
function renderTodolist() {
  let todohtml = "";
  for (let i= 0; i< toDolist2.length; i++) {
    const todo = toDolist2[i];
    const date = toDate[i];
    const html = `<p> ${todo}  ${date}<button onclick="toDolist2.splice(${i},1);renderTodolist()"> delete</button>  </p> `;
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
  let input3 =document.getElementById('date');
  const the_things2 = input2.value;
  const the_date=input3.value;
  toDate.push(the_date);
  toDolist2.push(the_things2);
  console.log(toDolist2);
  console.log(toDate);
  input2.value = "";
  input3.value="";
  renderTodolist();
}
