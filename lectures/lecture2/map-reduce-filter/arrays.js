// impure manipulaitons
const a = [];
a.push(1) // a = [ 1 ]
a.unshift(2) // a

// pure manipulations
const b = []
const c = b.concat(1, 2, 3)
// c = [ 1, 2, 3 ] b unchanged
const d = c.map((value) => value * 2);
// d = [ 2, 4, 6]