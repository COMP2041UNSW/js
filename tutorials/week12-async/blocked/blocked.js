
// By wrapping our code in a function we
// don't pollute global scope.
function init() {
  // register a event handler
  // to print the key pressed whenever
  // a key is pressed
  window.addEventListener('keypress', (event) => {
    event.preventDefault();
    const keyName    = event.key;
    const output     = document.getElementById('output');
    if (keyName.length == 1)
      output.appendChild(document.createTextNode(keyName));
  });

  const button = document
                   .getElementById('button')
                   .addEventListener('click', slow);

  //super slow function
  function slow() {
    let i = 0;
    while(i < 2000000000) i++;
    alert("Done doing slow stuff!");
  }

  // just remove defunct listener
  document.removeEventListener('DOMContentLoaded', init);
}

// add event listener
document.addEventListener('DOMContentLoaded', init);
