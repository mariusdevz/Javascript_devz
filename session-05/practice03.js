// HIGHER-ORDER FUNCTIONS - function that takes/returns functions
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add2 = (a, b) => a + b;
const multiply2 = (a, b) => a * b;

// console.log(applyOperation(5, 2, add2));
// console.log(applyOperation(5, 2, multiply2));

// Function that returns a function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); //10
console.log(triple(5)); //15

function createAdder(add) {
    return function (number) {
        return number + add;
    }
}

const addNum = createAdder(4);
console.log(addNum(6));




