/// Merge Sort (O(n) Space)

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5,2,9,1,7]));

/// space analysis
/// memory used ~~ n 
/// space complexity 0(n)


//// Breadth First Search (Graph) – O(V)

function bfs(graph, start) {
    let queue = [start];
    let visited = new Set();

    visited.add(start);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
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

/// Space Complexity: O(V)


///// Dynamic Programming (Fibonacci Memoization)

function fibonacci(n, memo = {}) {
    if (n <= 1) return n;

    if (memo[n]) return memo[n];

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

    return memo[n];
}

console.log(fibonacci(10));

//// output

// memo = {
// 1:1,
// 2:1,
// 3:2,
// 4:3,
// ...
// }

/// Space Complexity: O(n)


/// backtracking ( N - Queens )

function solveNQueens(n) {
    let board = Array(n).fill().map(() => Array(n).fill("."));
    let result = [];

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r => r.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = "Q";
                backtrack(row + 1);
                board[row][col] = ".";
            }
        }
    }

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") return false;
        }
        return true;
    }

    backtrack(0);
    return result;
}

console.log(solveNQueens(4));

//// Space Complexity: O(n²)


