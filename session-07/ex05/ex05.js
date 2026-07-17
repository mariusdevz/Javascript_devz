const input = document.getElementById("input");
const btn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saved() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");
        const completeBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";
        completeBtn.textContent = todo.completed ? "undo" : "complete";
        if (todo.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }
        completeBtn.style.backgroundColor = "teal"
        deleteBtn.style.backgroundColor = "red";
        span.textContent = todo.text;
        todoList.appendChild(li);
        li.appendChild(span)
        li.appendChild(deleteBtn);
        li.appendChild(completeBtn);
        deleteBtn.addEventListener("click", (id) => {
            deleteTodo(todo.id);
        });
        completeBtn.addEventListener("click", () => {
            completeTodo(todo.id)
        })
    });
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saved();
    render();
}

function completeTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed,
            }
        }
        return todo;
    })
    saved();
    render();
}


btn.addEventListener("click", () => {
    addTodo();
})

function addTodo() {
    const text = input.value.trim();

    if (text === "") return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
    }
    input.value = "";
    todos.push(newTodo);
    saved();
    render();
}

render();

//HI GUYS, MANAGED TO DO THIS SIMPLE TODO LIST, BUT I USED A LITTLE BIT OF AI FOR DEBUGGING!
// ALL GOOD!
// COMING UP NEXT AN IMPROVED VERSION OF THIS
