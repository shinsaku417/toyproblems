var assert = require('assert');
var arrayOrder = require('../array-order/array-order.js');

describe('Array-Order', function(){
  var test = ['bob', 'john', 'jill', 'jack', 'jack', 'alice'];
  beforeEach(function() {
    test = ['bob', 'john', 'jill', 'jack', 'jack', 'alice'];
  });
  it('should return an array', function(){
    assert.equal(true, Array.isArray(arrayOrder(test)));
  })

  it('should return an empty array when given empty array as an input', function(){
    assert.equal(0, arrayOrder([]).length);
  })

  it('should modify an array to have order jack => jill => others', function(){
    var ordered = arrayOrder(test);
    assert.equal('jack', ordered[0]);
    assert.equal('jack', ordered[1]);
    assert.equal('jill', ordered[2]);
  })
});
