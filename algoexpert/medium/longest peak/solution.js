function longestPeak(array) {
  let longestPeak = 0;
  let possibleLongest = 0;

  let i = 1;

  let peakReached = false;

  while (i < array.length - 1) {
    while (array[i - 1] <= array[i] && i < array.length) {
      if (array[i - 1] === array[i]) {
        possibleLongest = 0;
        i++;
        peakReached = false;
        continue;
      }
      possibleLongest = possibleLongest === 0 ? 2 : possibleLongest + 1;
      i++;
    }

    if (
      typeof array[i - 2] === "number" &&
      array[i - 2] < array[i - 1] &&
      array[i - 1] > array[i]
    ) {
      peakReached = true;
    }

    console.log(array[i - 1], array[i], possibleLongest, peakReached);

    while (array[i - 1] >= array[i] && i < array.length) {
      if (array[i - 1] === array[i]) {
        longestPeak =
          longestPeak > possibleLongest ? longestPeak : possibleLongest;
        possibleLongest = 0;
      }
      possibleLongest++;
      i++;
    }
    if (peakReached) {
      longestPeak =
        longestPeak > possibleLongest ? longestPeak : possibleLongest;
    }
    peakReached = false;
    possibleLongest = 0;
  }

  return longestPeak;
}
