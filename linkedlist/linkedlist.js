// implement a LinkedList using prototypal inheritance
var LinkedList = function() {
  var linkedList = Object.create(linkedListMethods);
  linkedList.head = null;
  linkedList.tail = null;
  return linkedList;
};

var linkedListMethods = {};

linkedListMethods.addToTail = function(value) {
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
};

linkedListMethods.addToHead = function(value) {
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    var temp = this.head;
    this.head = new Node(value);
    this.head.next = temp;
  }
};

linkedListMethods.removeFromHead = function() {
  if (this.head === null) {
    return;
  } else {
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
  }
};

linkedListMethods.contains = function(target) {
  var pointer = this.head;
  while (pointer) {
    if (pointer.value === target) {
      return true;
    }
    pointer = pointer.next;
  }
  return false;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};

module.exports = LinkedList;
