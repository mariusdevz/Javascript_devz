const sentence = "The quick brown fox jumps over the lazy dog";

const words = sentence.split(" ");
console.log(words);
const longWords = words.filter((word) => word.length > 4);
console.log("Words longer than 4:", longWords);
const capWord = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
console.log("capitalize:", capWord);
const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest);
console.log("Longest word:", longestWord);
const reversed = words.reverse().join(" ");
console.log(reversed);




