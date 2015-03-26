var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var myParseInt = require('../parseint/parseint.js');

describe('parseInt', function(){
  it('should be a function', function(){
    expect(myParseInt).to.be.a('function');
  })

  it('should return a number', function(){
    myParseInt('1').should.be.a('number');
  })

  it('should return parsed number of a string', function(){
    assert.equal(12345, myParseInt('12345'));
    assert.equal(12355, myParseInt('12345') + 10);
  })
});
