// strings can be declared like this
const aString = 'hello world'

// or like this
const anotherThing = "Hello World"

// or like this
const someAnotherThing = `hello world`

// strings can be concatenated with the + operator (like python)
const firstName = 'Alex',
      lastName  = 'Hinds'

const fullName  = 'Alex' + ' ' + 'Hinds' // Alex Hinds
// OR
const fullNameWithTemplate = `${firstName} ${lastName}`;

// strings also have a number of methods natively available
anotherThing.toUpperCase() // HELLO WORLD
anotherThing.replace(/[aeiouAEIOU]/, ''); // Hll Wrld
