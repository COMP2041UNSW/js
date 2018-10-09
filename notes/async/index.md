# Async JS, AJAX

This is Part 3 in a three part overview of JavaScript. If you
missed the first two parts they're available [here](../basics) and [here](../dom).
In this section we'll cover the basics of JavaScript in an asynchronous context.

## Introduction

JavaScript was created to be the language that allowed for interactive web pages. It would allow developers to define how their pages would react to events and updates.
And create a richer browser experience.

But at the core of this came an issue, the things the code would react to would be
naturally **asynchronous**, that is to say a user might click on something right now -- or in a second or in two hours; you couldn't know.
Nor can we know what order in which a user will do things. What will they click on first, what will they type?

As a result, JavaScript evolved various constructs to allow users to write code that only ran when triggered by a certain event.
We touched on some of this with the DOM, and how it handles
Events 'propagating' in the browser, but we'll need to go
deeper to talk about I/O more broadly, and asynchronous JavaScript.

## Resource interactions

A good place to start is with how JavaScript evolved to handle resource interactions.

Back when we had "Ye Olde Internets" every time you needed more data from a server you would have to reload the entire page or redirect to a new page.

This was difficult for our old pilgrim developers. You couldn't have a page update live like fb messenger or twitter does because you'd have to refresh the page. Furthermore even if all you wanted was to grab three more posts from your newsfeed you'd have to reload the entire page.

The entire concept of more things loading as you scroll (lazy loading) didn't exist. You'd have to download all or split your feed into pages.

So naturally our brave new world explorers worked toward bridging this
functional gap with JavaScript.
We could fetch little bits of relevant data and update our current view appropriately.

But IO is slow; really slow, sometimes a request can take up to a
couple of seconds to complete and if you throw yourself back to
when we were discussing the event loop, this is an issue.

You can't wait for a server to get back to you after a request because while you are waiting, no other JavaScript can run, and your page stops reacting to events.

So with I/O we developed a asynchronous toolset where we didn't ping a
server and wait for a response, we rather developed our code such that
the pinging of the server and getting a response were distinct events that happened independently of each other.

### Basic XHR

Lets start with ye olde way, callback functions.

We can send a request to a server and specify a function to run when the server responds.

Once the server responds a event is put onto the event queue and when it is its turn, the callback function is triggered.

```js
// this get's called at a later time whenever
// the server responds

function callback(data) {
  // use the data
}


let oReq = new XMLHttpRequest();
oReq.addEventListener('load', callback);

// these lines return super quickly even though
// the server hasn't responded. They don't wait.
oReq.open('GET', 'http://www.example.org/example.txt');
oReq.send();
```

If we were to wait for the server we would get something like this where for 7 seconds the JavaScript can't do anything else.

```
    [request sent] [server responds]
           v             v
           |-------------|
seconds  0 1 2 3 4 5 6 7 8 9
```

Whereas with a callback we don't have to wait on the I/O,
simply when our bright and shiny `example.txt` is delivered.

```
    [request sent] [server responds]
           v             v
           |-|          |-|
seconds  0 1 2 3 4 5 6 7 8 9
```

This is obviously super good for speed but it is confusing to get your head around.

When you are writing code it's natural to think out your logic top down like this.

```js
let name = get_name();
document.getElementById('name').value = name;
```
but if get_name makes a network call you can't do that, you'd have to do..

```js
function callback(name) {
  document.getElementById('name').value = name;
}

// where callback is triggered when get_name returns from its
// async journey
get_name(callback);
```

..which works but we run into the issue that any lines of code we right _after_ `get_name` can not assume that we have gotten name already, even though we called the function.

```js
function callback(name) {
  document.getElementById('name').value = name;
}
document.getElementById('name').value = 'lol';

get_name(callback);
// will print out 'lol' because the callback hasn't  
// been called yet and we don't know when it will
// be called.
console.log(document.getElementById('name').value);
```

So if you want to do several things that are async in order you have to nest callback functions

```js
do_step_1(() => {
  step_1_logic();
  do_step_2(() => {
    step_2_logic();
    do_step_3(() => {
      step_3_logic();
    })
  })
})
```

Look ugly? That's because it is. This is why various things popped up to try and mitigate this. Thus we are now gonna jump forward in time to the present
where we don't do this callback nesting anymore. We use promises.

### Promises

#### Intro

The problem was, as you can tell, with callback based async programming we could often get stuck deep in what was called 'callback hell' for complex problems. Callbacks waiting for callbacks, waiting for callbacks.

As of ES5+ JavaScript has provided a better way to synchronise our function calls; and this is `Promises`.

A `Promise` is a type of object that a function can return when the function is doing some sort of async operation, such as a network request.

The function sends the requests and does what it needs to do and creates a object called a `Promise` which can be used to track the progress of the request and react to it once it's complete.

Consider the following:

