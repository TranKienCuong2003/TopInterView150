class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var sumNumbers = function(root) {
    function dfs(node, currentSum) {
      if (!node) return 0;

      currentSum = currentSum * 10 + node.val;

      if (!node.left && !node.right) {
        return currentSum;
      }

      return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    }

    return dfs(root, 0);
  };
  
  // Example
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  
  console.log(sumNumbers(root1));
  
  const root2 = new TreeNode(4);
  root2.left = new TreeNode(9);
  root2.right = new TreeNode(0);
  root2.left.left = new TreeNode(5);
  root2.left.right = new TreeNode(1);
  
  console.log(sumNumbers(root2));
  