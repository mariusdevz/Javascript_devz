const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const outputValue = inputEl.value;
    outputEl.textContent += outputValue;
    inputEl.value = "";
});


inputEl.addEventListener("keypress", () => {
    inputEl.style.border = "2px solid blue";
    const outputValue = inputEl.value;
    const typedChar = outputValue;
    outputEl.textContent = typedChar;
    console.log(typedChar);

});

inputEl.addEventListener("blur", () => {
    setTimeout(() => {
        inputEl.style.border = "2px solid black";
    }, 1000)
});

// HELLO GUYS, BEEN WORKING
//  WITH EVENT LISTENERS TODAY!




