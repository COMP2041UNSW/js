# Node `node.js`

Node.js in a runtime environment for JavaScript that runs _serverside_,
allowing us to test, and build more complex applications in JavaScript --
beyond the DOM.

It can be installed at [nodejs.org](https://nodejs.org/), and has a range of
applications which we won't fully explore in this course.

It does however offer a simple alternative to running basic JavaScript
on your computer without going through the browser.

Once you setup `node` on your local machine, you'll be able to run
JavaScript through the command-line.

## Basic Example
Eg. Let's say we're prepping a basic script for the browser and we want to test the basic logic.

```js
// a script without DOM interactions
// list.js
const list = ['Sam', 'Delilah', 'Mary'];

console.log(list.indexOf('Mary'));
```

```bash
node list.js
# output // 2
```

Cool.
