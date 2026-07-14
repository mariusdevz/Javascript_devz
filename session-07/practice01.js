// SELECTING ELEMENTS
const element = document.getElementById("myId");
const element2 = document.querySelector(".myClass");
const element3 = document.querySelector("#myId");
const elements = document.querySelectorAll(".item");

// PROPERTIES vs ATTRIBUTES
const input = document.getElementById("email");
input.value = "test@example.com"; //property
input.setAttribute("placeholder", "Enter email"); // attribute

console.log(input.getAttribute("placeholder"));

// MANIPULATING HTML
const div = document.getElementById("content");
div.innerText = "Plain text"; // just text
div.innerHTML = "<p>HTML content</p>"; // with HTML
div.innerText = "Also text";

// CLASSES
div.classList.add("active");
div.classList.remove("inactive");
div.classList.toggle("highlight");
console.log(div.classList.contains("active"));

// CREATING ELEMENTS
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
newDiv.classList.add("message");
document.body.appendChild(newDiv);

// Creating and inserting
const fragment = document.createDocumentFragment()
for (let i = 0; i < 3; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${i + 1}`;
    fragment.appendChild(item);
}
document.getElementById("list").appendChild(fragment);

// REMOVING ELEMENTS
const element = document.getElementById("toDelete");
element.remove();

// Or: element.parentNode.removeChild(element);

// EVENT LISTENERS
const button = document.getElementById("btn");

button.addEventListener("click", function (event) {
    console.log("Clicked!");
    console.log(event);
})

// With arrow function
button.addEventListener("click", (e) => {
    console.log("Event type:", e.type);
})

// Multiple events
button.addEventListener("click", handleClick);
button.addEventListener("mouseover", handleMouseover);

// Common events
button.addEventListener("change", handleChange); // input/select
button.addEventListener("submit", handleSubmit); // form
button.addEventListener("keypress", handleKeyPress); // input focus
button.addEventListener("blur", handleBlur); // lose focus

// EVENT DELEGATION
document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') {
        console.log("Clicked item:", e.target.textContent);

    }
});

// FORM HANDLING
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    const eamil = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log({ eamil, password });

})

// LOCALSTORAGE
// Store
localStorage.setItem("username", "john");
console.log(username); // "john"

// remove
localStorage.removeItem("username");

// clear all
localStorage.clear();

// Store objects (must stringify)
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify("user"));

// Retrieve objects
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "John"

// CHECKING STORAGE
console.log(localStorage.length);
console.log(localStorage.key(0));

// SESSIONSTORAGE - same as localStorage but clears on page close
sessionStorage.setItem("token", "abc123");

