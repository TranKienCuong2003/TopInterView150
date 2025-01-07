class RandomizedSet {
    constructor() {
        this.set = new Map();
        this.values = [];
    }

    insert(val) {
        if (this.set.has(val)) {
            return false;
        }
        this.set.set(val, this.values.length);
        this.values.push(val);
        return true;
    }

    remove(val) {
        if (!this.set.has(val)) {
            return false;
        }
        const index = this.set.get(val);
        const lastVal = this.values[this.values.length - 1];

        this.values[index] = lastVal;
        this.set.set(lastVal, index);

        this.values.pop();
        this.set.delete(val);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}

// Example
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(2));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
console.log(randomizedSet.remove(1));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
