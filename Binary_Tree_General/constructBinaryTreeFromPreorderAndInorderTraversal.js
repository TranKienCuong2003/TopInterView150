class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var buildTree = function(preorder, inorder) {
    
    function helper(preStart, inStart, inEnd) {
      if (inStart > inEnd) return null;

      const rootVal = preorder[preStart];
      const root = new TreeNode(rootVal);

      const rootIndex = inorder.indexOf(rootVal);

      const leftSize = rootIndex - inStart;

      root.left = helper(preStart + 1, inStart, rootIndex - 1);
      root.right = helper(preStart + leftSize + 1, rootIndex + 1, inEnd);
  
      return root;
    }
  
    return helper(0, 0, inorder.length - 1);
  };
  
  // Example
  const preorder1 = [3,9,20,15,7];
  const inorder1 = [9,3,15,20,7];
  console.log(buildTree(preorder1, inorder1));
  
  const preorder2 = [-1];
  const inorder2 = [-1];
  console.log(buildTree(preorder2, inorder2));
  