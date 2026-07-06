const person = {
    name: "Bob",
    age: 25,
    job: "Engineer",
    location: {
        city: "Seattle",
        state: "WA",
    }
}

const { name, job } = person;

const {
    location: { city }
} = person;

// console.log(city);

const { job: occupation } = person;
// console.log(occupation);

const values = Object.values(person);
console.log(values);



