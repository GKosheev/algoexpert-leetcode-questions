function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const memo = {};

  for (char of string) {
    const count = memo[char];
    if (typeof count === "number") {
      memo[char]++;
    } else {
      memo[char] = 1;
    }
  }

  for (charIndex in string) {
    const char = string[charIndex];
    if (memo[char] === 1) {
      return Number(charIndex);
    }
  }

  return -1;
}

// O(N) Time, O(1) Space
