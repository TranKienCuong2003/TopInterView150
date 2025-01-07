function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k++] = nums[i];
        }
    }
    return k;
}

// Example:
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(nums1, val1);
console.log(k1, nums1.slice(0, k1));

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let k2 = removeElement(nums2, val2);
console.log(k2, nums2.slice(0, k2));
