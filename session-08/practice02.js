// GETTERS AND SETTERS
class Circle {
    constructor(radius) {
        this._radius = radius; // underscore convention for private
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value <= 0) {
            throw new Error("Radius must be positive");
        }
        this._radius = value;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.radius);
console.log(circle.area.toFixed(2));

circle.radius = 10; // setter called
console.log(circle.radius); // 10

// PRIVATE FIELDS (modern)
class BankAccount {
    #balance = 0;  // private field

    constructor(owner) {
        this.owner = owner
    }

    deposit(amount) {
        this.#balance += amount;
        return `Deposited $${amount}`;
    }

    getBalance() {
        return this.#balance;
    }

    // Can't access #balance from outside:
    // account.#balance; // ERROR
}

const account = new BankAccount("John");
console.log(account.deposit(100));
console.log(account.deposit(100));
console.log(account.getBalance());




