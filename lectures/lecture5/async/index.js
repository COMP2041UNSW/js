/*

Promises are one way to deal with async JavaScript

Essentially, a promise will wait until an async operation
resolves (or is rejected), before continuing.

This is closer to the way a procedural program runs,
but is not the way JS would run without promises.

*/

function init() {

    const time = {};
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const requestURIs = [1,2,3,4,5,6,7,8,9,10].map(num => `${API_URL}/users/${num}`);
  
    function finishRequestTiming() {
      // mark the end of the request.
      time.end = Date.now();
      const delta = time.end - time.start;
      Library.printLight(`${delta} ms`);
    }
  
    function togetherGet() {
      Library.clearOutput();
      time.start = Date.now();
      // form a list of Promises
      // where we are getting serveral users
      const listOfPromises = requestURIs.map(Library.getJSON);
      // run them all at the same time
      // and once all are done, display them
      Promise
        .all(listOfPromises)
        .then(users => users.map(user => Library.print(user.name)))
        .then(finishRequestTiming);
    }
  
    function synchronousGet() {
      Library.clearOutput();
      time.start = Date.now();
  
      // this is going to take longer as we're
      // going to process one request at a time.
      for (uri of requestURIs) {
        const request = new XMLHttpRequest();
        // `false` makes the request synchronous
        request.open('GET', uri, false);
        request.send(null);
        if (request.status === 200) {
            Library.print(JSON.parse(request.responseText).name)
        }
        
      }
      finishRequestTiming()
    }
  
    // Promise constructor
    const delay = (ms) => {
      return new Promise((resolve, reject) => {
        // this will simply delay execution for ms milliseconds
        // in a controlled way
        try {
          setTimeout(resolve, ms);
        } catch (e) {
          reject(e);
        }
      });
    };
  
    function waitAndLove() {
      // put a alert onto the queue
      delay(0).then(() => alert('I love you <3'));
    }
  
    [
      {id: 'wait', listener: waitAndLove},
      {id: 'all', listener: togetherGet},
      {id: 'notAll', listener: synchronousGet}
    ].forEach(({ id, listener }) => {
      document
        .getElementById(id)
        .addEventListener('click', listener);
    });
  
    document.removeEventListener('DOMContentLoaded', init);
  }
  
  document.addEventListener('DOMContentLoaded', init);