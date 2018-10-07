
// TODO REGEX

const saladRegex = /^salad/;

const matched = 'salad'.match(saladRegex); // match found

const noMatch = 'More salad'.match(saladRegex); // no match

console.log(matched, noMatch);
// [ 'salad', index: 0, input: 'salad', groups: undefined ] null
