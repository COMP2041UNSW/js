// anon function this (get item + open bag)
class Player {
  constructor () {
    this.level = 100;
    this.position = {
      x: 0,
      y: 0
    }
    this.inventory = [
      {
        name: "match",
        minLevel: 10
      }
    ]
  }

}

const player = new Player();

function buttonClicked() {
    let input = Library.getInput("text-input");
    try {
      let requestItem = input.match(/use (\w+)/)[1];
      let validItems = player.inventory.filter((e)=>player.level >= e.minLevel);
      console.log(validItems);
    } catch(err) {
        
    }

}
