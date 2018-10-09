# An Overview of JavaScript

This is Part 1 in a three part overview of JavaScript.

In this part we'll talk about the basics:
* The language syntax and semantics (this article)
* [Objects](objects)
* [Functions](functions) and declarative JavaScript.

## The Language

JavaScript is an **interpreted**, just-in-time compilation language that supports
many programming styles and paradigms and can run in many different environments.

In practice, JavaScript needs to be parsed by a runtime JS engine\*,
compiled to byte-code before it's finally executed.

Common JavaScript engines include:
* Rhino (Mozilla)
* V8 (Chrome, Opera, Node.JS)
* JavaScriptCore (Safari)
* Chakra (Edge)
* Many others..

\*All of these engines implement JavaScript
functionality in slightly different ways, because of
the generality of the JavaScript standard specification set out by the ECMAScript
foundation. For the basics however, these differences aren't really worth dwelling on.

## Warning

As we go through JS we will talk a lot about things that  _can_ do but that you _shouldn't_ do. And various things that the language is trying to shift away from and things it's trying to move towards.

It's important to keep in mind that the reason  is so in flux is because it was, is and will continue to be the primary programming language for a lot of web development.

As such it has a incredible amount of legacy features and syntax that can't be taken out in fear of breaking older websites. At the same time though,  is being used more and more so new features and paradigms are constantly being added and discussed to make the language work for various applications better.

When building a backend, you can choose from a set of well defined languages, (C, Ruby, python, etc) and each has it's strengths and weaknesses you can consider before choosing the language to develop with. However, with client side code, your only option is really\* javascript at the moment. So JS has had to become a jack of all trades while at the same time keeping legacy features from a time when JS was designed to do very simple small bits of interactivity.

It's good to keep this in mind because it's very often you'll meet things in JS that are confusing, stupid and outright infuriating.

\*Not strictly true (see WebAssembly, various transpilers, applets).

## Usage

Most commonly we use JavaScript in web browsers for client-side script execution,
but it's also become increasingly popular as a server side language through `node.`.
JavaScript can even be used to develop and build native applications for desktop and
mobile.

This course will focus on JavaScript in the browser.

## Modern web development

Way back when before most of you were born (the early 90s), web pages were simple.

The requirements were simply to serve basic information, there was little or no
interactivity, and updates to the page state required a browser refresh.

By contrast, modern web apps are heavily reliant on JavaScript for 'native-like' performance and interactivity.

Things like:

* Gmail
* Facebook
* Twitter
* But to name a few...

... Would not be possible without JavaScript.

## Why Use JS?

JavaScript is the *only*\* language that is available for developers to execute code client-side in the browser. This makes it the only tool web developers have available to create more complex web applications.

Without JavaScript we can only update a page's state by re-requesting the page from the
server.
JavaScript allows us to have features that are common-place in native applications in the browser.

\*Not strictly true (see WebAssembly, various transpilers, applets).

## In the browser

There are a number of ways to declare scripts in the browser. More on that [here](../quickstart.md).

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <title>My first JavaScript</title>
   </head>
   <body>
      <!-- This is an in-line script -->
      <script>
         alert('Hello World!');
      </script>

      <!-- This also would work, for the local file filename.js -->
      <script src="filename.js"></script>

      <!-- We could also get a script from a an external source -->
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

   </body>
