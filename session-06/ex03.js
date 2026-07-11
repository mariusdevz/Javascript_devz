async function stepFunction() {
    const steps = await Promise.all([
        new Promise((resolve) => setTimeout(() => resolve("Step 1"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Step 2"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Step 3"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Done!"), 1000)),
    ])

    console.log(steps);
}

stepFunction();
