function kadanesAlgorithm(array) {
  let currSum = array[0];
  let maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// O(N) Time, O(1) Space
