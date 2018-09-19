const assert = require('assert');
const hello = require('./hello_world');

describe('Hello', () => {
  it('World', () => {
     const res = hello('world');
     assert.equal(res, 'Hello world');
  });
});
