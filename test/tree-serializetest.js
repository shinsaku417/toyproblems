var assert = require("assert");
var BinaryTree = require("../tree-serialize/tree-serialize.js");


describe('Tree-Serialize', function(){
  var tree;
  beforeEach(function() {
    tree = new BinaryTree(1);
  });

  it('should have properties value', function(){
    assert.equal(1, tree.value);
  })

  it('should be able to add child', function(){
    assert.equal('function', typeof tree.addLeft);
    tree.addLeft(2);
    assert.equal(2, tree.left.value);
  })

  it('should be able to serialize', function(){
    assert.equal("1, left:(), right:()", tree.serialize());
    tree.addLeft(2);
    tree.addRight(3);
    assert.equal("1, left:(2, left:(), right:()), right:(3, left:(), right:())", tree.serialize());
    tree.left.addLeft(4);
    tree.right.addRight(5);
    assert.equal("1, left:(2, left:(4, left:(), right:()), right:()), right:(3, left:(), right:(5, left:(), right:()))", tree.serialize());
  })
});
