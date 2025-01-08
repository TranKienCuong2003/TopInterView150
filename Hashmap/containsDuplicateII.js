function containsNearbyDuplicate(nums, k) {
    const seen = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i]) && i - seen.get(nums[i]) <= k) {
            return true;
        }
        seen.set(nums[i], i);
    }
    
    return false;
}

// Example:
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
