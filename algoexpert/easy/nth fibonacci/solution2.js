function getFibRecursively(n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  return getFibRecursively(n - 1) + getFibRecursively(n - 2);
}
// O(2^N) Time O(N) Space
