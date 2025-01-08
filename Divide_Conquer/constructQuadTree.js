class Node {
    constructor(val, isLeaf, topLeft = null, topRight = null, bottomLeft = null, bottomRight = null) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
}

const construct = function(grid) {
    const buildQuadTree = (row, col, size) => {
        if (size === 1) {
            return new Node(grid[row][col] === 1, true);
        }

        const halfSize = size / 2;
        const topLeft = buildQuadTree(row, col, halfSize);
        const topRight = buildQuadTree(row, col + halfSize, halfSize);
        const bottomLeft = buildQuadTree(row + halfSize, col, halfSize);
        const bottomRight = buildQuadTree(row + halfSize, col + halfSize, halfSize);

        if (
            topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
            topLeft.val === topRight.val &&
            topRight.val === bottomLeft.val &&
            bottomLeft.val === bottomRight.val
        ) {
            return new Node(topLeft.val, true);
        }

        return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    };

    return buildQuadTree(0, 0, grid.length);
};

const serializeQuadTree = (node) => {
    const result = [];
    const queue = [node];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === null) {
            result.push(null);
            continue;
        }
        result.push([current.isLeaf ? 1 : 0, current.val ? 1 : 0]);
        if (!current.isLeaf) {
            queue.push(current.topLeft, current.topRight, current.bottomLeft, current.bottomRight);
        }
    }

    return result;
};

// Example
const grid1 = [
    [0, 1],
    [1, 0]
];
const root1 = construct(grid1);
console.log("Example 1 Output:", serializeQuadTree(root1));

const grid2 = [
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0]
];
const root2 = construct(grid2);
console.log("Example 2 Output:", serializeQuadTree(root2));
