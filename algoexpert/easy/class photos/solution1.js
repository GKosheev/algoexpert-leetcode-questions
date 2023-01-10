function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let start = 0;
  let end = redShirtHeights.length - 1;

  if (redShirtHeights[end] === blueShirtHeights[end]) {
    return false;
  }

  const redHigherThanBlue = redShirtHeights[end] > blueShirtHeights[end];

  while (start <= end - 1) {
    const blueStudent = blueShirtHeights[start];
    const redStudent = redShirtHeights[start];
    start++;
    if (redStudent > blueStudent && redHigherThanBlue) {
      continue;
    } else if (redStudent < blueStudent && !redHigherThanBlue) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}
//O(nlogn) Time, O(1) Space
