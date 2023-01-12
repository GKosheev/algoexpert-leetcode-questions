function generateDocument(characters, document) {
  const charactersMemory = {};
  for (const character of characters) {
    if (typeof charactersMemory[character] === "number") {
      charactersMemory[character]++;
    } else {
      charactersMemory[character] = 1;
    }
  }
  for (const character of document) {
    if (
      typeof charactersMemory[character] === "number" &&
      charactersMemory[character] !== 0
    ) {
      charactersMemory[character] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
/*
 O(N + m) Time, O(c) Space, 
 N - length of characters, 
 m - length of document, 
 c - number of unique characters
*/
