
//// O(1) — Constant Time


function getFirstElement(arr) {
  return arr[0];
}

const numbers = [10, 20, 30, 40];
console.log(getFirstElement(numbers));


//// O(n) — Linear Time

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1,2,3,4,5]);

