/*
  Given a list of games, which are objects that look like:

  {
    "id": 112814,
    "matches": "123",
    "tries": "11"
  }

  return a object like such

  {
    "totalMatches": m,
    "totalTries": y
  }

  Where m is the sum of all matches for all games
  and t is the sum of all tries for all games.

  input = [
    {"id": 1,"matches": "123","tries": "11"},
    {"id": 2,"matches": "1","tries": "1"},
    {"id": 3,"matches": "2","tries": "5"}
  ]

  output = {
    matches: 126,
    tries: 17
  }

  test with `node test.js`
*/

const json = require('./stats.json');

function countStats(list) {
  // HINT: maybe REDUCE the problem ;)
  console.log(list, json);
}

module.exports = countStats;
