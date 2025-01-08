function trailingZeroes(n) {
    let count = 0;
    
    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return count;
}

// Example
console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(0));
console.log(trailingZeroes(100));
