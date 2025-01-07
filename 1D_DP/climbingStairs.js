function climbStairs(n) {
    if (n === 1) return 1;

    let first = 1, second = 2;

    for (let i = 3; i <= n; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }

    return second;
}

// Example
console.log(climbStairs(2));
console.log(climbStairs(3));
