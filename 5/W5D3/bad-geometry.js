
class Rectangle {
    constructor() {
        this.width = 0;
        this.height = 0;
    }

    setWidth(width) { this.width = width; }
    setHeight(height) { this.height = height; }

    getArea() { return this.width * this.height; }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}