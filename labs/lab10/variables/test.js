const doubleIfEven = require('./variables')
const input = process.argv.slice(2);
input.map((x)=>parseInt(x));
if (input === undefined) {
  throw new Error(`input not supplied`);
}
for(let num of input)
  console.log(doubleIfEven(num));
