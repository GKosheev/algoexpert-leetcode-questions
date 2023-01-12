function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = i;
    let prev = i - 1;
    while (prev > -1 && array[prev] > array[cur]) {
      swap(cur, prev, array);
      cur--;
      prev--;
    }
  }

  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//AVG + Worst: O(N^2) Time, O(1) Space
