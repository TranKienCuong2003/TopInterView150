function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev.val);
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);
    return minDiff;
};

// Example:
let root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(6);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);

console.log("Example 1:");
console.log("Input: root = [4,2,6,1,3]");
console.log("Output: " + getMinimumDifference(root1));

let root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(48);
root2.right.left = new TreeNode(12);
root2.right.right = new TreeNode(49);

console.log("Example 2:");
console.log("Input: root = [1,0,48,null,null,12,49]");
console.log("Output: " + getMinimumDifference(root2));
