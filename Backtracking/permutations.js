var permute = function(nums) {
    let result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];

            backtrack(start + 1);

            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0);

    return result;
};

// Example
let nums1 = [1, 2, 3];
console.log(permute(nums1));

let nums2 = [0, 1];
console.log(permute(nums2));

let nums3 = [1];
console.log(permute(nums3));
