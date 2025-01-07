function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var kthSmallest = function(root, k) {
    let result = null;
    let count = 0;

    // Inorder Traversal function
    function inorder(node) {
        if (!node) return;

        // Duyệt cây con bên trái
        inorder(node.left);

        // Khi đã đến node hiện tại
        count++;
        if (count === k) {
            result = node.val;
            return; // Nếu đã tìm được giá trị thứ k, dừng lại
        }

        // Duyệt cây con bên phải
        inorder(node.right);
    }

    inorder(root);
    return result;
};

// Example
let root1 = new TreeNode(3);
root1.left = new TreeNode(1);
root1.right = new TreeNode(4);
root1.left.right = new TreeNode(2);

console.log("Example 1:");
console.log("Input: root = [3,1,4,null,2], k = 1");
console.log("Output: " + kthSmallest(root1, 1));

let root2 = new TreeNode(5);
root2.left = new TreeNode(3);
root2.right = new TreeNode(6);
root2.left.left = new TreeNode(2);
root2.left.right = new TreeNode(4);
root2.left.left.left = new TreeNode(1);

console.log("Example 2:");
console.log("Input: root = [5,3,6,2,4,null,null,1], k = 3");
console.log("Output: " + kthSmallest(root2, 3));
