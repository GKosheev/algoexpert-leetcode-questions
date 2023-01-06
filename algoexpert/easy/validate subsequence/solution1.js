function isValidSubsequence(array, sequence) {
  let sIndex = 0;

  for (const number of array) {
    if (number === sequence[sIndex]) {
      sIndex++;
    }
  }

  return sIndex === sequence.length;
}
