/*
 * given a name and a age make a person object
 * which stores this information
 * and which has a function called
 * can_drink which returns true of the
 * person is >= 18 and false otherwise
 *
 * const me = makePerson("sam",91)
 * me.name should be "sam"
 * me.age should be 91
 * me.can_drink() should be true
 */

function Person(name, age) {
    console.log(name, age);
}

module.exports = Person;
