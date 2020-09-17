class Rectangle extends Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() { return this.width * this.height; }
}

class Square {
    constructor() { this.side = 0; }

    setSide(length) { this.side = length; }

    getArea() { return this.side * this.side; }
}


// const s = new Square();
const r = new Rectangle(100, 200);

r.getWidth();
r.setWidth(300);