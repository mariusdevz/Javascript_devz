const grades = [85, 92, 78, 95, 88, 76, 91];

const passG = grades.filter((grade) => grade >= 80);
console.log("Passing grades above 80:", passG);
const doubleG = grades.map((grade) => grade * 2);
console.log("Doubled grades:", doubleG);
const highestG = Math.max(...grades);
console.log("Highest Grade:", highestG);
const averageG = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Average Grade:", averageG.toFixed(2));
const gradeAs = grades.filter((grade) => grade >= 90).length;
console.log("Grade A's:", gradeAs);
const results = grades.map((grade) => grade >= 50 ? "pass" : "fail");
console.log("Grade results:", results);


