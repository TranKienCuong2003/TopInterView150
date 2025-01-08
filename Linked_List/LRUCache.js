class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
    
    get(key) {
      if (this.cache.has(key)) {
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      } else {
        return -1;
      }
    }
    
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
      }
    }
  }
  
  // Example:
  const lRUCache = new LRUCache(2);
  lRUCache.put(1, 1);
  lRUCache.put(2, 2);
  console.log(lRUCache.get(1));
  lRUCache.put(3, 3);
  console.log(lRUCache.get(2));
  lRUCache.put(4, 4);
  console.log(lRUCache.get(1));
  console.log(lRUCache.get(3));
  console.log(lRUCache.get(4));
  