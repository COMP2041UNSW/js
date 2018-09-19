const assert = require('assert')
const function_dispatcher = require('./functions')

describe("Function Dispatcher", () => {
  it("Basic", () => {
     let functions = [(x)=>x*x,(x)=>x+2,(x)=>x-2]
     let args = [2,2,2]
     const res = function_dispatcher(functions, args)
     assert.deepEqual(res,[4,4,0])
  })
  it("Single", () => {
    let functions = [(x)=>x*x]
    let args = [2]
    const res = function_dispatcher(functions, args)
    assert.deepEqual(res,[4])
  })
  it("Double", () => {
    let functions = [(x)=>x*x,(x)=>x*9]
    let args = [2,0]
    const res = function_dispatcher(functions, args)
    assert.deepEqual(res,[4,0])
  })
  it("None", () => {
    let functions = []
    let args = []
    const res = function_dispatcher(functions, args)
    assert.deepEqual(res,[])
  })
  it("Types", () => {
    let functions = [(x)=>x.toUpperCase(),(x)=>x.name,(x)=>x()]
    let args = ["hello",{name:"hello"},(x)=>"hello"]
    const res = function_dispatcher(functions, args)
    assert.deepEqual(res,["HELLO","hello","hello"])
  })
})
