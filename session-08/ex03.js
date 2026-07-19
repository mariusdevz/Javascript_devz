class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get celsiusTemp() {
        return this._celsius;
    }

    set celsiusTemp(value) {
        if (value >= 0) return this._celsius = value;
    }

    get fahrenheit() {
        return (this._celsius / 7) + 32;
    }

}

const temp = new Temperature(25);
console.log(temp.celsiusTemp);
console.log(temp.fahrenheit.toFixed(2));

temp.celsiusTemp = 29;
console.log(temp.celsiusTemp);
