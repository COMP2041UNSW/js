const Dog = require('./objects');

const d = new Dog('Sam', 10);
d.makeSound();
console.log(d.__proto__)
console.log(d.toHumanYears());
