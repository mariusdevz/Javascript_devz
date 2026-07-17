const userForm = document.getElementById("userForm");
const btn = document.querySelector("button");
const email = document.getElementById("email");
const name = document.getElementById("name");
const outputEl = document.getElementById("output");

const savedData = JSON.parse(localStorage.getItem("userData"));
if (savedData) {
    outputEl.textContent = `Saved user: ${savedData.name} ${savedData.email}`;
    outputEl.style.color = "blue"
}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    emailValue = email.value.trim();
    nameValue = name.value.trim();

    if (nameValue !== "" && emailValue.includes("@")) {
        outputEl.textContent = `${nameValue} (${emailValue})`;
        outputEl.style.color = "green";
        const userData = { name: nameValue, email: emailValue }
        localStorage.setItem("userData", JSON.stringify(savedData));

    } else {
        outputEl.textContent = "Wrong Input!";
        outputEl.style.color = "red";
    }
})