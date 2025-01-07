function rangeBitwiseAnd(left, right) {
    let shift = 0;
    
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    
    return left << shift;
}

// Example
console.log(rangeBitwiseAnd(5, 7));
console.log(rangeBitwiseAnd(0, 0));
console.log(rangeBitwiseAnd(1, 2147483647));
