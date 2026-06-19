const temperatures = [72, 68, 75, 80, 76, 70, 69];

const highestTemp = Math.max(...temperatures);
console.log("highestTemp", highestTemp);
const lowestTemp = Math.min(...temperatures);
console.log("Lowest temp:", lowestTemp);
const aboveTemp = temperatures.filter((temp) => temp > 72);
console.log("Above 72:", aboveTemp);
const avgTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temp:", avgTemp.toFixed(2));
const aboveAvgTemp = temperatures.filter((temp) => temp > avgTemp);
console.log("Above average temp:", avgTemp.toFixed(2));

