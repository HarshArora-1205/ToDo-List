// grid animation starts
const light = document.querySelector('.light');
const grid = document.querySelector('.bg-grid');

grid.addEventListener('mousemove', function(e) 
{
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
}
);
// grid.addEventListener('touchmove', function(e) 
// {
//   light.style.left = `${e.clientX}px`;
//   light.style.top = `${e.clientY}px`;
// }
// );
// grid animation ends


// todo list script starts
const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener("click", addTodo)
function addTodo(event)
{
  event.preventDefault();
  // console.log(todoInput.value);
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  const newTodo = document.createElement('li');
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  const checkBtn = document.createElement('button')
  checkBtn.classList.add("todo-check");
  checkBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  todoDiv.appendChild(checkBtn);

  const delBtn = document.createElement('button')
  delBtn.classList.add("todo-del");
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  todoDiv.appendChild(delBtn);

  todoList.appendChild(todoDiv);
}