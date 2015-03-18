var expect = require('chai').expect;
var permutations = require('../permutations/permutations.js');
var contains = function(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
};


describe('permutations', function(){
  it('should be a function', function(){
    expect(permutations).to.be.a('function');
  })

  it('should return an array', function(){
    expect(Array.isArray(permutations('a'))).to.equal(true);
  })

  it('should contain permutations', function(){
    expect(contains(permutations('ab'), 'ab')).to.equal(true);
    expect(contains(permutations('ab'), 'ba')).to.equal(true);
  })

  it('should not contain non-permutations', function(){
    expect(contains(permutations('ab'), 'abc')).to.equal(false);
    expect(contains(permutations('ab'), 'aa')).to.equal(false);
  })

  it('should remove duplicates', function(){
    expect(permutations('aa').length).to.equal(1);
  })
});
