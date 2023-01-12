function findThreeLargestNumbers(array) {
  if (array.length === 3) {
    return array.sort((a, b) => a - b);
  }

  const topThreeLargest = [array[0], array[1], array[2]].sort((a, b) => a - b);

  for (let i = 3; i < array.length; i++) {
    let largest = topThreeLargest[2];
    let secondLargest = topThreeLargest[1];
    let thirdLargest = topThreeLargest[0];

    const possibleLargest = array[i];

    if (possibleLargest >= largest) {
      topThreeLargest[2] = possibleLargest;
      topThreeLargest[1] = largest;
      topThreeLargest[0] = secondLargest;
    } else if (possibleLargest >= secondLargest) {
      topThreeLargest[1] = possibleLargest;
      topThreeLargest[0] = secondLargest;
    } else if (possibleLargest >= thirdLargest) {
      topThreeLargest[0] = possibleLargest;
    }
  }
  return topThreeLargest;
}
// O(N) Time, O(1) Space
