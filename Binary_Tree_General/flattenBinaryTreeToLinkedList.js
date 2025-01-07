class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var flatten = function(root) {
    let prev = null;

    function flattenTree(node) {
      if (!node) return;

      let right = node.right;

      if (prev) {
        prev.right = node;
        prev.left = null;
      }
      prev = node;

      flattenTree(node.left);
      flattenTree(right);
    }
  
    flattenTree(root);
  };
  
  // Example
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(5);
  root1.left.left = new TreeNode(3);
  root1.left.right = new TreeNode(4);
  root1.right.right = new TreeNode(6);
  
  flatten(root1);

  let node = root1;
  while (node) {
    console.log(node.val);
    node = node.right;
  }
  