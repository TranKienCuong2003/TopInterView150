var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
};

// Example
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));