```js
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.log(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

This is how we used to do things, if you wanted to create an async function you'd define your own interface and take in callback functions.

But if instead `createAudioFileAsync` returned a `Promise` object you could do this.

```js
createAudioFileAsync(audioSettings)
  .then(successCallback)
  .catch(failureCallback);
```

The `Promise` object will be notified when the audio file is done and it can then refer to the success and failure functions the user specified.

The createAudioFileAsync() function returns a `Promise` object which has a method called `then`. This basically just takes in functions to trigger once the `Promise` has **Resolved**, and it allows for an important and powerful feature of `Promises` called
chaining.

#### Chaining

The powerful thing about this is that `then` also returns a `Promise`.
Thus they can be chained so we can have various steps of a procedure happen in sequential order.

```js
doSomething()
  .then(result => doSomethingElse(result))
  /*
    The above can be written as .then(doSomethingElse)
    This is because .then takes a callback that is passed the
    return value of the previous promise
  */
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => console.log('Got the final result!'));

```

#### Failures

Note that in these `then`'s we don't state a failure callback, which is bad, we should handle a failure.

We can use this

```js
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => return doThirdThing(newResult))
  .then(finalResult => console.log('Got the final result!'))
  .then(null,failureCallback);
```

Or we can use the shorthand:

```js
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => return doThirdThing(newResult))
  .then(finalResult => console.log('Got the final result!'))
  .catch(failureCallback);
```

..to catch a failure on the whole chain rather then defining a failure for reach individual step.

Note that how this works is that if one step fails it notifies the next promise in the chain who will notify the next promise onwards until it hits the last promise on which we defined a failure callback.

Of course it's possible to chain after a failure if you wish to do some cleanup regardless if a failure occurred or not.

```js
myPromise
  // simulate failure
  .then(() => throw new Error('Something failed'))
  // handle failure
  .catch(() => console.log('Do that'))
  // do cleanup
  .then(() => console.log('Do this, no matter what happened before'))
  // this could also be written as finally
  // ie
  .finally(() => console.log("Always do this."));
```

#### Creating Promises

Okay cool -- so how can we use `Promises` in our own code?

All we need to do is specify two things, how to resolve and how to reject.

i.e in your async code you need to either call the resolve function signalling you are done with the data you got or call the reject function because something went wrong

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});
```

An alternate way to wrap a non-asynchronous thing in a promise is to use
`Promise.resolve()`.

eg.

```js
const data = 10;
Promise
  .resolve(data)
  .then(data => doSomethingElse(data));
  //FIXME: should we do `.then(doSomethingElse)` instead?
```

#### Uses Of Promises

So one of the things JavaScript introduced recently is the `fetch` function which does all the annoying XHR stuff above for us and just returns a simple promise

```js
fetch('https://example.com/movies.json')
  .then(response => response.json())
  // jsonify the response stream object
  .then(console.log);
```

The other thing Promises are very useful for is when you want to do a bunch of things in tandem.

```js
// promise.all takes a bunch of Promises
// and returns a parent promise which will
// resolve only if all it's children Resolved
// and reject otherwise.
Promise
  .all([promise1, promise2, promise3])
  .then(_values => console.log('DONE!'));
```

The cool thing about `Promise.all()` is that it lets you run several things at once and keep track of all rather then running them one at a time.

Of course sometimes you don't want _all_ you just want _one_. A example is if you are checking several different shopping sites for a item you wish to buy where you don't care where the item is, you just want to get the first site you find which has the item.

```js

// will return a promise that resolves or
// rejects as soon as one of it's children
// resolves or rejects
Promise
  .race([ebay, gumtree, wish])
  .then(values => console.log(values));
```

## AJAX

Everything we have been discussing is ways to implement the set of Web development techniques known as **AJAX** (Asynchronous JavaScript And XML)

It's called that because it was a set of principles for developing a web application that can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page.

That is, render live updates.

The reason it mentions XML is because when it was developed XML was how sites sent little bits of data that weren't full pages to the client.

These days we use another format; `JSON` a lot more but the principle still stands. The basic idea is simply a separation of the data a page displays and the display itself.

Basically rather then the server sending the html which renders into your newsfeed, it sends a framework to render a arbitrary newsfeed post and then your computer asks the server for individual posts.

The rendering and data are separated.

![Ajax Web Model](https://derivadow.files.wordpress.com/2007/01/ajax.png?w=506&h=309)

Various libraries try and help reach this model, notably React, Vue, AngularJS, jquery etc. all make it easier for JavaScript to render the webpage client side reacting to data from the server, and async changes in the DOM driven by user interaction.

### Why do this?

It's good decoupled code, you can change what data is being sent and how it gets
 rendered independently. It also shifts to making the client computer do the heavy
 rendering while leaving the server to do quick data processing. This ends up being
 faster overall, computers can handle having to render a bunch of things more then
 server's can handle doing a lot of processing to form html simply because servers are
 getting hit up non stop.
