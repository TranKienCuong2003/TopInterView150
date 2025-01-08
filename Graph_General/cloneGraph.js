class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

var cloneGraph = function(node) {
    if (!node) return null;

    let map = new Map();

    function dfs(node) {
        if (map.has(node.val)) {
            return map.get(node.val);
        }

        let clone = new Node(node.val);
        map.set(node.val, clone);

        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
};

// Example
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

let clonedGraph = cloneGraph(node1);

function printGraph(node) {
    if (!node) return;
    let visited = new Map();

    function dfsPrint(node) {
        if (visited.has(node.val)) return;
        visited.set(node.val, true);
        console.log(`Node ${node.val} neighbors: ${node.neighbors.map(neighbor => neighbor.val).join(', ')}`);
        for (let neighbor of node.neighbors) {
            dfsPrint(neighbor);
        }
    }

    dfsPrint(node);
}

printGraph(clonedGraph);
