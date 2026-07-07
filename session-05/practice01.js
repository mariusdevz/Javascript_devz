// FUNCTION DECLARATION
function greet(name) {
    return `Hello ${name}!`;
}
// console.log(greet("Jane"));

// FUNCTION EXPRESSION
const add = function (a, b) {
    return a + b;
}
// console.log(add(5, 9));

// ARROW FUNCTION - concise syntax
const multiply = (a, b) => a * b;
// console.log(multiply(5, 2));

// Arrow function with multiple statements
const calculateGrade = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "F";
}

// DEFAULT PARAMETERS
function welcome(name = "Guest") {
    return `Welcome, ${name}`
}
// console.log(welcome());
// console.log(welcome("John"));

// REST PARAMETERS - accept any number of arguments
function sum(...numbers) {
    return numbers.reduce((acc, sum) => acc + sum, 0);
}
// console.log(sum(1, 2, 3, 4, 5));

// SCOPE
let global = "I'm global";

function outer() {
    let outerVar = "I'm in outer"
    function inner() {
        let innerVar = "I'm in inner";

        // console.log(innerVar); // ✓ can access inner
        // console.log(outerVar); // ✓ can access outer (closure)
        // console.log(global); // ✓ can access global 
    }

    inner();
    // console.log(innerVar);  // ✗ ERROR - can't access
}

outer();






