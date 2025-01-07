function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let right = 1;
    for (let i = n - 2; i >= 0; i--) {
        right *= nums[i + 1];
        answer[i] *= right;
    }
    
    return answer;
}

// Example:
console.log(productExceptSelf([1, 2, 3, 4]));

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
