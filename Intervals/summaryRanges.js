function summaryRanges(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];

        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        
        if (start === nums[i]) {
            result.push(`${start}`);
        } else {
            result.push(`${start}->${nums[i]}`);
        }
    }
    
    return result;
}

// Example:
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
