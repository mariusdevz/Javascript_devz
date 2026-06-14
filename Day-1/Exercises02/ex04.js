const secretNumber = 7;
let guess = Math.floor(Math.random() * 9) + 1;
console.log("Guessed Number:", guess);


if (guess === secretNumber) {
    console.log("You got it!");
} else if (guess > secretNumber) {
    console.log("Too high, try again");
} else {
    console.log("Too low, try again");

}