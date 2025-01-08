const maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return 0;

    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

// Example
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Example 1 Output:", maxSubArray(nums1));

const nums2 = [1];
console.log("Example 2 Output:", maxSubArray(nums2));

const nums3 = [5, 4, -1, 7, 8];
console.log("Example 3 Output:", maxSubArray(nums3));
