///// backtracking


function generateSubsets(nums) {
  const result = [];

  function backtrack(start, current) {
    // Push a copy of current subset
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      // Choose
      current.push(nums[i]);

      // Explore
      backtrack(i + 1, current);

      // Undo (Backtrack)
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// Example usage
const nums = [1, 2, 3];
console.log(generateSubsets(nums));