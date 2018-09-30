/*
 * Write a function pipe that
 * like the unix | takes the output from 1 fn
 * and drives it into the next fn.
 * it should be able to take any number of functions
 * note pipe itself should return a function,
 * so that you can run some input through the functions.
 * HINT: use reduce
 */

function pipe (...functions) {
    console.log(functions);
}

// or const pipe = (...functions) =>

module.exports = pipe;
