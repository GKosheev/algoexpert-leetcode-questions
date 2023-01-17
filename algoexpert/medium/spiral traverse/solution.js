function spiralTraverse(array) {
  // Write your code here.
  const answer = [];
  let c = 0;
  let [startI, startJ] = [0, 0];
  let [endI, endJ] = [array.length - 1, array[0].length - 1];
  while (startI <= endI && startJ <= endJ) {
    for (let j = startJ; j <= endJ; j++) answer.push(array[startI][j]);

    for (let i = startI + 1; i <= endI; i++) answer.push(array[i][endJ]);

    for (let j = endJ - 1; j >= startJ; j--) {
      if (startI === endI) break;
      answer.push(array[endI][j]);
    }

    for (let i = endI - 1; i >= startI + 1; i--) {
      if (startJ === endJ) break;
      answer.push(array[i][startJ]);
    }

    startI++;
    startJ++;
    endI--;
    endJ--;
  }

  return answer;
}
