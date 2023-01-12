function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i, array.length);
    let indexOfSmallest = i;
    let j = i + 1;
    while (j < array.length) {
      const indexOfPossibleSmallest = j;
      if (array[indexOfPossibleSmallest] < array[indexOfSmallest]) {
        indexOfSmallest = indexOfPossibleSmallest;
      }
      j++;
    }
    swap(i, indexOfSmallest, array);
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//AVG + worst O(N^2) Time, O(1) Space
