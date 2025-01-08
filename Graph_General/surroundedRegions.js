var solve = function(board) {
    if (board.length === 0 || board[0].length === 0) return;

    let m = board.length;
    let n = board[0].length;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') {
            return;
        }

        board[i][j] = 'E';

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 'O') {
                dfs(i, j);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] === 'E') {
                board[i][j] = 'O';
            }
        }
    }
};

// Example
let board1 = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
];
console.log("Example 1:");
console.log("Input: board = [[" + board1.map(row => row.join(",")).join("], [") + "]]");
solve(board1);
console.log("Output: [[" + board1.map(row => row.join(",")).join("], [") + "]]");

let board2 = [["X"]];
console.log("Example 2:");
console.log("Input: board = [[" + board2.map(row => row.join(",")).join("], [") + "]]");
solve(board2);
console.log("Output: [[" + board2.map(row => row.join(",")).join("], [") + "]]");
