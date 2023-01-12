function semordnilap(words) {
  const answer = [];
  const memo = {};

  for (const word of words) {
    if (memo[word]) {
      answer.push([word, memo[word]]);
      memo[word] = undefined;
    } else {
      memo[reversed(word)] = word;
    }
  }
  // Write your code here.
  return answer;
}

function reversed(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i > -1; i--) {
    reversedWord += word[i];
  }

  return reversedWord;
}

// O(N * m) ST, N - number of words, m - max length of word
