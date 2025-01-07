function removeDuplicates(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k++] = nums[i];
        }
    }
    return k;
}

// Example:
let nums1 = [1, 1, 1, 2, 2, 3];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1));

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2));