</html>
```

Something to note; JavaScript will execute as soon as it's parsed by the browser -- this
may not be what is desired. Usually it isn't -- particularly for scripts that
need to interact with the DOM, or scripts that require other scripts to first load before they execute.

We'll talk about managing this when we talk more about the DOM.

## Grammar

### Variable Declaration
JavaScript is a **dynamically** typed language so we need not explicitly state our types before variables as we might in C.

Variables must: ([src](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types))
> ...start with a letter, underscore (\_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).

..And be declared with one of four prefixes,
`const`, `let`, `var`, and prefix-less (global).

The `const` prefix should be used almost always, and
simply states that this value cannot be re-assigned later
in the program.

The `let` prefix is slightly more flexible in that it can be reassigned, and should be used when `const` cannot.

The use of `var` no longer makes sense in modern JavaScript; it's like `let` in that it can be reassigned,
but is also ['hoisted'](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) to the top of the current function scope.

Given this is a common source of bugs, and given it offers no real advantage over `let`, you should really always use `let`.

```js
const myVar = 'Dog';
let myOtherVar = 'Dog';
var myVarVar = 'Dog'; // should be let or const
```

### Operators

JavaScript uses a familiar c-like set of operators
with a few additional ones.

```js
// assignment
let a = 5;
const list = [1, 5];

// bitwise operations
^ | & >> <<

// unary, postfix
++a, a++, !a, -a,

// comparison (will infer type)
==, !=
// eg.
1 == '1' // true

// strict equality: If the values have different types, the values are considered unequal. Neither value is implicitly converted to some other value before being compared.
===, !==
// eg.
1 === '1' // false
```

## Types

While types are dynamic they do exist under the hood, and the JS engine will complain if you do too many silly things.

### Primitives
JavaScript has seven primitive types:

* boolean (true, false)
* undefined (a declared variable with no value set -- don't confuse with null -- or an unset key)
* number (float, integer, signed by default)
* string
* null (a declared variable with the value set to null)
* symbol
* object (everything is an object)
   * Function
   * Array
   * Object
   * RegExp
   * Date
   * DOMElement

You can verify the type of any variable with `typeof x`:

```js
typeof 'x'
"string"
typeof {}
"object"
typeof function() {}
"function"
typeof []
"object"
typeof 99.9999
"number"
```

### Functions

Functions as mentioned above, are a special type of `Object`
-- but are worth talking about separately as they're quite different to
most other JavaScript objects. For a

### Objects

Objects are everywhere in JavaScript. For a deeper dive into
some of the more common ones check out this [link](objects)

The basic Object declaration is simply:

```js
// note const limitations apply only to reassigning
// the Object. Object properties can still be altered
// with a const declaration.
const myObject = {};

// or like this
const myOtherObject = new Object();
```

The new keyword is a constructor. Similar to Java, `new`
will call a constructor function to initialise an object.

Objects can have properties, and methods. Given the fact that (basically)
everything is an object, these differences are more semantic than real.

Adding a property or methods is as simple as:

```js
const myUser = {
  id: 'UAAAAAAA',
  displayName: 'Jane Citizen',
  age: 25, 
};

// You can also assign & read properties:
console.log(myUser.age);
// > 25
console.log(myUser['age']);
// > 25


myUser.age = 29;
myUser.address = '123 Fake Street';
```


Access via `.` and `[]` are equivalent, however one should favour to use `.` notation when accessing properties of an object. The only instance where you would not want to use `.` would be if the key contained syntactically invalid characters (i.e. reading data from an api):

```js
obj.a === obj['a'];

// Invalid syntax:
console.log(obj.a-foo-bar);

// Instead, you must use:
console.log(obj['a-foo-bar']);
```

#### Classes & Prototypes

JS is similar to other OO languages with an inheritance model. JavaScript works slightly different to many of these under the hood, taking advantage of a technique called [prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).  

Anything that is created with the `new` keyword will inherit from the **prototype** chain of the object being initialised. This is *like* subclassing, but it's also not quite the same.

The ES2015 language specification introduced a new syntax for declaring classes in JavaScript. This looks something like:

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  canDrinkAlcohol() {
    return this.age >= 18;
  }
}

new Person('Jeff', 'Goldblum', 50);
```

It is functionally equivalent to the following (just syntatic sugar), but is easier to read and write & reason about:

