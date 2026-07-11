// ASYNC/AWAIT - cleanest syntax
async function getUser() {
    try {
        const response = await fetch("https://api.github.com/users/torvalds");
        const user = await response.json();
        console.log("User:", user.name);
    } catch (error) {
        console.log("Error:", error);

    }
}

getUser();


function fetchuser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "John" })
            } else {
                reject("Invalid User")
            }
        }, 500)
    })
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ])
        }, 500)
    })
}

// Async/await with our functions
async function getUserandPosts() {
    try {
        const user = await fetchuser(1);
        console.log("User:", user);

        const post = await fetchUserPosts(user.id);
        console.log("Posts:", post);
        return { user, post }
    } catch (error) {
        console.log("Error:", error);

    }
}

getUserandPosts();