class BSTIterator {
    constructor(root) {
      this.stack = [];
      this._pushLeft(root);
    }

    _pushLeft(node) {
      while (node) {
        this.stack.push(node);
        node = node.left;
      }
    }

    hasNext() {
      return this.stack.length > 0;
    }

    next() {
      let node = this.stack.pop();
      if (node.right) {
        this._pushLeft(node.right);
      }
      return node.val;
    }
  }

  const root = new TreeNode(7);
  root.left = new TreeNode(3);
  root.right = new TreeNode(15);
  root.right.left = new TreeNode(9);
  root.right.right = new TreeNode(20);
  
  const iterator = new BSTIterator(root);
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.hasNext());
  console.log(iterator.next());
  console.log(iterator.hasNext());
  console.log(iterator.next());
  console.log(iterator.hasNext());
  console.log(iterator.next());
  console.log(iterator.hasNext());
  