const assert = require('assert');
const mult = require('./fn');

describe('multiply()', () => {
  it('No args', () => {
     assert(typeof(mult) == 'function');
  });

  it('One arg', () => {
     const multBy10 = mult(10);
     assert(typeof(multBy10) == 'function');
     assert.equal(multBy10(5), 50);
  });

  it('Two args', () => {
     assert.equal(mult(10, 10), 100);
  });
});
