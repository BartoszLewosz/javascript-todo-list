// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
// selectors;

// event listeners
todoButton.addEventListener("click", addTodoItem);
// event listeners

// functions
function addTodoItem(event) {
  event.preventDefault();
}
// functions
