# Functions and Declarative programming

First a little bit of preamble to give a quick overview on syntax and styles.

## Syntax
Functions are, like Objects, _everywhere_ in JavaScript. Functions can be declared in two ways, both having subtly 
different behaviour with regards to the `this` context.

```js
// A plain old function, Can be declared with or without a name. (preferred)
function doMycoolThing() { }

// Anonymous function assigned to a constant 
const doMycoolThing = function () {};

// Anonymous function used inline as a callback.
array.map(function (item) { return item + 1 });

// for all of these types of functions, the value of 'this' is bound to the enclosing object.
```

However, ES2015 introduced [_arrow functions_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) which change how the `this` context is assigned.  

```js
const returns10 = () => 10;
const greet = (name) => `Hello ${name}`;

// Single argument functions do not need to have brackets, so the following is equivalent 
// to the second example above
const greet = name => `Hello ${name}`;

// The arrow function makes callbacks easier to read and write. The following example is 
// equivalent to the array.map call in the previous code block.
array.map(item => item + 1);

// Arrow functions also have one special property! They bind to the surrounding context, 
// not the enclosing object! This is important in areas where you may normally have had 
// to 'bind' a fn.
element.addEventListener('click', handler.fn.bind(handler));
element.addEventListener('click', () => handler.fn());
```

In some cases you may need to explicitly alter the value of `this`
that you're trying to manipulate. In such cases, one form of the below methods
will be appropriate.

### Bind `.bind(thisArg, ...args)`
Bind explicitly nominates a function's `this` value and
returns this new function. Common use with event handlers as above.

```js
// now objects methods will be bound to object (as it should be)
// rather than element (which is the enclosing object)
element.addEventListener('click', object.method.bind(object));
```

### Call `.call(thisArg, ...args)`
Call is very similar to `.bind`, except that rather than returning a function,
it also makes the function call.

```js
const returnVal = object.method.call(object, arg1, arg2...);
```

### Apply `.apply()`
Apply does exactly the same thing as `.call`, except that it takes an Array,
rather than an arguments list. IE.

```js
const returnVal = object.method.apply(object, [arg1, arg2]);
```

## Thinking Functionally

Functions in JavaScript are first class objects; that is they
can be more or less treated in the same way as variables, passed around,
and even returned by other functions. This isn't a unique trait of JavaScript
but it does allow you to think and program differently than you might
otherwise be used to.

### Imperative vs Declarative programming
If you've come from a language like `C` you're likely to think
in an imperative way when you think about your code patterns.

_Imperative_ programming is like a recipe. Do this, then this, then that.
It's a set of commands that the process will follow.

_Declarative_ programming on the other hand is a way of
describing a program's logic rather than the direct process.

```js
const double = num => num * 2;

// imperative
for (const value of list) {
   doubledList.push(value * 2)
}

// declarative
const doubledList = list.map(double)
```

Functional programming relies on what are known as **pure functions**.
Pure functions are functions with no side effects, they simple take in
an input, and spit out an output without affecting any sense of global state.

```js
// pure functions are very easy to reason about and test
const double = num => num * 2;
const addCurlyBraces = string => `{ ${string} }`;

// impure because list is affected
const list = [];
const impure = num => list.push(num);
```

Because these functions are stateless, we can very easily combine them with composition.

```js
// from above
const basicCompose = (f, g) => (num) => g(f(num));

// and then
const doubleThenCurly = basicCompose(double, addCurlyBraces);

'{ 20 }' == doubleThenCurly(10);
```

We're creating new functions from other functions just by composing them.
Neat. But we can take this further with a concept known as currying.

Instead of passing two functions to our basicCompose function we could pass
just one. JavaScript allows this too. Consider:

```js
const doubleComposed = basicCompose(double);
const triple = (num) => num * 3;
const square = (num) => num * num;

const multBySix = doubleComposed(triple);
// or
const doubleThenSquare = doubleComposed(square);

60 == multBySix(10);
100 == doubleThenSquare(5);
```

Nice!

### Bringing it all together

For many of these more trivial examples these sorts of features can seem a little contrived. But here's a super quick declarative example that brings things together nicely.

```js
const shoppingCart = [
   { item: "Apple", price: 10 },
   { item: "Orange", price: 12 },
   { item: "Pineapple", price: 5 }
]

const multiply = a => b => a * b;
const pluck = key => object => object[key];

// let's say tax of 10% for GST and a 5 % first customer discount
const discount = multiply(0.95);
const tax = multiply(1.10);
const sum = (acc, curr) => curr + acc;

// Now, for some simple readable, easy to reason about code.
const totalPrice = shoppingCart
    .map(pluck('price'))
    .map(discount)
    .map(tax)
    .reduce(sum, 0)
```
And we could optimise this further by composing our functions before applying map. But I'll leave that as a task for the reader.
