function buttonClicked() {
	Library.clearOutput();
	user = Library.getInput("name");
	crush = Library.getInput("crush");
	if (user == false) {
		Library.print("no name provided");
		return;
	}

	l = crush.split(",");
	for(i of l) {
		judge(Math.random()*100,i);
	}
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
