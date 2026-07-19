class Book {
    constructor(title, author, isbn, yearPublished, availability) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.yearPublished = yearPublished;
        this.availability = true;
    }

    getInfo() {
        return `${this.title} written pulished by ${this.author} ${this.availability}`
    }

    toggleAvailability() {
        return this.availability = !this.availability;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    findByAuthor(author) {
        this.books = this.books.filter(book => book.author === author);
    }

    findByTitle(title) {
        return this.books = this.books.filter(t => t.title === title);
    }

    availableBooks() {
        return this.books = this.books.filter(book => book.availability)
    }

    returnBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);

        if (book && book.availability) {
            book.toggleAvailability();
            console.log("Book borrowed!");
        } else {
            console.log("Book not available!");

        }
    }

}

class Member {
    constructor(name, memberId, borrowedBooks) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.availability) {
            book.toggleAvailability();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${this.title}`);
        } else {
            console.log("Book unavailable");
        }
    }

    return(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b.isbn !== book.isbn);
        if (!book.availability) {
            book.toggleAvailability();
        }

        console.log(`${this.name} returned ${this.title}`);
    }

    getBorrowedBooks() {
        return this.borrowedBooks;
    }


}

const book1 = new Book(
    "The Hobbit",
    "J.R.R Tolkien",
    "111",
    1937
);

const book2 = new Book(
    "Harry Potter",
    "J.K Rowling",
    "222",
    1997
);

const book3 = new Book(
    "1984",
    "George Orwell",
    "333",
    1949
);

const book4 = new Book(
    "The Alchemist",
    "Paulo Coelho",
    "444",
    1988
);

const book5 = new Book(
    "Atomic Habits",
    "James Clear",
    "555",
    2018
);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

const marius = new Member("Marius", 1);
console.log(book1.getInfo());
console.log(library.findByTitle("1984"));
console.log(library.findByAuthor("J.K Rowling"));
console.log(library.availableBooks());
marius.borrow(book2);

console.log(marius.getBorrowedBooks());
marius.return(book2);

console.log(marius.getBorrowedBooks());
library.removeBook("333");

console.log(library.books);
