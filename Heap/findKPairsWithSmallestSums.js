const kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    if (nums1.length === 0 || nums2.length === 0 || k === 0) {
        return result;
    }
    
    const heap = new MinHeap();
    
    for (let j = 0; j < nums2.length; j++) {
        heap.insert([nums1[0] + nums2[j], 0, j]);
    }
    
    while (k > 0 && heap.size() > 0) {
        const [sum, i, j] = heap.extractMin();
        result.push([nums1[i], nums2[j]]);
        
        if (i + 1 < nums1.length) {
            heap.insert([nums1[i + 1] + nums2[j], i + 1, j]);
        }
        
        k--;
    }
    
    return result;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return min;
    }
    
    heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        const size = this.size();
        while (index * 2 + 1 < size) {
            let smallerChildIndex = index * 2 + 1;
            if (smallerChildIndex + 1 < size && this.heap[smallerChildIndex][0] > this.heap[smallerChildIndex + 1][0]) {
                smallerChildIndex = smallerChildIndex + 1;
            }
            if (this.heap[index][0] <= this.heap[smallerChildIndex][0]) break;
            [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
            index = smallerChildIndex;
        }
    }
    
    size() {
        return this.heap.length;
    }
}

// Example:
const nums1_1 = [1,7,11], nums2_1 = [2,4,6], k1 = 3;
console.log("Example 1 Output:", kSmallestPairs(nums1_1, nums2_1, k1));

const nums1_2 = [1,1,2], nums2_2 = [1,2,3], k2 = 2;
console.log("Example 2 Output:", kSmallestPairs(nums1_2, nums2_2, k2));
