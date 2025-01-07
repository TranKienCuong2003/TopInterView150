function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left : right;
};

// Example
let root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
root1.right.left = new TreeNode(0);
root1.right.right = new TreeNode(8);

let p1 = root1.left;
let q1 = root1.right;
console.log("Example 1:");
console.log("Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1");
console.log("Output: " + lowestCommonAncestor(root1, p1, q1).val);
console.log("Explanation: The LCA of nodes 5 and 1 is 3.\n");

let p2 = root1.left;
let q2 = root1.left.right.right;
console.log("Example 2:");
console.log("Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4");
console.log("Output: " + lowestCommonAncestor(root1, p2, q2).val);
console.log("Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.\n");

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
let p3 = root2;
let q3 = root2.left;
console.log("Example 3:");
console.log("Input: root = [1,2], p = 1, q = 2");
console.log("Output: " + lowestCommonAncestor(root2, p3, q3).val);
console.log("Explanation: The LCA of nodes 1 and 2 is 1.\n");
