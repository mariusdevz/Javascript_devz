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

// PROMISE.ALL - wait for multiple promises
async function loadUserData() {
    try {
        const [user, posts, comments] = await Promise.all([
            fetchuser(1),
            fetchUserPosts(1),
            // another promise ...
        ]);

        console.log("All data loaded:", { user, posts });
    } catch (error) {
        console.log("Error:", error);

    }
}
