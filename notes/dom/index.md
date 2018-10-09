# What the DOM?

This is Part 2 in a three part overview of JavaScript. If you missed Part 1,
it's available [here](../basics).

In this part we'll talk about the Document Object Model:
* What it is and how we can manipulate it with JavaScript
* The basics of the Event Model (as we move toward asynchronous concepts)

## Introduction

The Document Object Model or colloquially (`DOM`) provides the interface that allows
JavaScript to interact with XML, SVG and HTML through the browser. Without the `DOM` API we'd be unable to
manipulate our web pages with JavaScript.

## The DOM APIs

Why `DOM`? We call the webpage a "Document", and the `DOM` API allows this Document to be broken up into
a manipulatable tree-like "Object" structure that allows more complex usage and editing by our scripts. It's a "Model" in that it holds and manages Document State through a well-defined API.

## DataTypes

The DOM offers a number of unique datatypes that don't
exist natively in JavaScript.

There is nothing special about the way these `DOM` DataTypes work, they are, at their
heart `Objects` in a JavaScript sense and observe all the same conventions. Still,
as with the vanilla `Array`, `Function`, `String` ... it's worth getting a handle
on the API of the `DOM` DataTypes if you're ever likely to do any sort of real web development.

The following with reference to: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

Element | Description
:-----|:----
`document` | The DOM document Reference chapter describes the document object.
`element`	|  `element` refers to an element or a node of type element returned by a member of the `DOM` API. Rather than saying, for example, that the `document.createElement()` method returns an object reference to a node, we just say that this method returns the element that has just been created in the `DOM`. These objects implement a specific interface methods that allows complex interactions with the Document.
`nodeList`	| A `nodeList` is an array of elements, like the kind that is returned by the method `document.getElementsByTagName()`.
`namedNodeMap` |	A `namedNodeMap` is like an array, but the items are accessed by name or index, though this latter case is merely a convenience for enumeration, as they are in no particular order in the list.

You'll be interacting with all of these (or some variation of all of these),
so get some familiarity with how they work and when you might use 'em.

## Key Methods
The DOM APIs are quite extensive but mostly you'll be doing some variation of the
following methods.

```js
// document is global, returns an html element
// with the specific id.
document.getElementById(id);

// returns a DOM HTMLCollection
document.getElementsByTagName(name);

// returns an html element
document.createElement(name);

// returns a list
document.getElementsByClassName(className);

// node and element interactions
parentNode.appendChild(node);
parentNode.removeChild(node);

// access what's in a node
node.nodeData or node.data

// access what's in an element
element.innerHTML;
element.textContent; // not always what u want, read docs.

// change the style.
element.style.left;

// as advertised
element.setAttribute(attr, value);
element.getAttribute(attr);
element.addEventListener(eventType, handler);

// window is also global (in fact the window encloses the document)
window.onload = init;
window.dump();
window.scrollTo();
window.innerHeight;
window.innerWidth;
window.addEventListener(eventType, handler);
```

## Events and the Event Loop

The DOM uses events to manage user interaction. An `Event` is a blanket term for anything that JavaScript
can react to, a screen resize, a click, a drag, a key smash, touch, network requests, you name it.

Events are managed and processed by a single-threaded loop,
which will run in your browser.. forever. We call this the
_Event Loop_.

### The Event Loop

The Event Loop is at its core quite simple, in JavaScript is something like the following.

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

Every time a event is triggered, let it be a click, a key press, or a mouse move, a event is added to the queue.

Unlike more complex concurrency models, JavaScript uses a `Run-to-completion` model. This means that while code is handling one event, another event will not be handled.

Again this is a result of its single-threaded nature. Events can be added to the queue but only processed one at a time.

The advantage of this is its simple to reason about; the obvious disadvantage is that if one event handler takes too long to process, all other events are queued.

This means while the page is processing, it essentially freezes and no other fired events can be caught and processed.

See [`examples/async/blocked`](/examples/async/blocked).

Note that I/O, including keyboard, touch and mouse events
can take different lengths of time to be processed by the OS,
before they reach the browser -- and in this time; JavaScript
will simply move on to its next task.

It will not wait for a long network request to complete for example, before it
continues with other jobs. This helps performance but
can create some confusion about the way in which our
code is being executed. More on this when we properly
discuss `async`.

### More on Events

OK so cool JavaScript gives us the ability to write code that gets run on a certain event asynchronously! but how do we actually do that?

The internal JavaScript event loop is constantly capturing events but it needs to know what to do with an event firing, or even whether to ignore it completely.

In the DOM, we manage this with `listeners`.

#### DOM based

You can do this directly in `HTML` with a variety of tags such as `onclick`, `onhover`, `onblur` etc. read about them on the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Events).

These bind directly to a `DOM Node`; that is
they will only react and admit an event if the user interacts
with the specific node that was interacted with; and its children.

