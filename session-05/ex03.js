const user = (name = "Anonymous", age = 0) => {

}

const numbers = (...number) => {
    const sum = number.reduce((acc, value) => acc + value, 0);
    const count = number.length;
    const avg = count === 0 ? 0 : sum / count;
    const max = count === 0 ? null : Math.max(...number);
    const min = count === 0 ? null : Math.min(...number);
    return {
        sum,
        avg,
        count,
        max,
        min
    }
}

// console.log(numbers(5, 5, 5));

const callback = (array, operation) => {
    return array.map(element => operation(element))
}

const double = (num) => num * 2;

const triple = (num) => num * 3;

console.log(callback([1, 2, 3], double));
console.log(callback([1, 2, 3], triple));

