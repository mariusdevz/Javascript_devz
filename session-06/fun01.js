function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" }
        callback(data);
    }, 3000)
}

fetchData((data) => {
    console.log("Data received:", data);
})

function fetchData02(callback) {
    setTimeout(() => {
        const data = { id: 2, name: "peter" }
        callback(data)
    }, 1000)
}

fetchData02((data) => {
    console.log("Second Data received", data);

})

function fetchData03(callback) {
    setTimeout(() => {
        const data = { id: 3, name: "Joanne" };
        callback(data);
    }, 2000)
}

fetchData03((data) => {
    console.log("Third Data received:", data);

})