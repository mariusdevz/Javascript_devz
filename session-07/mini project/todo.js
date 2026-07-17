const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");


let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    todoList.innerHTML = "";
    const completedCount = todos.filter(todo => todo.completed);
    const unCompletedCount = todos.filter(todo => !todo.completed);

    document.getElementById("completed").textContent = completedCount.length;
    document.getElementById("uncompleted").textContent = unCompletedCount.length;
    document.getElementById("total").textContent = todos.length;
    const empty = document.getElementById("empty");
    if (todos.length === 0) {
        empty.textContent = "No todos yet!"
    } else {
        empty.textContent = "";
    }


    todos.forEach(todo => {
        //CREATING ELEMENTS
        const li = document.createElement("li");
        li.style.listStyle = "none";
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");
        span.textContent = todo.text;
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = "crimson";
        deleteBtn.style.color = "white";

        //CHECKBOX SECTION
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = todo.completed;
        if (todo.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
            deleteBtn.style.backgroundColor = "gray";

        }
        checkBox.addEventListener("click", () => {
            toggleCompleted(todo.id);
        });

        //DELETE SECTION
        deleteBtn.addEventListener("click", () => {
            deleteTodos(todo.id)
        });


        //APPEND LIST
        todoList.appendChild(li)
        li.appendChild(span);
        li.appendChild(checkBox);
        li.appendChild(deleteBtn);
    });
}

addBtn.addEventListener("click", () => {
    addTodo();
});

todoInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
})

function saveTodos() {
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

    saveTodos();
    renderTodos();
}

function deleteTodos(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function toggleCompleted(id) {
    todos = todos.map(todo => (
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));

    renderTodos();
}

renderTodos();