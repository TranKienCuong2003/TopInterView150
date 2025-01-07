function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            if (leftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);

        leftToRight = !leftToRight;
    }

    return result;
};

// Example:
let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log("Example 1:");
console.log("Input: root = [3,9,20,null,null,15,7]");
console.log("Output: " + JSON.stringify(zigzagLevelOrder(root1)));

let root2 = new TreeNode(1);

console.log("Example 2:");
console.log("Input: root = [1]");
console.log("Output: " + JSON.stringify(zigzagLevelOrder(root2)));

let root3 = null;

console.log("Example 3:");
console.log("Input: root = []");
console.log("Output: " + JSON.stringify(zigzagLevelOrder(root3)));
