function numberOfWaysToTraverseGraph(width, height) {
  let stepsToRight = width - 1;
  let stepsToLeft = height - 1;

  const numerator = factorial(stepsToRight + stepsToLeft);
  const denumerator = factorial(stepsToLeft) * factorial(stepsToRight);

  return Math.floor(numerator / denumerator);
}

function factorial(num) {
  let result = 1;
  for (let i = 1; i < num + 1; i++) {
    result *= i;
  }
  return result;
}
