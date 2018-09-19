document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');

  Library = {  /* eslint-disable-line */
    getJSON(path) {
      return fetch(path).then(response => response.json());
    },

    print(msg) {
      const text = document.createElement('h5');
      text.innerText = msg;
      output.appendChild(text);
    },

    printLight(msg, top) {
      const text = document.createElement('p');
      text.className = 'lead';
      text.innerText = msg;

      /* is prepend standard? */
      if (top) {
        output.prepend(text);
      } else {
        output.appendChild(text);
      }
    },

    clearOutput() {
      document.getElementById('output').innerHTML = '';
    }
  };
});
