// HEADERS AND AUTHENTICATION
async function fetchWithAuth(url, token) {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
        }
    });

    return response.json();
}

// PAGINATION
async function getAllPages(baseURL) {
    const allData = [];
    let page = 1;

    while (true) {
        const response = await fetch(`${baseURL}?page=${page}&limit=10`);
        const data = await response.json();

        if (data.length === 0) break;

        allData.push(...data);
        page++;
    }

    return allData;
}