function productSum(array) {
  return recursiveSearch(array, 1);
}

function recursiveSearch(array, depth = 1) {
  let sum = 0;

  for (const number of array) {
    if (Array.isArray(number)) {
      sum += (depth + 1) * recursiveSearch(number, depth + 1);
    } else {
      sum += number;
    }
  }
  return sum;
}
//O(N) Time, O(d) Space, d - max depth of array
