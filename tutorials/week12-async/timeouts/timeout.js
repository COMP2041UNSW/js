/* classic type of async example is setTimeout */

function init() {
  // Q: what will main print?
  // Remember that once a event is on the event queue it isn't run
  // untill the current block of code that's being run is finished
  function main() {
    Library.print('Hello');
    setTimeout(() => Library.print('World'), 0);
    Library.print('End');
  }
  // bind
  document
    .getElementById('button')
    .addEventListener('click', main);
  // just remove defunct listener
  document.removeEventListener('DOMContentLoaded', init);
}

// add event listener
document.addEventListener('DOMContentLoaded', init);
