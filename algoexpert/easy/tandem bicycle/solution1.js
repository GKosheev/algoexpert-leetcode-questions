function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => (fastest ? a - b : b - a));

  let result = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const first = redShirtSpeeds[i];
    const second = blueShirtSpeeds[i];
    result += Math.max(first, second);
  }
  // Write your code here.
  return result;
}

// O(nlogn) Time, O(1) space
