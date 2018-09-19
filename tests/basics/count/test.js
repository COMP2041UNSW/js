const assert = require('assert');
const count_stats = require('./count_sport_stats');
const json = require('./stats.json');

describe('Count Stats', () => {
  it('Basic', () => {
     const res = count_stats(json.results);
     assert.equal(res.tries,165);
     assert.equal(res.matches,1725);
  });

  it('Single', () => {
     const res = count_stats([json.results[0]]);
     assert.equal(res.tries, 11);
     assert.equal(res.matches, 123);
  });

  it('Double', () => {
     const res = count_stats([json.results[0],json.results[3]]);
     assert.equal(res.tries, 55);
     assert.equal(res.matches, 579);
  });
  
  it('None', () => {
     const res = count_stats([]);
     assert.equal(res.tries, 0);
     assert.equal(res.matches, 0);
  });
});
