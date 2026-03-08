
//// O(1) — Constant Time


function getFirstElement(arr) {
  return arr[0];
}

const numbers = [10, 20, 30, 40];
console.log(getFirstElement(numbers));

///output

// Why it is O(1)
// No matter if array has 10 elements or 1 million
// It always accesses one element

//// O(n) — Linear Time

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1,2,3,4,5]);

/// output

// If the array size increases:
// 5 elements → 5 operations
// 100 elements → 100 operations



//// O(n²) — Quadratic Time

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printPairs([1,2,3]);

/// output

// O(n²) If n = 3

// (1,1)
// (1,2)
// (1,3)
// (2,1)
// (2,2)
// (2,3)
// (3,1)
// (3,2)
// (3,3)

// Total operations = n × n

// Time Complexity: O(n²)

/// O(log n) — Logarithmic Time

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7], 5));

/// output 

// O(log n) Each step removes half of the array.

// 1000 elements
// 500
// 250
// 125
// 62
// 31
// ...


