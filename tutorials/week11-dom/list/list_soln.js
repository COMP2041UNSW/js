'use strict';

// this is one way to avoid populating the global scope
// and immediately run a script.
(function() {
   const shopping = [
       'Apple',
       'Orange',
       'Strawberry',
       'Bananas',
       'Sausages'
    ];
   const parent = document.getElementById('main');

   const list = document.createElement('ul');

   let innerHTML = '';
   for (const item of shopping) {
      innerHTML += `<li>${item}</li>`;
   }

   /* or like this
   const innerHTML = shopping
                        .map(item => `<li>${item}</li>`)
                        .join()
   ... or like this
   for (const item of shopping) {
      const listItem = document.createElement('li')
      listItem.innerText = item
      list.appendChild(listItem)
   }
   */

   list.innerHTML = innerHTML;

   parent.appendChild(list);
})();
