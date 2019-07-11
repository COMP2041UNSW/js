// note const limitations apply only to reassigning
// the Object. Object properties can still be altered
// with a const declaration.
const myObject = {};

// or like this
const myOtherObject = new Object();


const myUser = {
  id: 'UAAAAAAA',
  displayName: 'Jane Citizen',
  age: 25, 
};

// You can also assign & read properties:
console.log(myUser.age);
// > 25
console.log(myUser['age']);
// > 25

// setting attributes
myUser.age = 29;
myUser.address = '123 Fake Street';