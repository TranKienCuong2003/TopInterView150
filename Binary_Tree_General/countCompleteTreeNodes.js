var countNodes = function(root) {
    if (!root) return 0;

    function getHeight(node) {
        let height = 0;
        while (node) {
            node = node.left;
            height++;
        }
        return height;
    }

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    if (leftHeight === rightHeight) {
        return (1 << leftHeight) + countNodes(root.right);
    } else {
        return (1 << rightHeight) + countNodes(root.left);
    }
};

// Example
let root1 = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: null
    }
};

console.log(countNodes(root1));

let root2 = null;
console.log(countNodes(root2));

let root3 = { val: 1, left: null, right: null };
console.log(countNodes(root3));
