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

// POST REQUEST
async function createPost(title, body) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type":
                "application/json",
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
            ,
        })
    });

    return await response.json();
}

//PUT REQUEST - update
async function updatePost(id,
    updates) {
    const response = await fetch(`
            https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: "PUT",
            headers: {
                "content-type":
                    "application/json",
            },
            body: JSON.stringify(updates),
        })

    return await response.json();
}

// DELETE REQUEST
async function deletePost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: "DELETE",
        },
    );
    response.ok;
}

// API CLIENT CLASS
class GithubClient {
    constructor(baseURL = "https://api.github.com") {
        this.baseURL = baseURL;
    }

    async getUser(username) {
        const response = await fetch(`${this.baseURL}/users/${username}`);
        if (!response.ok) throw new Error("User nof found");
        return response.json();
    }

    async getRepos(username) {
        const response = await fetch(`${this.baseURL}/users/${username}/repos`);
        if (!response.ok) throw new Error("Repos not found");
        return response.json();
    }

    async search(query, type = "repositories") {
        const response = await fetch(`${this.baseURL}/search/${type}?q=${query}`);
        if (!response.ok) throw new Error("search failed");
        return response.json();
    }
}

// usage
const github = new GithubClient();
const user = await github.getUser("torvalds");
const repos = await github.getRepos("torvalds");
