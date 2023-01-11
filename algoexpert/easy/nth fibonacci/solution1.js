function getFibWithMemo(n, memo = { 0: 0, 1: 0, 2: 1 }) {
  if (n <= 2) {
    return memo[n];
  }

  memo[n] = getFibWithMemo(n - 1, memo) + getFibWithMemo(n - 2, memo);

  return memo[n];
}

//O(N) ST
