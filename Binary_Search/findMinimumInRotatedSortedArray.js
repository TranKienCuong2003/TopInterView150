const findMin = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else if (nums[mid] < nums[right]) {
            right = mid;
        }
        else {
            right--;
        }
    }

    return nums[left];
};

const nums1 = [3,4,5,1,2];
console.log("Example 1 Output:", findMin(nums1));

const nums2 = [4,5,6,7,0,1,2];
console.log("Example 2 Output:", findMin(nums2));

const nums3 = [11,13,15,17];
console.log("Example 3 Output:", findMin(nums3));
