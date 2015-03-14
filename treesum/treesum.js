// Sums all values 
var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(tree) {
  this.children.push(tree);
};

Tree.prototype.sum = function() {
  var sum = this.value;
  var queue = [];
  for (var i = 0; i < this.children.length; i++) {
    queue.push(this.children[i]);
  }

  while (queue.length > 0) {
    var tree = queue.shift();
    sum += tree.value;
    for (var i = 0; i < tree.children.length; i++) {
      queue.push(tree.children[i]);
    }
  }

  return sum;
};

module.exports = {
  Tree: Tree
};
