a = 'global'

let test = {
  a: 'object',
  func: function() {
    return this.a
  }
}

function test2() {
  return this.a
}

function test3() {
  let a = 'nested'
  function test4() {
    a = this.a
  }
  test4()
  return a
}

console.log(test.func())
console.log(test2())
console.log(test2.call({ a: 'context' }))
console.log(test3())
