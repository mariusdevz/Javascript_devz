const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success!")
    }, 2000);
}
);

// promise.then(result => console.log(result)
// )



const promiseError = new Promise((reject) => {
    setTimeout(() => {
        reject("Something went wrong!")
    }, 1000)
});

promiseError
// .then((result) => console.log(result))
// .catch((error) => console.log(error))


function getNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0) {
                resolve(number)
            } else if (number <= 0) {
                reject("Invalid number!")
            }
        }, 1000)
    })
}

getNumber(9)
    .then(num => console.log(num))
    .catch(error => console.log(error))

