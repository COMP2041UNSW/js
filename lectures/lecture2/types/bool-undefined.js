// standard declaration
const isTrue = true;
const isFalse = false;

// not operator to coerce a boolean
const isTrueAlso = !false;
const isFalseAlso = !true;

// most types can be coerce to a boolean using a double !!
const emptyString = ''
const falseValue = !!'';
console.log(
  !'', !0, '0' === 0
);

let noValue; // undefined

// rarely something you do
// const noValue = undefined;

// different to undefined, 
const definitivelySet = null;