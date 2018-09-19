const assert = require('assert')
const doubleIfEven = require('./variables')

describe("Double if Event", () => {
  it("basic odd", () => {
     let res = doubleIfEven(3)
     assert.equal(res,3)
  })
  it("basic even", () => {
    let res = doubleIfEven(4)
    assert.equal(res,8)
  })
  it("even odd",() => {
    let res = doubleIfEven(4)
    assert.equal(res,8)
    res = doubleIfEven(3)
    assert.equal(res,3)
  })
  it("odd even",() => {
    let res = doubleIfEven(3)
    assert.equal(res,3)
    res = doubleIfEven(2)
    assert.equal(res,4)
  })
})
