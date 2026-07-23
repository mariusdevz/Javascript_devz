class fetchPost {
    constructor(baseURL = "https://jsonplaceholder.typicode.com/posts") {
        this.baseURL = baseURL;
    }

    async getAllPosts(id) {
        const response = await fetch(`${this.baseURL}/${id}`);
        const data = await response.json();
        console.log(data);

    }

    async createPost(title, body) {
        const response = await fetch(`${this.baseURL}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        })

        const data = await response.json();
        console.log(data);
    }

    async updatePost(id, updates) {
        const response = await fetch(`${this.baseURL}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updates)
        });

        const data = await response.json();
        console.log(data);
    }

    async deletePost(id) {
        const response = await fetch(`${this.baseURL}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            }
        );
        const data = await response.json();
        console.log(data);
    }
}

const posts = new fetchPost();
// posts.getAllPosts(1)
// posts.createPost("tom", "air hockey")
// posts.updatePost(1, {
//     title: "Updated title",
//     body: "Updated body",
// });
posts.deletePost(2);
