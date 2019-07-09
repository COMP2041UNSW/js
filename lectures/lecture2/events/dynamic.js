// load events. JS is driven by the event loop
// We need to think about how to listen to events
// to react and have some response for the user

// An example of a common event is a click event
// To add an event listerner we need to bind it to an element
// so we can listen for it.
const h1 = document.getElementsByTagName('h1')[0];

h1.addEventListener('click', function() {
    const color = this.style.color;

    // 'this' points the h1 element
    this.style.color = color === 'red' ? 'purple' : 'red';
});


// A billion other types of event handlers exist. Lots of possibilities