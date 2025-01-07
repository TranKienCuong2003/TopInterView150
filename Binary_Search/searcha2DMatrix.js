const searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        const midValue = matrix[row][col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

// Example
const matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const target1 = 3;
console.log("Example 1 Output:", searchMatrix(matrix1, target1));

const matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const target2 = 13;
console.log("Example 2 Output:", searchMatrix(matrix2, target2));
