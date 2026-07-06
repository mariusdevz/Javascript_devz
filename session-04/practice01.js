const person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Developer",
}

// ACCESSING PROPERTIES - dot notation
// console.log(person.name);
// console.log(person.age);

// ACCESSING PROPERTIES - bracket notation
// console.log(person["name"]);
// console.log(person["city"]);

// Use bracket notation when property name is dynamic
const property = "age";
// console.log(person[property]);

// MODIFYING PROPERTIES
person.age = 31;
person["city"] = "Los Angeles";
// console.log(person);

// ADDING NEW PROPERTIES
person.email = "john@example.com";
person["phone"] = "555-1234";
// console.log(person);

// OBJECT METHODS
const car = {
    brand: "Toyota",
    model: "CAmry",
    year: 2020,
    // Method 1: old synthax
    describe: function () {
        return `${this.year} ${this.brand} ${this.model}`
    },
    // Method 2: mordern synthax
    honk() {
        return "Beep beep!"
    }
}

// console.log(car.describe());
// console.log(car.honk());

// NESTED OBJECTS
const user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101",
    },
    hobbies: ["reading", "gaming", "cooking"],
};

// console.log(user.address.city);
// console.log(user.address["zip"]);
// console.log(user.hobbies[1]);

// DESTRUCTURING
const { name, age } = person;
// console.log(name);
// console.log(age);

// Renaming during destructuring
const { name: personName, age: personAge } = person;
// console.log(personName);

// DESTRUCTURING nested objects
const {
    address: { city },
} = user;
// console.log(city)

// OBJECT.KEYS() - get all property names
const keys = Object.keys(person);
// console.log(keys);

// OBJECT.VALUES() - get all values
const values = Object.values(person);
// console.log(values);

// OBJECT.ENTRIES() - get key-value pairs
const entries = Object.entries(person);
// console.log(entries);

// Loop through object
for (const [key, value] of Object.entries(person)) {
    // console.log(`${key}: ${value}`);

}

// SPREAD OPERATOR - copy/merge objects
const person1 = { name: "John", age: 30 };
const person2 = { ...person1, age: 31, city: "NYC" };
// console.log(person2);

// Original unchanged
// console.log(person1);





