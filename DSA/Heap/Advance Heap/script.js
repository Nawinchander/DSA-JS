
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



/// Merge K Sorted Arrays Using Heap
/// Merge multiple sorted arrays into one sorted array.

// Input
// [ [1,4,7],
//   [2,5,8],
//   [3,6,9] ]

// Output
// [1,2,3,4,5,6,7,8,9]


function mergeKArrays(arrays) {
  let heap = [];
  let result = [];

  // Push first element of each array
  for (let i = 0; i < arrays.length; i++) {
    heap.push({
      value: arrays[i][0],
      arrIndex: i,
      elementIndex: 0
    });
  }

  heap.sort((a,b)=>a.value-b.value);

  while (heap.length > 0) {

    let smallest = heap.shift();
    result.push(smallest.value);

    let nextIndex = smallest.elementIndex + 1;
    let arrIndex = smallest.arrIndex;

    if (nextIndex < arrays[arrIndex].length) {
      heap.push({
        value: arrays[arrIndex][nextIndex],
        arrIndex: arrIndex,
        elementIndex: nextIndex
      });

      heap.sort((a,b)=>a.value-b.value);
    }
  }

  return result;
}

console.log(
mergeKArrays([
[1,4,7],
[2,5,8],
[3,6,9]
]));


//// O(n log k)



