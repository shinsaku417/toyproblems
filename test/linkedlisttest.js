var assert = require("assert");
var LinkedList = require("../linkedlist/linkedlist.js");


describe('LinkedList', function(){
  var linkedList = LinkedList();
  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should create an object', function(){
    assert.equal('object', typeof linkedList);
    assert.equal(false, Array.isArray(linkedList));
  })

  it('should be able to add to tail', function(){
    linkedList.addToTail(5);
    assert.equal(5, linkedList.head.value);
    assert.equal(5, linkedList.tail.value);
  })

  it('should be able to add multiple nodes to tail', function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    assert.equal(1, linkedList.head.value);
    assert.equal(4, linkedList.tail.value);
    assert.equal(2, linkedList.head.next.value);
  })

  it('should be able to add to head', function(){
    linkedList.addToHead(1);
    assert.equal(1, linkedList.head.value);
    linkedList.addToHead(2);
    assert.equal(2, linkedList.head.value);
    assert.equal(1, linkedList.tail.value);
  })

  it('should be able to remove from head', function(){
    linkedList.addToHead(1);
    linkedList.addToTail(3);
    linkedList.addToTail(5);
    assert.equal(1, linkedList.head.value);
    assert.equal(5, linkedList.tail.value);
    linkedList.removeFromHead();
    assert.equal(3, linkedList.head.value);
    linkedList.removeFromHead();
    assert.equal(5, linkedList.head.value);
    linkedList.removeFromHead();
    assert.equal(null, linkedList.tail);
  })

  it('should contain the number that is added', function(){
    linkedList.addToHead(1);
    linkedList.addToTail(3);
    linkedList.addToTail(5);
    assert.equal(true, linkedList.contains(3));
    assert.equal(false, linkedList.contains(2));
  })
});
