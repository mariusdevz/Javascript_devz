const colors = ["red", "green", "blue"];

colors.push("yellow")
// console.log(colors);
const addatBeginning = colors.unshift("purple")
    // console.log(addatBeginning);
    ;
// console.log(colors.indexOf("green"));
// console.log(colors.includes("orange"));

const upperCaseColors = colors.map((color) => color.toUpperCase());
console.log(upperCaseColors);

const longWords = colors.filter((word) => word.length > 4);
console.log(longWords);



