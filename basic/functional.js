
const shoppingCart = [
   { item: 'Apple', price: 10 },
   { item: 'Orange', price: 12 },
   { item: 'Pineapple', price: 5 },
];

const multiply = a => b => a * b;
const pluck = key => object => object[key];

// let's say tax of 10% for GST
// and a 5 % first customer discount
const discount = multiply(0.95);
const tax      = multiply(1.10);
const sum      = (acc, curr) => curr + acc;

// Now, for some simple readable, easy to reason about code.
const totalPrice = shoppingCart.map(pluck('price'))
                               .map(discount)
                               .map(tax)
                               .reduce(sum, 0);

console.log(totalPrice);
