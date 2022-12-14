'use strict';


// NEW SECTION
// Coding Challenge 2

// 1.
class CarClass {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};


// NEW SECTION
// Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
steven.init('Steven', 2002);
steven.calcAge();
// logs 35
console.log(steven);


// NEW SECTION
// Coding Challenge 1

// 1.
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};
// 2. 
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.speed);
};
// 3. 
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.speed);
};
// 4.
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
// logs 130
bmw.brake();
// logs 125
mercedes.accelerate();
// logs 105
 

// Constructor Functions

const Person = function(firstName, birthYear){
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear; 

    // never do this!
    // this.calcAge = function() {
    //     2037 - this.birthYear
    // };
};

const krzysztof = new Person('Krzysztof', 1989);
// 1. a new, empty object is created {}
// 2. funtion is called, and "this" keyword will be set to the newly-created object: this = {}
// 3. {} is linked to a prototype
// 4. the {} that was created is automatically returned from the constructor function

console.log(krzysztof);
// logs Person {firstName: 'Krzysztof', birthYear: 1989}

const sveta = new Person('Svitlana', 1988);
// can make as many objects as we want from the constructor function


// NEW SECTION
// Prototypes

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};
// now, the calcAge function is a method for the Person constructor function

krzysztof.calcAge();
// result is 48
// any object (instance) has access the methods and properties of its prototype

console.log(krzysztof.__proto__);
// logs the prototype itself
console.log(krzysztof.__proto__ === Person.prototype);
// logs true
console.log(Person.prototype.isPrototypeOf(krzysztof));
// logs true
console.log(Person.prototype.isPrototypeOf(sveta));
// logs true 
console.log(Person.prototype.isPrototypeOf(Person));
// logs false

// prototype of linked objects

Person.prototype.species = 'Homo Sapiens';

console.log(krzysztof, sveta);
// logs the object information; species and calcAge are listed under the prototype

console.log(krzysztof.species, sveta.species);
// logs Homo Sapiens Homo Sapiens

