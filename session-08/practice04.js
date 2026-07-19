// ABSTRACT CLASS PATTERN
class Shape {
    getArea() {
        throw new Error("getArea() must be implemented");
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes = [new Square(5), new Rectangle(7, 4)];
shapes.forEach(shape => console.log(shape.getArea())
)

