// O(NM) ST
function solution1(str1, str2) {
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

// O(NM) Time, O(min(N, M)) Space
function solution2(str1, str2) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;

  const evenEdits = [];
  const oddEdits = new Array(small.length + 1);

  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }

  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previousEdits;

    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }

    currentEdits[0] = i;

    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] =
          1 +
          Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }

  return big.length % 2 === 0
    ? evenEdits[small.length]
    : oddEdits[small.length];
}
