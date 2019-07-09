/* const let var nothing
 * loop types
 * concept of undefined with functions
 * try and detect when names not provided
 *        name == false
 */
function buttonClicked() {
  let name = Library.getInput("name");
  let crush = Library.getInput("crush");
  if (name == false) {
    Library.print("Enter in some names!");
    return;
  }

  let a = crush.split(",");
  let i = 0;
  for(name of a) {
    console.log(name);
  }
}

function getPercentageChance() {
  x = Math.random()*100;
  return x;
}

function printOutMessage(n,a) {
  if(a < 50) {
    Library.print(n+": Not gonna happen");
  } else {
    Library.print(n+": True Love!");
  }
}
