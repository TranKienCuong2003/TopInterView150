class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
      return root.val === targetSum;
    }

    const newTargetSum = targetSum - root.val;
  
    return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
  };
  
  // Example
  const root1 = new TreeNode(5);
  root1.left = new TreeNode(4);
  root1.right = new TreeNode(8);
  root1.left.left = new TreeNode(11);
  root1.left.left.left = new TreeNode(7);
  root1.left.left.right = new TreeNode(2);
  root1.right.left = new TreeNode(13);
  root1.right.right = new TreeNode(4);
  root1.right.right.right = new TreeNode(1);
  
  console.log(hasPathSum(root1, 22));
  
  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);
  
  console.log(hasPathSum(root2, 5));
  