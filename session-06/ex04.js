// NOW THE ICING ON CAKE FOR TODAY!
// FETCHING DATA FROM AN API. LET'S GO!

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = response.json();
        data.then(result => console.log(result)
        )
    } catch (error) {
        console.log("Failed to fetch data:", error);

    } finally {
        console.log("Operation complete");

    }

}

// NOW LET'S TRY IT
fetchData()

