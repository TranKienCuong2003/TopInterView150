function maxProfit(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
}

// Example:
let prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1));

let prices2 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices2));

let prices3 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3));
