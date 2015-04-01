var expect = require('chai').expect;
var postfix = require('../postfix/postfix.js');

describe('Postfix', function(){
  var test1 = '1 2 +';
  var test2 = '4 2 * 3 - 4 +';
  var test3 = '8 4 / 7 3 9 * 10 - % +';

  it('should return a number', function(){
    expect(postfix(test1)).to.be.a('number');
  })

  it('calculate postfix expressions', function(){
    expect(postfix(test1)).to.equal(3);
    expect(postfix(test2)).to.equal(9);
    expect(postfix(test3)).to.equal(9);
  })
});
