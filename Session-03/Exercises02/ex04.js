const numbers = [1, 2, 3, 4, 5];

const trippleNum = numbers.map((num) => num * 3);
console.log("Tripple:", trippleNum);
const EvenNum = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", EvenNum);
const sumNum = numbers.reduce((sum, acc) => sum + acc, 0);
console.log("Sum:", sumNum);
const prodNum = numbers.reduce((total, num) => total * num, 1);
console.log("Porduct:", prodNum);
const averageNum = numbers.reduce((acc, sum) => acc + sum, 0) / numbers.length;
console.log("Average:", averageNum);

const G_average = numbers.filter((num) => num > averageNum);
console.log("Greater than average:", G_average);




