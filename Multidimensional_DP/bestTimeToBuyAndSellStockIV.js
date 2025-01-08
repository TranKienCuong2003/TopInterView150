function maxProfit(k, prices) {
    const n = prices.length;
    if (n === 0) return 0;

    if (k >= n / 2) {
        let profit = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }

    let dp = Array(k + 1).fill(0).map(() => Array(n).fill(0));
    
    for (let i = 1; i <= k; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
        }
    }

    return dp[k][n - 1];
}

// ExampleExample
console.log(maxProfit(2, [2, 4, 1]));
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
