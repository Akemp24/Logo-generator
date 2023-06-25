// Exports triangle, circle, and square classes

class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // use the render method in the child classes
    }
};

class Circle extends Shape {
    render() {
        return 
    }
}

class Triangle extends Shape {
    render() {
        return
    }
}

class Square extends Shape {
    render() {
        return
    }
}

