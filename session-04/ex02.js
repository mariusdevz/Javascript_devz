const book = {
    title: "JavaScript Guide",
    author: "Jane Doe",
    year: 2023,
    page: 500,

    getInfo() {
        return `${this.title} by ${this.author} ${(this.year)}`
    },
    getAge() {
        return `Published since ${2026 - this.year} years.`
    },
    isRecent() {
        if (this.getAge >= 5) {
            return true;
        } else {
            return false;
        }
    }
}

const getInfo = book.getInfo();
console.log(getInfo);

const getAge = book.getAge();
console.log(getAge);

const isRecent = book.isRecent();
console.log(`Is recent? ${isRecent}`);



