var assert = require('assert');
var palindromeSum = require('../palindromesum/palindromesum.js');

describe('PalindromeSum', function(){
  it('should return a number', function(){
    assert.equal('number', typeof palindromeSum(1, 2));
  })

  it('should return sum of the number that are palindromes', function(){
    assert.equal(45, palindromeSum(0, 10));
  })

  it('should return sum of range 0-100000', function(){
    assert.equal(50045040, palindromeSum(0, 100000));
  })

  it('should return sum of range 0-1000000', function(){
    assert.equal(545045040, palindromeSum(0, 1000000));
  })
});
