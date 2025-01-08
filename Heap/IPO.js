const findMaximizedCapital = function(k, w, profits, capital) {
    const projects = [];
    for (let i = 0; i < profits.length; i++) {
        projects.push([capital[i], profits[i]]);
    }

    projects.sort((a, b) => a[0] - b[0]);

    const maxHeap = new MaxHeap();
    let i = 0;
    
    for (let j = 0; j < k; j++) {
        while (i < projects.length && projects[i][0] <= w) {
            maxHeap.insert(projects[i][1]);
            i++;
        }

        if (maxHeap.size() > 0) {
            w += maxHeap.extractMax();
        }
    }

    return w;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    extractMax() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return max;
    }
    
    heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        const size = this.size();
        while (index * 2 + 1 < size) {
            let largerChildIndex = index * 2 + 1;
            if (largerChildIndex + 1 < size && this.heap[largerChildIndex] < this.heap[largerChildIndex + 1]) {
                largerChildIndex = largerChildIndex + 1;
            }
            if (this.heap[index] >= this.heap[largerChildIndex]) break;
            [this.heap[index], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[index]];
            index = largerChildIndex;
        }
    }
    
    size() {
        return this.heap.length;
    }
}

// Example
const k1 = 2, w1 = 0, profits1 = [1,2,3], capital1 = [0,1,1];
console.log("Example 1 Output:", findMaximizedCapital(k1, w1, profits1, capital1));

const k2 = 3, w2 = 0, profits2 = [1,2,3], capital2 = [0,1,2];
console.log("Example 2 Output:", findMaximizedCapital(k2, w2, profits2, capital2));
