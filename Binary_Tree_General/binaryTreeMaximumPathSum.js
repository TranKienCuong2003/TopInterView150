class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function dfs(node) {
      if (!node) return 0;

      let left = Math.max(dfs(node.left), 0);
      let right = Math.max(dfs(node.right), 0);

      maxSum = Math.max(maxSum, node.val + left + right);
  
      return node.val + Math.max(left, right);
    }
  
    dfs(root);
    return maxSum;
  };
  
  // Example
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  console.log(maxPathSum(root1));
  
  const root2 = new TreeNode(-10);
  root2.left = new TreeNode(9);
  root2.right = new TreeNode(20);
  root2.right.left = new TreeNode(15);
  root2.right.right = new TreeNode(7);
  console.log(maxPathSum(root2));
  