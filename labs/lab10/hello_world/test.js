const hello = require('./hello_world');
const input = process.argv[2];
if (input === undefined) {
  throw new Error(`input not supplied`);
}
console.log(hello(input));
