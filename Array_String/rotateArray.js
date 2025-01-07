function rotate(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Example:
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
rotate(nums1, k1);
console.log(nums1);

let nums2 = [-1, -100, 3, 99];
let k2 = 2;
rotate(nums2, k2);
console.log(nums2);
