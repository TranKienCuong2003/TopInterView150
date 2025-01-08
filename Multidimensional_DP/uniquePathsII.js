function uniquePathsWithObstacles(grid) {
    const m = grid.length;
    const n = grid[0].length;

    if (grid[0][0] === 1) return 0;

    const dp = Array(m).fill().map(() => Array(n).fill(0));

    dp[0][0] = 1;

    for (let i = 1; i < m; i++) {
        dp[i][0] = grid[i][0] === 1 ? 0 : dp[i - 1][0];
    }

    for (let j = 1; j < n; j++) {
        dp[0][j] = grid[0][j] === 1 ? 0 : dp[0][j - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[m - 1][n - 1];
}

// Example
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[0,1],[0,0]]));
