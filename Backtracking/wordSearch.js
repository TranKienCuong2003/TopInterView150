var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    function dfs(i, j, index) {
        if (index === word.length) {
            return true;
        }

        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
            return false;
        }

        const temp = board[i][j];
        board[i][j] = '#';

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        for (let [dx, dy] of directions) {
            if (dfs(i + dx, j + dy, index + 1)) {
                return true;
            }
        }

        board[i][j] = temp;
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

// Example
let board1 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];
let word1 = "ABCCED";
console.log(exist(board1, word1));

let board2 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];
let word2 = "SEE";
console.log(exist(board2, word2));

let board3 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];
let word3 = "ABCB";
console.log(exist(board3, word3));
