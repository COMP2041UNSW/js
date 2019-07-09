function canDrinkFunction() {
  return this.age >= 18;
}

const zain1 = {
  name: 'zain',
  age: 3,
  canDrink: ()=> {
    return this.age >= 18;
  }
};

function Person(name) {
  this.name = name;
  this.canDrink = function () {
    return this.age >= 18;
  };
}

const zain2 = new Person('zain');


class PersonAlternative {

  constructor (name) {
    this.name = name;
  }
  static canDrink(age) {
    return age >= 18;
  }
}

const zain3 = new PersonAlternative('zain');
