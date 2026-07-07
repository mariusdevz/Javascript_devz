// CALLBACKS
function process(data, callback) {
    console.log("Processing:", data);
    const result = data * 2;
    callback(result);
}

process(5, function (result) {
    // console.log("Result:", result);
});

// with arrow function
process(10, (result) => {
    // console.log("Final:", result);
});

// FUNCTION COMPOSITION
const compose = (...functions) => {
    return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const compute = compose(square, double, addOne);
console.log(compute(5)); // ((5+1)*2)^2 = 144
