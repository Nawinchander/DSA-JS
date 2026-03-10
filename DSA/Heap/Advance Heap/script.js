
// Find the Top K largest elements from an array.

// Use a Min Heap of size K.

// Keep only K largest numbers

// If heap size > k → remove smallest

// Input:
// arr = [3, 2, 1, 5, 6, 4]
// k = 2

// Output:
// [6,5]


class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] =
      [this.heap[index], this.heap[parent]];

      index = parent;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] =
      [this.heap[smallest], this.heap[index]];

      index = smallest;
    }
  }
}

function topKElements(arr, k) {
  const heap = new MinHeap();

  for (let num of arr) {
    heap.insert(num);

    if (heap.heap.length > k) {
      heap.extractMin();
    }
  }

  return heap.heap;
}

console.log(topKElements([3,2,1,5,6,4],2));



//// Time Complexity

// O(n log k)




