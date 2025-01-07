class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  var isSameTree = function(p, q) {
    if (!p && !q) return true;
    
    if (!p || !q) return false;
    
    if (p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  
  // Example
  const p = new TreeNode(1);
  p.left = new TreeNode(2);
  p.right = new TreeNode(3);
  
  const q = new TreeNode(1);
  q.left = new TreeNode(2);
  q.right = new TreeNode(3);
  
  console.log(isSameTree(p, q));
  
  const p2 = new TreeNode(1);
  p2.left = new TreeNode(2);
  
  const q2 = new TreeNode(1);
  q2.right = new TreeNode(2);
  
  console.log(isSameTree(p2, q2));
  