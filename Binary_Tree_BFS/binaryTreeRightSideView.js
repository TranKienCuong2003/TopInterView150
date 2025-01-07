function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var rightSideView = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            if (i === levelSize - 1) {
                result.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
};

// Example
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.right = new TreeNode(5);
root1.right.right = new TreeNode(4);

console.log("Example 1:");
console.log("Input: root = [1,2,3,null,5,null,4]");
console.log("Output: " + JSON.stringify(rightSideView(root1)));

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.right.right = new TreeNode(5);

console.log("Example 2:");
console.log("Input: root = [1,2,3,4,null,null,null,5]");
console.log("Output: " + JSON.stringify(rightSideView(root2)));

let root3 = new TreeNode(1);
root3.right = new TreeNode(3);

console.log("Example 3:");
console.log("Input: root = [1,null,3]");
console.log("Output: " + JSON.stringify(rightSideView(root3)));

let root4 = null;

console.log("Example 4:");
console.log("Input: root = []");
console.log("Output: " + JSON.stringify(rightSideView(root4)));
