// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".todo-filter");
// selectors;

// event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodoItem);
todoList.addEventListener("click", deleteTodoItem);
todoFilter.addEventListener("click", todoFilterOption);

// event listeners

// functions
function addTodoItem(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodoItem = document.createElement("li");
  newTodoItem.innerText = todoInput.value;
  newTodoItem.classList.add("todo-item");
  todoDiv.appendChild(newTodoItem);
  // console.log(todoDiv);
  // console.log(newTodoItem);

  // Add todoListLocalStorage to todo-list
  saveLocalTodo(todoDiv.innerText);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"> </i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}

function deleteTodoItem(event) {
  const clickedItem = event.target;

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

function todoFilterOption(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("todo-completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("todo-completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodo(todo) {
  //check if local storage exists
  let todoListLocalStorage; // declare variable to store Local storage
  if (localStorage.getItem("todoListLocalStorage") === null) {
    //if local storage is empty, create an empty array;
    todoListLocalStorage = [];
  } else {
    // place local storage into empty variable;
    todoListLocalStorage = JSON.parse(
      localStorage.getItem("todoListLocalStorage")
    );
  }

  todoListLocalStorage.push(todo); // assign Local Storage to variable and place it in 'todo' class, which is an element of div container
  localStorage.setItem(
    "todoListLocalStorage",
    JSON.stringify(todoListLocalStorage)
  );
}
function getTodos() {
  let todoListLocalStorage;
  if (localStorage.getItem("todoListLocalStorage") === null) {
    todoListLocalStorage = [];
  } else {
    todoListLocalStorage = JSON.parse(
      localStorage.getItem("todoListLocalStorage")
    );
  }
  todoListLocalStorage.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = todo;
    newTodoItem.classList.add("todo-item");
    todoDiv.appendChild(newTodoItem);
    // console.log(todoDiv);
    // console.log(newTodoItem);
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
  });
}
// functions
