const search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

// Example
const nums1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;
console.log("Example 1 Output:", search(nums1, target1));

const nums2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;
console.log("Example 2 Output:", search(nums2, target2));

const nums3 = [1];
const target3 = 0;
console.log("Example 3 Output:", search(nums3, target3));
