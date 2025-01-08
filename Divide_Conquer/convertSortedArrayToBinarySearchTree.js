function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var sortedArrayToBST = function(nums) {
    function buildBST(left, right) {
        if (left > right) {
            return null;
        }
        
        const mid = Math.floor((left + right) / 2);
        
        const node = new TreeNode(nums[mid]);
        
        node.left = buildBST(left, mid - 1);
        node.right = buildBST(mid + 1, right);
        
        return node;
    }

    return buildBST(0, nums.length - 1);
};

// Example
let nums1 = [-10, -3, 0, 5, 9];
let result1 = sortedArrayToBST(nums1);
console.log(result1);

let nums2 = [1, 3];
let result2 = sortedArrayToBST(nums2);
console.log(result2);
