var assert = require('assert');
var anagramCheck = require('../anagramCheck/anagramCheck.js');
var linear = anagramCheck.anagramCheck;
var logN = anagramCheck.anagramCheckLogN;
var quadratic = anagramCheck.anagramCheckQuadratic;

describe('Anagram Check', function(){
  var first = 'abcdefg';
  var second = 'gfaecdb';
  var third = 'abcdefg1';
  var fourth = 'gfaecdb2';
  it('linear version should check if two strings are anagrams', function(){
    assert.equal(true, linear(first, second));
    assert.equal(false, linear(third, fourth));
  })

  it('NLogN version should check if two strings are anagrams', function(){
    assert.equal(true, logN(first, second));
    assert.equal(false, logN(third, fourth));
  })

  it('quadratic version should check if two strings are anagrams', function(){
    assert.equal(true, quadratic(first, second));
    assert.equal(false, quadratic(third, fourth));
  })
});
