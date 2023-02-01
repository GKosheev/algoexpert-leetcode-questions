function hasSingleCycle(array) {
  let visited = 0;
  let curIndex = 0;

  while (visited < array.length) {
    if (visited > 0 && curIndex === 0) {
      return false;
    }

    visited++;
    curIndex = calculateNextIndex(curIndex, array);
  }
  return curIndex === 0;
}

function calculateNextIndex(curIndex, array) {
  const jump = array[curIndex];
  const nextIndex = (curIndex + jump) % array.length;

  return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
}
// O(N) Time, O(1) Space
