// this can be confusing
const o = {
   bb: 0,
   f() {
      return this.bb;
   }
};

o.f(); // 0

// 'unbind'// detach function
let a = o.f; // a == f() { return this.b }

const oo = {bb: 'Barry'};

// .call means we call the function and use this as 'oo'
a.call(oo); //  'Barry'

// Essentially wire a to oo
// f is now a function bound to the object oo.
const f = a.bind(oo);

f(); // 'Barry' .. further calls will always reference 'oo' as this
