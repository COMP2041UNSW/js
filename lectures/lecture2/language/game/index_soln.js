// make (both ways) const myOtherObject = new Object();
// update

function isGood(s) {
	return s.singer === 'Carley Ray Jepson';
}

const ipod = [];

ipod.push({
	name: 'black heart',
	singer: 'Carley Ray Jepson'
})
ipod.push({
	name: 'Hello',
	singer: 'Adelle'
})
ipod.push({
	name: 'Party Rock Anthem',
	singer: 'LMFAO'
})
ipod.push({
	name: 'Call Me Maybe',
	singer: 'Carley Ray Jepson'
})

console.log(ipod[0].name);
console.log(ipod[0]['singer']);
console.log(ipod.filter(isGood));

const people = [];

const zain = {
	name: 'zain',
	age: 104,
	canDrink: function() {
		if (this.age >= 18) return true
		return false;
	}
}

console.log(zain.canDrink());

const Zain = {
	name: 'Zain',
	age: 104,
	canDrink: function() {
		if (this.age >= 18) return true
		return false;
	},
	changeName: function(n) {
		n = n.substr(0,1).toUpperCase() + n.substr(1);
		this.name = n;
	}
}

Zain.changeName('brad');
console.log(Zain.name);



function Person(firstName, lastName, age) {
   this.firstName = firstName;
   this.lastName  = lastName;
   this.age       = age;
}

Person.prototype.getFullName = function() {
   return `${this.firstName} ${this.lastName}`;
};

Person.prototype.canDrinkAlcohol = function() {
   return this.age >= 18;
};

p = new Person('zain','unknown',10);
console.log(p);

class Player {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  canDrinkAlcohol() {
    return this.age >= 18;
}

const jeff = new Person('Jeff', 'Goldblum', 50);

console.log(jeff.canDrinkAlcohol());
