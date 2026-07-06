const person = {
    name: "mariusdevz",
    age: 25,
    email: 'mariusdakid@gmail.com',
    city: "Yaounde",
    hobbies: ["gaming", "workouts"],
    address: {
        street: "street123",
        city: "Mexico",
        zip: "zip-code"
    }
}

console.log(`${person.name}, ${person.email}`);
console.log(person.hobbies[0]);
console.log(person.address.city);

person.phone = "555-1234";
// console.log(person);

delete person.email;
console.log(person);


