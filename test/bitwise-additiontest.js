var assert = require('assert');
var tp = require('../bitwise-addition/bitwise-addition.js');

describe('Bitwise-addition', function(){
  var bitwiseAdd = tp.bitwiseAdd;
  it('should return a number', function(){
    assert.equal('number', typeof bitwiseAdd(5, 10));
  })

  it('should return sum of the number', function(){
    assert.equal(20, bitwiseAdd(10, 10));
  })

  it('should throw error for non-number arguments', function(){
    assert.throws(bitwiseAdd('hi', 'error'), Error, "Error thrown");
  })
});
