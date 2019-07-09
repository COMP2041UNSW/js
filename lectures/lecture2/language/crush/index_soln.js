/* list of mistakes
 *    - don't use let or const or var but pass in x
 *    - loop types
 *    - define concept of undefined with functions
 *    - try and detect when names not provided
 *        name == false
 *    -
 */
function buttonClicked() {
	Library.clearOutput();
	user = Library.getInput("name");
	crush = Library.getInput("crush");
	if (user == false) {
		Library.print("no name provided");
		return;
	}

	l = crush.split(",");
	var i = 0;
	while(i<l.length) {
		judge(Math.random()*100,l[i]);
		i++;
	}

	/* better lists/loops
	for(i in l) {
		judge(Math.random()*100,i);
	}
	*/


}

function judge(x, n) {
	if (x < 50)
		Library.print(n + ": Not Likely :/");
	else if (x < 60)
		Library.print(n + ": hmm maybe? :/");
	else if (x < 70)
		Library.print(n + ": hmm maybe? ;)");
	else if (x < 80)
		Library.print(n + ": I'd say so ;D");
	else if (x < 90)
		Library.print(n + ": Oh yeah it'll happen");
	else if (x <= 100)
		Library.print(n + ": It's love!");
}
