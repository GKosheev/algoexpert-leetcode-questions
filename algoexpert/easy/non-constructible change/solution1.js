function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let sum = 0;

  for (const coin of coins) {
    if (sum + 1 < coin) {
      return sum + 1;
    } else {
      sum += coin;
    }
  }

  return coins.length ? sum + 1 : 1;
}

//O(nlogn) Time, O(1) Space
