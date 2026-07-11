// PROMISES - better alternative
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Succsess!")
    }, 1000)
});

promise.then((result) => console.log(result)
);

// Promise with rejection
const promiseWithError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!")
    }, 1000)
});

promiseWithError
    .then((result) => console.log(result))
    .catch((error) => console.log("Error", error)
    );