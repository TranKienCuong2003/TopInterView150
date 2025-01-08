var snakesAndLadders = function(board) {
    const n = board.length;

    const getIndex = (pos) => {
        const row = Math.floor((pos - 1) / n);
        const col = (pos - 1) % n;
        const actualRow = n - 1 - row;
        const actualCol = row % 2 === 0 ? col : n - 1 - col;
        return [actualRow, actualCol];
    };

    const visited = new Set();
    const queue = [[1, 0]];

    while (queue.length > 0) {
        const [current, moves] = queue.shift();

        if (current === n * n) return moves;

        for (let i = 1; i <= 6; i++) {
            const next = current + i;
            if (next > n * n) break;

            const [row, col] = getIndex(next);
            const destination = board[row][col] === -1 ? next : board[row][col];

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push([destination, moves + 1]);
            }
        }
    }

    return -1;
};

// Example
console.log(snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1]
]));

console.log(snakesAndLadders([
    [-1, -1],
    [-1, 3]
]));
