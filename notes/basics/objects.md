# Objects in JavaScript

Because objects are ubiquitous in JavaScript, this section provides
an overview of some of the more common ones and how you can use them.

## Array or []

### Push `.push(item)`
Add to the end of the Array (append). Will affect underlying array.

### Pop `.pop(item)`
Grab the last item. Will affect underlying array.

### Shift `.shift(item)`
Remove from the front of the Array. Will affect underlying array.

### Unshift `.unshift(item)`
Add to the front of the Array (append). Will affect underlying array.

### Filter `.filter(fn)`
Filters the array and returns a new array filtered by the
callback function passed in. Callback should return true or false.

```js
const array = [1, 2, 3, 4];

function isOdd(num) {
  return num % 2;
}

const oddOnly = array.filter(isOdd); // [ 1, 3 ]

// or with arrow func
const oddOnly = array.filter(curr => curr % 2); // [ 1, 3 ]
```

### Map `.map(fn)`
Map iterates through an array by applying a function to each element that can transform it to a new value. 

```js

const array = [1, 2, 3, 4];

function double(num) {
  return num % 2;
}

const doubleItems = array.map(double); // [ 2, 4, 6, 8 ]

// or with arrow func
const doubleItems= array.map(curr => curr * 2); // [ 2, 4, 6, 8 ]
```

### Reduce `.reduce(fn)`
Reduce can be used to flatten an array. It accepts a callback that takes an `accumulator` and the `current element`. It iterates through the array and applys the callback to the value. The callback returns the accumulator passed to the next invocation of the callback.

```js
const array = [1, 2, 3, 4];
const sum = array.reduce((sum, current) => sum + current, 0); // 1+2+3+4
```

### Join `.join(delimiter)`
As advertised. Joins array elements with the provided delimiter.

### Tips

Most (many) Array methods allow for chaining, because they return
an Array. This is something you should take advantage of to write
more 'declarative' functional code.

Some more advanced syntax to keep in mind includes the spread
`...` syntax which implicitly turns an array into its component parts,
and the destructing syntax (very similar to Objects) which allows
you to quickly and easily select elements in an array. eg.

```js
// spread
const list = [9, 10, 12, 13];
const [a, b, ...rest] = list;
// a == 9, b == 10, rest == [12, 13]
```

## String

### Split `.split(delimiter)`
Splits the string into an Array.

### Trim `.trim()`
Trims whitespace from beginning and end of string.

### index `.charAt()`
Returns the char inside the string. NB. Strings can't be accessed with indexing
directly, as you can in other languages.
