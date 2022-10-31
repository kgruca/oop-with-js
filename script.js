'use strict';

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

