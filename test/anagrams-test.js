var assert = require('assert');
var anagrams = require('../anagrams/anagrams.js');

describe('Anagrams', function(){
  it('should return an array', function(){
    assert.equal(true, Array.isArray(anagrams('abc')));
  })

  it('should return all anagrams', function(){
    assert.equal(6, anagrams('abc').length);
  })

  it('should not contain ordered duplicates', function(){
    assert.equal(3, anagrams('aac').length);
  })
});
