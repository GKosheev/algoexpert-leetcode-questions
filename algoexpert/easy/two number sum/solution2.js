function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let i = 0;
  let j = array.length - 1;

  while (i !== j) {
    const first = array[i];
    const last = array[j];

    const sum = first + last;

    if (sum > targetSum) {
      j--;
    } else if (sum < targetSum) {
      i++;
    } else {
      return [first, last];
    }
  }
  return [];
}

//O(NlogN) Time O(1) Space
