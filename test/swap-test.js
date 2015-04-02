var expect = require('chai').expect;
var swap = require('../swap/swap.js');

describe('Swap', function(){
  var first = 1;
  var second = 2;

  it('should return an array', function(){
    expect(Array.isArray(swap(first, second))).to.equal(true);
  })

  it('should swap two numbers', function(){
    var swapped = swap(first, second);
    expect(swapped[0]).to.equal(2);
    expect(swapped[1]).to.equal(1);
  })
});
