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