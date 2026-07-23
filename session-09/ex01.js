class gitHubAPI {
    constructor(baseURL = "https://api.github.com") {
        this.baseURL = baseURL;
    }

    async getUser(username) {
        const response = await fetch(`${this.baseURL}/users/${username}`);
        if (!response.ok) throw new Error("User not found");
        return response.json();
        // const data = await response.json();
        // console.log("userData:", data);

    }

    async getRepos(username) {
        const response = await fetch(`${this.baseURL}/users/${username}/repos`);
        if (!response.ok) throw new Error("Repository not found");
        return response.json();

    }

    async getFollowers(username) {
        const response = await fetch(`${this.baseURL}/users/${username}`);
        if (!response.ok) throw new Error("Follower not found");
        return response.json();
    }
}

const github = new gitHubAPI();

async function displayGITHUBInfo(username) {
    try {
        const user = await github.getUser(username);

        console.log("===============USER INFO==============");
        console.log("Name:", user.name);
        console.log("Bio:", user.bio);
        console.log("Public Repositories:", user.bio);
        console.log("Followers:", user.followers);

        console.log("\n=================REPOSITORIES======================");
        //NOW LET ME RUN IT

        // Fetch repositories
        const repos = await github.getRepos(username);

        repos.forEach((repo, index) => {
            console.log(`${index + 1}, ${repo.name}`);
            console.log("Description:", repo.description);
            console.log("Language:", repo.language);
            console.log("Stars:", repo.stargazers_count);
        });

    } catch (error) {
        console.log(error.message);

    }
}

// Test with different usernames
displayGITHUBInfo("sarah")




