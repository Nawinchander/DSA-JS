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



