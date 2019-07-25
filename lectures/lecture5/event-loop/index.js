function log(t) {
	document.body.innerText += `${t}\n`;
}

// // in 1 second add a event to the event queue
// window.setTimeout(() => log('hello'), 1000);
// // in 2 seconds add a event to the event queue
// window.setTimeout(() => log('world'), 2000);

// What will happen here
window.setTimeout(() => log('hello'), 0);
log('world')



// window.addEventListener('keydown',
//     (event) => log(event.key))

// // what if i press buttons while
// // the code is stuck here?
// i = 0
// while(i < 1000000000) i++;

