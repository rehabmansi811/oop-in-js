//object-Oriented Programming (OOP) is a programming paradigm based on objects

///////////////////////////////////1. Objects////////////////////////////////////
/*const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    startEngine: function () {
        console.log("Engine started");
    }
};
car.startEngine(); // Output: Engine started
console.log(car.brand)
*/
//////////////////////////////////2. class ///////////////////////////////////////
/*class Car {
    constructor(brand, color, year) {
        this.brand = brand;
        this.color = color;
        this.year = year;
    }

    startEngine() {
        console.log(`${this.brand} engine started`);
    }
}

const myCar1 = new Car("Toyota", "white", 2020);
myCar1.startEngine();  // Output: Toyota engine started

const myCar2 = new Car("BMW", "red", 2021);
myCar2.startEngine();
console.log(myCar2.color)*/

////////////////////////////////////3.Encapsulation///////////////////////////////////
/*class Car {
    #engineStatus = false; // Private field

    startEngine() {
        this.#engineStatus = true;
        console.log("Engine is on");
    }

    stopEngine() {
        this.#engineStatus = false;
        console.log("Engine is off");
    }
}

const car = new Car();
car.startEngine();  // Output: Engine is on 
 */

////////////////////////////////////4.Inheritance///////////////////////////////////
/*class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    move() {
        console.log(`${this.brand} is moving`);
    }
}

class Car extends Vehicle {
    startEngine() {
        console.log(`${this.brand} engine started`);
    }
}

const myCar = new Car("BMW");
myCar.move();        // Output: Toyota is moving from parent class
myCar.startEngine(); // Output: Toyota engine started from child class  */

////////////////////////////////////5.Polymorphism///////////////////////////////////
/*class Animal {
    sound() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Meow!");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.sound();  // Output: Woof!
cat.sound();  // Output: Meow!*/



