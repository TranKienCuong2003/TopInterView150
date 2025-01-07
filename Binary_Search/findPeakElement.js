const findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

// Example
const nums1 = [1, 2, 3, 1];
console.log("Example 1 Output:", findPeakElement(nums1));

const nums2 = [1, 2, 1, 3, 5, 6, 4];
console.log("Example 2 Output:", findPeakElement(nums2));
