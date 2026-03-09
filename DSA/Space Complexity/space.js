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






