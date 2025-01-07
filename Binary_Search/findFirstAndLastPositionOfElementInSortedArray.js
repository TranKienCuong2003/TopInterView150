const searchRange = function(nums, target) {
    function findFirstPosition() {
        let left = 0, right = nums.length - 1;
        let firstPos = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                firstPos = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return firstPos;
    }

    function findLastPosition() {
        let left = 0, right = nums.length - 1;
        let lastPos = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                lastPos = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return lastPos;
    }

    const firstPos = findFirstPosition();
    if (firstPos === -1) return [-1, -1];

    const lastPos = findLastPosition();
    return [firstPos, lastPos];
};

// Example
const nums1 = [5,7,7,8,8,10];
const target1 = 8;
console.log("Example 1 Output:", searchRange(nums1, target1));

const nums2 = [5,7,7,8,8,10];
const target2 = 6;
console.log("Example 2 Output:", searchRange(nums2, target2));

const nums3 = [];
const target3 = 0;
console.log("Example 3 Output:", searchRange(nums3, target3));
