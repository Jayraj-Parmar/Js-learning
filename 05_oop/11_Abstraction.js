// https://www.geeksforgeeks.org/javascript/abstraction-in-javascript/
// The JavaScript does not provide built-in support for implementing the abstraction like the other programming language gives.

// Implement manually
class Shape {
  area() {
    throw new Error("area() must be implemented");
  }
}

class Rectangle extends Shape {
  area() {
    return 10 * 20;
  }
}

const shape = new Rectangle();
console.log(shape.area());
