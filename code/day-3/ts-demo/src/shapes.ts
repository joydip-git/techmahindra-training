interface Shape {
    calculateArea(): number;
}
class Circle implements Shape {
    private _radius: number;
    constructor(radius: number) { this._radius = radius }

    calculateArea(): number {
        return this._radius * this._radius * Math.PI
    }

    set Radius(value: number) {
        this._radius = value
    }
    get Radius(): number {
        return this._radius
    }
}

class Triangle implements Shape {
    private _base: number;
    private _height: number;

    constructor(base: number, height: number) {
        this._base = base
        this._height = height
    }
    calculateArea(): number {
        return this._height * this._base * 0.5
    }
}

function createShape(choice: number): Shape {
    let shape: Shape;
    switch (choice) {
        case 1:
            shape = new Circle(12)
            break;
        case 2:
            shape = new Triangle(12, 14)
            break;

        default:
            break;
    }
    return shape
}
function displayArea(s: Shape) {
    console.log(s.calculateArea())
}
let s = createShape(1)
displayArea(s)


