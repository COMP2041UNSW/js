

function sayHello() {
  console.log('Hello');
}

const sayHello = function() {
  console.log('Hello');
}

const sayHello = () => { 
  console.log('Say Hello')
}

const sayHelloName = (name) => {
  console.log(`Say Hello, ${name}`);
}

// exact same is
const sayHelloName = name => {
  console.log(`Say Hello, ${name}`);
}

// exact same is
const sayHelloNameAge = (name, age) => {
  console.log(`Say Hello, ${name}, you're ${age}.`);
}

const sum = (a, b) => a + b;

function sum(a, b) {
  return a + b;
}
