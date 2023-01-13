function smallestDifference(arrayOne, arrayTwo) {
  // O(nlogn + mlogm) Time, O(1) Space
  return solution1(arrayOne, arrayTwo);
}

function solution1(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let smallest = Math.abs(arr1[0] - arr2[0]);

  let smallestPair = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const first = arr1[i];
    const second = arr2[j];

    const possibleSmallest = Math.abs(first - second);

    if (smallest > possibleSmallest) {
      smallest = possibleSmallest;
      smallestPair = [first, second];
    }

    if (first - second < 0) {
      i++;
    } else if (first - second > 0) {
      j++;
    } else {
      return smallestPair; // if the Math.abs sum equals 0
    }
  }
  return smallestPair;
}
