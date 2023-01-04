function twoNumberSum(array, targetSum) {
  const memory = {};

  for (const number of array) {
    const difference = targetSum - number;
    if (memory[difference]) {
      return [number, difference];
    } else {
      memory[number] = true;
    }
  }

  return [];
}
// O(N) ST
