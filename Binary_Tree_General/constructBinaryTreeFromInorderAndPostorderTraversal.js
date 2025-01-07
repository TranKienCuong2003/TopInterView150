class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  var buildTree = function(inorder, postorder) {
    function helper(inStart, inEnd) {
      if (inStart > inEnd) return null;
  
      const rootVal = postorder.pop();
      const root = new TreeNode(rootVal);
  
      const rootIndex = inorder.indexOf(rootVal);
  
      root.right = helper(rootIndex + 1, inEnd);
      root.left = helper(inStart, rootIndex - 1);
  
      return root;
    }
  
    return helper(0, inorder.length - 1);
  };
  
  // Example
  const inorder1 = [9,3,15,20,7];
  const postorder1 = [9,15,7,20,3];
  console.log(buildTree(inorder1, postorder1));
  
  const inorder2 = [-1];
  const postorder2 = [-1];
  console.log(buildTree(inorder2, postorder2));
  