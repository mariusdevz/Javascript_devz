class Car {
    constructor(brand, model, year, speed) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed
    }

    getInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    accelerate() {
        let speed = this.speed;
        return speed += 10;
    }

    brake() {
        let brake = this.speed;
        return brake -= 10;
    }

    reset() {
        return this.speed = 0;
    }
}

const info = new Car("Toyota", "Camry", "2020", 20);
console.log(info.getInfo());
console.log(info.accelerate());
console.log(info.brake());
console.log(info.reset());




