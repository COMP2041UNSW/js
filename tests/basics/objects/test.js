const assert = require('assert');
const Person = require('./objects');

describe(' Person', () => {

  it('Fields', () => {
     const res = new Person('barry',23);
     assert.equal(res.name,'barry');
     assert.equal(res.age,23);
  });

  it('Beer', () => {
     let res = new Person('barry',23);
     assert.equal(res.canDrink(),true);
     res = new Person('harry',5);
     assert.equal(res.canDrink(),false);
  });

  it('Edge Case', () => {
     const res = new Person('barry',18);
     assert.equal(res.canDrink(),true);
  });

  it('binding', () => {
     const barry = new Person('barry',18);
     const billy = new Person('billy',5);
     assert.equal(barry.canDrink(),true);
     assert.equal(billy.canDrink(),false);
     barry.age = 0;
     billy.age = 19;
     assert.equal(barry.canDrink(),false);
     assert.equal(billy.canDrink(),true);
  });

});

