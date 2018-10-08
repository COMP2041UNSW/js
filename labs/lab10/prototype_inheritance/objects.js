/*
 * make a Dog object which given a name and a age  stores this information
 * and which has a function called toHumanYears which returns how old the
 * Dog is in human years (assume 1 dog year == 7 human years)
 *
 * const me = Dog("sam",91)
 * me.name should be "sam"
 * me.age should be 91
 *
 * make Dog such that it is inheriting from the provided Animal class
 *
 * me.__proto__ should be Animal
 * me.makeSound() should print out 'woof'
 *
 */

function Animal(age) {
    this.age = age
}

Animal.prototype.makeSound = function() {
    console.log(this.sound)
}

function Dog(name, age) {

}

module.exports = Dog;
