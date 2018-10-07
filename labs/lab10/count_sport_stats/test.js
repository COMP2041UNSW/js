const count_sport_stats = require('./count_sport_stats')
const json = process.argv[2];
if (json === undefined) {
  throw new Error(`input not supplied`);
}
const stats = require(`./${json}`);
console.log(count_sport_stats(stats.results));
