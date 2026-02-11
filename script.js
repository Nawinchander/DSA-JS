// IIFE Module Pattern
const DSAApp = (() => {

  // Closure for operation counter
  const createCounter = () => {
    let count = 0;
    return () => ++count;
  };
  const operationCount = createCounter();

  // 1️⃣ Merge Sort (Divide & Conquer)
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return [...result, ...left, ...right];
  };

  // 2️⃣ Binary Search
  const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      operationCount();
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) return mid;
      arr[mid] < target ? left = mid + 1 : right = mid - 1;
    }
    return -1;
  };

  // 3️⃣ BFS Graph Traversal
  const bfs = (graph, start) => {
    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
      let node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node);
        queue.push(...graph[node]);
      }
    }
    return result;
  };

  // 4️⃣ Fibonacci with Dynamic Programming (Memoization)
  const fib = (() => {
    const memo = new Map();
    return function f(n) {
      if (n <= 1) return n;
      if (memo.has(n)) return memo.get(n);

      const value = f(n - 1) + f(n - 2);
      memo.set(n, value);
      return value;
    };
  })();

  // Async Simulation
  const runDemo = async () => {
    console.log("🚀 Running DSA Demo...\n");

    const numbers = [12, 4, 9, 22, 1, 7];
    console.log("Original Array:", numbers);

    const sorted = mergeSort([...numbers]);
    console.log("Sorted (Merge Sort):", sorted);

    const searchIndex = binarySearch(sorted, 9);
    console.log("Binary Search (9 found at index):", searchIndex);

    const graph = {
      A: ["B", "C"],
      B: ["D"],
      C: ["E"],
      D: [],
      E: []
    };

    console.log("BFS Traversal:", bfs(graph, "A"));

    console.log("Fibonacci(10):", fib(10));

    console.log("Operations counted:", operationCount());
  };

  return { runDemo };
})();

// Run program
DSAApp.runDemo();
