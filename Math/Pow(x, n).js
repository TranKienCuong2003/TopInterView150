function myPow(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return n % 2 === 0 ? myPow(x * x, Math.floor(n / 2)) : x * myPow(x * x, Math.floor(n / 2));
}

// Example
console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2.0, -2));
