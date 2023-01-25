function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  const solution = new Array(n + 1).fill(Infinity);

  solution[0] = 0;

  for (const denom of denoms) {
    for (let amount = 0; amount < solution.length; amount++) {
      if (denom <= amount) {
        solution[amount] = Math.min(
          solution[amount],
          solution[amount - denom] + 1
        );
      }
    }
  }

  return solution[n] === Infinity ? -1 : solution[n];
}
