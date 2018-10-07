/*
   JavaScript supports some really nice Array
   methods which make the use of for loops in general
   largely unnecessary.

   key among thse are map, filter and reduce
*/
const properNoun = noun => noun.charAt(0).toUpperCase() + noun.substring(1);

// let's note the power with cleaning some user data.
const users = [
  {
    name: 'Jeff',
    age: 52,
    gender: 'male'
  },
  {
    name: 'Andy',
    age: 25,
    gender: 'male'
  },
  {
    name: 'Sarah',
    age: 30,
    gender: 'female'
  },
  {
    name: 'Phoebe',
    age: 21,
    gender: 'female'
  },
  {
    name: 'Doris',
    age: 81,
    gender: 'female'
  }
];

// let's get the average age of females.
const females = users.filter(user => user.gender === 'female');
const ageSum = (sum, current) => current.age + sum;
const average = females.reduce(ageSum, 0) / females.length;
console.log(average);

// let's capitalise the gender category
// note object destructuring
const betterUsers = users.map(({ name, age, gender }) => ({
   name,
   age,
   gender: properNoun(gender)
}));

// or creating a summary string with map + reduce.
const usersString = betterUsers
                      .map(({ name, age, gender }) =>
                         `${name} (${gender}) is ${age} years of age.`)
                      .reduce((all, curr) => `${all}\n${curr}`);

console.log(usersString);
