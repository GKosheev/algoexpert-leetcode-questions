function getFib(n) {
  const firstTwo = [0, 1];

  if (n === 0 || n === 1) {
    return 0;
  }

  let count = 3;
  while (count < n) {
    let nextFib = firstTwo[0] + firstTwo[1];
    firstTwo[0] = firstTwo[1];
    firstTwo[1] = nextFib;
    count++;
  }

  return firstTwo[0] + firstTwo[1];
}
// O(N) Time, O(1) Space
