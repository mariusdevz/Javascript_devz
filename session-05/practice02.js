// CLOSURES - function that remembers its scope
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count
        },
    };
}

const counter = createCounter();
console.log(counter.increment()); //1
console.log(counter.increment()); //2
console.log(counter.decrement()); //1
console.log(counter.getCount()); //1