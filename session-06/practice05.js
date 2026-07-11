// Create reusable promise-based functions
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

// TIME TO CHAIN UP!👍👍👍👍👍👍 LET'S GO
fetchuser(2)
    .then((user) => {
        console.log("User:", user)
        return fetchUserPosts(user.id)
    })
    .then((posts) => {
        console.log("Posts:", posts);
    })
    .catch((error) => console.log("Error:", error)
    )

// ALL GOOD