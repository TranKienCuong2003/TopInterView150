var numIslands = function(grid) {
    if (grid.length === 0) return 0;

    let m = grid.length;
    let n = grid[0].length;
    let count = 0;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0';

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};

// Example
let grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
console.log("Example 1:");
console.log("Input: grid = [[" + grid1.map(row => row.join(",")).join("], [") + "]]");
console.log("Output: " + numIslands(grid1));

let grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
console.log("Example 2:");
console.log("Input: grid = [[" + grid2.map(row => row.join(",")).join("], [") + "]]");
console.log("Output: " + numIslands(grid2));
