var assert = require('assert');
var tp = require('../treesum/treesum.js');

describe('TreeSum', function(){
  describe('Tree.prototype.sum', function(){
    it('return sum of the tree', function(){
      var Tree = new tp.Tree(4);
      Tree.addChild(new tp.Tree(5));
      Tree.addChild(new tp.Tree(3));
      Tree.children[0].addChild(new tp.Tree(1));
      Tree.children[1].addChild(new tp.Tree(2));
      assert.equal(15, Tree.sum());
    })
  })
});
