function stepOne(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num)
        }, 1000)
    })
}

function stepTwo(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2)
        }, 1000)
    })
}

function stepThree(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3)
        }, 1000)
    })
}

stepOne(2)
    .then((num) => {
        console.log("Start:", num);
        return stepTwo(num)
    })
    .then((num) => {
        console.log("Doubled:", num)
        return stepThree(num);
    })
    .then((num) => {
        console.log("Tripled:", num);
    })
    .catch((error) => console.log(error))


