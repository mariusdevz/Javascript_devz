// CLASS BASICS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name}`;
    }

    getAge() {
        return this.age;
    }
}

const person = new Person("Alice", 30);
console.log(person.introduce());  // "Hi, I'm Alice"

// INHERITANCE
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    // Override parent method
    introduce() {
        return `${super.introduce()} and I'm an employee`;
    }
}

const emp = new Employee("Alice", 30, 50000);
console.log(emp.introduce());
console.log(emp.getSalary());

// STATIC METHODS
class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static PI = 3.14159; // static property
}

console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.PI); // 3.14159
// console.log(calc.add(5, 3));     // ERROR
// - can't call static on instance




