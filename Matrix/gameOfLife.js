function gameOfLife(board) {
    const m = board.length;
    const n = board[0].length;

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [1, 1], [-1, 1], [1, -1]
    ];

    function countLiveNeighbors(i, j) {
        let liveNeighbors = 0;
        for (const [dx, dy] of directions) {
            const ni = i + dx;
            const nj = j + dy;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                liveNeighbors += board[ni][nj] & 1;
            }
        }
        return liveNeighbors;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const liveNeighbors = countLiveNeighbors(i, j);

            if (board[i][j] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 1;
                } else {
                    board[i][j] = 3;
                }
            }

            if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = 2;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] >>= 1;
        }
    }
}

// Example:
const board1 = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];
gameOfLife(board1);
console.log(board1);

const board2 = [
    [1, 1],
    [1, 0]
];
gameOfLife(board2);
console.log(board2);
