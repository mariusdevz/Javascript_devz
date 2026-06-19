const studentGrades = [
    { name: "Alice", grades: [90, 85, 92] },
    { name: "Bob", grades: [78, 82, 80] },
    { name: "Charlie", grades: [95, 97, 93] }
];

const averages = studentGrades.map(student => {
    const average = student.grades.reduce((sum, acc) => sum + acc, 0) / student.grades.length;

    return {
        name: student.name,
        average: average.toFixed(2)
    }
});

console.log("Averages:", averages);

const highestG = studentGrades.reduce((best, student) => {
    return Math.max(...student.grades) > Math.max(...best.grades) ? student : best;
});

console.log("Highest Grade:", highestG);

const lowestG = studentGrades.reduce((best, student) => {
    return Math.max(...student.grades) > Math.max(...best.grades) ? best : student;
});

const highestSingleGrade = studentGrades.filter((student) => {
    return Math.max(...student.grades)
});

console.log(highestSingleGrade);


console.log("Lowest Grade:", lowestG);

const G_average = studentGrades.filter((student) => student >= 90 ? `${student.name}: Highest: ${}`)



