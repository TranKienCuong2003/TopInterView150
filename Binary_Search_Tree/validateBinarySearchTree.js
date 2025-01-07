function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var isValidBST = function(root) {
    function helper(node, lower = -Infinity, upper = Infinity) {
        if (!node) return true;

        if (node.val <= lower || node.val >= upper) {
            return false;
        }

        return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);
    }

    return helper(root);
};

// Example
let root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
console.log("Example 1:");
console.log("Input: root = [2,1,3]");
console.log("Output: " + isValidBST(root1));

let root2 = new TreeNode(5);
root2.left = new TreeNode(1);
root2.right = new TreeNode(4);
root2.right.left = new TreeNode(3);
root2.right.right = new TreeNode(6);
console.log("Example 2:");
console.log("Input: root = [5,1,4,null,null,3,6]");
console.log("Output: " + isValidBST(root2));
