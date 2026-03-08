//// Time Complexity: O(n log n)

/// Time Complexity: O(n log n)

/// Fibonacci (Naive Recursion)

function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

// op - Call tree grows like this:
// Operations roughly: 2^n

// fib(6)
//  ├─ fib(5)
//  │   ├─ fib(4)
//  │   └─ fib(3)
//  └─ fib(4)


//// O(n!) — Factorial Time

function permutations(arr) {
  if (arr.length === 0) return [[]];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(0, i).concat(arr.slice(i + 1));
    let perms = permutations(rest);

    for (let p of perms) {
      result.push([arr[i], ...p]);
    }
  }

  return result;
}

console.log(permutations([1,2,3]));

/// op

// 3! = 6
// 4! = 24
// 5! = 120

///  O(n log n) — Efficient Sorting (Quick Sort)

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot)
      left.push(arr[i]);
    else
      right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5,3,8,4,2]));

/// complexity // O(n log n)

/// worst case // O(n²)

//// O(n + m) — Graph Traversal

// Occurs when processing nodes + edges.

// Used in BFS / DFS.

function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();

  while (queue.length) {
    let node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      for (let neighbor of graph[node]) {
        queue.push(neighbor);
      }
    }
  }
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: []
};

bfs(graph, "A");

/// complexity
O(V + E)
V = vertices
E = edges


/////

