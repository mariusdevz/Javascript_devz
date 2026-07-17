const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    todoList.innerHTML = "";
    //TRACKING TODOS
    const completedCount = todos.filter(todo => todo.completed).length;
    const unCompletedCount = todos.filter(todo => !todo.completed).length;

    document.getElementById("completed").textContent = completedCount;
    document.getElementById("uncompleted").textContent = unCompletedCount;
    document.getElementById("total").textContent = todos.length;

    const empty = document.getElementById("empty");
    if (todos.length === 0) {
        empty.textContent = "No todos yet!";
    } else {
        empty.textContent = "";
    }

    todos.forEach(todo => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");
        const checkBox = document.createElement("input");
        span.textContent = todo.text;

        //DELETE TODOS
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = "crimson";
        deleteBtn.style.color = "white";

        deleteBtn.addEventListener("click", () => {
            deleteTodos(todo.id)
        })

        // COMPLETE OR UNCOMPLETED
        checkBox.type = "checkbox";
        checkBox.checked = todo.completed;
        if (todo.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
            deleteBtn.style.backgroundColor = "gray";
        }
        checkBox.addEventListener("click", () => {
            toggleCompleted(todo.id)
        })
        todoList.appendChild(li);
        li.appendChild(span);
        li.appendChild(checkBox);
        li.appendChild(deleteBtn);
    })
}

addBtn.addEventListener("click", () => {
    addTodo();
});

todoInput.addEventListener("keypress", e => {
    if (e.key === 'Enter') {
        addTodo()
    }
})

function savedTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
    const text = todoInput.value;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    }

    todos.push(newTodo);
    todoInput.value = "";
    savedTodos();
    renderTodos();
}

function deleteTodos(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
    savedTodos();
}

function toggleCompleted(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    renderTodos();
    savedTodos();
}

renderTodos();