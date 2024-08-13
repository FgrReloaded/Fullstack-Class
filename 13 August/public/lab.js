console.log("TODO")

const todoInput = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
let deleteTodoBtn;
const todoBtn = [];


const generateTodoItem = (todo) => {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        ${todo.task}
        <span>
            <button class="btn btn-danger deleteTodo"  data-id="${todo.id}">Delete</button>
        </span>
    </li>
    `
}

let todos = [];



let defaultTodos = JSON.parse(localStorage.getItem("todos")) || [];

if (defaultTodos.length > 0) {
    todos = defaultTodos;
    defaultTodos.forEach(todo => {
        const todoItem = generateTodoItem(todo);
        todoList.innerHTML += todoItem;
    })
    deleteTodoBtn = document.querySelectorAll(".deleteTodo");
    deleteTodoBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            deleteTodo(e);
        });
    });
}



todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = {
        id: Date.now(),
        task: todoInput.value
    }
    defaultTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(defaultTodos));
    const todoItem = generateTodoItem(todo);
    todoList.innerHTML += todoItem;

    deleteTodoBtn = document.querySelectorAll(".deleteTodo");
    deleteTodoBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            deleteTodo(e);
        });
    });
})



const deleteTodo = (e) => {
    let attr = e.target.getAttribute("data-id");
    defaultTodos = defaultTodos.filter(todo => todo.id !== parseInt(attr));
    localStorage.setItem("todos", JSON.stringify(defaultTodos));
    todoList.innerHTML = "";
    defaultTodos.forEach(todo => {
        const todoItem = generateTodoItem(todo);
        todoList.innerHTML += todoItem;
    });
    window.location.reload();
}
