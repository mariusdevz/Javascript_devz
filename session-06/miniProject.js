async function getWeather(city) {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();
        // data.then(result => console.log("Results:", result))


        // HI GUYS TODAY I BUILT THIS WEATHER FETCHING API, I DISCOVERED THAT IT IS GOOD TO FIRST FETCH ALL THE RESEULTS
        // LIKE ABOVE BEFORE GETTING THE INFO BELOW


        const current = data.current_condition[0];
        const temperature = current.temp_C;
        const condition = current.weatherDesc[0].value;
        const humidity = current.humidity;

        return {
            temperature,
            condition,
            humidity
        }
    } catch (error) {
        console.log("Error fetching data from API:", error);

    }
}

async function displayWeather(city) {
    try {
        const weather = await getWeather(city);
        console.log(`It's currently ${weather.temperature}°C in ${city}, the codition is ${weather.condition} and ${weather.humidity}% humidity and `);

    } catch (error) {
        console.log(`Error getting info weather on ${city}`);

    }
}

//THEN I WAS ABLE TO DISPLAY THE DATA. 
displayWeather('Canada')

//ALL GOOD!
