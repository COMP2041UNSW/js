// a simple closure
function closureFunction() {

   // here the count variable is only in the function's scope,
   // but myObject stores a reference so it hangs around even when
   // the function returns.
   let count = 0;

   const myObject = {
      counter() {
         return count;
      },
      increment() {
         count++;
      }
   };

   return myObject;
}

const obj = closureFunction();
obj.counter(); // == 0 Because obj has a reference to count
