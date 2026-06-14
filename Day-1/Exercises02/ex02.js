let score = 67;
let age = 21;
let temp = 5;

const scoreCondition = score >= 65 ? "Pass" : "Fail";
const ageCondition = age >= 18 ? "Adult" : "Minor";
const tempCondition = temp > 25 ? "Hot" : temp > 15 ? "Mild" : "Cold";

console.log(tempCondition);