```js
// note the use of this in this special constructor
// also note the caps (a convention for constructor functions)
function Person(firstName, lastName, age) {
   this.firstName = firstName;
   this.lastName  = lastName;
   this.age       = age;
}

Person.prototype.getFullName = function() {
   return `${this.firstName} ${this.lastName}`;
};

Person.prototype.canDrinkAlcohol = function() {
   return this.age >= 18;
};

// now if we call the constructor function we get this
new Person('Jeff', 'Goldblum', 50);
// => Person { firstName: 'Jeff', lastName: 'Goldblum', age: 50 }
```

#### The dreaded `this`

The above example uses the reserved word `this`. It works similarly to Java's `this` or Python's `self`. However, it's worth noting here that `this` can be re-assigned (or may be not assigned to the right `this` in some instances) and can cause subtle, hard to debug bugs in your program. 

For more on `this`, check out [*this* article](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md).

## Scope, Control Flow, Loops and Iteration

### Scope

JavaScript uses a combination of *lexical*
(blocks { } and up the page seperate scope),
*hoisting* and *closures* to manage scope.

#### Hoisting
Hoisting is a 'feature' of JavaScript that pushes
functions in the same block to the top of the scope by
default. Anything with a `var` declaration is also hoisted (NB not `const`, `let`).
In practice, this means that anything in the same code block can always "see"
every function declaration.

Essentially:

```js
// function is called 'before' it's declared (valid)
myFunction(); // will output Hi Andrew

function myFunction() {
   // name refers to the var name via hoisting
   name = 'Andrew';
   console.log('Hi', name);
}
// this will be hoisted
var name;
```
... Is valid. (Please don't do this though!)

#### Garbage Collection

Variables that drop out of scope or are no longer reachable will automatically be deleted by the garbage collector. 

### Control Flow

JavaScript is very c-like in its control-flow.

```js
if (condition) {
   // do something
}

if (condition) {
   // do something
} else {
   // do something
}

// as with c, one liners don't require brackets. (don't do this though!)
if (condition)
   // do something
else
   // something else

// And of course ternary
const x = condition ? 22 : 0;
```


### Loops
Let's assume we have an Object and Array as below:
```js
const array = ['Teddy', 'Clock'];

const item = {
   name: 'Box',
   weight: 10,
   contents: array
};
```

The `while` or `do-while` loop:
```js
// same as c
let index = 0;

while (index < array.length) {
   let value = array[index];
   index++;
}

do {
   let value = array[index];
   index++;
} while (index < array.length);

```

The `c-style` loop:
```js
// Iteration over an array
for (let index = 0; index < array.length; index++) {
   // do something with item
   // very similar to c
   let value = array[index];
}
```

The `for ... in` loop:
```js
// Iteration over an object/array
for (const property in items) {
   // do something with item
   // very similar to python
   let value = items[property];
}
```

The `for ... of` loop:
```js
// requires implementation of 'Iterator'
// Common iterables include String and Array types.
for (const item of array) {
   // the value of item for each iteration
   item => ['Teddy', 'Clock'];
}
```

### Error Handling

Error handling in JavaScript is Java-like in syntax. Try something risky,
and if it fails catch the exceptions thrown by the thing that went wrong.

```js
try {
   somethingBad();
} catch (e) {
   // an error occurred
   const message = e.message;
} finally {
   // do something that you would do either way
}

// can create own errors or throw errors like so.
const e = new Error('Bad Thing Happened');
throw e;

// Or in one line:
throw new Error('Bad Thing Happened');
```

One further note on errors. We can, if we so choose, create specific catch handlers.

Most of the time this is overkill, but it can be useful:

```js
try {
    somethingBad();
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
   // statements to handle RangeError exceptions 
  }
}
```

Note, failing to handle errors properly in JavaScript can be particularly
unforgiving, and hard to detect. If you've got time, get used to the Mozilla or
Chrome devtools and understand the use of breakpoints to debug.

## Disclaimer:
Learning any programming language in three weeks is **impossible**,
and JavaScript is no exception. While the below attempts to provide a fairly
comprehensive overview, there is lots of detail and depth left out to aid you
to 'get going' faster. This comes at a cost!
