function moveElementToEnd(array, toMove) {
  // return solution1(array, toMove)
  return solution2(array, toMove);
}

function solution1(array, toMove) {
  const otherElements = [];
  const arrToMove = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      arrToMove.push(array[i]);
    } else {
      otherElements.push(array[i]);
    }
  }
  return otherElements.concat(arrToMove);
  // O(N) Space, O(N) Time
}

function solution2(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] !== toMove) {
      left++;
      continue;
    } else if (right !== toMove) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      right--;
    } else {
      right--;
    }
  }
  return array;
}
// O(N) Time, O(1) Space
