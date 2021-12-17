// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
// selectors;

// event listeners
todoButton.addEventListener("click", addTodoItem);
todoList.addEventListener("click", deleteTodoItem);
// event listeners

// functions
function addTodoItem(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodoItem = document.createElement("li");
  newTodoItem.innerText = todoInput.value;
  todoInput.value = "";
  newTodoItem.classList.add("todo-item");
  todoDiv.appendChild(newTodoItem);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"> </i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  console.log(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  console.log(trashButton);

  todoList.appendChild(todoDiv);
}

function deleteTodoItem(event) {
  const clickedItem = event.target;
  console.log(clickedItem);

  if (clickedItem.classList[0] === "trash-btn") {
    const todoItem = clickedItem.parentElement; // todoItem stores clickedItem's parent element
    todoItem.classList.add("todo-removed");
    todoItem.addEventListener("transitionend", () => {
      todoItem.remove();
    });
    // todoItem.remove();
  }

  if (clickedItem.classList[0] === "complete-btn") {
    const todoItem = clickedItem.parentElement;
    todoItem.classList.toggle("todo-completed");
  }
}
// functions
