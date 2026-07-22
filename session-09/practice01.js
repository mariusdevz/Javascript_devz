// BASIC FETCH - GET
fetch("https://api.github.com/users/torvalds")
    .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

//Async/await version
async function getUser() {
    try {
        const response = await fetch("https://api.github.com/users/torvalds");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

// check response status
async function fetchWithError() {
    const response = await fetch("https://api.github.com/users/torvalds");
    if (!response.ok) {
        throw new Error(`HTTP error!
            status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
