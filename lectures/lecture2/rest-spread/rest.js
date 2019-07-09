
// [ ... ]
/*

const name = 'Alex';

'Hello' + ' ' + name;

`Hello ${name}`;
*/

const person = {
    name: 'Zain',
    age: 100,
    speed: 7.5
};

// example of inline renaming, and destructure syntax
const { name: zain_name, age, speed } = person;

console.log(zain_name, age, speed);

// example of inline destructure syntax (in a function)
function personProcessor({ name, age }) {
    console.log(name, age);
}

personProcessor(person);

// example of spread syntax
function printArguments(...args) {
    args.forEach(arg => console.log(arg));
}

// example of using rest/spread syntax to concatentate two arrays
const girls = ['Sally', 'Lakshi', 'Sophia', 'Tilly'];
const boys  = ['Andrew', 'Barry', 'Tobias', 'Prashant'];

const names = [...girls, ...boys];
// same as 
const namesConcat = girls.concat(boys);

console.log(names); // ['Sally', 'Lakshi', 'Sophia', 'Tilly', 'Andrew', 'Barry', 'Tobias', 'Prashant'];

// can give this function any number of args.
printArguments(1, 2, 3, 4, 5, 6, 7);

