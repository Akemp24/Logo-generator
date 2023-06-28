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
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`
    }
};

module.exports= {Shape, Circle, Triangle, Square};

