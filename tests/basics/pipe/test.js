const assert = require('assert')
const pipe = require('./pipe')

describe('pipe()', () => {
  it('No args', () => {
     assert(typeof(pipe) == 'function')
  })

  it('Simple pipe', () => {
     const nums = [1, 2, 3, 4]
     const isEven = (num) => num % 2 == 0
     const pipeFn = pipe(isEven, String)
     assert.deepEqual(['false', 'true', 'false', 'true'], nums.map(pipeFn))
  })
})
