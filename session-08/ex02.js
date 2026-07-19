class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        return "The car is starting...";
    }
}

class Car extends Vehicle {
    constructor(doors, fuelType) {
        super();
        this.doors = doors;
        this.fuelType = fuelType;
    }

    start() {
        return `${super.start()} has a higher ${this.fuelType}`
    }
}

class Motorcycle extends Vehicle {
    constructor(hasStorage) {
        super();
        this.hasStorage = hasStorage;
    }

    start() {
        return `${super.start()} has an ${this.hasStorage} storage`
    }
}

const vehicle = [new Vehicle("camry", "Toyota"), new Car("gold", "solid Fuel Tank"), new Motorcycle("SSD")];
vehicle.forEach(v => console.log(v.start()));