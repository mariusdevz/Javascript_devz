const student = {
    name: "Sandy",
    id: 1,
    gpa: 3.4,
    courses: [],
    addCourse(course) {
        if (!course || typeof course !== "string") return;
        if (!this.courses.includes(course)) this.courses.push(course);
    },
    getCourseCount() {
        return this.courses.length;
    },
    isEnrolled(course) {
        return this.courses.includes(course);
    },
    getInfo() {
        return {
            name: this.name,
            id: this.id,
            gpa: this.gpa,
            coursesCount: this.getCourseCount(),
        }
    }
}

student.addCourse("Math");
student.addCourse("English");
student.addCourse("Geography");
console.log("Courses:", student.courses);
console.log("Enrolled:", student.isEnrolled('French'));
console.log('Student Info', student.getInfo());


