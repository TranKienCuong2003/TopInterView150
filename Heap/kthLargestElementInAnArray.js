const findKthLargest = function(nums, k) {
    const heap = new MinHeap();
    
    for (let num of nums) {
        heap.insert(num);
        
        if (heap.size() > k) {
            heap.remove();
        }
    }
    
    return heap.peek();
};

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    remove() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return root;
    }
    
    heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        const size = this.size();
        while (index * 2 + 1 < size) {
            let smallerChildIndex = index * 2 + 1;
            if (smallerChildIndex + 1 < size && this.heap[smallerChildIndex] > this.heap[smallerChildIndex + 1]) {
                smallerChildIndex = smallerChildIndex + 1;
            }
            if (this.heap[index] <= this.heap[smallerChildIndex]) break;
            [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
            index = smallerChildIndex;
        }
    }
    
    size() {
        return this.heap.length;
    }
    
    peek() {
        return this.heap[0];
    }
};

// Example
const nums1 = [3, 2, 1, 5, 6, 4];
const k1 = 2;
console.log("Example 1 Output:", findKthLargest(nums1, k1));

const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k2 = 4;
console.log("Example 2 Output:", findKthLargest(nums2, k2));
