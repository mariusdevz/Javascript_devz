async function fetchPOSTS() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return response.json();
}

async function fetchById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch post ${id}: ${response.status}`);
    }
    return response.json();
}

async function createPost(title, body) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    });

    if (!response.ok) {
        throw new Error(`Failed to create post: ${response.status}`);
    }

    return response.json();
}

async function updatePost(id, updates) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updates)
    });

    if (!response.ok) {
        throw new Error(`Failed to update post ${id}: ${response.status}`);
    }

    return response.json();
}

async function deletePost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to delete post ${id}: ${response.status}`);
    }

    return response.json();
}

async function displayPOSTS() {
    try {
        const posts = await fetchPOSTS();
        console.log("All posts:", posts);

        console.log("Post by id:", await fetchById(2));
        console.log("Created post:", await createPost("make dinner", "wash the car"));
        console.log("Updated post:", await updatePost(2, {
            title: "fetching",
            body: "getting info",
            userId: 2
        }));
        console.log("Deleted post:", await deletePost(3));
    } catch (error) {
        console.log(error.message);
    }
}

displayPOSTS();

