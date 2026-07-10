function arrPre() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return arr.filter(pre => pre % 2 === 0)
}

const returnedArr = arrPre();
// console.log(returnedArr);

function transArr() {
    return arrPre().map(m => m * 3)
}

const returnedTransArr = transArr();
// console.log(returnedTransArr);

function compose(...functions) {
    return function (value) {
        let result = value;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    }
}

const all = compose(arrPre, transArr);
console.log(all);

function pipe(...functions) {
    return function (value) {
        return value
    }
}

const pipeline = pipe(arrPre, transArr);
console.log(pipeline);

