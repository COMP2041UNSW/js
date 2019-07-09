// GO THROUGH 'THIS' -> how anon functions work

class Player {
  constructor() {
    this.position = {x:0,y:0};
    this.level = 100;
    this.inventory = [
      {
        name: "match",
        oneUse: true,
        minLevel: 10
      }
    ];
  }
  getItem(n) {
    let applicable = this.inventory.filter((e)=>this.level >= e.minLevel);
    if(applicable.length > 0) return applicable[0];
    return undefined;
  }
}
const jeff = new Player();

function buttonClicked() {
  let input = Library.getInput("text-input");
  if (m = input.match(/move (\w+)/)) {
    d = m[1];
    if (d == "north" || d == "south" || d == "west" || d == "east") {
      Library.print("Moved "+d);
      if (d == "north") jeff.position.y +=1;
      if (d == "south") jeff.position.y -=1;
      if (d == "east") jeff.position.x +=1;
      if (d == "west") jeff.position.x -=1;
    }
    else {
      Library.print("Unknown direction");
    }
  } else if (input == "open bag") {
    for(let item of jeff.inventory.filter((e)=>this.level >= e.minLevel)) {
      Library.print("> "+item.name);
    }
  } else if (m = input.match(/use (\w+)/)) {
    let item = m[1];
    items = jeff.getItem(item);
    if (item && item.name == "match")
      Library.print("The room lights up for a moment. It's a cellar");
    else {
      Library.print("Unknown Item");
    }
  }
}
