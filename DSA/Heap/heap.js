/// Basic Max Heap Implementation

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Insert value
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Move value up to maintain heap property
  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] =
      [this.heap[index], this.heap[parentIndex]];

      index = parentIndex;
    }
  }

  // Remove max element
  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] =
      [this.heap[largest], this.heap[index]];

      index = largest;
    }
  }
}


