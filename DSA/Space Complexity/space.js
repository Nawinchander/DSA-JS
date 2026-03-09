///// O(1) – Constant Space

function sum(a, b) {
    let result = a + b;
    return result;
}

console.log(sum(5, 10));

// Variables used:

// a
// b
// result

// Even if numbers become larger, memory usage stays constant.

// Space Complexity: O(1)

//////O(n) – Linear Space

function createArray(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
}

console.log(createArray(5));


/// EXPLANATION

// If n = 5  [0,1,2,3,4]

// If n = 1000 Array size = 1000

// Space Complexity: O(n)

///// O(n²) – Quadratic Space ///  n X n

function createMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }

    return matrix;
}

console.log(createMatrix(3));


/// output

[
 [0,1,2],
 [1,2,3],
 [2,3,4]
]

/// If n = 100, matrix size = 100 × 100
/// Space Complexity: O(n²)

/// Recursive Space Complexity

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

/// OP

factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)

// Each call uses memory.
// If n = 5 → 5 stack frames.
// Space Complexity: O(n)







