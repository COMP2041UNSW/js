// One of the nice side effects of Objects using string keys
// is that we can very simply use them as dicts.
// In fact until recently the concept of a map in JS
// didn't exist -- it was just an object.

const cart = ['Apple', 'Orange', 'Apple', 'Strawberry', 'Orange'];
// let's translate our cart into a key-value pair object
// which holds the count of each object.

const count = {};

for (const item of cart) {
   // check if the key exists, if it doesn't
   // it's undefined.
   count[item] = count[item] ? count[item] + 1 : 1;
}

console.log(count);
// { Apple: 2, Orange: 2, Strawberry: 1 }

/*
   As of ES6+ we now also have Map and Set, both of which
   address one minor, but common issue with using Objects
   directly as keys. The issue is with more complex keys, JS
   implicitly uses the toString() method to hash them...
   Which won't work for Object -> it'll just look like this.
   [object Object]..
*/

const shopping_cart = {};

const shopping = [
   {item: 'Apple', price: 10},
   {item: 'Orange', price: 12},
   {item: 'Apple', price: 10}
];

for (const item of shopping) {
   // As above.
   shopping_cart[item] = shopping_cart[item] ? shopping_cart[item] + 1 : 1;
}

console.log(shopping_cart);
// { '[object Object]': 3 }

// For these use Map or Set instead, depending n what's required.
