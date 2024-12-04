class LRUCache {
  capacity;
  cache;
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  getKey(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    this.cache.delete(key);
    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }
  }
}
let execution = new LRUCache(3);
console.log(execution.cache);
execution.put(1, 1);
console.log(execution.cache);

execution.put(2, 2);
console.log(execution.cache);
execution.put(3, 3);
console.log(execution.cache);
execution.getKey(1);
execution.put(4, 4);
console.log(execution.cache);
