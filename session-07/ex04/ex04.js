const userForm = document.getElementById("userForm");
const btn = document.querySelector('button');
const email = document.getElementById("email");
const name = document.getElementById("name");
const outputEl = document.getElementById("output");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const nameValue = name.value;
    email.value = "";
    name.value = "";

    if (!nameValue !== "" && emailValue.includes("@")) {
        outputEl.textContent = `Welcome ${nameValue}!`;
        outputEl.style.color = "green";
    } else {
        outputEl.textContent = "Wrong input!"
        outputEl.style.color = "red"
    }

    localStorage.setItem("outputEl", JSON.stringify("outputEl"));
    console.log(outputEl);
    console.log(localStorage.length)
    console.log(localStorage.key(0));


})