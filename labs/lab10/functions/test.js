const function_dispatcher = require('./functions');
const functions = [(a)=>a+5,(a)=>a+6,(a)=>a.toUpperCase()];

console.log(function_dispatcher(functions, [1,56,"hello"]));
