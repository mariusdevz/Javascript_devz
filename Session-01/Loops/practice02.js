// FOR LOOPS - most common
for (let i = 0; i < 5; i++) {
    // console.log(1);
}

// FOR LOOP BACKWARD
for (let i = 5; i > 0; i--) {
    // console.log(1);

}

// WHILE LOOP
let count = 0;
while (count < 5) {
    // console.log(count);
    // count++;
}

// DO-WHILE (runs atleast once)
let x = 10;
do {
    // console.log(x);
    x++;
} while (x < 5) // runs once even though condition is false

// BREAK - exit loop early
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // stops at 5
    // console.log(i);
}

// CONTINUE - skip to next iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skips 2
    console.log(i); // prints 0, 1, 3, 4
}

// NESTED LOOPS
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i},${j}`);
    }
}
// Output: 1,1  1,2  1,3  2,1  2,2  2,3  3,1  3,2  3,3