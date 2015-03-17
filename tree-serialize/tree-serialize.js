// Given a binary tree, serialize values of the string
// Example: '8, left:(4, left:(), right:()), right:(5, left:(), right:())'
var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.serialize = function() {
  var subroutine = function(tree) {
    if (tree.left && tree.right) {
      return tree.value + ', left:(' + subroutine(tree.left) + '), right:(' + subroutine(tree.right) + ')';
    }
    if (tree.left) {
      return tree.value + ', left:(' + subroutine(tree.left) + '), right:()';
    }
    if (tree.right) {
      return tree.value + ', ' + 'left:(), right:(' + subroutine(tree.right) + ')';
    }
    return tree.value.toString() + ', left:(), right:()';
  };
  return subroutine(this);
};

BinaryTree.prototype.addLeft = function(value) {
  this.left = new BinaryTree(value);
};

BinaryTree.prototype.addRight = function(value) {
  this.right = new BinaryTree(value);
};

module.exports = BinaryTree;
