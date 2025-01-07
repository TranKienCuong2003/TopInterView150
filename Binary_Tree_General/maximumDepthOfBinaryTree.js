class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var maxDepth = function(root) {
    if (root === null) return 0;
    
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
  };
  
  // Example
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  console.log(maxDepth(root));
  