```html
<script>
  function myFunction(){
    alert('i am a hack0r');
  }
</script>

<div onclick="alert('i am a hack0r')"></div>
<div onclick="myFunction()"></div>
```

A better way to attach event handlers is in JavaScript code. In practice this is preferred.

```js
// generally preferred style
document
  .getElementById("mybutton")
  .addEventListener('click', function(event) {});

// this also works
document.getElementById("mybutton").onclick = function(event) {};
```

Here what we have done is _bound_ an inline listener function to a DOM Node and an event -- the
listener is then called whenever the particular event is fired.

In this case, when a `click` occurs, our button (presumably an html element of some kind)
will provide an `ClickEvent` object to the EventLoop,
which will dealt with by our shiny new event handler.

```js
function myEventHandler(event) { ... }

// generally preferred style
document
  .getElementById("mybutton")
  .addEventListener('click', myEventHandler);

// but this works too
document.getElementById("mybutton").onclick = myEventHandler;
```

The event object is hard to say anything about because what it contains depends on the event. A KeyPress event object holds information on what key was pressed, a click holds information on where the click happened etc. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Events) for more info.

#### Other

There are also some events that don't directly relate to a specific DOM node, such as a screen resize or a "loaded" event which fires once the document has been fully loaded.

These are declared in the same way but we bind our event handlers to the `window` which acts as an overarching anchor for our events.

```js
window.addEventListener('load',
  (_event) => console.log('All resources finished loading!'));
window.addEventListener('resize',
  (_event) => console.log('Screen was resized'));
```

A very common event used is a timeout event where a certain function is run after a certain amount of time

```js
// print out hello after 3000ms (3 seconds)
setTimeout(() => alert('Hello'), 3000);
```

JavaScript also lets you make your own custom events and state when you want them to fire but for now that's out of the scope.

Feel free to read more about them on the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) though.

#### `this` binding

We've covered the basics of `this` in the previous notes,
but to recap, `this` refers to the _enclosing_ object.
When the function is in a object, this refers to the object itself. This is similar to how python implements `self` and java implements `this`. But context matters!

```js
console.log(this); // window
function f() {
  console.log(this); // still window
}

const person = {
  firstName: 'John',
  lastName : 'Doe',
  id       : 5566,
  fullName : function () {
    return `${this.firstName} ${this.lastName}`;
  }
};
```

This is all dandy but what's cool is that when a event is triggered, `this` is bound to the node on which the listener is attached.

The following piece of code:

```html
<div onclick="console.log(this)"></div>
```
Would output the div element itself in the console if
clicked.

### Capturing An Event

#### Bubbling

Take a look at the following piece of code:

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

Here it is rendered:

<hr>
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
<hr>

If you click on the EM the event still happens. This makes sense, if you say that a event should fire on a div, then any click inside the div should fire a event.

But consider the below:

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code onclick="alert('The EM Handler!')">EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```
<hr>
<div onclick="alert('The handler!')">
  <em>If you click on <code onclick="alert('The EM Handler!')">EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
<hr>

What should happen? should the first event trigger, the outer one, both?

If you try it out you'll see that both fire, inside out.

This is because of how js by default does **event capturing and bubbling**

By default js _almost_ always bubbles events from the most nested element to the outermost element, firing each event inside out.

There are some cases where the default action is different, for example on a focus event the event doesn't bubble. But almost always the event will bubble.

Now of course this is default but like a lot of things in JavaScript we can override.

```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>

```

We can stop specific event chains from bubbling by stopping it in it's tracks.

Or we can be very specific in how we react to an event, `event.target` holds the innermost DOM node that triggered the event so in your event handler you can reject to handle any events that are triggered by nested elements

```js
function myHandler(event) {
  // i don't care about nested events
  if (event.target != this) {
    return;
  }

  /* this is a demo, there are better ways to do this */
}
```

It's important to understand the mechanism by which JavaScript propagates an event through the DOM so you can structure your event handlers to work in the way you want them to.

A simple example is if you want to have a game where clicking on the red dot is how you lose and clicking anywhere else means you win.

A approach like this ends up with weird behaviour.

```html
<!-- Don't assign js-listeners inline in production code -->
<div class="my-container" onclick="alert('you won')">
  <div class="my-button" onclick="alert('you lost')">
</div>
```

<hr>
<style>
.my-container {
  width: 100px;
  height: 100px;
  background: #EBEBEB;
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
}
</style>

<div style="width: 100%; display: flex; justify-content: center">
<div class="my-container" onclick="alert('you won')">
  <div class="my-button" onclick="alert('you lost')"></div>
</div>
</div>
<hr>

#### Capturing

This isn't really covered, basically you can have events fire outside in but this isn't really useful for anything and is more of a legacy feature at this point.

You can read more about it at [Bubbling And Capturing](https://javascript.info/bubbling-and-capturing) if you are curious.
