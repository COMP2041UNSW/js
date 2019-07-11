/** numbers */
const anInt = 123;

/** aFloat */
const aFloat = 1.2;

// exponents
const exp = 1e2;

const longFloat = 1.231215;

// Like stirngs numbers also have some handly builtin
const shortFloat = longFloat.toFixed(2);

// toString translates to baseX representation
const binaryRepresentation  = anInt.toString(2);

let x = 'abbbajlksad'
x = Number(x); // NaN
x = parseInt(x); // NaN
x = +x; // NaN

// there are many more