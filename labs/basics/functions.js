/* functions can be passed around

   Write a function that given a list of functions and a list of arguments
   runs each function with it's corrosponding arguments and returns the result

   function f1(a){return a+5}
   function f1(a){return a+6}
   function f1(a){return a.toUpperCase()}

   if
      function_list = [f1,f2,f3]
      args_list = [1,56,"hello"]
   then
      result = [6,62,"HELLO"]

*/

function function_dispatcher(functionList, argsList) {
   console.log(functionList, argsList);
}

module.exports = function_dispatcher;
