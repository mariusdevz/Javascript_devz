// CREATING ARRAYS
const fruits = ["apple", "banana", "orange"];
// const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null];
const nested = [
    [1, 2],
    [3, 4],
    [5, 6],
];

// ACCESSING ELEMENTS (0-indexed)
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits.length - 1); //last element

//MUTATING ELEMENTS (change the original array)
fruits.push("grape"); //add to the end
console.log(fruits);

fruits.pop; //remove from end
console.log(fruits);

fruits.unshift("kiwi"); //add to start
console.log(fruits);

fruits.shift(); // remove from start
console.log(fruits);

// NON-MUTATING METHODS (don't change original)
const slice = fruits.slice(1) // ["banana", "orange"]
console.log(fruits);

//SEARCHING
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape")); // -1 (not found)
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("grape")); // false

// FOREACH - just loop through (no return)
fruits.forEach(function (fruit) {
    console.log(fruit);

});

// Modern synthax with arrow function
fruits.forEach((fruit) => console.log(fruit));

// MAP - transform each element (returns new array)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const fruits2 = ["apple", "banana"];
const uppercase = fruits2.map((fruit) => fruit.toUpperCase());
console.log(uppercase);

// FILTER - keep only elements that pass a test
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter((num) => num % 2 === 0);
console.log(evens);

const words = ["cats", "elephant", "dog", "bird"];
const longWords = words.filter((word) => word.length > 3);
console.log(longWords);

// CHAINING methods
const result = numbers2.filter((num) => num > 2)
    .map((num) => num * 10).filter((num) => num < 55);
console.log(result);

// REDUCE - combine all elements into single value
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum);

// SORT
const nums = [3, 1, 4, 1, 5, 9];
nums.sort((a, b) => a - b);
console.log(nums);

nums.sort((a, b) => b - a); // descending
console.log(nums);


