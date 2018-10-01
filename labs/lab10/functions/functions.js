/* functions can be passed around

   Write a function that given a list of functions and a list of arguments
   runs each function with it's corrosponding arguments and returns the result

   function addFive(a){return a+5}
   function addSix(a){return a+6}
   function scream(a){return a.toUpperCase()}

   for
      function_list = [addFive,addSix,scream]
      args_list = [1,56,"hello"]
   function_dispatcher(function_list,argsList) returns
      result = [6,62,"HELLO"]

   test via
   `node test.js`
*/

function function_dispatcher(function_list, args_list) {
  const result = [];
  for(let f =0; f < function_list.length; f++) {
    result.push(function_list[f](args_list[f]));
  }
  return result;
}

module.exports = function_dispatcher;
