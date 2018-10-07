
function init() {

  const out = document.getElementById('output');
  window.addEventListener('click', clicker);

  function clicker(event) {
    out.innerText =
    `Element Clicked: ${event.target.tagName}\n\
      Click Position: ${event.x}, ${event.y}`;
  }

  document.removeEventListener('DOMContentLoaded', init);
}

// here's a different way to exec JS scripts
document.addEventListener('DOMContentLoaded', init);
