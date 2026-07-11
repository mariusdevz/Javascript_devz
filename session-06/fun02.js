// NOW IT'S TIME TO BUILD A SMALL RACE TEST USING PROMISE. SOUNDS GOOD. LET'S GO!
// PROMISE.RACE - return first resolved promise
async function raceTest() {
    const winner = await Promise.race([
        new Promise((resolve) => setTimeout(() => resolve("A"), 100)),
        new Promise((resolve) => setTimeout(() => resolve("B"), 200)),
    ])
    console.log("Winner:", winner);

}

raceTest();
