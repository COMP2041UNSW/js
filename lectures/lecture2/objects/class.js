class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  canDrinkAlcohol() {
    return this.age >= 18;
  }
}

new Person('Jeff', 'Goldblum', 50);