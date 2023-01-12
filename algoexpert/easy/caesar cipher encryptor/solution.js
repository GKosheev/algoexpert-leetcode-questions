function caesarCipherEncryptor(string, key) {
  const array = string.split("");

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    key = key % 26;
    array[i] = String.fromCharCode(
      charCode + key > 122 ? ((charCode + key) % 122) + 96 : charCode + key
    );
    console.log(array[i]);
  }

  return array.join("");
}
// O(N) ST
