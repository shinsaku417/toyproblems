var expect = require('chai').expect;
var mergeSort = require('../mergesort/mergesort.js');

describe('Merge Sort', function(){
  it('should be a function', function(){
    expect(mergeSort).to.be.a('function');
  })

  it('should return an array', function(){
    expect(Array.isArray(mergeSort([4,1,3,2]))).to.equal(true);
  })

  it('should return sorted array', function(){
    expect(mergeSort([4,1,3,2])[0]).to.equal(1);
    expect(mergeSort([4,1,3,2])[1]).to.equal(2);
    expect(mergeSort([4,1,3,2])[2]).to.equal(3);
    expect(mergeSort([4,1,3,2])[3]).to.equal(4);
  })
});
