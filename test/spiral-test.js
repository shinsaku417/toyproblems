var assert = require('assert');
var spiral = require('../spiral/spiral.js');

describe('Spiral', function(){
  var test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  it('should return an array', function(){
    assert.equal(true, Array.isArray(spiral(test)));
  })

  it('should return array that is spirally traversed', function(){
    assert.equal(1, spiral(test)[0]);
    assert.equal(2, spiral(test)[1]);
    assert.equal(3, spiral(test)[2]);
    assert.equal(6, spiral(test)[3]);
    assert.equal(9, spiral(test)[4]);
    assert.equal(8, spiral(test)[5]);
    assert.equal(7, spiral(test)[6]);
    assert.equal(4, spiral(test)[7]);
    assert.equal(5, spiral(test)[8]);
  })
});
