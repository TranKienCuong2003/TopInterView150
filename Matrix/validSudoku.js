function isValidSudoku(board) {
    const rows = Array(9).fill(null).map(() => new Set());
    const cols = Array(9).fill(null).map(() => new Set());
    const subBoxes = Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;

            const subBoxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(num) || cols[j].has(num) || subBoxes[subBoxIndex].has(num)) {
                return false;
            }

            rows[i].add(num);
            cols[j].add(num);
            subBoxes[subBoxIndex].add(num);
        }
    }

    return true;
}

// Example:
const board1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board1));

const board2 = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board2));
