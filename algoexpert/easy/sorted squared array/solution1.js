function sortedSquaredArray(array) {
  // Write your code here.

  const sortedArray = [];
  let start = 0;
  let end = array.length - 1;
  let arrLen = array.length - 1;

  while (arrLen > -1) {
    const startSquared = array[start] ** 2;
    const endSquared = array[end] ** 2;

    if (startSquared > endSquared) {
      sortedArray[arrLen] = startSquared;
      start++;
    } else {
      sortedArray[arrLen] = endSquared;
      end--;
    }
    arrLen--;
  }

  return sortedArray;
}

// O(N) ST
