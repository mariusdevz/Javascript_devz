async function first() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First Promise")
        })
    })

}
async function second() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second Promise")
        }, 1000)
    })

}
async function third() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third Promise")
        }, 1000)
    })

}

async function loadAll() {
    try {
        const [F, S, T] = await Promise.all([
            first(),
            second(),
            third()
        ]);
        console.log("All Loaded:", { F, S, T });

    } catch (error) {
        console.log("Error loading Functions:", error);

    }
}

loadAll()
