function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    const value = Math.abs(array[i]);

    if (array[value - 1] * -1 > 0) {
      return value;
    } else {
      array[value - 1] *= -1;
    }
  }
  return -1;
}
//O(N) Time, O(1) Space
