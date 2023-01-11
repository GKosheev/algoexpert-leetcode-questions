function iterativeSearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const possibleMatch = array[middle];
    if (possibleMatch === target) {
      return middle;
    } else if (possibleMatch > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}
// O(logN) Time, O(1) Space
