function runLengthEncoding(string) {
  const answer = [];
  let curString = string[0];
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    if (count === 9) {
      answer.push(`9${curString}`);
      count = 0;
    }

    if (string[i] === curString) {
      count++;
    } else if (string[i] !== curString) {
      if (count > 0) {
        answer.push(`${count}${curString}`);
      }
      curString = string[i];
      count = 1;
    }
  }
  if (count > 0) {
    answer.push(`${count}${curString}`);
  }
  return answer.join("");
}

//O(N) ST
