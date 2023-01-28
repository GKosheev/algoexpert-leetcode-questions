function levenshteinDistance(str1, str2) {
  const solution = Array.from(
    Array(str1.length + 1),
    () => new Array(str2.length + 1)
  );

  for (let column = 0; column < solution[0].length; column++) {
    solution[0][column] = column;
  }

  for (let row = 0; row < solution.length; row++) {
    solution[row][0] = row;
  }

  for (let row = 1; row < solution.length; row++) {
    for (let column = 1; column < solution[0].length; column++) {
      if (str1[row - 1] === str2[column - 1]) {
        solution[row][column] = solution[row - 1][column - 1];
      } else {
        solution[row][column] =
          1 +
          Math.min(
            solution[row][column - 1],
            solution[row - 1][column],
            solution[row - 1][column - 1]
          );
      }
    }
  }
  return solution[solution.length - 1][solution[0].length - 1];
}
