
// Example of creating a object with bound functions
const zain = {
  name: 'zain',
  age: 17,
  canDrink () {
    return this.age >= 18;
  },
  happyBirthday() {
		this.age += 1;
  },
  sayHello() {
    return `Hi i'm ${this.name} and i'm ${this.age} years old`;
  }
};

// Example of using a class to generalise this
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi i'm ${this.name} and i'm ${this.age} years old`;
  }

  canDrink() {
    return this.age >= 18;
  }

  happyBirthday() {
    this.age += 1;
  }
}

const alex = new Person('alex', 102)
const samantha = new Person('samantha', 19);

console.log(zain.canDrink()) // false
zain.happyBirthday()
console.log(zain.canDrink()) // true
console.log(alex.canDrink()) // true
console.log(samantha.canDrink()) // true