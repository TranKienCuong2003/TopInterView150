function singleNumber(nums) {
    let ones = 0, twos = 0;
    for (let num of nums) {
        twos |= ones & num;
        ones ^= num;
        let threes = ones & twos;
        ones &= ~threes;
        twos &= ~threes;
    }
    return ones;
}

// Example
console.log(singleNumber([2,2,3,2]));
console.log(singleNumber([0,1,0,1,0,1,99]));
