function init() {

  function getUsers() {
    // let the user know we are loading
    Library.print('loading...');

    /* AJAX example */
    const API_URL = 'https://jsonplaceholder.typicode.com/';

    /* Assuming a browser context */
    Library.getJSON(`${API_URL}users`)
    // chain the promise and translate the response
    // object in json to a JS object
    .then((data) => {
      // remove loading message
      Library.clearOutput();
      return data;
    })
    .then(data => data.map(user => Library.print(user.name)));
  }

  document
    .getElementById('button')
    .addEventListener('click', getUsers);

  // just remove defunct listener
  document.removeEventListener('DOMContentLoaded', init);
}

// add event listener
document.addEventListener('DOMContentLoaded', init);
