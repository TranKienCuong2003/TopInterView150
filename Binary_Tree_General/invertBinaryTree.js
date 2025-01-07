class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var invertTree = function(root) {
    if (!root) return null;
    
    [root.left, root.right] = [root.right, root.left];
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
  };
  
  // Example
  const root1 = new TreeNode(4);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(7);
  root1.left.left = new TreeNode(1);
  root1.left.right = new TreeNode(3);
  root1.right.left = new TreeNode(6);
  root1.right.right = new TreeNode(9);
  
  console.log(invertTree(root1));
  
  const root2 = new TreeNode(2);
  root2.left = new TreeNode(1);
  root2.right = new TreeNode(3);
  
  console.log(invertTree(root2));
  
  console.log(invertTree(null));
  