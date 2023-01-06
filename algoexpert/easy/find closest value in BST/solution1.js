function findClosestValueInBst(tree, target) {
  const closest = { value: tree.value };
  return findClosest(tree, closest, target);
}

function findClosest(tree, closest, target) {
  while (tree !== null) {
    if (absDiff(tree.value, target) < absDiff(closest.value, target)) {
      closest.value = tree.value;
    }
    if (target > tree.value) {
      tree = tree.right;
    } else {
      tree = tree.left;
    }
  }
  return closest.value;
}

function absDiff(num1, num2) {
  return Math.abs(num1 - num2);
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(logN) Time, O(1) Space
