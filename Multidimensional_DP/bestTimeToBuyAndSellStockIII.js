function maxProfit(prices) {
    const n = prices.length;
    if (n <= 1) return 0;

    let dp1 = Array(n).fill(0);
    let dp2 = Array(n).fill(0);

    let minPrice = prices[0];
    for (let i = 1; i < n; i++) {
        dp1[i] = Math.max(dp1[i - 1], prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    let maxPrice = prices[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        dp2[i] = Math.max(dp2[i + 1], maxPrice - prices[i]);
        maxPrice = Math.max(maxPrice, prices[i]);
    }

    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
        maxProfit = Math.max(maxProfit, dp1[i] + dp2[i]);
    }

    return maxProfit;
}

// Example
console.log(maxProfit([3,3,5,0,0,3,1,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
