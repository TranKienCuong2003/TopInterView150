class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var isSymmetric = function(root) {
    if (!root) return true;
  
    function isMirror(t1, t2) {
      if (!t1 && !t2) return true;
  
      if (!t1 || !t2) return false;
  
      return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }
  
    return isMirror(root.left, root.right);
  };
  
  // Example
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(2);
  root1.left.left = new TreeNode(3);
  root1.left.right = new TreeNode(4);
  root1.right.left = new TreeNode(4);
  root1.right.right = new TreeNode(3);
  
  console.log(isSymmetric(root1));
  
  const root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(2);
  root2.left.right = new TreeNode(3);
  root2.right.right = new TreeNode(3);
  
  console.log(isSymmetric(root2));
  