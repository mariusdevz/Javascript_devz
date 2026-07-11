// PROMISE CHAINING
fetch("https://api.github.com/users/torvalds")
    .then((response) => response.json())
    .then((data) => console.log(data.name))
    .catch((error) => console.log("Failed:", error));