const prompt = require("prompt");

const passwords = [
    "short",
    "allsmallletters123!",
    "ALLUPPERCASE123!",
    "NoNumbers!",
    "ValidPass123!"
];

const password = prompt("Enter a password");
console.log(password);


for (const password of passwords) {
    const missing = [];

    if (password < 8) {
        missing.push("Enter atleast 8 characters")
    }

    if (!/A-Z/.test(password)) {
        missing.push("an uppercase letter");
    }

    if (!/0-9/.test(password)) {
        missing.push("a number");
    }

    if (!/[!@#$%^&*]/.test(password)) {
        missing.push("a special character");
    }

    if (password === 0) {
        missing.push(`${password}: Valid Password`)
    } else {
        missing.push(`${password}: Invalid - missing ${missing.join(" ,")}`)
    }
}