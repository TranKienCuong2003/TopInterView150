function jump(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
}

// Example:
let nums1 = [2, 3, 1, 1, 4];
console.log(jump(nums1));

let nums2 = [2, 3, 0, 1, 4];
console.log(jump(nums2));
