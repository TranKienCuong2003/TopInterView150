const maxSubarraySumCircular = function(nums) {
    const n = nums.length;

    const maxKadane = (nums) => {
        let maxSum = nums[0];
        let currentSum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    };

    const maxSum = maxKadane(nums);

    let totalSum = 0;
    let minSum = nums[0];
    let currentMin = nums[0];
    for (let i = 0; i < n; i++) {
        totalSum += nums[i];
        if (i > 0) {
            currentMin = Math.min(nums[i], currentMin + nums[i]);
            minSum = Math.min(minSum, currentMin);
        }
    }

    const maxCircular = totalSum - minSum;

    if (maxCircular === 0) return maxSum;

    return Math.max(maxSum, maxCircular);
};

// Example
const nums1 = [1, -2, 3, -2];
console.log("Example 1 Output:", maxSubarraySumCircular(nums1));

const nums2 = [5, -3, 5];
console.log("Example 2 Output:", maxSubarraySumCircular(nums2));

const nums3 = [-3, -2, -3];
console.log("Example 3 Output:", maxSubarraySumCircular(nums3));
