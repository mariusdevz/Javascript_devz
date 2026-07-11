// CALLBACK HELL - nested callbacks (avoid!)
function getData(callback) {
    setTimeout(() => {
        callback({ id: 1 });
    }, 1000);
}

function getDetails(id, callback) {
    setTimeout(() => {
        callback({ id, name: "John" })
    }, 1000)
}

function getAddress(id, callback) {
    setTimeout(() => {
        callback({ id, address: "123 Main St" })
    }, 1000)
}

// This is hard to read and maintain
getData((user) => {
    getDetails(user.id, (details) => {
        getAddress(details.id, (address) => {
            console.log(user, details, address);
        })
    })
})