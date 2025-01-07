var totalNQueens = function(n) {
    let count = 0;

    let cols = new Array(n).fill(false);
    let diag1 = new Array(2 * n - 1).fill(false);
    let diag2 = new Array(2 * n - 1).fill(false);

    function backtrack(row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols[col] || diag1[row - col + n - 1] || diag2[row + col]) continue;

            cols[col] = diag1[row - col + n - 1] = diag2[row + col] = true;

            backtrack(row + 1);

            cols[col] = diag1[row - col + n - 1] = diag2[row + col] = false;
        }
    }

    backtrack(0);

    return count;
};

let n1 = 4;
console.log(totalNQueens(n1));

let n2 = 1;
console.log(totalNQueens(n2));
