/*
   An alternate way of processing complex objects as classes
   This is the same as the prototype.js example
*/

class Person {
   constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName  = lastName;
      this.age       = age;
   }

   getFullName() {
      return `${this.firstName} ${this.lastName}`;
   }

   canDrinkAlcohol() {
      return this.age >= 18;
   }
}

// now if we call the constructor function we get this
const jeff = new Person('Jeff', 'Goldblum', 50);
jeff.getFullName(); // 'Jeff Goldblum'
jeff.canDrinkAlcohol(); // true
// => Person { firstName: 'Jeff', lastName: 'Goldblum', age: 50 }
