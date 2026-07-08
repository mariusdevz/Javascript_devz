const avgCalculation = (...numbers) => {
    return numbers.reduce((acc, sum) => acc + sum, 0)
}
// console.log(avgCalculation(4, 2, 4));

const primeNumber = (number) => {
    if (number % 2 === 0) {
        return number;
    } else {
        return `This number: ${number} is an odd number`
    }
}

// console.log(primeNumber(7));

const reverseFn = (string) => {
    if (typeof string !== 'string') {
        return `Enter a string`
    } else {
        return string.split("").reverse().join("");
    }
}

// console.log(reverseFn("John"));

const vowelCount = (text) => {
    if (typeof text !== 'string') return 0;
    const vowels = 'aeiou';
    return text
        .toLowerCase()
        .split("")
        .filter(char => vowels.includes(char))
        .length;
}

// console.log(vowelCount("butter"));
// console.log(vowelCount("javascript"));


const arr = ["button", "singer", "enchantress", "monumentally"];
const longestWord = (word) => {
    return word.reduce((acc, sum) => acc.word > sum.word ?
        acc : sum)
}

// console.log(longestWord(arr));




