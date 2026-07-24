class getPosts {
    constructor(baseURL = "https://jsonplaceholder.typicode.com") {
        this.baseURL = baseURL;
    }

    async getPosts() {
        const response = await fetch(`${this.baseURL}`);
        if (!response.ok) throw new Error("Error fetching posts");
        return response.json();
    }

    async getPost(id) {
        const response = await fetch(`${this.baseURL}/${id}`);
        if (!response.ok) throw new Error("ID not found");
        return response.json();
    }

    async createPost(data) {
        const response = await fetch(`${this.baseURL}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                body: data,
            })
        });

        if (!response.ok) throw new Error("Data could not be created")

    }

    async updatePost(id, data) {
        const response = await fetch(`${this.baseURL}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Couldn't update");
    }
}