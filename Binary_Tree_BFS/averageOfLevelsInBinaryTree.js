function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var averageOfLevels = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelSum / levelSize);
    }

    return result;
};

// Example
let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log("Example 1:");
console.log("Input: root = [3,9,20,null,null,15,7]");
console.log("Output: " + JSON.stringify(averageOfLevels(root1))); // Output: [3.00000,14.50000,11.00000]

let root2 = new TreeNode(3);
root2.left = new TreeNode(9);
root2.right = new TreeNode(20);
root2.right.left = new TreeNode(15);
root2.right.right = new TreeNode(7);

console.log("Example 2:");
console.log("Input: root = [3,9,20,15,7]");
console.log("Output: " + JSON.stringify(averageOfLevels(root2))); // Output: [3.00000,14.50000,11.00000]
